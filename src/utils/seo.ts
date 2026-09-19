import i18n from "@/i18n/config";
import { SITE } from "@/lib/site";
import enTranslation from "@/locales/en/translation.json";
import frTranslation from "@/locales/fr/translation.json";

const DEFAULT_OG_IMAGE = `${SITE.url}/og-image.jpg`;

type Locale = "en" | "fr";
type JsonLd = Record<string, unknown>;

interface SEOConfig {
  title: string;
  description: string;
  keywords?: string;
  path: string;
  ogImage?: string;
  jsonLd?: JsonLd[];
}

export function getCurrentLanguage(): Locale {
  return i18n.language?.startsWith("fr") ? "fr" : "en";
}

export function getTranslations() {
  return getCurrentLanguage() === "fr" ? frTranslation : enTranslation;
}

export const absoluteUrl = (path: string): string =>
  `${SITE.url}${path === "/" ? "/" : path}`;

export function getSEOData(config: SEOConfig) {
  const currentLang = getCurrentLanguage();
  const canonicalUrl = absoluteUrl(config.path);
  const ogImage = config.ogImage || DEFAULT_OG_IMAGE;

  return {
    meta: [
      { title: config.title },
      { name: "description", content: config.description },
      ...(config.keywords
        ? [{ name: "keywords", content: config.keywords }]
        : []),
      {
        name: "robots",
        content: "index, follow, max-image-preview:large, max-snippet:-1",
      },
      { property: "og:title", content: config.title },
      { property: "og:description", content: config.description },
      { property: "og:url", content: canonicalUrl },
      { property: "og:type", content: "website" },
      { property: "og:image", content: ogImage },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: config.title },
      {
        property: "og:locale",
        content: currentLang === "fr" ? "fr_FR" : "en_US",
      },
      {
        property: "og:locale:alternate",
        content: currentLang === "fr" ? "en_US" : "fr_FR",
      },
      { property: "og:site_name", content: SITE.name },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: config.title },
      { name: "twitter:description", content: config.description },
      { name: "twitter:image", content: ogImage },
    ],
    links: [
      { rel: "canonical", href: canonicalUrl },
      { rel: "alternate", hrefLang: "x-default", href: canonicalUrl },
    ],
    scripts: (config.jsonLd ?? []).map((data) => ({
      type: "application/ld+json",
      children: JSON.stringify(data),
    })),
  };
}

/* ------------------------------------------------------------------ */
/* Structured data (schema.org)                                        */
/* ------------------------------------------------------------------ */

const ORG_ID = `${SITE.url}/#organization`;

export function organizationJsonLd(description: string): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": ORG_ID,
    name: SITE.name,
    alternateName: SITE.shortName,
    url: `${SITE.url}/`,
    logo: `${SITE.url}/logo.png`,
    image: DEFAULT_OG_IMAGE,
    description,
    telephone: SITE.phone,
    email: SITE.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: SITE.city,
      addressCountry: SITE.countryCode,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE.geo.latitude,
      longitude: SITE.geo.longitude,
    },
    areaServed: { "@type": "Country", name: SITE.country },
    knowsLanguage: ["en", "fr"],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: SITE.phone,
      email: SITE.email,
      contactType: "customer service",
      areaServed: SITE.countryCode,
      availableLanguage: ["English", "French"],
      hoursAvailable: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
    },
    sameAs: [SITE.social.linkedin, SITE.social.facebook],
  };
}

export function websiteJsonLd(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE.url}/#website`,
    url: `${SITE.url}/`,
    name: SITE.name,
    inLanguage: ["en", "fr"],
    publisher: { "@id": ORG_ID },
  };
}

export function breadcrumbJsonLd(
  items: Array<{ name: string; path: string }>
): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function faqJsonLd(
  items: Array<{ question: string; answer: string }>
): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}

export function servicesJsonLd(
  services: Array<{ name: string; description: string; path: string }>
): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: services.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        name: service.name,
        description: service.description,
        url: absoluteUrl(service.path),
        provider: { "@id": ORG_ID },
        areaServed: { "@type": "Country", name: SITE.country },
      },
    })),
  };
}
