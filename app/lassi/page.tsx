import CategoryCatalog from "@/components/layouts/shared/CategoryCatalog";
import CategoryHero from "@/components/layouts/shared/CategoryHero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Famous Lassi in Aligarh | Pahalwan Lassiwale",
  description: "Taste the most famous, thick, and creamy lassi in Aligarh at Pahalwan Lassiwale. A legacy of purity and taste since 1989.",
  keywords: ["lassi in aligarh", "famous lassi in aligarh", "best lassi in aligarh", "pahalwan lassi wale lassi"],
  alternates: {
    canonical: "/lassi",
  }};

export default function LassiPage() {
  return (
    <main style={{ minHeight: "100vh", backgroundColor: "#EBEBE2" }}>
      <CategoryHero 
        title="Lassi" 
        desktopImage="/images/lassi/lassiHeroDesktop.webp"
        mobileImage="/images/lassi/mobileLassi.webp"
      />
      <CategoryCatalog 
        activeTopPill="Lassi"
        allowedCategories={["Beverages"]}
      />
    </main>
  );
}
