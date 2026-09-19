import {
  ArrowDown01Icon,
  Call02Icon,
  CheckmarkCircle02Icon,
  WhatsappIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useInView } from "framer-motion";
import { type KeyboardEvent, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { CornerBrackets } from "@/components/ui/corner-brackets";
import { ctaVariants } from "@/components/ui/cta";
import { ImageGallery } from "@/components/ui/image-gallery";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { FLEET, type FleetItem, type FleetSpec } from "@/lib/fleet";
import { SITE, whatsappLink } from "@/lib/site";
import { cn } from "@/lib/utils";

function useSpecValue() {
  const { t } = useTranslation();
  return (spec: FleetSpec) =>
    spec.translate ? t(`rental.specValues.${spec.value}`) : spec.value;
}

function FleetPanel({
  item,
  index,
  active,
}: {
  item: FleetItem;
  index: number;
  active: boolean;
}) {
  const { t } = useTranslation();
  const specValue = useSpecValue();
  const base = `rental.items.${item.key}`;
  const title = t(`${base}.title`);
  const features = t(`${base}.features`, { returnObjects: true }) as string[];

  return (
    <div
      aria-labelledby={`fleet-tab-${item.key}`}
      className={cn(
        "grid gap-8 lg:grid-cols-[1.05fr_1fr] lg:gap-12",
        active && "fade-in slide-in-from-bottom-4 animate-in duration-500"
      )}
      hidden={!active}
      id={`fleet-panel-${item.key}`}
      role="tabpanel"
    >
      {/* Media */}
      <div className="relative">
        <ImageGallery
          active={active}
          alt={`${item.brand} ${title}`}
          className="aspect-[4/3] rounded-[2rem] shadow-2xl shadow-primary/15"
          hoverControls={false}
          images={item.images}
          sizes="(min-width: 1024px) 50vw, 100vw"
        >
          <CornerBrackets />
          <p className="absolute bottom-6 left-6 z-20 font-readout text-6xl text-white/90 leading-none md:bottom-8 md:left-8 md:text-7xl">
            {String(index + 1).padStart(2, "0")}
          </p>
        </ImageGallery>
        <span className="absolute -top-3 left-6 z-30 inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 font-heading font-semibold text-white text-xs uppercase tracking-wider shadow-lg">
          {t("rental.brandLabel")} {item.brand}
        </span>
      </div>

      {/* Details */}
      <div className="flex flex-col">
        <h3 className="mb-4 font-bold font-heading text-3xl text-primary md:text-4xl">
          {title}
        </h3>
        <p className="mb-8 text-lg text-muted-foreground leading-relaxed">
          {t(`${base}.longDescription`)}
        </p>

        <p className="mb-3 font-heading font-semibold text-secondary text-xs uppercase tracking-[0.2em]">
          {t("rental.fleetRange")}
        </p>
        <dl
          className={cn(
            "mb-8 grid gap-3",
            item.specs.length >= 3
              ? "grid-cols-2 sm:grid-cols-3"
              : "grid-cols-2"
          )}
        >
          {item.specs.map((spec) => (
            <div
              className="spotlight flex flex-col-reverse rounded-2xl border border-border bg-white p-4 shadow-sm"
              key={spec.label}
            >
              <dt className="mt-1 text-muted-foreground text-xs uppercase tracking-wider">
                {t(`rental.specLabels.${spec.label}`)}
              </dt>
              <dd className="font-readout font-semibold text-2xl text-foreground md:text-3xl">
                {specValue(spec)}
              </dd>
            </div>
          ))}
        </dl>

        <p className="mb-3 font-heading font-semibold text-secondary text-xs uppercase tracking-[0.2em]">
          {t("rental.technology")}
        </p>
        <ul className="mb-8 space-y-2.5">
          {features.map((feature) => (
            <li
              className="flex items-start gap-3 text-foreground"
              key={feature}
            >
              <HugeiconsIcon
                className="mt-0.5 h-5 w-5 shrink-0 text-primary"
                icon={CheckmarkCircle02Icon}
              />
              <span className="leading-relaxed">{feature}</span>
            </li>
          ))}
        </ul>

        {item.reference && (
          <details className="group mb-8 rounded-2xl border border-border bg-white/60 open:bg-white open:shadow-lg open:shadow-primary/5">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 [&::-webkit-details-marker]:hidden">
              <span>
                <span className="block text-muted-foreground text-xs uppercase tracking-wider">
                  {t("rental.referenceModel")}
                </span>
                <span className="block font-bold font-heading text-foreground text-lg">
                  {item.reference.model}
                </span>
              </span>
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition-transform duration-300 group-open:rotate-180">
                <HugeiconsIcon className="h-4 w-4" icon={ArrowDown01Icon} />
              </span>
            </summary>
            <div className="px-5 pb-5">
              <dl className="divide-y divide-dashed divide-border text-sm">
                {item.reference.specs.map((spec) => (
                  <div
                    className="flex items-baseline justify-between gap-4 py-2.5"
                    key={spec.label}
                  >
                    <dt className="text-muted-foreground">
                      {t(`rental.specLabels.${spec.label}`)}
                    </dt>
                    <dd className="text-right font-medium font-readout text-base text-foreground">
                      {specValue(spec)}
                    </dd>
                  </div>
                ))}
              </dl>
              <p className="mt-3 text-muted-foreground text-xs">
                {t("rental.sourceNote", { source: item.reference.source })}
              </p>
            </div>
          </details>
        )}

        <div className="mt-auto flex flex-wrap gap-3">
          <a
            className={ctaVariants({ variant: "primary" })}
            href={whatsappLink(
              t("rental.whatsappText", { machine: `${item.brand} ${title}` })
            )}
            rel="noopener noreferrer"
            target="_blank"
          >
            <HugeiconsIcon className="h-4 w-4" icon={WhatsappIcon} />
            {t("rental.requestMachine")}
          </a>
          <a
            className={ctaVariants({ variant: "outline" })}
            href={SITE.phoneHref}
          >
            <HugeiconsIcon className="h-4 w-4" icon={Call02Icon} />
            {t("common.callUs")}
          </a>
        </div>
      </div>
    </div>
  );
}

export const FleetSection = () => {
  const { t } = useTranslation();
  const [active, setActive] = useState(0);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const sectionRef = useRef<HTMLElement>(null);
  const nearView = useInView(sectionRef, { margin: "600px 0px", once: true });

  // Preload each machine's lead photo so switching tabs never shows a blank frame
  useEffect(() => {
    if (nearView) {
      for (const item of FLEET) {
        const img = new Image();
        img.src = item.images[0];
      }
    }
  }, [nearView]);

  const focusTab = (index: number) => {
    const next = (index + FLEET.length) % FLEET.length;
    setActive(next);
    tabRefs.current[next]?.focus();
  };

  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const moves: Record<string, number> = {
      ArrowRight: active + 1,
      ArrowLeft: active - 1,
      Home: 0,
      End: FLEET.length - 1,
    };
    if (event.key in moves) {
      event.preventDefault();
      focusTab(moves[event.key]);
    }
  };

  return (
    <section
      className="relative overflow-hidden bg-muted/40 py-24 md:py-32"
      id="fleet"
      ref={sectionRef}
    >
      <div
        aria-hidden="true"
        className="mask-fade-y absolute inset-0 bg-grid-primary"
      />
      <div className="container relative mx-auto px-4 md:px-6">
        <SectionHeading
          className="mb-12"
          description={t("rental.description")}
          eyebrow={t("rental.eyebrow")}
          title={t("rental.heading")}
        />

        <Reveal>
          <div
            aria-label={t("rental.selectMachine")}
            className="mb-10 grid grid-cols-2 gap-2.5 sm:grid-cols-3 md:gap-3 lg:grid-cols-5"
            onKeyDown={onKeyDown}
            role="tablist"
          >
            {FLEET.map((item, index) => {
              const isActive = index === active;
              return (
                <button
                  aria-controls={`fleet-panel-${item.key}`}
                  aria-selected={isActive}
                  className={cn(
                    "group relative flex min-w-0 cursor-pointer items-center gap-2.5 overflow-hidden rounded-2xl border p-2 pr-3 text-left transition-all duration-300 md:gap-3 md:pr-4",
                    index === FLEET.length - 1 && "col-span-2 sm:col-span-1",
                    isActive
                      ? "border-primary bg-primary text-white shadow-primary/25 shadow-xl"
                      : "border-border bg-white text-foreground hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-lg"
                  )}
                  id={`fleet-tab-${item.key}`}
                  key={item.key}
                  onClick={() => setActive(index)}
                  ref={(el) => {
                    tabRefs.current[index] = el;
                  }}
                  role="tab"
                  tabIndex={isActive ? 0 : -1}
                  type="button"
                >
                  <span className="img-skeleton relative h-12 w-12 shrink-0 overflow-hidden rounded-xl md:h-14 md:w-16">
                    <img
                      alt=""
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      decoding="async"
                      height={56}
                      loading="lazy"
                      src={item.images[0]}
                      width={64}
                    />
                  </span>
                  <span className="min-w-0">
                    <span
                      className={cn(
                        "block font-readout text-xs",
                        isActive ? "text-white/70" : "text-muted-foreground"
                      )}
                    >
                      {String(index + 1).padStart(2, "0")} · {item.brand}
                    </span>
                    <span className="block font-bold font-heading text-[13px] leading-tight md:text-sm">
                      {t(`rental.items.${item.key}.title`)}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
        </Reveal>

        {FLEET.map((item, index) => (
          <FleetPanel
            active={index === active}
            index={index}
            item={item}
            key={item.key}
          />
        ))}
      </div>
    </section>
  );
};
