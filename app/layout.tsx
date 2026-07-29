import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mendes Systems",
  description:
    "Simplified Infrastructure Modernization and Automation Solutions for Current and Future Business Operations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}