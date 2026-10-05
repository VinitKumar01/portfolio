import type { Metadata } from "next";
import {
  Instrument_Serif,
  Plus_Jakarta_Sans,
  JetBrains_Mono,
} from "next/font/google";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vinit.dev"),
  title: "Vinit Kumar | Full-Stack Software Engineer & Systems Builder",
  description:
    "Full-stack software engineer building workflow automation engines, edge backends, and cloud platforms. Based in Pilani, Rajasthan.",
  keywords: [
    "Vinit Kumar",
    "Full-Stack Developer",
    "Software Engineer",
    "Go",
    "Next.js",
    "TypeScript",
    "PostgreSQL",
    "Cloudflare Workers",
    "Docker",
    "ReactFlow",
    "Pilani",
  ],
  authors: [{ name: "Vinit Kumar", url: "https://github.com/VinitKumar01" }],
  creator: "Vinit Kumar",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    title: "Vinit Kumar | Full-Stack Software Engineer & Systems Builder",
    description:
      "Full-stack software engineer building workflow automation engines, edge backends, and cloud platforms.",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Vinit Kumar | Full-Stack Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vinit Kumar | Full-Stack Software Engineer & Systems Builder",
    description:
      "Full-stack software engineer building workflow automation engines, edge backends, and cloud platforms.",
    creator: "@vinitxcodes",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${instrumentSerif.variable} ${plusJakartaSans.variable} ${jetbrainsMono.variable} dark antialiased scroll-smooth`}
    >
      <body className="min-h-screen bg-[#09090b] text-[#fafafa] relative selection:bg-zinc-800 selection:text-white">
        <div className="fixed inset-0 ambient-glow pointer-events-none z-0" />
        <div className="relative z-10 flex min-h-screen flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}
