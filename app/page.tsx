import React from "react";
import HeroSection from "../components/layouts/home/HeroSection";
import Variety from "../components/layouts/home/Variety";
import Banner from "../components/layouts/home/Banner";
import Cravings from "../components/layouts/home/Cravings";
import QuoteBanner from "../components/layouts/home/QuoteBanner";
import OurShops from "../components/layouts/home/OurShops";
import GiftBoxes from "../components/layouts/home/GiftBoxes";
import BestSellers from "../components/layouts/home/BestSellers";
import BringHome from "../components/layouts/home/BringHome";
import Reviews from "../components/layouts/home/Reviews";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pahalwan Lassiwale | Best Lassi in Aligarh",
  description: "Welcome to Pahalwan Lassiwale. Indulge in Aligarh's most famous lassi, traditional Indian sweets, snacks, and full-course restaurant meals.",
  keywords: ["best lassi in aligarh", "aligarh famous lassi", "pahalwan lassi wale", "aligarh best sweets"],
};

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Variety />
      <Banner />
      <Cravings />
      <GiftBoxes />
      <BestSellers />
      <QuoteBanner />
      <BringHome />
      <Reviews />
      <OurShops />
    </main>
  );
}
