import type { Metadata } from "next";
import "./globals.css";
import { Navbar, Footer } from "@/components";

export const metadata: Metadata = {
  title: "Car Hub",
  description: "Get the best cars for the best price",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
