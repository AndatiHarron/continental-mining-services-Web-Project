export const SITE = {
  name: "Continental Mining Services",
  shortName: "CMS",
  url: (
    import.meta.env.VITE_BASE_URL || "https://continental-mining.vercel.app"
  ).replace(/\/$/, ""),
  phone: "+232 75 311632",
  phoneHref: "tel:+23275311632",
  email: "info@continental-miningservices.com",
  whatsappNumber: "23275311632",
  city: "Freetown",
  country: "Sierra Leone",
  countryCode: "SL",
  geo: { latitude: 8.4844, longitude: -13.2344 },
  mapEmbedUrl:
    "https://www.google.com/maps?q=Freetown%2C%20Sierra%20Leone&z=12&output=embed",
  mapDirectionsUrl:
    "https://www.google.com/maps/search/?api=1&query=Freetown%2C%20Sierra%20Leone",
  social: {
    linkedin: "https://www.linkedin.com/company/continental-miningservices/",
    facebook: "https://www.facebook.com/continental-miningservices/",
  },
} as const;

export const whatsappLink = (text: string): string =>
  `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(text)}`;
