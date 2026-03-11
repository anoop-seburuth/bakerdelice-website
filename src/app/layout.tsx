import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  weight: "700",
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export const metadata: Metadata = {
  title: "Baker's Delice — We Bake Differently",
  description:
    "Baker's Delice is an artisan bakery in Terre Rouge, Mauritius, crafting freshly baked breads, pastries, and cakes with passion and tradition.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${playfairDisplay.variable} ${lato.variable} antialiased bg-tristesse text-santo font-body`}
      >
        {children}
      </body>
    </html>
  );
}
