import type { Metadata } from "next";
import { Playfair_Display, Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Maison Élégance | Fine Dining Restaurant",
  description: "Uma experiência gastronômica única onde a arte culinária encontra a elegância. Descubra sabores extraordinários em um ambiente sofisticado.",
  keywords: ["restaurante", "fine dining", "gastronomia", "chef", "culinária", "elegância"],
  openGraph: {
    title: "Maison Élégance | Fine Dining Restaurant",
    description: "Uma experiência gastronômica única onde a arte culinária encontra a elegância.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${playfair.variable} ${cormorant.variable} ${inter.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
