import type { Metadata } from "next";
import { Space_Grotesk, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "500", "600", "700"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "RS Garage | Edirne'nin Performans Merkezi",
  description:
    "RS Garage — ECU Remap, Mekanik Servis, TCU Tuning ve DPF/EGR çözümleri. Edirne'de 12+ yıllık deneyim, 2500+ araç, 60+ marka desteği.",
  keywords: [
    "RS Garage",
    "ECU Remap",
    "Chip Tuning",
    "Edirne",
    "Performans",
    "Mekanik Servis",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body
        className={`${spaceGrotesk.variable} ${montserrat.variable} antialiased`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
