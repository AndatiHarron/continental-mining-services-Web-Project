// src/routes/__root.tsx
/// <reference types="vite/client" />

import {
  createRootRoute,
  HeadContent,
  Outlet,
  Scripts,
} from "@tanstack/react-router";
import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import "@fontsource/inter/index.css";
import "@fontsource/montserrat/300.css";
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/500.css";
import "@fontsource/montserrat/600.css";
import "@fontsource/montserrat/700.css";
import "@fontsource/montserrat/800.css";
import "@fontsource/oswald/400.css";
import "@fontsource/oswald/500.css";
import "@fontsource/oswald/600.css";
import "@fontsource/oswald/700.css";

import "@/index.css";
import i18n from "@/i18n/config";
import { SITE } from "@/lib/site";
import {
  getCurrentLanguage,
  getTranslations,
  organizationJsonLd,
  websiteJsonLd,
} from "@/utils/seo";

export const Route = createRootRoute({
  head: () => {
    const translations = getTranslations();

    return {
      meta: [
        { charSet: "utf-8" },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1, viewport-fit=cover",
        },
        { title: translations.home.pageMeta.title },
        {
          name: "description",
          content: translations.home.pageMeta.description,
        },
        { name: "author", content: SITE.name },
        { name: "format-detection", content: "telephone=yes" },
        { name: "geo.region", content: SITE.countryCode },
        { name: "geo.placename", content: SITE.city },
        { property: "og:site_name", content: SITE.name },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [
        {
          rel: "icon",
          type: "image/png",
          sizes: "48x48",
          href: "/favicon.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "192x192",
          href: "/logo-192.png",
        },
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/apple-touch-icon.png",
        },
        { rel: "manifest", href: "/manifest.json" },
      ],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify(
            organizationJsonLd(translations.footer.description)
          ),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify(websiteJsonLd()),
        },
      ],
    };
  },
  component: RootComponent,
});

function RootComponent() {
  const [lang, setLang] = useState<string>(getCurrentLanguage());

  useEffect(() => {
    const updateLang = () => setLang(getCurrentLanguage());
    updateLang();
    i18n.on("languageChanged", updateLang);

    return () => {
      i18n.off("languageChanged", updateLang);
    };
  }, []);

  return (
    <RootDocument lang={lang}>
      <Outlet />
    </RootDocument>
  );
}

function RootDocument({
  children,
  lang,
}: Readonly<{ children: ReactNode; lang: string }>) {
  return (
    <html lang={lang}>
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}
