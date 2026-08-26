import ContactUs from "@/components/layouts/contact/ContactUs";

export const metadata = {
  title: "Contact Us - Pahalwan Lassi Wale & Sweets",
  description: "Get in touch with Pahalwan Lassi Wale & Sweets. Find our store locations and contact information.",
  alternates: {
    canonical: "/contact",
  }};

export default function ContactPage() {
  return (
    <main>
      <ContactUs />
    </main>
  );
}
