export default function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://topupchargers.com/#organization",
        name: "Topup",
        url: "https://topupchargers.com",
        logo: "https://topupchargers.com/logo.png",
        description:
          "Topup is building India's next-generation EV charging network with reliable and accessible charging infrastructure.",

        sameAs: [
          // Add these later
          // "https://www.linkedin.com/company/topup",
          // "https://www.instagram.com/topup",
          // "https://x.com/topup"
        ],
      },

      {
        "@type": "WebSite",
        "@id": "https://topupchargers.com/#website",
        url: "https://topupchargers.com",
        name: "Topup",
        publisher: {
          "@id": "https://topupchargers.com/#organization",
        },
        inLanguage: "en-IN",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data),
      }}
    />
  );
}