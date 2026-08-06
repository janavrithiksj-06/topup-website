import type { Metadata } from "next";
import LegalPage from "@/components/legal-page";

export const metadata: Metadata = {
  title: "FAQ | Topup",
  description:
    "Frequently asked questions about Topup EV charging services.",
};

const faqs = [
  {
    question: "What is Topup?",
    answer:
      "Topup is an EV charging infrastructure company focused on providing reliable and accessible charging solutions across India.",
  },
  {
    question: "Which electric vehicles are supported?",
    answer:
      "Our charging stations are designed to support compatible electric vehicles using standard charging connectors.",
  },
  {
    question: "Where are your charging stations located?",
    answer:
      "We are expanding our charging network across India. New locations will be announced on our website.",
  },
  {
    question: "How can I contact Topup?",
    answer:
      "You can reach us through the Contact page on our website for any enquiries or support.",
  },
  {
    question: "Do you offer fast charging?",
    answer:
      "Yes. Topup is focused on delivering reliable DC fast charging solutions where available.",
  },
];

export default function FAQPage() {
  return (
    <LegalPage title="Frequently Asked Questions">
      {faqs.map((faq) => (
        <section key={faq.question} className="mb-8">
          <h2>{faq.question}</h2>
          <p>{faq.answer}</p>
        </section>
      ))}
    </LegalPage>
  );
}