import type { Metadata } from "next";
import LegalPage from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Privacy Policy | Topup",
  description:
    "Learn how Topup collects, uses, and protects your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage title="Privacy Policy">
      <p>Last updated: August 6, 2026</p>

      <h2>Information We Collect</h2>
      <p>
        We may collect personal information that you voluntarily provide through
        our contact form, including your name, email address, subject, and
        message.
      </p>

      <h2>How We Use Your Information</h2>
      <ul>
        <li>Respond to your enquiries.</li>
        <li>Communicate regarding our products and services.</li>
        <li>Improve our website and customer experience.</li>
      </ul>

      <h2>Cookies</h2>
      <p>
        Our website may use cookies and similar technologies to enhance your
        browsing experience and analyze website traffic.
      </p>

      <h2>Data Security</h2>
      <p>
        We take reasonable measures to protect your information against
        unauthorized access, disclosure, or misuse.
      </p>

      <h2>Third-Party Services</h2>
      <p>
        We may use trusted third-party services to operate our website. These
        providers are required to protect your information in accordance with
        applicable laws.
      </p>

      <h2>Contact Us</h2>
      <p>
        If you have any questions about this Privacy Policy, please contact us
        through the Contact page on our website.
      </p>
    </LegalPage>
  );
}