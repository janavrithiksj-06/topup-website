export default function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://topupchargers.com/#organization",

        name: "Topup",

        url: "https://topupchargers.com",

        legalName: "Topup",

        description:
          "Topup is building India's next-generation EV charging network with reliable DC fast charging infrastructure.",

        logo: "https://topupchargers.com/logo.png",

        image: "https://topupchargers.com/og-image.jpg",

        email: "contact.sjrventures@gmail.com",

        foundingLocation: {
          "@type": "Country",
          name: "India",
        },

        areaServed: {
          "@type": "Country",
          name: "India",
        },

        knowsAbout: [
          "EV Charging",
          "Electric Vehicles",
          "DC Fast Charging",
          "CCS2 Charging",
          "EV Infrastructure",
          "Electric Mobility",
        ],

        sameAs: [
          // Add later
          // "https://www.linkedin.com/company/topup",
          // "https://www.instagram.com/topup",
          // "https://x.com/topup",
        ],
      },

      {
        "@type": "WebSite",

        "@id": "https://topupchargers.com/#website",

        url: "https://topupchargers.com",

        name: "Topup",

        description:
          "Topup EV Charging Network",

        inLanguage: "en-IN",

        publisher: {
          "@id": "https://topupchargers.com/#organization",
        },
      },

      {
        "@type": "WebPage",

        "@id": "https://topupchargers.com/#webpage",

        url: "https://topupchargers.com",

        name: "Topup | EV Charging Network in India",

        isPartOf: {
          "@id": "https://topupchargers.com/#website",
        },

        about: {
          "@id": "https://topupchargers.com/#organization",
        },

        primaryImageOfPage: {
          "@type": "ImageObject",
          url: "https://topupchargers.com/og-image.jpg",
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