import { createFileRoute } from "@tanstack/react-router";
import React, { Suspense } from "react";
import { HeroSection } from "@/components/features/home/hero-section";
const KeyAttributes = React.lazy(() => import("@/components/features/home/key-attributes"));
const ServicesSection = React.lazy(() => import("@/components/features/home/services-section"));
const RentalTeaserSection = React.lazy(() => import("@/components/features/home/rental-teaser-section"));
const CtaSection = React.lazy(() => import("@/components/features/home/cta-section"));
import { Layout } from "@/components/ui/layout";
import i18n from "@/i18n/config";
import { getSEOData } from "@/utils/seo";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => {
    const currentLang = (i18n.language || "en") as "en" | "fr";

    const title =
      currentLang === "fr"
        ? "Services de Logistique Minière et Location d'Équipements en Sierra Leone | Continental Mining Services"
        : "Mining Logistics & Equipment Rental Services in Sierra Leone | Continental Mining Services";
    const description =
      currentLang === "fr"
        ? "Services miniers de premier plan en Sierra Leone. Transport de minerai, forage et location d'équipements lourds."
        : "Sierra Leone's premier mining partner. From ore haulage to heavy equipment rentals. We deliver capacity, safety, and efficiency to your operations.";

    return getSEOData({
      title,
      description,
      keywords:
        "mining, services, mining services, mining company, mining industry, Sierra Leone, ore haulage, drilling, equipment rental",
      path: "/",
    });
  },
});

function Index() {
  return (
    <Layout>
      <HeroSection />
      <Suspense fallback={<div>Loading...</div>}>
        <KeyAttributes />
        <ServicesSection />
        <RentalTeaserSection />
        <CtaSection />
      </Suspense>
    </Layout>
  );
}
