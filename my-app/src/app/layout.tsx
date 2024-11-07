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
    <html lang="en">
      <head>
        {/* Primary Meta Tags */}
        <meta name="description" content="Join us for Chitramela 2025, an exciting festival of culture, creativity, and innovation. Discover the lineup, register, and be a part of something amazing!" />
        <meta name="keywords" content="Chitramela, KL University, movie event, film festival, student festival" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://chitramela2k25.vercel.app/" />
        <meta property="og:title" content="Chitramela 2025 - KL University Movie Festival" />
        <meta property="og:description" content="Join us for Chitramela 2025, a movie-themed event hosted by KL University. Celebrate films, creativity, and innovation!" />
        <meta property="og:image" content="URL_to_image" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://chitramela2k25.vercel.app/" />
        <meta name="twitter:title" content="Chitramela 2025 - KL University Movie Festival" />
        <meta name="twitter:description" content="A movie-themed event for students and film enthusiasts at KL University." />
        <meta name="twitter:image" content="URL_to_image" />

        {/* Structured Data (JSON-LD) */}
        <script type="application/ld+json">
          {`{
            "@context": "https://schema.org",
            "@type": "Event",
            "name": "Chitramela 2025",
            "startDate": "2025-03-15",
            "endDate": "2025-03-20",
            "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
            "eventStatus": "https://schema.org/EventScheduled",
            "location": {
              "@type": "Place",
              "name": "KL University",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Green Fields",
                "addressLocality": "Vaddeswaram",
                "addressRegion": "Andhra Pradesh",
                "postalCode": "522502",
                "addressCountry": "IN"
              }
            },
            "description": "Chitramela 2025 is a movie-themed event organized by KL University. Join us for an exciting celebration of films and creativity.",
            "image": "URL_to_event_image",
            "url": "https://chitramela2k25.vercel.app"
          }`}
        </script>
      </head>
      <body className="main-layout">{children}</body>
    </html>
  );
}
