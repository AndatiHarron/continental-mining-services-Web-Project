import { CheckmarkCircle02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useTranslation } from "react-i18next";
import whoWeAreImage from "@/assets/about-us/who-we-are.jpeg";
import crewImage from "@/assets/services/mine-drilling/crew.webp";
import { CornerBrackets } from "@/components/ui/corner-brackets";
import { CountUp } from "@/components/ui/count-up";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export const CompanyProfile = () => {
  const { t } = useTranslation();
  const paragraphs = t("about.companyProfile.bodyParagraphs", {
    returnObjects: true,
  }) as string[];
  const statBadges = t("about.companyProfile.statBadges", {
    returnObjects: true,
  }) as string[];
  const highlights = t("about.companyProfile.highlights", {
    returnObjects: true,
  }) as Array<{ value: string; label: string }>;

  return (
    <section className="relative overflow-hidden bg-white py-24 md:py-32">
      <div
        aria-hidden="true"
        className="mask-fade-y absolute inset-0 bg-grid-primary opacity-60"
      />
      <div className="container relative mx-auto grid grid-cols-1 items-center gap-16 px-4 md:px-6 lg:grid-cols-2">
        <div>
          <SectionHeading
            align="left"
            eyebrow={t("about.companyProfile.eyebrow")}
            title={t("about.companyProfile.headline")}
          />
          <Reveal
            className="mt-6 space-y-5 text-lg leading-relaxed"
            delay={0.1}
          >
            {paragraphs.map((paragraph, index) => (
              <p
                className={
                  index === 0
                    ? "border-primary border-l-4 pl-5 text-foreground"
                    : "text-muted-foreground"
                }
                key={paragraph}
              >
                {paragraph}
              </p>
            ))}
          </Reveal>
          <Reveal className="mt-8 flex flex-wrap gap-3" delay={0.2}>
            {statBadges.map((badge) => (
              <span
                className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 font-semibold text-primary text-sm transition-all hover:-translate-y-0.5 hover:bg-primary hover:text-white"
                key={badge}
              >
                <HugeiconsIcon
                  className="h-4 w-4"
                  icon={CheckmarkCircle02Icon}
                />
                {badge}
              </span>
            ))}
          </Reveal>
          <Reveal delay={0.3}>
            <dl className="mt-10 grid grid-cols-3 gap-3">
              {highlights.map((item) => (
                <div
                  className="tilt spotlight flex flex-col-reverse gap-1 rounded-2xl border border-border bg-white p-4 text-center shadow-sm md:p-5"
                  key={item.label}
                >
                  <dt className="text-[11px] text-muted-foreground uppercase tracking-wider md:text-xs">
                    {item.label}
                  </dt>
                  <dd className="font-readout font-semibold text-2xl text-primary md:text-3xl">
                    <CountUp value={item.value} />
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <Reveal className="relative pb-10 sm:pb-0" delay={0.15} x={30} y={0}>
          <div
            aria-hidden="true"
            className="absolute -top-6 -right-6 h-40 w-40 rounded-3xl bg-grid-primary"
          />
          <div className="tilt img-skeleton group relative aspect-[4/3] overflow-hidden rounded-[2rem] shadow-2xl shadow-primary/15 lg:aspect-[4/5]">
            <img
              alt={t("about.companyProfile.imageAlt")}
              className="h-full w-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-105"
              decoding="async"
              height={1000}
              loading="lazy"
              src={whoWeAreImage}
              width={800}
            />
            <span className="absolute inset-0 bg-linear-to-t from-primary/40 via-transparent to-transparent" />
            <CornerBrackets />
          </div>
          <div className="tilt img-skeleton absolute -bottom-2 left-4 w-40 overflow-hidden rounded-3xl border-8 border-white shadow-2xl sm:-bottom-10 sm:-left-4 sm:w-56 md:-left-10 md:w-64">
            <img
              alt={t(
                "servicesPage.detailedList.mineDrilling.featureCards.1.title"
              )}
              className="aspect-square h-full w-full object-cover"
              decoding="async"
              height={400}
              loading="lazy"
              src={crewImage}
              width={400}
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
};
