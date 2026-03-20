import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rishabh Mishra | AI-Augmented Full-Stack Developer",
  description:
    "Portfolio of Rishabh Mishra – AI-Augmented Full-Stack Developer building scalable, data-driven applications with Python, Flask, and modern web technologies.",
  keywords: ["Rishabh Mishra", "Portfolio", "Python Developer", "AI Developer", "Full Stack Developer", "Flask", "Machine Learning"],
  authors: [{ name: "Rishabh Mishra" }],
  creator: "Rishabh Mishra",
  metadataBase: new URL("https://rishabhmishra.me"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Rishabh Mishra | AI-Augmented Full-Stack Developer",
    description: "Building scalable full-stack and data-driven applications using Python, AI tools, and modern web technologies.",
    url: "https://rishabhmishra.me",
    siteName: "Rishabh Mishra Portfolio",
    images: [
      {
        url: "/og-image.png", // Ensure this exists or I'll generate one
        width: 1200,
        height: 630,
        alt: "Rishabh Mishra Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rishabh Mishra | AI-Augmented Full-Stack Developer",
    description: "Building scalable full-stack and data-driven applications.",
    images: ["/og-image.png"],
  },
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
