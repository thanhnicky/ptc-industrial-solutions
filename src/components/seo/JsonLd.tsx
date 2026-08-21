import { CONTACT, SITE_URL } from "@/lib/site";

export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: CONTACT.legalName,
    alternateName: [CONTACT.brand, CONTACT.brandShort, "PTC Switchboard"],
    url: SITE_URL,
    logo: `${SITE_URL}/logo-ptc.png`,
    email: CONTACT.email,
    telephone: CONTACT.hotlineRaw ? `+84${CONTACT.hotlineRaw.replace(/^0/, "")}` : undefined,
    address: {
      "@type": "PostalAddress",
      streetAddress: "3C Nguyễn Văn Quỳ, Khu phố 1, Tổ 11, Phường Phú Thuận",
      addressLocality: "TP. Hồ Chí Minh",
      addressRegion: "Hồ Chí Minh",
      addressCountry: "VN",
    },
    location: [
      {
        "@type": "Place",
        name: "Nhà máy sản xuất Tủ điện & Thang máng cáp PTC",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Số 15, Đường 15, Khu Phố 13, Phường Linh Xuân",
          addressLocality: "TP. Thủ Đức",
          addressRegion: "TP. Hồ Chí Minh",
          addressCountry: "VN",
        },
      },
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+84836977799",
      contactType: "technical support",
      areaServed: "VN",
      availableLanguage: ["Vietnamese", "English"],
    },
    knowsAbout: [
      "Tủ điện hạ thế IEC 61439",
      "Tủ điện tổng MSB đến 6300A",
      "Tủ điều khiển động cơ MCC",
      "Tủ biến tần VSD",
      "Hệ thống thang máng cáp mạ kẽm nhúng nóng ASTM A123",
      "Tủ điện năng lượng mặt trời Solar",
    ],
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "certificate",
        name: "ISO 9001:2015",
      },
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "standard",
        name: "IEC 61439-1 / IEC 61439-2",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Manufacturer",
    "@id": `${SITE_URL}/#manufacturer`,
    name: "Nhà máy Tủ bảng điện PTC",
    legalName: CONTACT.legalName,
    image: `${SITE_URL}/logo-ptc.png`,
    url: SITE_URL,
    telephone: "+84836977799",
    email: CONTACT.email,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Số 15, Đường 15, Khu Phố 13, Phường Linh Xuân",
      addressLocality: "TP. Thủ Đức",
      addressRegion: "TP. Hồ Chí Minh",
      postalCode: "700000",
      addressCountry: "VN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "10.8752",
      longitude: "106.7725",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "08:00",
        closes: "17:30",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function WebSiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: "PTC Switchboard – Tủ điện công nghiệp & Thang máng cáp",
    url: SITE_URL,
    publisher: {
      "@id": `${SITE_URL}/#organization`,
    },
    inLanguage: "vi-VN",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export interface BreadcrumbItem {
  name: string;
  item: string;
}

export function BreadcrumbSchema({ items }: { items: BreadcrumbItem[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((crumb, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: crumb.name,
      item: crumb.item.startsWith("http") ? crumb.item : `${SITE_URL}${crumb.item}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export interface FAQItem {
  question: string;
  answer: string;
}

export function FAQSchema({ items }: { items: FAQItem[] }) {
  if (!items || items.length === 0) return null;

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export interface ProductSchemaProps {
  name: string;
  description: string;
  category: string;
  url: string;
  image?: string;
}

export function ProductSchema({ name, description, category, url, image }: ProductSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name,
    description,
    category,
    url: url.startsWith("http") ? url : `${SITE_URL}${url}`,
    image: image ? (image.startsWith("http") ? image : `${SITE_URL}${image}`) : `${SITE_URL}/logo-ptc.png`,
    brand: {
      "@type": "Brand",
      name: "PTC Switchboard",
    },
    manufacturer: {
      "@id": `${SITE_URL}/#organization`,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export interface ArticleSchemaProps {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified: string;
  authorName?: string;
  reviewerName?: string;
  image?: string;
}

export function ArticleSchema({
  title,
  description,
  url,
  datePublished,
  dateModified,
  authorName = "Ban Kỹ thuật PTC",
  reviewerName = "Kỹ sư Trưởng PTC",
  image,
}: ArticleSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: title,
    description,
    url: url.startsWith("http") ? url : `${SITE_URL}${url}`,
    image: image ? (image.startsWith("http") ? image : `${SITE_URL}${image}`) : `${SITE_URL}/logo-ptc.png`,
    datePublished,
    dateModified,
    inLanguage: "vi-VN",
    author: {
      "@type": "Organization",
      name: authorName,
      url: SITE_URL,
    },
    reviewedBy: {
      "@type": "Organization",
      name: reviewerName,
      url: SITE_URL,
    },
    publisher: {
      "@id": `${SITE_URL}/#organization`,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url.startsWith("http") ? url : `${SITE_URL}${url}`,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
