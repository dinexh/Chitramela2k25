import type { Metadata } from "next";
import "./globals.css";

// Default metadata for the entire app (overrideable in individual pages)
export const metadata: Metadata = {
  title: "Chitramela 2025 | Annual Cultural Fest",
  description: "Join us for Chitramela 2025, an exciting festival of culture, creativity, and innovation. Discover the lineup, register, and be a part of something amazing!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Basic SEO tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Open Graph meta tags for social sharing */}
        <meta property="og:title" content="Chitramela 2025 - Annual Cultural Fest" />
        <meta property="og:description" content="Explore Chitramela 2025, a festival of culture, creativity, and community." />
        <meta property="og:image" content="/assets/logo.png" />
        <meta property="og:type" content="website" />

        {/* Twitter meta tags for social sharing */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Chitramela 2025 - Annual Cultural Fest" />
        <meta name="twitter:description" content="Discover the events, team, and registration details for Chitramela 2025." />
        <meta name="twitter:image" content="/assets/chitramela-banner.jpg" />
      </head>
      <body className="main-layout">
        {children}
      </body>
    </html>
  );
}
