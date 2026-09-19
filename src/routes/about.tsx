import { createFileRoute } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import heroBg from "@/assets/about-us/develon.jpg";
import { CompanyAttributes } from "@/components/features/about/company-attributes";
import { CompanyProfile } from "@/components/features/about/company-profile";
import { MissionVisionValues } from "@/components/features/about/mission-vision-values";
import { RegionFocus } from "@/components/features/about/region-focus";
import { SafetyCommitment } from "@/components/features/about/safety-commitment";
import { CtaBanner } from "@/components/features/shared/cta-banner";
import { PageHero } from "@/components/features/shared/page-hero";
import { Layout } from "@/components/ui/layout";
import {
  absoluteUrl,
  breadcrumbJsonLd,
  getSEOData,
  getTranslations,
} from "@/utils/seo";

export const Route = createFileRoute("/about")({
  component: About,
  head: () => {
    const translations = getTranslations();
    const pageMeta = translations.about.pageMeta;

    return getSEOData({
      title: pageMeta.title,
      description: pageMeta.description,
      keywords:
        "about Continental Mining Services, mining company Sierra Leone, mining logistics Freetown, mining safety standards, West Africa mining partner",
      path: "/about",
      jsonLd: [
        breadcrumbJsonLd([
          { name: translations.nav.links.home, path: "/" },
          { name: translations.nav.links.aboutUs, path: "/about" },
        ]),
        {
          "@context": "https://schema.org",
          "@type": "AboutPage",
          name: pageMeta.title,
          description: pageMeta.description,
          url: absoluteUrl("/about"),
          mainEntity: { "@id": `${absoluteUrl("/")}#organization` },
        },
      ],
    });
  },
});

function About() {
  const { t } = useTranslation();
  const breadcrumbs = t("about.pageHeader.breadcrumbs", {
    returnObjects: true,
  }) as string[];

  return (
    <Layout>
      <PageHero
        crumbs={[{ label: breadcrumbs[0], to: "/" }, { label: breadcrumbs[1] }]}
        eyebrow={t("about.pageHeader.eyebrow")}
        image={heroBg}
        imageAlt={t("about.pageHeader.title")}
        subtitle={t("about.pageHeader.subtitle")}
        title={t("about.pageHeader.title")}
      />
      <CompanyProfile />
      <MissionVisionValues />
      <CompanyAttributes />
      <SafetyCommitment />
      <RegionFocus />
      <CtaBanner
        buttonText={t("about.cta.buttonText")}
        heading={t("about.cta.headline")}
        text={t("about.cta.subheadline")}
      />
    </Layout>
  );
}
