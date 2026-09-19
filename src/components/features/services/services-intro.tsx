import { HugeiconsIcon } from "@hugeicons/react";
import { useTranslation } from "react-i18next";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { SERVICE_KEYS, SERVICES } from "@/lib/services";

export const ServicesIntro = () => {
  const { t } = useTranslation();

  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <div
        aria-hidden="true"
        className="mask-fade-y absolute inset-0 bg-grid-primary"
      />
      <div className="container relative mx-auto px-4 md:px-6">
        <SectionHeading
          description={t("servicesPage.introText.text")}
          eyebrow={t("servicesPage.introText.eyebrow")}
          title={t("servicesPage.introText.headline")}
        />

        <Reveal className="mt-14" delay={0.1}>
          <nav aria-label={t("servicesPage.introText.jumpTo")}>
            <p className="mb-5 text-center font-heading font-semibold text-muted-foreground text-xs uppercase tracking-[0.2em]">
              {t("servicesPage.introText.jumpTo")}
            </p>
            <ul className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
              {SERVICE_KEYS.map((key, index) => (
                <li key={key}>
                  <a
                    className="spotlight group flex h-full flex-col items-center gap-3 rounded-2xl border border-border bg-white p-5 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10"
                    href={`#${SERVICES[key].anchor}`}
                  >
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                      <HugeiconsIcon
                        className="h-6 w-6"
                        icon={SERVICES[key].icon}
                      />
                    </span>
                    <span className="font-heading font-semibold text-foreground text-sm leading-snug">
                      <span className="mr-1 text-muted-foreground">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      {t(`servicesPage.detailedList.${key}.title`)}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </Reveal>
      </div>
    </section>
  );
};
