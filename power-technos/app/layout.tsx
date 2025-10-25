import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Power Technos • Solar, Installation, Battery & Inverter Services",
  description: "End-to-end solar solutions, installation, battery and inverter services.",
  openGraph: {
    title: "Power Technos",
    description: "Solar, Installation, Battery & Inverter Services",
    url: "https://www.powertechnos.example",
    siteName: "Power Technos",
  },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-zinc-800 flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
