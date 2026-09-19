import { ArrowRight01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Link } from "@tanstack/react-router";
import {
  AnimatePresence,
  motion,
  useInView,
  useReducedMotion,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import containerImg from "@/assets/services/container-movement/efficient-loading/el-1.jpg";
import flatbedImg from "@/assets/services/flatbed-cargo-movement/efficient-transport/et-02.jpg";
import drillingImg from "@/assets/services/mine-drilling/drilling.webp";
import loaderRockImg from "@/assets/services/ore-loading/ol-1.jpg";
import tipperImg from "@/assets/services/tipper-truck-rentals/reliable-equipment/re-01.jpg";
import { CornerBrackets } from "@/components/ui/corner-brackets";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { SERVICES, type ServiceKey } from "@/lib/services";
import { cn } from "@/lib/utils";

const STAGE_MS = 7000;

const STAGES: Array<{ image: string; service: ServiceKey }> = [
  { image: drillingImg, service: "mineDrilling" },
  { image: loaderRockImg, service: "earthMovingRental" },
  { image: tipperImg, service: "oreHaulage" },
  { image: flatbedImg, service: "flatbedCargo" },
  { image: containerImg, service: "containerMovement" },
];

export const PitToPort = () => {
  const { t } = useTranslation();
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: "-20% 0px" });
  const [active, setActive] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const steps = t("chain.steps", { returnObjects: true }) as Array<{
    title: string;
    text: string;
  }>;
  const running = autoplay && inView && !reduceMotion;

  useEffect(() => {
    if (!running) {
      return;
    }
    const timer = window.setTimeout(
      () => setActive((a) => (a + 1) % STAGES.length),
      STAGE_MS
    );
    return () => window.clearTimeout(timer);
  }, [active, running]);

  const select = (index: number) => {
    setActive(index);
    setAutoplay(false);
  };

  const stage = STAGES[active];

  // Preload every stage photo once the section is near, so switching never shows a blank frame
  useEffect(() => {
    if (inView) {
      for (const { image } of STAGES) {
        const img = new Image();
        img.src = image;
      }
    }
  }, [inView]);

  return (
    <section className="relative overflow-hidden bg-white py-24 md:py-32">
      <div
        aria-hidden="true"
        className="mask-fade-y absolute inset-0 bg-grid-primary"
      />
      <div className="container relative mx-auto px-4 md:px-6">
        <SectionHeading
          className="mb-14"
          description={t("chain.description")}
          eyebrow={t("chain.eyebrow")}
          title={t("chain.heading")}
        />

        <Reveal>
          <div
            className="grid items-stretch gap-8 lg:grid-cols-[1fr_1.25fr] lg:gap-12"
            ref={ref}
          >
            <div className="relative">
              <span
                aria-hidden="true"
                className="absolute top-6 bottom-6 left-[27px] w-px bg-border"
              />
              <ol className="relative flex flex-col gap-2">
                {steps.map((step, index) => {
                  const isActive = index === active;
                  return (
                    <li key={step.title}>
                      <button
                        aria-expanded={isActive}
                        className={cn(
                          "spotlight group relative flex w-full cursor-pointer items-start gap-5 rounded-2xl p-3 pr-5 text-left transition-colors",
                          isActive ? "bg-primary/[0.06]" : "hover:bg-muted/50"
                        )}
                        onClick={() => select(index)}
                        type="button"
                      >
                        <span
                          className={cn(
                            "relative z-10 mt-1 ml-2.5 flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-full border-2 font-readout font-semibold text-sm transition-all duration-300",
                            isActive
                              ? "scale-110 border-primary bg-primary text-white shadow-lg shadow-primary/30"
                              : "border-border bg-white text-muted-foreground group-hover:border-primary/40"
                          )}
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span className="relative z-10 min-w-0 flex-1">
                          <span
                            className={cn(
                              "block font-bold font-heading text-xl transition-colors",
                              isActive ? "text-primary" : "text-foreground"
                            )}
                          >
                            {step.title}
                          </span>
                          <span
                            className={cn(
                              "grid transition-all duration-500 ease-out",
                              isActive
                                ? "mt-2 grid-rows-[1fr] opacity-100"
                                : "grid-rows-[0fr] opacity-0"
                            )}
                          >
                            <span className="overflow-hidden text-muted-foreground leading-relaxed">
                              {step.text}
                            </span>
                          </span>
                          {isActive && running && (
                            <span className="mt-3 block h-[3px] w-full overflow-hidden rounded-full bg-primary/10">
                              <span
                                className="block h-full origin-left animate-progress bg-primary"
                                key={`stage-progress-${active}`}
                                style={{ animationDuration: `${STAGE_MS}ms` }}
                              />
                            </span>
                          )}
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ol>
            </div>

            <div className="img-skeleton relative min-h-80 overflow-hidden rounded-[2rem] shadow-2xl shadow-primary/20 lg:min-h-[32rem]">
              <AnimatePresence initial={false}>
                <motion.img
                  alt={steps[active]?.title}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    filter: "blur(0px)",
                    zIndex: 1,
                  }}
                  className="absolute inset-0 h-full w-full object-cover"
                  decoding="async"
                  exit={{
                    zIndex: 0,
                    opacity: 0,
                    transition: { opacity: { delay: 0.9, duration: 0 } },
                  }}
                  height={800}
                  initial={{ opacity: 0, scale: 1.15, filter: "blur(8px)" }}
                  key={stage.image}
                  loading="lazy"
                  src={stage.image}
                  transition={{
                    opacity: { duration: 0.9 },
                    filter: { duration: 0.9 },
                    scale: { duration: STAGE_MS / 1000 + 1, ease: "linear" },
                  }}
                  width={1200}
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/20 to-black/10" />
              <CornerBrackets />
              <div className="absolute inset-x-0 bottom-0 z-20 flex flex-wrap items-end justify-between gap-4 p-6 md:p-10">
                <div>
                  <p className="mb-1 font-readout text-sm text-white/70 uppercase tracking-[0.25em]">
                    {t("chain.stage")} {String(active + 1).padStart(2, "0")} /{" "}
                    {String(STAGES.length).padStart(2, "0")}
                  </p>
                  <p className="font-bold font-heading text-3xl text-white md:text-5xl">
                    {steps[active]?.title}
                  </p>
                  <p className="mt-1 text-white/80">
                    {t(`servicesPage.detailedList.${stage.service}.title`)}
                  </p>
                </div>
                <Link
                  className="group inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 font-heading font-semibold text-primary text-sm shadow-xl transition-all hover:-translate-y-0.5"
                  hash={SERVICES[stage.service].anchor}
                  to="/services"
                >
                  {t("chain.viewService")}
                  <HugeiconsIcon
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
                    icon={ArrowRight01Icon}
                  />
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
