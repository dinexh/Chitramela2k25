import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chitramela 2025",
  description:
    "Join us for Chitramela 2025, an exciting festival of culture, creativity, and innovation. Discover the lineup, register, and be a part of something amazing!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   <html>
      <head></head>
      <body className="main-layout">{children}</body>
    </html>
  );
}
