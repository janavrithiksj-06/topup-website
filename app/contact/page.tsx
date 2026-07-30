import type { Metadata } from "next";
import ContactPage from "@/components/contact/ContactPage";

export const metadata: Metadata = {
  title: "Contact Topup",
  description:
    "Get in touch with Topup for partnerships, business enquiries, and support related to EV charging across India.",
};

export default function Page() {
  return <ContactPage />;
}