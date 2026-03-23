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
import "@fontsource/montserrat/index.css";
import "@fontsource/oswald/index.css";

// Import the generated route tree
import "@/index.css";
import "@/i18n/config";
import i18n from "@/i18n/config";
import { getCurrentLanguage } from "@/utils/seo";

const BASE_URL =
  typeof window !== "undefined"
    ? window.location.origin
    : import.meta.env.VITE_BASE_URL || "https://continental-mining.vercel.app";

export const Route = createRootRoute({
  head: () => {
    const currentLang = getCurrentLanguage();
    const ogLocale = currentLang === "fr" ? "fr_FR" : "en_US";

    return {
      meta: [
        {
          charSet: "utf-8",
        },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },
        {
          title:
            "Mining Logistics Services in Sierra Leone | Continental Mining",
        },
        {
          property: "og:site_name",
          content: "Continental Mining Services",
        },
        {
          property: "og:type",
          content: "website",
        },
        {
          property: "og:locale",
          content: ogLocale,
        },
        {
          name: "twitter:card",
          content: "summary_large_image",
        },
      ],
      links: [
        {
          rel: "alternate",
          hrefLang: "x-default",
          href: BASE_URL,
        },
      ],
    };
  },
  component: RootComponent,
});

function RootComponent() {
  const [lang, setLang] = useState<string>(getCurrentLanguage());

  useEffect(() => {
    const updateLang = () => {
      setLang(getCurrentLanguage());
    };

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
        {/* Google Analytics v4 */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
        <script dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');`
        }} />
        {/* PWA Manifest */}
        <link rel="manifest" href="/manifest.json" />
        {/* PWA Icons (ensure these exist in /public) */}
        <link rel="icon" href="/logo-192.png" sizes="192x192" type="image/png" />
        <link rel="apple-touch-icon" href="/logo-512.png" sizes="512x512" type="image/png" />
        {/* Service Worker registration */}
        <script dangerouslySetInnerHTML={{
          __html: `if ('serviceWorker' in navigator) { window.addEventListener('load', function() { navigator.serviceWorker.register('/sw.js'); }); }`
        }} />
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Continental Mining Services",
              "url": "https://continental-miningservices.com",
              "logo": "https://continental-miningservices.com/logo.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+232 75 311632",
                "contactType": "customer service",
                "email": "info@continental-miningservices.com"
              },
              "sameAs": [
                "https://www.linkedin.com/company/continental-miningservices/",
                "https://www.facebook.com/continentalminingservices/"
              ]
            })
          }}
        />
      </head>
      <body>
        {/* Cookie Consent Banner */}
        <div id="cookie-consent-banner" style={{position:'fixed',bottom:0,left:0,right:0,background:'#222',color:'#fff',padding:'1em',zIndex:9999,display:'none',textAlign:'center'}}>
          This website uses cookies to enhance the user experience.{' '}
          <button style={{marginLeft:'1em',padding:'0.5em 1em',background:'#fff',color:'#222',border:'none',borderRadius:'4px',cursor:'pointer'}} onClick={() => {document.getElementById('cookie-consent-banner').style.display='none';localStorage.setItem('cookieConsent','true');}}>Accept</button>
        </div>
        <script dangerouslySetInnerHTML={{
          __html: `if(!localStorage.getItem('cookieConsent')){document.getElementById('cookie-consent-banner').style.display='block';}`
        }} />
        {children}
        <Scripts />
      </body>
    </html>
  );
}
