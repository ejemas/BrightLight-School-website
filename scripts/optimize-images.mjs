import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "..");
const imageDir = path.join(projectRoot, "public", "images", "school");
const sourceExtensions = new Set([".jpg", ".jpeg", ".png"]);
const maxLongEdge = 2200;

async function fileSize(filePath) {
  const stat = await fs.stat(filePath);
  return stat.size;
}

function formatBytes(bytes) {
  return `${(bytes / 1024 / 1024).toFixed(2)} MB`;
}

async function optimizeImage(fileName) {
  const inputPath = path.join(imageDir, fileName);
  const extension = path.extname(fileName).toLowerCase();
  const baseName = path.basename(fileName, extension);
  const webpPath = path.join(imageDir, `${baseName}.webp`);
  const avifPath = path.join(imageDir, `${baseName}.avif`);
  const metadata = await sharp(inputPath).metadata();
  const shouldResize = Math.max(metadata.width ?? 0, metadata.height ?? 0) > maxLongEdge;

  const basePipeline = () => {
    let pipeline = sharp(inputPath).rotate();

    if (shouldResize) {
      pipeline = pipeline.resize({
        width: maxLongEdge,
        height: maxLongEdge,
        fit: "inside",
        withoutEnlargement: true
      });
    }

    return pipeline;
  };

  await basePipeline()
    .webp({ quality: 82, effort: 5 })
    .toFile(webpPath);

  await basePipeline()
    .avif({ quality: 62, effort: 4 })
    .toFile(avifPath);

  return {
    fileName,
    original: await fileSize(inputPath),
    webp: await fileSize(webpPath),
    avif: await fileSize(avifPath)
  };
}

const entries = await fs.readdir(imageDir, { withFileTypes: true });
const sources = entries
  .filter((entry) => entry.isFile() && sourceExtensions.has(path.extname(entry.name).toLowerCase()))
  .map((entry) => entry.name)
  .sort();

if (sources.length === 0) {
  console.log("No source images found.");
  process.exit(0);
}

const results = [];

for (const source of sources) {
  results.push(await optimizeImage(source));
}

const totals = results.reduce(
  (sum, item) => ({
    original: sum.original + item.original,
    webp: sum.webp + item.webp,
    avif: sum.avif + item.avif
  }),
  { original: 0, webp: 0, avif: 0 }
);

console.log(`Optimized ${results.length} image(s).`);
console.log(`Original total: ${formatBytes(totals.original)}`);
console.log(`WebP total: ${formatBytes(totals.webp)}`);
console.log(`AVIF total: ${formatBytes(totals.avif)}`);
