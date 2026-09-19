import { createFileRoute } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { FleetSection } from "@/components/features/home/fleet-section";
import { HeroSection } from "@/components/features/home/hero-section";
import { KeyAttributes } from "@/components/features/home/key-attributes";
import { PitToPort } from "@/components/features/home/pit-to-port";
import { ServicesMarquee } from "@/components/features/home/services-marquee";
import { ServicesSection } from "@/components/features/home/services-section";
import { CtaBanner } from "@/components/features/shared/cta-banner";
import { FaqSection } from "@/components/features/shared/faq-section";
import { ProcessSteps } from "@/components/features/shared/process-steps";
import { Layout } from "@/components/ui/layout";
import {
  breadcrumbJsonLd,
  faqJsonLd,
  getSEOData,
  getTranslations,
} from "@/utils/seo";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => {
    const translations = getTranslations();

    return getSEOData({
      title: translations.home.pageMeta.title,
      description: translations.home.pageMeta.description,
      keywords:
        "mining services Sierra Leone, mining logistics, ore haulage, mine drilling, equipment rental, excavator rental, dump truck rental, container movement, Freetown",
      path: "/",
      jsonLd: [
        breadcrumbJsonLd([{ name: translations.nav.links.home, path: "/" }]),
        faqJsonLd(translations.faq.items),
      ],
    });
  },
});

function Index() {
  const { t } = useTranslation();

  return (
    <Layout>
      <HeroSection />
      <ServicesMarquee />
      <ServicesSection />
      <PitToPort />
      <KeyAttributes />
      <FleetSection />
      <ProcessSteps />
      <FaqSection />
      <CtaBanner
        buttonText={t("cta.button")}
        heading={t("cta.heading")}
        text={t("cta.description")}
      />
    </Layout>
  );
}
//code by andorainnovationslimited.com
