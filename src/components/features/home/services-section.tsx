import {
  ArrowRight01Icon,
  ArrowUpRight01Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { CornerBrackets } from "@/components/ui/corner-brackets";
import { ctaVariants } from "@/components/ui/cta";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { SERVICE_KEYS, SERVICES } from "@/lib/services";
import { cn } from "@/lib/utils";

/** Bento layout: first and last tiles span two columns on large screens */
const WIDE_TILES = new Set([0, SERVICE_KEYS.length - 1]);

export const ServicesSection = () => {
  const { t } = useTranslation();

  return (
    <section className="relative overflow-hidden py-24 md:py-32" id="services">
      <div
        aria-hidden="true"
        className="mask-fade-y absolute inset-0 bg-grid-primary opacity-70"
      />
      <div className="container relative mx-auto px-4 md:px-6">
        <div className="mb-14 flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            align="left"
            description={t("services.description")}
            eyebrow={t("services.eyebrow")}
            title={t("services.heading")}
          />
          <Reveal className="flex items-center gap-6" delay={0.1}>
            <p className="hidden items-baseline gap-2 text-muted-foreground lg:flex">
              <span className="font-readout font-semibold text-5xl text-primary">
                {String(SERVICE_KEYS.length).padStart(2, "0")}
              </span>
              <span className="max-w-24 text-xs uppercase leading-tight tracking-wider">
                {t("hero.stats.0.label")}
              </span>
            </p>
            <Link
              className={ctaVariants({ variant: "outline" })}
              to="/services"
            >
              {t("services.cta")}
              <HugeiconsIcon
                className="h-4 w-4 transition-transform group-hover/cta:translate-x-1"
                icon={ArrowRight01Icon}
              />
            </Link>
          </Reveal>
        </div>

        <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {SERVICE_KEYS.map((key, index) => {
            const service = SERVICES[key];
            const base = `servicesPage.detailedList.${key}`;
            const title = t(`${base}.title`);
            const keyFacts = t(`${base}.keyFacts`, {
              returnObjects: true,
            }) as string[];

            return (
              <li
                className={cn(WIDE_TILES.has(index) && "lg:col-span-2")}
                key={key}
              >
                <Reveal className="h-full" delay={(index % 3) * 0.08}>
                  <Link
                    className="tilt spotlight spotlight-inverted group img-skeleton relative flex h-full min-h-[27rem] flex-col justify-end overflow-hidden rounded-[1.75rem] text-white shadow-black/10 shadow-lg ring-1 ring-black/5 transition-shadow duration-500 hover:shadow-2xl hover:shadow-primary/30 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/40 md:h-[29rem] md:min-h-0"
                    hash={service.anchor}
                    to="/services"
                  >
                    {/* Photo + overlays */}
                    <img
                      alt={title}
                      className="absolute inset-0 h-full w-full object-cover opacity-90 transition-transform duration-[1.4s] ease-out group-hover:scale-110"
                      decoding="async"
                      height={600}
                      loading="lazy"
                      sizes={
                        WIDE_TILES.has(index)
                          ? "(min-width: 1024px) 50vw, (min-width: 768px) 50vw, 100vw"
                          : "(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                      }
                      src={service.cover}
                      width={900}
                    />
                    <span className="absolute inset-0 bg-linear-to-t from-black via-black/45 to-black/10" />
                    <span className="absolute inset-0 bg-linear-to-t from-primary/80 via-primary/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    <span className="absolute inset-0 bg-grid-light opacity-0 transition-opacity duration-700 group-hover:opacity-60" />
                    <CornerBrackets className="scale-95 opacity-0 group-hover:scale-100 group-hover:opacity-100" />

                    {/* Top bar: icon, index, arrow */}
                    <span className="absolute inset-x-5 top-5 z-20 flex items-start justify-between md:inset-x-6 md:top-6">
                      <span className="flex items-center gap-3">
                        <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 text-white shadow-lg ring-1 ring-white/25 backdrop-blur-md transition-all duration-500 group-hover:rotate-[-6deg] group-hover:bg-primary group-hover:ring-white/40">
                          <HugeiconsIcon
                            className="h-7 w-7"
                            icon={service.icon}
                          />
                        </span>
                        <span className="font-readout text-sm text-white/70 tracking-wider">
                          {String(index + 1).padStart(2, "0")} /{" "}
                          {String(SERVICE_KEYS.length).padStart(2, "0")}
                        </span>
                      </span>
                      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-primary shadow-lg transition-transform duration-500 group-hover:rotate-45">
                        <HugeiconsIcon
                          className="h-5 w-5"
                          icon={ArrowUpRight01Icon}
                        />
                      </span>
                    </span>

                    {/* Copy */}
                    <span className="relative z-20 block p-6 pt-28 md:p-7">
                      <span className="mb-2 block font-heading font-semibold text-white/75 text-xs uppercase tracking-[0.18em]">
                        {t(`${base}.subtitle`)}
                      </span>
                      <span className="block font-bold font-heading text-2xl leading-tight md:text-[1.7rem]">
                        {title}
                      </span>
                      <span className="grid grid-rows-[1fr] transition-all duration-500 ease-out md:grid-rows-[0fr] md:opacity-0 md:group-focus-visible:grid-rows-[1fr] md:group-focus-visible:opacity-100 md:group-hover:grid-rows-[1fr] md:group-hover:opacity-100">
                        <span className="overflow-hidden">
                          <span className="mt-3 line-clamp-3 block text-sm text-white/85 leading-relaxed">
                            {t(`${base}.description`)}
                          </span>
                          <span className="mt-4 flex flex-wrap gap-1.5">
                            {keyFacts.map((fact) => (
                              <span
                                className="rounded-md bg-white/15 px-2.5 py-1 font-readout text-[11px] uppercase tracking-wide ring-1 ring-white/20 backdrop-blur"
                                key={fact}
                              >
                                {fact}
                              </span>
                            ))}
                          </span>
                          <span className="mt-4 inline-flex items-center gap-2 font-heading font-semibold text-sm">
                            {t("common.learnMore")}
                            <HugeiconsIcon
                              className="h-4 w-4 transition-transform group-hover:translate-x-1"
                              icon={ArrowRight01Icon}
                            />
                          </span>
                        </span>
                      </span>
                    </span>

                    {/* Accent line */}
                    <span className="absolute bottom-0 left-0 z-20 h-1 w-0 bg-linear-to-r from-secondary to-white transition-all duration-700 group-hover:w-full" />
                  </Link>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
