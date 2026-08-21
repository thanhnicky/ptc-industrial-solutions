import { CONTACT, SITE_URL } from "./site";

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "Manufacturer", "Organization"],
    "@id": `${SITE_URL}/#organization`,
    name: CONTACT.legalName,
    alternateName: ["PTC Switchboard", "Tủ Điện PTC", "Công ty Cổ phần Tủ bảng điện PTC"],
    url: SITE_URL,
    logo: `${SITE_URL}/logo-ptc.png`,
    image: `${SITE_URL}/nha-may-tu-dien-ptc.jpg`,
    description:
      "Nhà máy sản xuất tủ điện hạ thế (MSB, MCC, DB, ATS, Solar) và hệ thống thang máng cáp công nghiệp theo tiêu chuẩn IEC 61439-1/2, ISO 9001:2015 tại TP.HCM.",
    telephone: `+84${CONTACT.hotlineRaw.replace(/^0/, "")}`,
    email: CONTACT.email,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Số 15, Đường 15, Khu Phố 13, Phường Linh Xuân",
      addressLocality: "Thành phố Thủ Đức",
      addressRegion: "Thành phố Hồ Chí Minh",
      postalCode: "700000",
      addressCountry: "VN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 10.8753,
      longitude: 106.7725,
    },
    areaServed: [
      {
        "@type": "AdministrativeArea",
        name: "Thành phố Hồ Chí Minh",
      },
      {
        "@type": "AdministrativeArea",
        name: "Bình Dương",
      },
      {
        "@type": "AdministrativeArea",
        name: "Đồng Nai",
      },
      {
        "@type": "AdministrativeArea",
        name: "Long An",
      },
      {
        "@type": "AdministrativeArea",
        name: "Bà Rịa - Vũng Tàu",
      },
      {
        "@type": "Country",
        name: "Việt Nam",
      },
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "08:00",
        closes: "17:30",
      },
    ],
    sameAs: [
      CONTACT.zalo,
      "https://tudienptc.vn",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Danh mục Tủ điện & Thang máng cáp PTC",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "Tủ điện tổng MSB đến 6300A Form 3b/4b",
            description: "Tủ phân phối tổng MSB sản xuất theo tiêu chuẩn IEC 61439-1/2, Icw đến 100kA.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "Tủ điều khiển động cơ MCC & Biến tần VSD",
            description: "Tủ điều khiển động cơ cho dây chuyền nhà máy, xử lý nước, bơm quạt.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "Thang máng cáp mạ kẽm nhúng nóng",
            description: "Thang cáp, máng cáp, khay cáp mạ kẽm nhúng nóng chuẩn ASTM A123 / ISO 1461.",
          },
        },
      ],
    },
  };
}
