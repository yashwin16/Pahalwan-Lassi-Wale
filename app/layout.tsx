import ThemeRegistry from "@/components/ThemeRegistry/ThemeRegistry";
import Navbar from "@/components/widgets/Navbar";
import Footer from "@/components/widgets/Footer";
import type { Metadata } from "next";
import "./globals.css";

import PageLoader from "@/components/widgets/PageLoader";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Pahalwan Lassiwale | Famous Lassi in Aligarh",
  description: "Experience the most famous lassi in Aligarh at Pahalwan Lassiwale. Discover our signature rich lassi, handcrafted Indian sweets, snacks, and a full restaurant menu.",
  keywords: ["lassi in aligarh", "famous lassi in aligarh", "best lassi in aligarh", "pahalwan lassi wale", "aligarh famous food", "sweets in aligarh", "best restaurant in aligarh", "aligarh lassi"],
  authors: [{ name: "Pahalwan Lassiwale" }],
  metadataBase: new URL("http://localhost:3000"),
  openGraph: {
    title: "Pahalwan Lassiwale | Famous Lassi in Aligarh",
    description: "Experience the most famous lassi in Aligarh. Signature rich lassi, handcrafted mithai, and snacks.",
    url: "https://pahalwanlassiwale.com", // Replace with actual domain
    siteName: "Pahalwan Lassiwale",
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
  icons: {
    icon: "/images/icons/logo.webp",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
          <Suspense fallback={null}>
            <PageLoader />
          </Suspense>
          <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh", margin: 0, padding: 0 }}>
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
