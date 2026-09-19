import {
  ArrowDown01Icon,
  Location01Icon,
  WhatsappIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import heroBg from "@/assets/hero.jpg";
import dumpTruckImg from "@/assets/home/heavy_dump_trucks.webp";
import excavatorAdtImg from "@/assets/services/earth-moving-equipment-rental/modern-equipment/me-02.jpg";
import loaderRockImg from "@/assets/services/ore-loading/ol-1.jpg";
import tipperImg from "@/assets/services/tipper-truck-rentals/reliable-equipment/re-01.jpg";
import { CornerBrackets } from "@/components/ui/corner-brackets";
import { CountUp } from "@/components/ui/count-up";
import { ctaVariants } from "@/components/ui/cta";
import { whatsappLink } from "@/lib/site";
import { cn } from "@/lib/utils";

const SLIDE_MS = 6500;

/** Background slides, each labelled with the fleet item it shows */
const SLIDES = [
  {
    src: heroBg,
    labelKey: "rental.items.excavators.title",
    position: "object-[70%_center]",
  },
  {
    src: dumpTruckImg,
    labelKey: "rental.items.dumpTrucks.title",
    position: "object-center",
  },
  {
    src: loaderRockImg,
    labelKey: "rental.items.loaders.title",
    position: "object-center",
  },
  {
    src: tipperImg,
    labelKey: "rental.items.tipperTrucks.title",
    position: "object-center",
  },
  {
    src: excavatorAdtImg,
    labelKey: "servicesPage.detailedList.earthMovingRental.title",
    position: "object-center",
  },
] as const;

export const HeroSection = () => {
  const { t } = useTranslation();
  const reduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const [slide, setSlide] = useState(0);
  const stats = t("hero.stats", { returnObjects: true }) as Array<{
    value: string;
    label: string;
  }>;

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  useEffect(() => {
    if (reduceMotion) {
      return;
    }
    const timer = window.setTimeout(
      () => setSlide((s) => (s + 1) % SLIDES.length),
      SLIDE_MS
    );
    return () => window.clearTimeout(timer);
  }, [slide, reduceMotion]);

  useEffect(() => {
    const next = new Image();
    next.src = SLIDES[(slide + 1) % SLIDES.length].src;
  }, [slide]);

  const current = SLIDES[slide];

  return (
    <section
      className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-black pt-28"
      ref={sectionRef}
    >
      {/* Slideshow background with parallax */}
      <motion.div className="absolute inset-0 -z-20" style={{ y: bgY }}>
        <AnimatePresence initial={false}>
          <motion.img
            alt={slide === 0 ? t("hero.image.alt") : t(current.labelKey)}
            animate={{ opacity: 0.75, scale: 1, zIndex: 1 }}
            className={cn(
              "absolute inset-0 h-[118%] w-full object-cover",
              current.position
            )}
            decoding="async"
            exit={{
              zIndex: 0,
              opacity: 0,
              transition: { opacity: { delay: 1.4, duration: 0 } },
            }}
            fetchPriority={slide === 0 ? "high" : "auto"}
            height={1080}
            initial={{ opacity: 0, scale: 1.12 }}
            key={current.src}
            src={current.src}
            transition={{
              opacity: { duration: 1.4, ease: "easeInOut" },
              scale: { duration: SLIDE_MS / 1000 + 1.4, ease: "linear" },
            }}
            width={1920}
          />
        </AnimatePresence>
      </motion.div>
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-linear-to-t from-black via-black/45 to-black/40"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-linear-to-r from-black/90 via-black/45 to-transparent"
      />
      <div
        aria-hidden="true"
        className="mask-fade-y absolute inset-0 -z-10 bg-grid-light opacity-50"
      />
      <div
        aria-hidden="true"
        className="absolute top-1/3 -left-40 -z-10 h-[28rem] w-[28rem] rounded-full bg-primary/30 blur-[120px]"
      />
      <CornerBrackets className="inset-6 hidden opacity-40 md:block lg:inset-10" />

      <motion.div
        className="container mx-auto flex flex-1 items-center px-4 py-16 md:px-6"
        style={
          reduceMotion ? undefined : { y: contentY, opacity: contentOpacity }
        }
      >
        <div className="max-w-4xl">
          <p className="fade-in slide-in-from-bottom-4 mb-8 inline-flex animate-in items-center gap-3 rounded-full border border-white/15 bg-white/5 fill-mode-both py-2 pr-5 pl-3 font-heading font-semibold text-white text-xs uppercase tracking-[0.18em] shadow-lg backdrop-blur-xl duration-700 md:text-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-secondary" />
            </span>
            {t("hero.badge")}
          </p>

          <h1
            className="fade-in slide-in-from-bottom-6 mb-8 animate-in fill-mode-both font-bold font-heading text-5xl text-white leading-[1.02] duration-700 sm:text-6xl lg:text-8xl"
            style={{ animationDelay: "120ms" }}
          >
            {t("hero.heading.part1")}
            <span className="mt-2 block bg-linear-to-r from-white via-white/90 to-white/50 bg-clip-text text-transparent">
              {t("hero.heading.part2")}
            </span>
          </h1>

          <p
            className="fade-in slide-in-from-bottom-6 mb-10 max-w-2xl animate-in fill-mode-both font-light text-lg text-white/80 leading-relaxed duration-700 md:text-2xl"
            style={{ animationDelay: "240ms" }}
          >
            {t("hero.description")}
          </p>

          <div
            className="fade-in slide-in-from-bottom-6 flex animate-in flex-col gap-4 fill-mode-both duration-700 sm:flex-row"
            style={{ animationDelay: "360ms" }}
          >
            <a
              className={ctaVariants({ variant: "primary", size: "lg" })}
              href={whatsappLink(t("common.whatsappGeneric"))}
              rel="noopener noreferrer"
              target="_blank"
            >
              <HugeiconsIcon className="h-5 w-5" icon={WhatsappIcon} />
              {t("hero.button.quote")}
            </a>
            <a
              className={ctaVariants({ variant: "glass", size: "lg" })}
              href="#fleet"
            >
              {t("hero.button.fleet")}
              <HugeiconsIcon
                className="h-5 w-5 transition-transform group-hover/cta:translate-y-0.5"
                icon={ArrowDown01Icon}
              />
            </a>
          </div>

          <p
            className="fade-in mt-10 flex animate-in items-center gap-2 fill-mode-both font-medium text-sm text-white/60 duration-1000"
            style={{ animationDelay: "500ms" }}
          >
            <HugeiconsIcon
              className="h-4 w-4 text-secondary"
              icon={Location01Icon}
            />
            {t("hero.location")}
          </p>
        </div>
      </motion.div>

      {/* Slide selector */}
      <div className="container mx-auto hidden px-4 md:block md:px-6">
        <div className="mb-5 flex items-end justify-end gap-2">
          {SLIDES.map((item, index) => (
            <button
              aria-current={index === slide}
              aria-label={t(item.labelKey)}
              className="group flex w-28 cursor-pointer flex-col gap-2 text-left lg:w-36"
              key={item.src}
              onClick={() => setSlide(index)}
              type="button"
            >
              <span
                className={cn(
                  "truncate font-heading font-semibold text-[11px] uppercase tracking-wider transition-colors",
                  index === slide
                    ? "text-white"
                    : "text-white/45 group-hover:text-white/80"
                )}
              >
                <span className="mr-1.5 font-readout">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {t(item.labelKey)}
              </span>
              <span className="relative h-[3px] overflow-hidden rounded-full bg-white/20">
                {index === slide && (
                  <span
                    className={cn(
                      "absolute inset-0 origin-left bg-white",
                      !reduceMotion && "animate-progress"
                    )}
                    key={`progress-${slide}`}
                    style={{ animationDuration: `${SLIDE_MS}ms` }}
                  />
                )}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Stats bar */}
      <div className="container mx-auto px-4 pb-8 md:px-6 md:pb-12">
        <dl
          className="fade-in slide-in-from-bottom-8 grid animate-in grid-cols-2 gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 fill-mode-both backdrop-blur-xl duration-1000 md:grid-cols-4"
          style={{ animationDelay: "600ms" }}
        >
          {stats.map((stat) => (
            <div
              className="spotlight spotlight-inverted flex flex-col-reverse gap-1 bg-black/45 p-5 md:p-7"
              key={stat.label}
            >
              <dt className="text-white/60 text-xs uppercase tracking-wider md:text-sm">
                {stat.label}
              </dt>
              <dd className="font-readout font-semibold text-4xl text-white md:text-5xl">
                <CountUp value={stat.value} />
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};
