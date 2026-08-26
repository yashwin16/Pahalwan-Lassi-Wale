import React from 'react';
import { Metadata } from "next";
import ProductHero from '@/components/layouts/product/ProductHero';
import ProductShowcase from '@/components/layouts/product/ProductShowcase';
import ProductPromo from '@/components/layouts/product/ProductPromo';
import BestSellers from '@/components/layouts/home/BestSellers';

export const metadata: Metadata = {
  title: "Explore Our Menu | Pahalwan Lassiwale",
  description: "Browse the complete menu of Pahalwan Lassiwale. From our famous Aligarh lassi to traditional sweets, snacks, and full restaurant meals.",
  keywords: ["pahalwan lassi wale menu", "aligarh famous food menu", "best lassi in aligarh", "aligarh mithai price"],
  alternates: {
    canonical: "/product",
  }};

export default function ProductPage() {
  return (
    <>
      <ProductHero />
      <ProductShowcase />
      <ProductPromo />
      <BestSellers />
    </>
  );
}
