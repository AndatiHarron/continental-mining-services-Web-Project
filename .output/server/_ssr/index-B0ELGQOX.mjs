import { j as jsxRuntimeExports, r as reactExports } from "../_chunks/_libs/react.mjs";
import { q as qWr, p as qt, R as RE, H as Hn, G as Gn, e as BM, L as Lc } from "../_chunks/_libs/@hugeicons/core-free-icons.mjs";
import { C as CornerBrackets, S as SectionHeading, R as Reveal } from "./section-heading-FGMrMcGU.mjs";
import { L as Layout, f as heroBg$1, g as dumpTruckImg, l as loaderRockImg, t as tipperImg, i as excavatorAdtImg, a as cn, w as whatsappLink, c as ctaVariants, S as SERVICE_KEYS, b as SERVICES, j as drillingImg, k as flatbedImg, m as containerImg, F as FLEET, d as SITE } from "./router-CEqEY-a1.mjs";
import { C as CtaBanner, I as ImageGallery } from "./cta-banner-B96Kd659.mjs";
import { C as CountUp, r as renderEmphasis } from "./count-up-C5noxkZ5.mjs";
import { L as Link } from "../_chunks/_libs/@tanstack/react-router.mjs";
import { F as FaqSection } from "./faq-section-lfQ36lP2.mjs";
import { P as ProcessSteps } from "./process-steps-DAiE6mWa.mjs";
import { u as useTranslation } from "../_libs/react-i18next.mjs";
import { c as useReducedMotion, u as useScroll, b as useTransform, m as motion, A as AnimatePresence, d as useInView } from "../_libs/framer-motion.mjs";
import { H as HugeiconsIcon } from "../_chunks/_libs/@hugeicons/react.mjs";
import "../_libs/class-variance-authority.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
import "../_libs/i18next.mjs";
import "../_libs/_jlZyyM7A.mjs";
import "../_libs/i18next-http-backend.mjs";
import "../_chunks/_libs/@base-ui/react.mjs";
import "../_libs/tabbable.mjs";
import "../_chunks/_libs/@floating-ui/utils.mjs";
import "../_chunks/_libs/@base-ui/utils.mjs";
import "../_libs/reselect.mjs";
import "../_libs/use-sync-external-store.mjs";
import "../_chunks/_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_chunks/_libs/@tanstack/router-core.mjs";
import "../_libs/tiny-invariant.mjs";
import "../_chunks/_libs/@tanstack/history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/tiny-warning.mjs";
import "../_libs/isbot.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
function useSpecValue() {
  const { t } = useTranslation();
  return (spec) => spec.translate ? t(`rental.specValues.${spec.value}`) : spec.value;
}
function FleetPanel({
  item,
  index,
  active
}) {
  const { t } = useTranslation();
  const specValue = useSpecValue();
  const base = `rental.items.${item.key}`;
  const title = t(`${base}.title`);
  const features = t(`${base}.features`, { returnObjects: true });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      "aria-labelledby": `fleet-tab-${item.key}`,
      className: cn(
        "grid gap-8 lg:grid-cols-[1.05fr_1fr] lg:gap-12",
        active && "fade-in slide-in-from-bottom-4 animate-in duration-500"
      ),
      hidden: !active,
      id: `fleet-panel-${item.key}`,
      role: "tabpanel",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            ImageGallery,
            {
              active,
              alt: `${item.brand} ${title}`,
              className: "aspect-[4/3] rounded-[2rem] shadow-2xl shadow-primary/15",
              hoverControls: false,
              images: item.images,
              sizes: "(min-width: 1024px) 50vw, 100vw",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CornerBrackets, {}),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "absolute bottom-6 left-6 z-20 font-readout text-6xl text-white/90 leading-none md:bottom-8 md:left-8 md:text-7xl", children: String(index + 1).padStart(2, "0") })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "absolute -top-3 left-6 z-30 inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 font-heading font-semibold text-white text-xs uppercase tracking-wider shadow-lg", children: [
            t("rental.brandLabel"),
            " ",
            item.brand
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mb-4 font-bold font-heading text-3xl text-primary md:text-4xl", children: title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-8 text-lg text-muted-foreground leading-relaxed", children: t(`${base}.longDescription`) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-3 font-heading font-semibold text-secondary text-xs uppercase tracking-[0.2em]", children: t("rental.fleetRange") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "dl",
            {
              className: cn(
                "mb-8 grid gap-3",
                item.specs.length >= 3 ? "grid-cols-2 sm:grid-cols-3" : "grid-cols-2"
              ),
              children: item.specs.map((spec) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "spotlight flex flex-col-reverse rounded-2xl border border-border bg-white p-4 shadow-sm",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { className: "mt-1 text-muted-foreground text-xs uppercase tracking-wider", children: t(`rental.specLabels.${spec.label}`) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { className: "font-readout font-semibold text-2xl text-foreground md:text-3xl", children: specValue(spec) })
                  ]
                },
                spec.label
              ))
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-3 font-heading font-semibold text-secondary text-xs uppercase tracking-[0.2em]", children: t("rental.technology") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mb-8 space-y-2.5", children: features.map((feature) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "li",
            {
              className: "flex items-start gap-3 text-foreground",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  HugeiconsIcon,
                  {
                    className: "mt-0.5 h-5 w-5 shrink-0 text-primary",
                    icon: BM
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "leading-relaxed", children: feature })
              ]
            },
            feature
          )) }),
          item.reference && /* @__PURE__ */ jsxRuntimeExports.jsxs("details", { className: "group mb-8 rounded-2xl border border-border bg-white/60 open:bg-white open:shadow-lg open:shadow-primary/5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("summary", { className: "flex cursor-pointer list-none items-center justify-between gap-4 p-5 [&::-webkit-details-marker]:hidden", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-muted-foreground text-xs uppercase tracking-wider", children: t("rental.referenceModel") }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block font-bold font-heading text-foreground text-lg", children: item.reference.model })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition-transform duration-300 group-open:rotate-180", children: /* @__PURE__ */ jsxRuntimeExports.jsx(HugeiconsIcon, { className: "h-4 w-4", icon: qt }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-5 pb-5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("dl", { className: "divide-y divide-dashed divide-border text-sm", children: item.reference.specs.map((spec) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "flex items-baseline justify-between gap-4 py-2.5",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { className: "text-muted-foreground", children: t(`rental.specLabels.${spec.label}`) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { className: "text-right font-medium font-readout text-base text-foreground", children: specValue(spec) })
                  ]
                },
                spec.label
              )) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground text-xs", children: t("rental.sourceNote", { source: item.reference.source }) })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-auto flex flex-wrap gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                className: ctaVariants({ variant: "primary" }),
                href: whatsappLink(
                  t("rental.whatsappText", { machine: `${item.brand} ${title}` })
                ),
                rel: "noopener noreferrer",
                target: "_blank",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(HugeiconsIcon, { className: "h-4 w-4", icon: qWr }),
                  t("rental.requestMachine")
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                className: ctaVariants({ variant: "outline" }),
                href: SITE.phoneHref,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(HugeiconsIcon, { className: "h-4 w-4", icon: Lc }),
                  t("common.callUs")
                ]
              }
            )
          ] })
        ] })
      ]
    }
  );
}
const FleetSection = () => {
  const { t } = useTranslation();
  const [active, setActive] = reactExports.useState(0);
  const tabRefs = reactExports.useRef([]);
  const sectionRef = reactExports.useRef(null);
  const nearView = useInView(sectionRef, { margin: "600px 0px", once: true });
  reactExports.useEffect(() => {
    if (nearView) {
      for (const item of FLEET) {
        const img = new Image();
        img.src = item.images[0];
      }
    }
  }, [nearView]);
  const focusTab = (index) => {
    const next = (index + FLEET.length) % FLEET.length;
    setActive(next);
    tabRefs.current[next]?.focus();
  };
  const onKeyDown = (event) => {
    const moves = {
      ArrowRight: active + 1,
      ArrowLeft: active - 1,
      Home: 0,
      End: FLEET.length - 1
    };
    if (event.key in moves) {
      event.preventDefault();
      focusTab(moves[event.key]);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      className: "relative overflow-hidden bg-muted/40 py-24 md:py-32",
      id: "fleet",
      ref: sectionRef,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            "aria-hidden": "true",
            className: "mask-fade-y absolute inset-0 bg-grid-primary"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container relative mx-auto px-4 md:px-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            SectionHeading,
            {
              className: "mb-12",
              description: t("rental.description"),
              eyebrow: t("rental.eyebrow"),
              title: t("rental.heading")
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              "aria-label": t("rental.selectMachine"),
              className: "mb-10 grid grid-cols-2 gap-2.5 sm:grid-cols-3 md:gap-3 lg:grid-cols-5",
              onKeyDown,
              role: "tablist",
              children: FLEET.map((item, index) => {
                const isActive = index === active;
                return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    "aria-controls": `fleet-panel-${item.key}`,
                    "aria-selected": isActive,
                    className: cn(
                      "group relative flex min-w-0 cursor-pointer items-center gap-2.5 overflow-hidden rounded-2xl border p-2 pr-3 text-left transition-all duration-300 md:gap-3 md:pr-4",
                      index === FLEET.length - 1 && "col-span-2 sm:col-span-1",
                      isActive ? "border-primary bg-primary text-white shadow-primary/25 shadow-xl" : "border-border bg-white text-foreground hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-lg"
                    ),
                    id: `fleet-tab-${item.key}`,
                    onClick: () => setActive(index),
                    ref: (el) => {
                      tabRefs.current[index] = el;
                    },
                    role: "tab",
                    tabIndex: isActive ? 0 : -1,
                    type: "button",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "img-skeleton relative h-12 w-12 shrink-0 overflow-hidden rounded-xl md:h-14 md:w-16", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "img",
                        {
                          alt: "",
                          className: "h-full w-full object-cover transition-transform duration-500 group-hover:scale-110",
                          decoding: "async",
                          height: 56,
                          loading: "lazy",
                          src: item.images[0],
                          width: 64
                        }
                      ) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "min-w-0", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          "span",
                          {
                            className: cn(
                              "block font-readout text-xs",
                              isActive ? "text-white/70" : "text-muted-foreground"
                            ),
                            children: [
                              String(index + 1).padStart(2, "0"),
                              " · ",
                              item.brand
                            ]
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block font-bold font-heading text-[13px] leading-tight md:text-sm", children: t(`rental.items.${item.key}.title`) })
                      ] })
                    ]
                  },
                  item.key
                );
              })
            }
          ) }),
          FLEET.map((item, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            FleetPanel,
            {
              active: index === active,
              index,
              item
            },
            item.key
          ))
        ] })
      ]
    }
  );
};
const SLIDE_MS = 6500;
const SLIDES = [
  {
    src: heroBg$1,
    labelKey: "rental.items.excavators.title",
    position: "object-[70%_center]"
  },
  {
    src: dumpTruckImg,
    labelKey: "rental.items.dumpTrucks.title",
    position: "object-center"
  },
  {
    src: loaderRockImg,
    labelKey: "rental.items.loaders.title",
    position: "object-center"
  },
  {
    src: tipperImg,
    labelKey: "rental.items.tipperTrucks.title",
    position: "object-center"
  },
  {
    src: excavatorAdtImg,
    labelKey: "servicesPage.detailedList.earthMovingRental.title",
    position: "object-center"
  }
];
const HeroSection = () => {
  const { t } = useTranslation();
  const reduceMotion = useReducedMotion();
  const sectionRef = reactExports.useRef(null);
  const [slide, setSlide] = reactExports.useState(0);
  const stats = t("hero.stats", { returnObjects: true });
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  reactExports.useEffect(() => {
    if (reduceMotion) {
      return;
    }
    const timer = window.setTimeout(
      () => setSlide((s) => (s + 1) % SLIDES.length),
      SLIDE_MS
    );
    return () => window.clearTimeout(timer);
  }, [slide, reduceMotion]);
  reactExports.useEffect(() => {
    const next = new Image();
    next.src = SLIDES[(slide + 1) % SLIDES.length].src;
  }, [slide]);
  const current = SLIDES[slide];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      className: "relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-black pt-28",
      ref: sectionRef,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { className: "absolute inset-0 -z-20", style: { y: bgY }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { initial: false, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.img,
          {
            alt: slide === 0 ? t("hero.image.alt") : t(current.labelKey),
            animate: { opacity: 0.75, scale: 1, zIndex: 1 },
            className: cn(
              "absolute inset-0 h-[118%] w-full object-cover",
              current.position
            ),
            decoding: "async",
            exit: {
              zIndex: 0,
              opacity: 0,
              transition: { opacity: { delay: 1.4, duration: 0 } }
            },
            fetchPriority: slide === 0 ? "high" : "auto",
            height: 1080,
            initial: { opacity: 0, scale: 1.12 },
            src: current.src,
            transition: {
              opacity: { duration: 1.4, ease: "easeInOut" },
              scale: { duration: SLIDE_MS / 1e3 + 1.4, ease: "linear" }
            },
            width: 1920
          },
          current.src
        ) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            "aria-hidden": "true",
            className: "absolute inset-0 -z-10 bg-linear-to-t from-black via-black/45 to-black/40"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            "aria-hidden": "true",
            className: "absolute inset-0 -z-10 bg-linear-to-r from-black/90 via-black/45 to-transparent"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            "aria-hidden": "true",
            className: "mask-fade-y absolute inset-0 -z-10 bg-grid-light opacity-50"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            "aria-hidden": "true",
            className: "absolute top-1/3 -left-40 -z-10 h-[28rem] w-[28rem] rounded-full bg-primary/30 blur-[120px]"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CornerBrackets, { className: "inset-6 hidden opacity-40 md:block lg:inset-10" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            className: "container mx-auto flex flex-1 items-center px-4 py-16 md:px-6",
            style: reduceMotion ? void 0 : { y: contentY, opacity: contentOpacity },
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "fade-in slide-in-from-bottom-4 mb-8 inline-flex animate-in items-center gap-3 rounded-full border border-white/15 bg-white/5 fill-mode-both py-2 pr-5 pl-3 font-heading font-semibold text-white text-xs uppercase tracking-[0.18em] shadow-lg backdrop-blur-xl duration-700 md:text-sm", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative flex h-2.5 w-2.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary opacity-75" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative inline-flex h-2.5 w-2.5 rounded-full bg-secondary" })
                ] }),
                t("hero.badge")
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "h1",
                {
                  className: "fade-in slide-in-from-bottom-6 mb-8 animate-in fill-mode-both font-bold font-heading text-5xl text-white leading-[1.02] duration-700 sm:text-6xl lg:text-8xl",
                  style: { animationDelay: "120ms" },
                  children: [
                    t("hero.heading.part1"),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-2 block bg-linear-to-r from-white via-white/90 to-white/50 bg-clip-text text-transparent", children: t("hero.heading.part2") })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "fade-in slide-in-from-bottom-6 mb-10 max-w-2xl animate-in fill-mode-both font-light text-lg text-white/80 leading-relaxed duration-700 md:text-2xl",
                  style: { animationDelay: "240ms" },
                  children: t("hero.description")
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "fade-in slide-in-from-bottom-6 flex animate-in flex-col gap-4 fill-mode-both duration-700 sm:flex-row",
                  style: { animationDelay: "360ms" },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "a",
                      {
                        className: ctaVariants({ variant: "primary", size: "lg" }),
                        href: whatsappLink(t("common.whatsappGeneric")),
                        rel: "noopener noreferrer",
                        target: "_blank",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(HugeiconsIcon, { className: "h-5 w-5", icon: qWr }),
                          t("hero.button.quote")
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "a",
                      {
                        className: ctaVariants({ variant: "glass", size: "lg" }),
                        href: "#fleet",
                        children: [
                          t("hero.button.fleet"),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            HugeiconsIcon,
                            {
                              className: "h-5 w-5 transition-transform group-hover/cta:translate-y-0.5",
                              icon: qt
                            }
                          )
                        ]
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "p",
                {
                  className: "fade-in mt-10 flex animate-in items-center gap-2 fill-mode-both font-medium text-sm text-white/60 duration-1000",
                  style: { animationDelay: "500ms" },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      HugeiconsIcon,
                      {
                        className: "h-4 w-4 text-secondary",
                        icon: RE
                      }
                    ),
                    t("hero.location")
                  ]
                }
              )
            ] })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto hidden px-4 md:block md:px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-5 flex items-end justify-end gap-2", children: SLIDES.map((item, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            "aria-current": index === slide,
            "aria-label": t(item.labelKey),
            className: "group flex w-28 cursor-pointer flex-col gap-2 text-left lg:w-36",
            onClick: () => setSlide(index),
            type: "button",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "span",
                {
                  className: cn(
                    "truncate font-heading font-semibold text-[11px] uppercase tracking-wider transition-colors",
                    index === slide ? "text-white" : "text-white/45 group-hover:text-white/80"
                  ),
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mr-1.5 font-readout", children: String(index + 1).padStart(2, "0") }),
                    t(item.labelKey)
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative h-[3px] overflow-hidden rounded-full bg-white/20", children: index === slide && /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: cn(
                    "absolute inset-0 origin-left bg-white",
                    !reduceMotion && "animate-progress"
                  ),
                  style: { animationDuration: `${SLIDE_MS}ms` }
                },
                `progress-${slide}`
              ) })
            ]
          },
          item.src
        )) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 pb-8 md:px-6 md:pb-12", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "dl",
          {
            className: "fade-in slide-in-from-bottom-8 grid animate-in grid-cols-2 gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 fill-mode-both backdrop-blur-xl duration-1000 md:grid-cols-4",
            style: { animationDelay: "600ms" },
            children: stats.map((stat) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "spotlight spotlight-inverted flex flex-col-reverse gap-1 bg-black/45 p-5 md:p-7",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { className: "text-white/60 text-xs uppercase tracking-wider md:text-sm", children: stat.label }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { className: "font-readout font-semibold text-4xl text-white md:text-5xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CountUp, { value: stat.value }) })
                ]
              },
              stat.label
            ))
          }
        ) })
      ]
    }
  );
};
const ca1 = "/assets/ca-01-BYVll7PP.jpeg";
const ca2 = "/assets/eo-2-BKazK77O.jpg";
const ca3 = "/assets/ca-03-CJZlvxM8.jpg";
const ca4 = "/assets/ca-04-BbOSdIHB.jpg";
const ef1 = "/assets/ef-01-CltNO_UA.jpeg";
const ef2 = "/assets/ef-02-CZ2LI363.jpg";
const ef3 = "/assets/ef-03-D2RGJOnf.png";
const whyChooseUsBg = "/assets/home_why_choose_us-DhN58Xtx.webp";
const re1 = "/assets/re-01-CPD3BmU_.jpg";
const re2 = "/assets/re-02-DAvJrjxS.webp";
const ve1 = "/assets/ve-01-wUqRChoy.webp";
const ATTRIBUTES = [
  { key: "capacity", images: [ca1, ca2, ca3, ca4] },
  { key: "reliability", images: [re1, re2] },
  { key: "efficiency", images: [ef1, ef2, ef3] },
  { key: "versatility", images: [ve1] }
];
const PANEL_MS = 6500;
const KeyAttributes = () => {
  const { t } = useTranslation();
  const reduceMotion = useReducedMotion();
  const panelsRef = reactExports.useRef(null);
  const inView = useInView(panelsRef, { margin: "-15% 0px" });
  const [active, setActive] = reactExports.useState(0);
  const [hovering, setHovering] = reactExports.useState(false);
  const points = t("keyAttributes.points", { returnObjects: true });
  const cycling = inView && !hovering && !reduceMotion;
  reactExports.useEffect(() => {
    if (!cycling) {
      return;
    }
    const timer = window.setTimeout(
      () => setActive((a) => (a + 1) % ATTRIBUTES.length),
      PANEL_MS
    );
    return () => window.clearTimeout(timer);
  }, [active, cycling]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative isolate overflow-hidden bg-black py-24 text-white md:py-32", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "img",
      {
        alt: "",
        "aria-hidden": "true",
        className: "absolute inset-0 -z-20 h-full w-full object-cover opacity-35",
        decoding: "async",
        height: 1080,
        loading: "lazy",
        src: whyChooseUsBg,
        width: 1920
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        "aria-hidden": "true",
        className: "absolute inset-0 -z-10 bg-linear-to-br from-black via-black/85 to-primary/45"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        "aria-hidden": "true",
        className: "mask-fade-y absolute inset-0 -z-10 bg-grid-light"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        "aria-hidden": "true",
        className: "absolute -right-40 bottom-0 -z-10 h-[30rem] w-[30rem] rounded-full bg-primary/25 blur-[140px]"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 md:px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-14 grid items-end gap-10 lg:grid-cols-[1.1fr_1fr]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          SectionHeading,
          {
            align: "left",
            description: t("keyAttributes.description"),
            eyebrow: t("keyAttributes.eyebrow"),
            title: t("keyAttributes.heading"),
            tone: "inverted"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0.1, children: /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "grid gap-3 sm:grid-cols-2", children: points.map((point) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "li",
          {
            className: "spotlight spotlight-inverted flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3 text-white/90 backdrop-blur",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                HugeiconsIcon,
                {
                  className: "h-5 w-5 shrink-0 text-white",
                  icon: BM
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm", children: point })
            ]
          },
          point
        )) }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "ul",
        {
          className: "flex flex-col gap-3 md:h-[34rem] md:flex-row",
          onMouseLeave: () => setHovering(false),
          ref: panelsRef,
          children: ATTRIBUTES.map((attr, index) => {
            const base = `keyAttributes.items.${attr.key}`;
            const title = t(`${base}.title`);
            const isActive = index === active;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "li",
              {
                className: cn(
                  "relative min-w-0 overflow-hidden rounded-[1.75rem] ring-1 ring-white/10 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
                  isActive ? "h-[26rem] md:h-auto md:flex-[5]" : "h-20 md:h-auto md:flex-[1]"
                ),
                onMouseEnter: () => {
                  setHovering(true);
                  setActive(index);
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      "aria-expanded": isActive,
                      className: "absolute inset-0 z-30 h-full w-full cursor-pointer rounded-[1.75rem] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/50",
                      onClick: () => setActive(index),
                      onFocus: () => setActive(index),
                      type: "button",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sr-only", children: title })
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    ImageGallery,
                    {
                      active: isActive,
                      alt: title,
                      className: "absolute inset-0 rounded-[1.75rem]",
                      hoverControls: false,
                      images: [...attr.images],
                      showControls: false,
                      sizes: "(min-width: 768px) 60vw, 100vw"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: cn(
                        "pointer-events-none absolute inset-0 z-10 transition-colors duration-700",
                        isActive ? "bg-linear-to-t from-black/90 via-black/30 to-transparent" : "bg-black/65"
                      )
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    CornerBrackets,
                    {
                      className: cn(
                        isActive ? "opacity-100" : "opacity-0",
                        "hidden md:block"
                      )
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      className: cn(
                        "pointer-events-none absolute inset-0 z-20 flex items-center gap-4 px-6 transition-opacity duration-300 md:flex-col md:justify-end md:px-0 md:pb-8",
                        isActive ? "opacity-0" : "opacity-100"
                      ),
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-readout text-2xl text-white/80", children: String(index + 1).padStart(2, "0") }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold font-heading text-lg text-white uppercase tracking-[0.2em] md:rotate-180 md:[writing-mode:vertical-rl]", children: title })
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      className: cn(
                        "pointer-events-none absolute inset-x-0 bottom-0 z-20 p-6 transition-all duration-500 md:p-10",
                        isActive ? "translate-y-0 opacity-100 delay-200" : "translate-y-6 opacity-0"
                      ),
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mb-2 font-readout text-sm text-white/70 uppercase tracking-[0.25em]", children: [
                          String(index + 1).padStart(2, "0"),
                          " /",
                          " ",
                          String(ATTRIBUTES.length).padStart(2, "0")
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mb-3 font-bold font-heading text-3xl text-white md:text-5xl", children: title }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "max-w-xl text-lg text-white/80 leading-relaxed", children: renderEmphasis(
                          t(`${base}.description`),
                          t(`${base}.boldText`),
                          "font-semibold text-white"
                        ) }),
                        isActive && cycling && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-6 block h-[3px] max-w-xs overflow-hidden rounded-full bg-white/20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "span",
                          {
                            className: "block h-full origin-left animate-progress bg-white",
                            style: { animationDuration: `${PANEL_MS}ms` }
                          },
                          `panel-progress-${active}`
                        ) })
                      ]
                    }
                  )
                ]
              },
              attr.key
            );
          })
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { className: "mt-12 flex justify-center", delay: 0.1, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "a",
        {
          className: ctaVariants({ variant: "primary", size: "lg" }),
          href: whatsappLink(t("common.whatsappGeneric")),
          rel: "noopener noreferrer",
          target: "_blank",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(HugeiconsIcon, { className: "h-5 w-5", icon: qWr }),
            t("common.requestQuote")
          ]
        }
      ) })
    ] })
  ] });
};
const STAGE_MS = 7e3;
const STAGES = [
  { image: drillingImg, service: "mineDrilling" },
  { image: loaderRockImg, service: "earthMovingRental" },
  { image: tipperImg, service: "oreHaulage" },
  { image: flatbedImg, service: "flatbedCargo" },
  { image: containerImg, service: "containerMovement" }
];
const PitToPort = () => {
  const { t } = useTranslation();
  const reduceMotion = useReducedMotion();
  const ref = reactExports.useRef(null);
  const inView = useInView(ref, { margin: "-20% 0px" });
  const [active, setActive] = reactExports.useState(0);
  const [autoplay, setAutoplay] = reactExports.useState(true);
  const steps = t("chain.steps", { returnObjects: true });
  const running = autoplay && inView && !reduceMotion;
  reactExports.useEffect(() => {
    if (!running) {
      return;
    }
    const timer = window.setTimeout(
      () => setActive((a) => (a + 1) % STAGES.length),
      STAGE_MS
    );
    return () => window.clearTimeout(timer);
  }, [active, running]);
  const select = (index) => {
    setActive(index);
    setAutoplay(false);
  };
  const stage = STAGES[active];
  reactExports.useEffect(() => {
    if (inView) {
      for (const { image } of STAGES) {
        const img = new Image();
        img.src = image;
      }
    }
  }, [inView]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden bg-white py-24 md:py-32", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        "aria-hidden": "true",
        className: "mask-fade-y absolute inset-0 bg-grid-primary"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container relative mx-auto px-4 md:px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SectionHeading,
        {
          className: "mb-14",
          description: t("chain.description"),
          eyebrow: t("chain.eyebrow"),
          title: t("chain.heading")
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "grid items-stretch gap-8 lg:grid-cols-[1fr_1.25fr] lg:gap-12",
          ref,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  "aria-hidden": "true",
                  className: "absolute top-6 bottom-6 left-[27px] w-px bg-border"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("ol", { className: "relative flex flex-col gap-2", children: steps.map((step, index) => {
                const isActive = index === active;
                return /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    "aria-expanded": isActive,
                    className: cn(
                      "spotlight group relative flex w-full cursor-pointer items-start gap-5 rounded-2xl p-3 pr-5 text-left transition-colors",
                      isActive ? "bg-primary/[0.06]" : "hover:bg-muted/50"
                    ),
                    onClick: () => select(index),
                    type: "button",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "span",
                        {
                          className: cn(
                            "relative z-10 mt-1 ml-2.5 flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-full border-2 font-readout font-semibold text-sm transition-all duration-300",
                            isActive ? "scale-110 border-primary bg-primary text-white shadow-lg shadow-primary/30" : "border-border bg-white text-muted-foreground group-hover:border-primary/40"
                          ),
                          children: String(index + 1).padStart(2, "0")
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative z-10 min-w-0 flex-1", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "span",
                          {
                            className: cn(
                              "block font-bold font-heading text-xl transition-colors",
                              isActive ? "text-primary" : "text-foreground"
                            ),
                            children: step.title
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "span",
                          {
                            className: cn(
                              "grid transition-all duration-500 ease-out",
                              isActive ? "mt-2 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                            ),
                            children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "overflow-hidden text-muted-foreground leading-relaxed", children: step.text })
                          }
                        ),
                        isActive && running && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-3 block h-[3px] w-full overflow-hidden rounded-full bg-primary/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "span",
                          {
                            className: "block h-full origin-left animate-progress bg-primary",
                            style: { animationDuration: `${STAGE_MS}ms` }
                          },
                          `stage-progress-${active}`
                        ) })
                      ] })
                    ]
                  }
                ) }, step.title);
              }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "img-skeleton relative min-h-80 overflow-hidden rounded-[2rem] shadow-2xl shadow-primary/20 lg:min-h-[32rem]", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { initial: false, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.img,
                {
                  alt: steps[active]?.title,
                  animate: {
                    opacity: 1,
                    scale: 1,
                    filter: "blur(0px)",
                    zIndex: 1
                  },
                  className: "absolute inset-0 h-full w-full object-cover",
                  decoding: "async",
                  exit: {
                    zIndex: 0,
                    opacity: 0,
                    transition: { opacity: { delay: 0.9, duration: 0 } }
                  },
                  height: 800,
                  initial: { opacity: 0, scale: 1.15, filter: "blur(8px)" },
                  loading: "lazy",
                  src: stage.image,
                  transition: {
                    opacity: { duration: 0.9 },
                    filter: { duration: 0.9 },
                    scale: { duration: STAGE_MS / 1e3 + 1, ease: "linear" }
                  },
                  width: 1200
                },
                stage.image
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-linear-to-t from-black/85 via-black/20 to-black/10" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CornerBrackets, {}),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-x-0 bottom-0 z-20 flex flex-wrap items-end justify-between gap-4 p-6 md:p-10", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mb-1 font-readout text-sm text-white/70 uppercase tracking-[0.25em]", children: [
                    t("chain.stage"),
                    " ",
                    String(active + 1).padStart(2, "0"),
                    " /",
                    " ",
                    String(STAGES.length).padStart(2, "0")
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold font-heading text-3xl text-white md:text-5xl", children: steps[active]?.title }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-white/80", children: t(`servicesPage.detailedList.${stage.service}.title`) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Link,
                  {
                    className: "group inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 font-heading font-semibold text-primary text-sm shadow-xl transition-all hover:-translate-y-0.5",
                    hash: SERVICES[stage.service].anchor,
                    to: "/services",
                    children: [
                      t("chain.viewService"),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        HugeiconsIcon,
                        {
                          className: "h-4 w-4 transition-transform group-hover:translate-x-1",
                          icon: Hn
                        }
                      )
                    ]
                  }
                )
              ] })
            ] })
          ]
        }
      ) })
    ] })
  ] });
};
const ServicesMarquee = () => {
  const { t } = useTranslation();
  const titles = SERVICE_KEYS.map(
    (key) => t(`servicesPage.detailedList.${key}.title`)
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      "aria-hidden": "true",
      className: "relative overflow-hidden border-white/10 border-y bg-primary py-5",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mask-fade-x flex", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex w-max shrink-0 animate-marquee items-center hover:[animation-play-state:paused]", children: [...titles, ...titles].map((title, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "span",
        {
          className: "flex items-center gap-8 px-4 font-bold font-heading text-lg text-white uppercase tracking-wider md:text-xl",
          children: [
            title,
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2.5 w-2.5 rotate-45 bg-white/40" })
          ]
        },
        `${title}-${index}`
      )) }) })
    }
  );
};
const WIDE_TILES = /* @__PURE__ */ new Set([0, SERVICE_KEYS.length - 1]);
const ServicesSection = () => {
  const { t } = useTranslation();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden py-24 md:py-32", id: "services", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        "aria-hidden": "true",
        className: "mask-fade-y absolute inset-0 bg-grid-primary opacity-70"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container relative mx-auto px-4 md:px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-14 flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          SectionHeading,
          {
            align: "left",
            description: t("services.description"),
            eyebrow: t("services.eyebrow"),
            title: t("services.heading")
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { className: "flex items-center gap-6", delay: 0.1, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "hidden items-baseline gap-2 text-muted-foreground lg:flex", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-readout font-semibold text-5xl text-primary", children: String(SERVICE_KEYS.length).padStart(2, "0") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "max-w-24 text-xs uppercase leading-tight tracking-wider", children: t("hero.stats.0.label") })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              className: ctaVariants({ variant: "outline" }),
              to: "/services",
              children: [
                t("services.cta"),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  HugeiconsIcon,
                  {
                    className: "h-4 w-4 transition-transform group-hover/cta:translate-x-1",
                    icon: Hn
                  }
                )
              ]
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "grid gap-5 md:grid-cols-2 lg:grid-cols-4", children: SERVICE_KEYS.map((key, index) => {
        const service = SERVICES[key];
        const base = `servicesPage.detailedList.${key}`;
        const title = t(`${base}.title`);
        const keyFacts = t(`${base}.keyFacts`, {
          returnObjects: true
        });
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          "li",
          {
            className: cn(WIDE_TILES.has(index) && "lg:col-span-2"),
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { className: "h-full", delay: index % 3 * 0.08, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Link,
              {
                className: "tilt spotlight spotlight-inverted group img-skeleton relative flex h-full min-h-[27rem] flex-col justify-end overflow-hidden rounded-[1.75rem] text-white shadow-black/10 shadow-lg ring-1 ring-black/5 transition-shadow duration-500 hover:shadow-2xl hover:shadow-primary/30 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/40 md:h-[29rem] md:min-h-0",
                hash: service.anchor,
                to: "/services",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "img",
                    {
                      alt: title,
                      className: "absolute inset-0 h-full w-full object-cover opacity-90 transition-transform duration-[1.4s] ease-out group-hover:scale-110",
                      decoding: "async",
                      height: 600,
                      loading: "lazy",
                      sizes: WIDE_TILES.has(index) ? "(min-width: 1024px) 50vw, (min-width: 768px) 50vw, 100vw" : "(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw",
                      src: service.cover,
                      width: 900
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inset-0 bg-linear-to-t from-black via-black/45 to-black/10" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inset-0 bg-linear-to-t from-primary/80 via-primary/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inset-0 bg-grid-light opacity-0 transition-opacity duration-700 group-hover:opacity-60" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CornerBrackets, { className: "scale-95 opacity-0 group-hover:scale-100 group-hover:opacity-100" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "absolute inset-x-5 top-5 z-20 flex items-start justify-between md:inset-x-6 md:top-6", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-3", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 text-white shadow-lg ring-1 ring-white/25 backdrop-blur-md transition-all duration-500 group-hover:rotate-[-6deg] group-hover:bg-primary group-hover:ring-white/40", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                        HugeiconsIcon,
                        {
                          className: "h-7 w-7",
                          icon: service.icon
                        }
                      ) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-readout text-sm text-white/70 tracking-wider", children: [
                        String(index + 1).padStart(2, "0"),
                        " /",
                        " ",
                        String(SERVICE_KEYS.length).padStart(2, "0")
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-11 w-11 items-center justify-center rounded-full bg-white text-primary shadow-lg transition-transform duration-500 group-hover:rotate-45", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      HugeiconsIcon,
                      {
                        className: "h-5 w-5",
                        icon: Gn
                      }
                    ) })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative z-20 block p-6 pt-28 md:p-7", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mb-2 block font-heading font-semibold text-white/75 text-xs uppercase tracking-[0.18em]", children: t(`${base}.subtitle`) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block font-bold font-heading text-2xl leading-tight md:text-[1.7rem]", children: title }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid grid-rows-[1fr] transition-all duration-500 ease-out md:grid-rows-[0fr] md:opacity-0 md:group-focus-visible:grid-rows-[1fr] md:group-focus-visible:opacity-100 md:group-hover:grid-rows-[1fr] md:group-hover:opacity-100", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "overflow-hidden", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-3 line-clamp-3 block text-sm text-white/85 leading-relaxed", children: t(`${base}.description`) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-4 flex flex-wrap gap-1.5", children: keyFacts.map((fact) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "span",
                        {
                          className: "rounded-md bg-white/15 px-2.5 py-1 font-readout text-[11px] uppercase tracking-wide ring-1 ring-white/20 backdrop-blur",
                          children: fact
                        },
                        fact
                      )) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "mt-4 inline-flex items-center gap-2 font-heading font-semibold text-sm", children: [
                        t("common.learnMore"),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          HugeiconsIcon,
                          {
                            className: "h-4 w-4 transition-transform group-hover:translate-x-1",
                            icon: Hn
                          }
                        )
                      ] })
                    ] }) })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute bottom-0 left-0 z-20 h-1 w-0 bg-linear-to-r from-secondary to-white transition-all duration-700 group-hover:w-full" })
                ]
              }
            ) })
          },
          key
        );
      }) })
    ] })
  ] });
};
function Index() {
  const {
    t
  } = useTranslation();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Layout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(HeroSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ServicesMarquee, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ServicesSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(PitToPort, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(KeyAttributes, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FleetSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ProcessSteps, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FaqSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CtaBanner, { buttonText: t("cta.button"), heading: t("cta.heading"), text: t("cta.description") })
  ] });
}
export {
  Index as component
};
