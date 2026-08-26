import CategoryCatalog from "@/components/layouts/shared/CategoryCatalog";
import CategoryHero from "@/components/layouts/shared/CategoryHero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Snacks & Namkeen | Pahalwan Lassiwale",
  description: "Enjoy hot and fresh traditional snacks at Pahalwan Lassiwale, the perfect pairing with our famous lassi in Aligarh.",
  keywords: ["aligarh snacks", "best namkeen in aligarh", "pahalwan lassi wale snacks", "aligarh street food"],
  alternates: {
    canonical: "/snacks",
  }};

export default function SnacksPage() {
  return (
    <main style={{ minHeight: "100vh", backgroundColor: "#EBEBE2" }}>
      <CategoryHero 
        title="Snacks" 
        desktopImage="/images/snacks/snacksHero.webp"
        mobileImage="/images/snacks/MobileHero.webp"
      />
      <CategoryCatalog 
        activeTopPill="Snacks"
        allowedCategories={["Snacks"]}
      />
    </main>
  );
}
