import type { Metadata } from "next";
import LegalPage from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Terms & Conditions | Topup",
  description:
    "Read the Terms & Conditions governing the use of the Topup website.",
};

export default function TermsAndConditionsPage() {
  return (
    <LegalPage title="Terms & Conditions">
      <p>Last updated: August 6, 2026</p>

      <h2>Acceptance of Terms</h2>
      <p>
        By accessing or using the Topup website, you agree to be bound by these
        Terms & Conditions. If you do not agree, please do not use this website.
      </p>

      <h2>Use of the Website</h2>
      <p>
        You agree to use this website only for lawful purposes and in a manner
        that does not infringe the rights of others or restrict their use of the
        website.
      </p>

      <h2>Intellectual Property</h2>
      <p>
        All content on this website, including text, graphics, logos, images,
        and branding, is the property of Topup unless otherwise stated and is
        protected by applicable intellectual property laws.
      </p>

      <h2>Disclaimer</h2>
      <p>
        The information provided on this website is for general informational
        purposes only. While we strive to keep the information accurate and up
        to date, we make no warranties regarding its completeness, accuracy, or
        reliability.
      </p>

      <h2>Limitation of Liability</h2>
      <p>
        Topup shall not be liable for any direct, indirect, incidental, or
        consequential damages arising from your use of this website.
      </p>

      <h2>Third-Party Links</h2>
      <p>
        Our website may contain links to third-party websites. We are not
        responsible for the content, privacy practices, or policies of those
        websites.
      </p>

      <h2>Changes to These Terms</h2>
      <p>
        We may update these Terms & Conditions at any time without prior notice.
        Continued use of the website constitutes acceptance of the updated
        terms.
      </p>

      <h2>Contact Us</h2>
      <p>
        For any questions regarding these Terms & Conditions, please contact us
        through the Contact page on our website.
      </p>
    </LegalPage>
  );
}