import CategoryCatalog from "@/components/layouts/shared/CategoryCatalog";
import CategoryHero from "@/components/layouts/shared/CategoryHero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Famous Sweets in Aligarh | Pahalwan Lassiwale",
  description: "Explore the wide variety of pure ghee sweets, barfi, and traditional Indian mithai at Pahalwan Lassiwale in Aligarh.",
  keywords: ["best sweets in aligarh", "aligarh famous sweets", "aligarh mithai", "pahalwan lassi wale sweets"],
  alternates: {
    canonical: "/sweets",
  }};

export default function SweetsPage() {
  return (
    <main style={{ minHeight: "100vh", backgroundColor: "#EBEBE2" }}>
      <CategoryHero 
        title="Sweets" 
        desktopImage="/images/sweets/sweetsHero.webp"
        mobileImage="/images/sweets/MobileHeroSweets.webp"
      />
      <CategoryCatalog 
        activeTopPill="Sweets"
        allowedCategories={["Barfi sweets", "ghee sweets", "Gajak", "Dessert", "Chena"]} // Based on generic-data
      />
    </main>
  );
}
