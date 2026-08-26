import React from "react";
import AboutHero from "@/components/layouts/aboutUs/AboutHero";
import AboutUs from "@/components/layouts/aboutUs/AboutUs";
import OurLegacy from "@/components/layouts/aboutUs/OurLegacy";
import OurShops from "@/components/layouts/home/OurShops";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Story | Pahalwan Lassiwale",
  description: "Learn about the legacy of Pahalwan Lassiwale. Serving Aligarh's famous lassi and traditional sweets with purity, taste, and trust since 1989.",
  keywords: ["pahalwan lassi wale history", "aligarh lassi history", "famous lassi in aligarh origin"],
  alternates: {
    canonical: "/about",
  }};

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <AboutUs />
      <OurLegacy />
      <OurShops />
    </main>
  );
}
