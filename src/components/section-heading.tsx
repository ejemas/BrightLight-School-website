export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  centered = false
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
}) {
  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="section-title">{title}</h2>
      {subtitle ? <p className="section-lead">{subtitle}</p> : null}
    </div>
  );
}
