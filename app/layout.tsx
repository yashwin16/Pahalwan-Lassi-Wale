import ThemeRegistry from "@/components/ThemeRegistry/ThemeRegistry";
import Footer from "@/components/widgets/Footer";
import Navbar from "@/components/widgets/Navbar";
import type { Metadata } from "next";
import "./globals.css";

import PageLoader from "@/components/widgets/PageLoader";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Pahalwan Lassi Wale & Sweets | Famous Lassi & Best Sweets Shop in Aligarh",
  description: "Experience the most famous lassi and traditional mithai at the best sweets shop in Aligarh, Pahalwan Lassi Wale & Sweets. Discover our signature rich lassi, handcrafted Indian sweets, snacks, and a full restaurant menu.",
  keywords: ["sweets shop in aligarh","pahalwan sweets", "sweets in aligarh", "best sweets shop in aligarh", "pahalwan lassi wale & sweets", "pahalwanlassiwaleandsweets.com", "pahalwan lassi in aligarh", "famous lassi in aligarh", "best lassi in aligarh", "pahalwan lassi wale", "aligarh famous food", "best restaurant in aligarh", "aligarh lassi"],
  authors: [{ name: "Pahalwan Lassi Wale & Sweets" }],
  metadataBase: new URL("https://www.pahalwanlassiwaleandsweets.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Pahalwan Lassi Wale & Sweets | Best Sweets Shop in Aligarh",
    description: "Experience the most famous lassi and traditional mithai at the best sweets shop in Aligarh, Pahalwan Lassi Wale & Sweets.",
    url: "https://www.pahalwanlassiwaleandsweets.com",
    siteName: "Pahalwan Lassi Wale & Sweets",
    images: [
      {
        url: "/images/icons/logo.webp",
        width: 800,
        height: 600,
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": ["Restaurant", "Store"],
  name: "Pahalwan Lassi Wale & Sweets",
  url: "https://www.pahalwanlassiwaleandsweets.com",
  logo: "https://www.pahalwanlassiwaleandsweets.com/images/icons/logo.webp",
  image: [
    "https://www.pahalwanlassiwaleandsweets.com/images/icons/logo.webp"
  ],
  telephone: "+91-9219511640",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Khai Dora, Jaiganj Road",
    addressLocality: "Aligarh",
    addressRegion: "Uttar Pradesh",
    postalCode: "202001",
    addressCountry: "IN"
  },
  priceRange: "₹₹",
  servesCuisine: [
    "Indian",
    "North Indian",
    "South Indian",
    "Sweets",
    "Beverages"
  ],
  sameAs: [
    "https://www.instagram.com/pahalwanlassiwale?utm_source=qr&igsi=MXkxeHllbGVkcnBzYg==",
    "https://www.facebook.com/share/14m3FRormnw/"
  ]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
        <ThemeRegistry>
          <Suspense fallback={null}>
            <PageLoader />
          </Suspense>
          <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh", margin: 0, padding: 0, width: "100%", maxWidth: "100%", overflowX: "clip" }}>
            <Navbar />
            <main style={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
              {children}
            </main>
            <Footer />
          </div>
        </ThemeRegistry>
      </body>
    </html>
  );
}
