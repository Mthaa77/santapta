import type { Metadata } from "next";
import { Inter, Playfair_Display, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "next-themes";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "SANCA Pretoria — Your Path to Healing Begins Here",
  description:
    "Where compassion meets clinical excellence. South African National Council on Alcoholism and Drug Dependence — Pretoria, Soshanguve & Hammanskraal. Accessible, affordable recovery for all communities. Castle Carey Clinic, Lapalamé Youth Drug Unit, and outpatient services. Nearly seven decades of healing and hope.",
  keywords: [
    "SANCA",
    "Pretoria",
    "drug rehabilitation",
    "addiction treatment",
    "Castle Carey Clinic",
    "substance abuse",
    "recovery",
    "inpatient treatment",
    "outpatient treatment",
    "youth drug unit",
    "medical aid rehab",
    "South Africa",
    "Gauteng",
    "Soshanguve",
    "Hammanskraal",
  ],
  authors: [{ name: "SANCA Pretoria" }],
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "SANCA Pretoria — Your Path to Healing Begins Here",
    description:
      "Where compassion meets clinical excellence — accessible, affordable recovery for Pretoria",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body
        className={`${inter.variable} ${playfair.variable} ${cormorant.variable} antialiased bg-background text-foreground`}
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          {children}
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}
