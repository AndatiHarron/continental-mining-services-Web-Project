import {
  ArrowRight01Icon,
  Call02Icon,
  CheckmarkCircle02Icon,
  WhatsappIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { CornerBrackets } from "@/components/ui/corner-brackets";
import { ctaVariants } from "@/components/ui/cta";
import { ImageGallery } from "@/components/ui/image-gallery";
import { Reveal } from "@/components/ui/reveal";
import { SERVICE_KEYS, SERVICES, type ServiceKey } from "@/lib/services";
import { SITE, whatsappLink } from "@/lib/site";
import { cn } from "@/lib/utils";

type FeatureCard = { title: string; description: string };

function ServiceBlock({
  serviceKey,
  index,
}: {
  serviceKey: ServiceKey;
  index: number;
}) {
  const { t } = useTranslation();
  const service = SERVICES[serviceKey];
  const base = `servicesPage.detailedList.${serviceKey}`;
  const title = t(`${base}.title`);
  const features = t(`${base}.featureCards`, {
    returnObjects: true,
  }) as FeatureCard[];
  const keyFacts = t(`${base}.keyFacts`, { returnObjects: true }) as string[];
  const images = service.featureImages.flat();
  const reversed = index % 2 === 1;

  return (
    <article
      aria-labelledby={`${service.anchor}-title`}
      className="scroll-mt-28 py-16 md:py-24"
      id={service.anchor}
    >
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <Reveal
          className={cn("relative", reversed && "lg:order-2")}
          x={reversed ? 30 : -30}
          y={0}
        >
          <div
            aria-hidden="true"
            className={cn(
              "absolute -inset-4 -z-10 rounded-[2.5rem] bg-grid-primary",
              reversed ? "rotate-2" : "-rotate-2"
            )}
          />
          <ImageGallery
            alt={title}
            className="aspect-[4/3] rounded-3xl shadow-2xl shadow-primary/15"
            images={images}
          >
            <CornerBrackets />
          </ImageGallery>
          <div className="absolute -bottom-6 left-6 flex items-center gap-3 rounded-2xl bg-white px-5 py-3 shadow-xl">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-white">
              <HugeiconsIcon className="h-6 w-6" icon={service.icon} />
            </span>
            <span className="font-heading font-semibold text-primary text-sm">
              {t(`${base}.subtitle`)}
            </span>
          </div>
        </Reveal>

        <Reveal className={cn(reversed && "lg:order-1")} delay={0.1}>
          <p className="mb-4 font-bold font-heading text-6xl text-primary/10 leading-none md:text-7xl">
            {String(index + 1).padStart(2, "0")}
          </p>
          <h2
            className="mb-5 font-bold font-heading text-3xl text-primary leading-tight md:text-4xl"
            id={`${service.anchor}-title`}
          >
            {title}
          </h2>
          <p className="mb-6 text-lg text-muted-foreground leading-relaxed">
            {t(`${base}.description`)}
          </p>

          <div className="mb-8">
            <p className="mb-3 font-heading font-semibold text-secondary text-xs uppercase tracking-[0.2em]">
              {t("servicesPage.keyFactsLabel")}
            </p>
            <ul className="flex flex-wrap gap-2">
              {keyFacts.map((fact) => (
                <li
                  className="rounded-md border border-primary/20 bg-primary/5 px-3 py-1.5 font-readout text-primary text-sm uppercase tracking-wide"
                  key={fact}
                >
                  {fact}
                </li>
              ))}
            </ul>
          </div>

          <ul className="mb-10 grid gap-4 sm:grid-cols-2">
            {features.map((feature) => (
              <li
                className={cn(
                  "spotlight rounded-2xl border border-border bg-white p-5 shadow-sm transition-all hover:border-primary/25 hover:shadow-md",
                  features.length === 3 && "last:sm:col-span-2"
                )}
                key={feature.title}
              >
                <h3 className="mb-1.5 flex items-center gap-2 font-bold font-heading text-foreground">
                  <HugeiconsIcon
                    className="h-5 w-5 shrink-0 text-secondary"
                    icon={CheckmarkCircle02Icon}
                  />
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-3">
            {service.isRental ? (
              <Link
                className={ctaVariants({ variant: "primary" })}
                hash="fleet"
                to="/"
              >
                {t(`${base}.ctaText`)}
                <HugeiconsIcon
                  className="h-4 w-4 transition-transform group-hover/cta:translate-x-1"
                  icon={ArrowRight01Icon}
                />
              </Link>
            ) : null}
            <a
              className={ctaVariants({
                variant: service.isRental ? "outline" : "primary",
              })}
              href={whatsappLink(t(`${base}.whatsappText`))}
              rel="noopener noreferrer"
              target="_blank"
            >
              <HugeiconsIcon className="h-4 w-4" icon={WhatsappIcon} />
              {service.isRental
                ? t("common.requestQuote")
                : t(`${base}.ctaText`)}
            </a>
            <a
              className={ctaVariants({ variant: "outline" })}
              href={SITE.phoneHref}
            >
              <HugeiconsIcon className="h-4 w-4" icon={Call02Icon} />
              {t("common.callUs")}
            </a>
          </div>
        </Reveal>
      </div>
    </article>
  );
}

export const ServiceDetailedList = () => (
  <section className="relative">
    <div className="container mx-auto divide-y divide-border px-4 md:px-6">
      {SERVICE_KEYS.map((key, index) => (
        <ServiceBlock index={index} key={key} serviceKey={key} />
      ))}
    </div>
  </section>
);
