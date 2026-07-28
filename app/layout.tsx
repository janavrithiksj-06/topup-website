import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import "mapbox-gl/dist/mapbox-gl.css";

import Navbar from "@/components/Navbar"; // Adjust the path if needed

const geist = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Topup",
  description: "Powering the future of mobility.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geist.className} bg-[#F7F7F5] text-neutral-900`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}