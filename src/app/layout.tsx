import type { Metadata } from "next";
import { Inter, Playfair_Display, Pirata_One } from "next/font/google";
import Cursor from "@/components/cursor";
import Loader from "@/components/loader";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const gothic = Pirata_One({
  weight: "400",
  variable: "--font-gothic",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rizos Barber Studio | Dodge City",
  description: "The Gold Standard of Grooming in Southwest Kansas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${playfair.variable} ${gothic.variable} antialiased bg-background text-foreground`}
      >
        <Loader />
        <Cursor />
        {children}
      </body>
    </html>
  );
}
