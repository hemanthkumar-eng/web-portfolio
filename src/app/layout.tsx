import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { OrbitBackground } from "@/components/OrbitBackground";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const grotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-grotesk",
});

export const metadata: Metadata = {
  title: "Hemanth Kumar | Software Engineer",
  description:
    "Software Engineer building frontend, full-stack, and mobile products on fundamentals that hold when systems fail.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${grotesk.variable}`}>
      <body className={inter.className}>
        <OrbitBackground />
        {children}
      </body>
    </html>
  );
}
