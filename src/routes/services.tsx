import { createFileRoute } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import heroBg from "@/assets/services/bg_o.jpg";
import { EquipmentRentalTeaser } from "@/components/features/services/equipment-rental-teaser";
import { ServiceDetailedList } from "@/components/features/services/service-detailed-list";
import { ServicesIntro } from "@/components/features/services/services-intro";
import { CtaBanner } from "@/components/features/shared/cta-banner";
import { PageHero } from "@/components/features/shared/page-hero";
import { ProcessSteps } from "@/components/features/shared/process-steps";
import { Layout } from "@/components/ui/layout";
import { SERVICE_KEYS, SERVICES } from "@/lib/services";
import {
  breadcrumbJsonLd,
  getSEOData,
  getTranslations,
  servicesJsonLd,
} from "@/utils/seo";

export const Route = createFileRoute("/services")({
  component: Services,
  head: () => {
    const translations = getTranslations();
    const page = translations.servicesPage;

    return getSEOData({
      title: page.pageMeta.title,
      description: page.pageMeta.description,
      keywords:
        "ore haulage Sierra Leone, mine drilling services, blast hole drilling, flatbed cargo, container movement, tipper truck rental, earth moving equipment rental, mining logistics",
      path: "/services",
      jsonLd: [
        breadcrumbJsonLd([
          { name: translations.nav.links.home, path: "/" },
          { name: translations.nav.links.services, path: "/services" },
        ]),
        servicesJsonLd(
          SERVICE_KEYS.map((key) => ({
            name: page.detailedList[key].title,
            description: page.detailedList[key].description,
            path: `/services#${SERVICES[key].anchor}`,
          }))
        ),
      ],
    });
  },
});

function Services() {
  const { t } = useTranslation();
  const breadcrumbs = t("servicesPage.pageHeader.breadcrumbs", {
    returnObjects: true,
  }) as string[];

  return (
    <Layout>
      <PageHero
        crumbs={[{ label: breadcrumbs[0], to: "/" }, { label: breadcrumbs[1] }]}
        eyebrow={t("servicesPage.pageHeader.eyebrow")}
        image={heroBg}
        imageAlt={t("servicesPage.pageHeader.title")}
        subtitle={t("servicesPage.pageHeader.subtitle")}
        title={t("servicesPage.pageHeader.title")}
      />
      <ServicesIntro />
      <ServiceDetailedList />
      <EquipmentRentalTeaser />
      <ProcessSteps />
      <CtaBanner
        buttonText={t("servicesPage.ctaBanner.buttonText")}
        heading={t("servicesPage.ctaBanner.headline")}
        text={t("servicesPage.ctaBanner.subheadline")}
      />
    </Layout>
  );
}
