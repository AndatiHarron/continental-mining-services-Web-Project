import {
  CheckmarkCircle02Icon,
  WhatsappIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import ca1 from "@/assets/home/capacity/ca-01.jpeg";
import ca2 from "@/assets/home/capacity/ca-02.jpg";
import ca3 from "@/assets/home/capacity/ca-03.jpg";
import ca4 from "@/assets/home/capacity/ca-04.jpg";
import ef1 from "@/assets/home/efficiency/ef-01.jpeg";
import ef2 from "@/assets/home/efficiency/ef-02.jpg";
import ef3 from "@/assets/home/efficiency/ef-03.png";
import whyChooseUsBg from "@/assets/home/home_why_choose_us.webp";
import re1 from "@/assets/home/reliability/re-01.jpg";
import re2 from "@/assets/home/reliability/re-02.webp";
import ve1 from "@/assets/home/versatility/ve-01.webp";
import { CornerBrackets } from "@/components/ui/corner-brackets";
import { ctaVariants } from "@/components/ui/cta";
import { ImageGallery } from "@/components/ui/image-gallery";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { renderEmphasis } from "@/lib/rich-text";
import { whatsappLink } from "@/lib/site";
import { cn } from "@/lib/utils";

const ATTRIBUTES = [
  { key: "capacity", images: [ca1, ca2, ca3, ca4] },
  { key: "reliability", images: [re1, re2] },
  { key: "efficiency", images: [ef1, ef2, ef3] },
  { key: "versatility", images: [ve1] },
] as const;

const PANEL_MS = 6500;

export const KeyAttributes = () => {
  const { t } = useTranslation();
  const reduceMotion = useReducedMotion();
  const panelsRef = useRef<HTMLUListElement>(null);
  const inView = useInView(panelsRef, { margin: "-15% 0px" });
  const [active, setActive] = useState(0);
  const [hovering, setHovering] = useState(false);
  const points = t("keyAttributes.points", { returnObjects: true }) as string[];
  const cycling = inView && !hovering && !reduceMotion;

  useEffect(() => {
    if (!cycling) {
      return;
    }
    const timer = window.setTimeout(
      () => setActive((a) => (a + 1) % ATTRIBUTES.length),
      PANEL_MS
    );
    return () => window.clearTimeout(timer);
  }, [active, cycling]);

  return (
    <section className="relative isolate overflow-hidden bg-black py-24 text-white md:py-32">
      <img
        alt=""
        aria-hidden="true"
        className="absolute inset-0 -z-20 h-full w-full object-cover opacity-35"
        decoding="async"
        height={1080}
        loading="lazy"
        src={whyChooseUsBg}
        width={1920}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-linear-to-br from-black via-black/85 to-primary/45"
      />
      <div
        aria-hidden="true"
        className="mask-fade-y absolute inset-0 -z-10 bg-grid-light"
      />
      <div
        aria-hidden="true"
        className="absolute -right-40 bottom-0 -z-10 h-[30rem] w-[30rem] rounded-full bg-primary/25 blur-[140px]"
      />

      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-14 grid items-end gap-10 lg:grid-cols-[1.1fr_1fr]">
          <SectionHeading
            align="left"
            description={t("keyAttributes.description")}
            eyebrow={t("keyAttributes.eyebrow")}
            title={t("keyAttributes.heading")}
            tone="inverted"
          />
          <Reveal delay={0.1}>
            <ul className="grid gap-3 sm:grid-cols-2">
              {points.map((point) => (
                <li
                  className="spotlight spotlight-inverted flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3 text-white/90 backdrop-blur"
                  key={point}
                >
                  <HugeiconsIcon
                    className="h-5 w-5 shrink-0 text-white"
                    icon={CheckmarkCircle02Icon}
                  />
                  <span className="text-sm">{point}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal>
          <ul
            className="flex flex-col gap-3 md:h-[34rem] md:flex-row"
            onMouseLeave={() => setHovering(false)}
            ref={panelsRef}
          >
            {ATTRIBUTES.map((attr, index) => {
              const base = `keyAttributes.items.${attr.key}`;
              const title = t(`${base}.title`);
              const isActive = index === active;

              return (
                <li
                  className={cn(
                    "relative min-w-0 overflow-hidden rounded-[1.75rem] ring-1 ring-white/10 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
                    isActive
                      ? "h-[26rem] md:h-auto md:flex-[5]"
                      : "h-20 md:h-auto md:flex-[1]"
                  )}
                  key={attr.key}
                  onMouseEnter={() => {
                    setHovering(true);
                    setActive(index);
                  }}
                >
                  <button
                    aria-expanded={isActive}
                    className="absolute inset-0 z-30 h-full w-full cursor-pointer rounded-[1.75rem] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/50"
                    onClick={() => setActive(index)}
                    onFocus={() => setActive(index)}
                    type="button"
                  >
                    <span className="sr-only">{title}</span>
                  </button>

                  <ImageGallery
                    active={isActive}
                    alt={title}
                    className="absolute inset-0 rounded-[1.75rem]"
                    hoverControls={false}
                    images={[...attr.images]}
                    showControls={false}
                    sizes="(min-width: 768px) 60vw, 100vw"
                  />
                  <div
                    className={cn(
                      "pointer-events-none absolute inset-0 z-10 transition-colors duration-700",
                      isActive
                        ? "bg-linear-to-t from-black/90 via-black/30 to-transparent"
                        : "bg-black/65"
                    )}
                  />
                  <CornerBrackets
                    className={cn(
                      isActive ? "opacity-100" : "opacity-0",
                      "hidden md:block"
                    )}
                  />

                  {/* Collapsed label */}
                  <div
                    className={cn(
                      "pointer-events-none absolute inset-0 z-20 flex items-center gap-4 px-6 transition-opacity duration-300 md:flex-col md:justify-end md:px-0 md:pb-8",
                      isActive ? "opacity-0" : "opacity-100"
                    )}
                  >
                    <span className="font-readout text-2xl text-white/80">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="font-bold font-heading text-lg text-white uppercase tracking-[0.2em] md:rotate-180 md:[writing-mode:vertical-rl]">
                      {title}
                    </span>
                  </div>

                  {/* Expanded content */}
                  <div
                    className={cn(
                      "pointer-events-none absolute inset-x-0 bottom-0 z-20 p-6 transition-all duration-500 md:p-10",
                      isActive
                        ? "translate-y-0 opacity-100 delay-200"
                        : "translate-y-6 opacity-0"
                    )}
                  >
                    <p className="mb-2 font-readout text-sm text-white/70 uppercase tracking-[0.25em]">
                      {String(index + 1).padStart(2, "0")} /{" "}
                      {String(ATTRIBUTES.length).padStart(2, "0")}
                    </p>
                    <h3 className="mb-3 font-bold font-heading text-3xl text-white md:text-5xl">
                      {title}
                    </h3>
                    <p className="max-w-xl text-lg text-white/80 leading-relaxed">
                      {renderEmphasis(
                        t(`${base}.description`),
                        t(`${base}.boldText`),
                        "font-semibold text-white"
                      )}
                    </p>
                    {isActive && cycling && (
                      <span className="mt-6 block h-[3px] max-w-xs overflow-hidden rounded-full bg-white/20">
                        <span
                          className="block h-full origin-left animate-progress bg-white"
                          key={`panel-progress-${active}`}
                          style={{ animationDuration: `${PANEL_MS}ms` }}
                        />
                      </span>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>
        </Reveal>

        <Reveal className="mt-12 flex justify-center" delay={0.1}>
          <a
            className={ctaVariants({ variant: "primary", size: "lg" })}
            href={whatsappLink(t("common.whatsappGeneric"))}
            rel="noopener noreferrer"
            target="_blank"
          >
            <HugeiconsIcon className="h-5 w-5" icon={WhatsappIcon} />
            {t("common.requestQuote")}
          </a>
        </Reveal>
      </div>
    </section>
  );
};
