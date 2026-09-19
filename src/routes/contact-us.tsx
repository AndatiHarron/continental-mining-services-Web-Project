import { createFileRoute } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import heroBg from "@/assets/services/container-movement/efficient-loading/el-3.jpg";
import { ContactSection } from "@/components/features/contact/contact-section";
import { FaqSection } from "@/components/features/shared/faq-section";
import { PageHero } from "@/components/features/shared/page-hero";
import { Layout } from "@/components/ui/layout";
import {
  absoluteUrl,
  breadcrumbJsonLd,
  faqJsonLd,
  getSEOData,
  getTranslations,
} from "@/utils/seo";

export const Route = createFileRoute("/contact-us")({
  component: ContactUs,
  head: () => {
    const translations = getTranslations();
    const pageMeta = translations.contactPage.pageMeta;

    return getSEOData({
      title: pageMeta.title,
      description: pageMeta.description,
      keywords:
        "contact Continental Mining Services, mining services Freetown, ore haulage quote, drilling services quote, equipment rental Sierra Leone, mining logistics contact",
      path: "/contact-us",
      jsonLd: [
        breadcrumbJsonLd([
          { name: translations.nav.links.home, path: "/" },
          { name: translations.nav.links.contact, path: "/contact-us" },
        ]),
        {
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: pageMeta.title,
          description: pageMeta.description,
          url: absoluteUrl("/contact-us"),
          mainEntity: { "@id": `${absoluteUrl("/")}#organization` },
        },
        faqJsonLd(translations.faq.items),
      ],
    });
  },
});

function ContactUs() {
  const { t } = useTranslation();
  const breadcrumbs = t("contactPage.pageHeader.breadcrumbs", {
    returnObjects: true,
  }) as string[];

  return (
    <Layout>
      <PageHero
        className="pb-32 md:pb-44"
        crumbs={[{ label: breadcrumbs[0], to: "/" }, { label: breadcrumbs[1] }]}
        eyebrow={t("contactPage.pageHeader.eyebrow")}
        image={heroBg}
        imageAlt={t("servicesPage.detailedList.containerMovement.title")}
        subtitle={t("contactPage.pageHeader.subtitle")}
        title={t("contactPage.pageHeader.title")}
      />
      <ContactSection />
      <FaqSection />
    </Layout>
  );
}
