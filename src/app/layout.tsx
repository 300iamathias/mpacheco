import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mario Pacheco | Di Mali — Manos Mágicas",
  description:
    "El verdadero lujo no se fabrica, se teje. Sombreros de paja toquilla 100% artesanales. Patrimonio Cultural de la Humanidad.",
  keywords: [
    "Di Mali",
    "Mario Pacheco",
    "Sombreros",
    "Paja Toquilla",
    "Ecuador",
    "Artesanal",
    "Guayaquil",
  ],
  authors: [{ name: "Di Mali" }],
  icons: {
    icon: "/dm-icon.png",
    apple: "/dm-icon.png",
  },
  manifest: "/manifest.json",
  openGraph: {
    title: "Mario Pacheco | Di Mali — Manos Mágicas",
    description:
      "El verdadero lujo no se fabrica, se teje. Sombreros de paja toquilla 100% artesanales. Patrimonio Cultural de la Humanidad.",
    type: "website",
    url: "https://mpacheco.jimbra.net",
    siteName: "Di Mali",
    images: [
      {
        url: "https://mpacheco.jimbra.net/mario-pacheco.png",
        width: 1200,
        height: 630,
        alt: "Mario Pacheco - Di Mali",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mario Pacheco | Di Mali — Manos Mágicas",
    description:
      "El verdadero lujo no se fabrica, se teje. Sombreros de paja toquilla 100% artesanales.",
    images: ["https://mpacheco.jimbra.net/mario-pacheco.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
