import { Metadata } from "next";
import RestaurantCatalog from "@/components/layouts/restaurant/RestaurantCatalog";
import CategoryHero from "@/components/layouts/shared/CategoryHero";

export const metadata: Metadata = {
  title: "Restaurant Menu | Pahalwan Lassiwale",
  description: "Explore the delicious restaurant menu at Pahalwan Lassiwale. We offer a variety of Indian main courses, breads, thalis, and combo offers in Aligarh.",
  keywords: ["best restaurant in aligarh", "pahalwan restaurant aligarh", "aligarh famous food", "indian food aligarh"],
};

export default function RestaurantPage() {
  return (
    <main style={{ minHeight: "100vh", backgroundColor: "#EBEBE2" }}>
      <CategoryHero 
        title="Restaurant" 
        desktopImage="/images/restaurant/rataurantHeroDesktop.webp"
        mobileImage="/images/restaurant/MobileHeroRestro.webp"
      />
      <RestaurantCatalog 
        activeTopPill="Restaurant"
      />
    </main>
  );
}
