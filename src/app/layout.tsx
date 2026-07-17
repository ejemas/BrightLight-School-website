import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { pageSeo, schoolInfo } from "@/lib/content";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: pageSeo.home.title,
    template: `%s | ${schoolInfo.shortName}`
  },
  description: pageSeo.home.description,
  keywords: [
    "Nursery and Primary School in Warri",
    "BrightLight International Nursery and Primary School",
    "Quality education in Warri",
    "Nursery school in Delta State",
    "Primary school in Warri",
    "Safe school environment",
    "Moral and academic development"
  ],
  openGraph: {
    title: pageSeo.home.title,
    description: pageSeo.home.description,
    type: "website",
    locale: "en_NG"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={plusJakarta.variable}>
      <body>
        <div className="page-shell">
          <Navbar />
          <main className="main-shell">{children}</main>
          <Footer />
          <WhatsAppButton />
        </div>
      </body>
    </html>
  );
}
