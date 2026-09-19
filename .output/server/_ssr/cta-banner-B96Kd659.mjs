import { r as reactExports, j as jsxRuntimeExports } from "../_chunks/_libs/react.mjs";
import { q as qWr, L as Lc, i as iN, H as Hn, x as nn } from "../_chunks/_libs/@hugeicons/core-free-icons.mjs";
import { d as SITE, w as whatsappLink, l as loaderRockImg, c as ctaVariants, a as cn } from "./router-CEqEY-a1.mjs";
import { L as Link } from "../_chunks/_libs/@tanstack/react-router.mjs";
import { R as Reveal, C as CornerBrackets } from "./section-heading-FGMrMcGU.mjs";
import { u as useTranslation } from "../_libs/react-i18next.mjs";
import { u as useScroll, b as useTransform, m as motion, c as useReducedMotion, A as AnimatePresence } from "../_libs/framer-motion.mjs";
import { H as HugeiconsIcon } from "../_chunks/_libs/@hugeicons/react.mjs";
const AUTOPLAY_DELAY_MS = 5500;
const SWIPE_THRESHOLD_PX = 60;
const FADE_S = 0.9;
function ImageGallery({
  images,
  alt,
  className,
  imageClassName,
  hoverControls = true,
  autoplayDelay = AUTOPLAY_DELAY_MS,
  active = true,
  sizes = "(min-width: 1024px) 50vw, 100vw",
  showControls = true,
  children
}) {
  const { t } = useTranslation();
  const reduceMotion = useReducedMotion();
  const count = images.length;
  const hasMultiple = count > 1;
  const [index, setIndex] = reactExports.useState(0);
  const [paused, setPaused] = reactExports.useState(false);
  const running = hasMultiple && active && !paused && !reduceMotion;
  const go = reactExports.useCallback(
    (delta) => setIndex((current) => (current + delta + count) % count),
    [count]
  );
  reactExports.useEffect(() => {
    if (!running) {
      return;
    }
    const timer = window.setTimeout(() => go(1), autoplayDelay);
    return () => window.clearTimeout(timer);
  }, [running, go, autoplayDelay]);
  reactExports.useEffect(() => {
    if (!(hasMultiple && active)) {
      return;
    }
    for (const offset of [1, 2]) {
      const upcoming = new Image();
      upcoming.src = images[(index + offset) % count];
    }
  }, [index, images, count, hasMultiple, active]);
  const onKeyDown = (event) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      go(-1);
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      go(1);
    }
  };
  const controlClass = cn(
    "absolute top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-white/30 bg-black/35 text-white backdrop-blur-md transition-all hover:scale-105 hover:bg-white hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white",
    hoverControls && "md:opacity-0 md:group-hover/gallery:opacity-100 md:focus-visible:opacity-100"
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      "aria-label": alt,
      "aria-roledescription": "carousel",
      className: cn(
        "group/gallery img-skeleton relative isolate overflow-hidden",
        className
      ),
      onBlur: () => setPaused(false),
      onFocus: () => setPaused(true),
      onKeyDown: hasMultiple ? onKeyDown : void 0,
      onMouseEnter: () => setPaused(true),
      onMouseLeave: () => setPaused(false),
      role: "region",
      tabIndex: hasMultiple ? 0 : void 0,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { initial: false, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            animate: { opacity: 1, zIndex: 1 },
            "aria-label": `${index + 1} / ${count}`,
            "aria-roledescription": "slide",
            className: "absolute inset-0",
            drag: hasMultiple ? "x" : false,
            dragConstraints: { left: 0, right: 0 },
            dragElastic: 0.15,
            exit: {
              zIndex: 0,
              opacity: 0,
              transition: { opacity: { delay: FADE_S, duration: 0 } }
            },
            initial: { opacity: 0 },
            onDragEnd: (_, info) => {
              if (info.offset.x < -SWIPE_THRESHOLD_PX) {
                go(1);
              } else if (info.offset.x > SWIPE_THRESHOLD_PX) {
                go(-1);
              }
            },
            role: "group",
            transition: { duration: FADE_S, ease: "easeOut" },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.img,
              {
                alt: hasMultiple ? `${alt} — ${index + 1}` : alt,
                animate: { scale: 1, filter: "blur(0px)" },
                className: cn(
                  "pointer-events-none h-full w-full select-none object-cover",
                  imageClassName
                ),
                decoding: "async",
                draggable: false,
                height: 800,
                initial: { scale: 1.14, filter: "blur(6px)" },
                loading: "lazy",
                sizes,
                src: images[index],
                transition: {
                  scale: {
                    duration: autoplayDelay / 1e3 + FADE_S * 2,
                    ease: "linear"
                  },
                  filter: { duration: FADE_S }
                },
                width: 1200
              }
            )
          },
          images[index]
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            "aria-hidden": "true",
            className: "pointer-events-none absolute inset-0 z-10 bg-linear-to-t from-black/50 via-transparent to-transparent"
          }
        ),
        children,
        hasMultiple && showControls && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              "aria-label": t("common.previous"),
              className: cn(controlClass, "left-3"),
              onClick: () => go(-1),
              type: "button",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(HugeiconsIcon, { className: "h-5 w-5", icon: nn })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              "aria-label": t("common.next"),
              className: cn(controlClass, "right-3"),
              onClick: () => go(1),
              type: "button",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(HugeiconsIcon, { className: "h-5 w-5", icon: Hn })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-x-0 bottom-4 z-20 flex items-center justify-center gap-1.5", children: images.map((src, dot) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              "aria-current": dot === index,
              "aria-label": t("common.goToSlide", { n: dot + 1 }),
              className: cn(
                "relative h-1.5 cursor-pointer overflow-hidden rounded-full bg-white/40 transition-all duration-300 hover:bg-white/70",
                dot === index ? "w-8" : "w-1.5"
              ),
              onClick: () => setIndex(dot),
              type: "button",
              children: dot === index && /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: cn(
                    "absolute inset-0 origin-left rounded-full bg-white",
                    running && "animate-progress"
                  ),
                  style: { animationDuration: `${autoplayDelay}ms` }
                },
                `bar-${index}`
              )
            },
            `dot-${src}`
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "absolute top-3 right-3 z-20 rounded-full bg-black/40 px-2.5 py-1 font-readout text-white text-xs tracking-wider backdrop-blur", children: [
            String(index + 1).padStart(2, "0"),
            " /",
            " ",
            String(count).padStart(2, "0")
          ] })
        ] })
      ]
    }
  );
}
function CtaBanner({ heading, text, buttonText }) {
  const { t } = useTranslation();
  const ref = reactExports.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);
  const actions = [
    {
      icon: qWr,
      label: t("common.whatsapp"),
      value: t("contactPage.contactInfo.whatsapp.value"),
      href: whatsappLink(t("common.whatsappGeneric")),
      external: true
    },
    {
      icon: Lc,
      label: t("contactPage.contactInfo.phone.label"),
      value: SITE.phone,
      href: SITE.phoneHref
    },
    {
      icon: iN,
      label: t("contactPage.contactInfo.email.label"),
      value: SITE.email,
      href: `mailto:${SITE.email}`
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-white py-20 md:py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 md:px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "relative isolate overflow-hidden rounded-[2rem] bg-brand-dark shadow-2xl shadow-primary/25",
      ref,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.img,
          {
            alt: "",
            "aria-hidden": "true",
            className: "absolute inset-0 -z-30 h-[124%] w-full object-cover",
            decoding: "async",
            height: 900,
            loading: "lazy",
            src: loaderRockImg,
            style: { y: imageY, top: "-12%" },
            width: 1600
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            "aria-hidden": "true",
            className: "absolute inset-0 -z-20 bg-linear-to-r from-brand-dark via-primary/90 to-primary/35"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            "aria-hidden": "true",
            className: "absolute inset-0 -z-10 bg-grid-light opacity-70"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "aria-hidden": "true", className: "shine -z-10" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "span",
          {
            "aria-hidden": "true",
            className: "pointer-events-none absolute -right-6 -bottom-16 -z-10 select-none font-bold font-readout text-[12rem] text-transparent leading-none md:text-[18rem]",
            style: { WebkitTextStroke: "2px rgb(255 255 255 / 0.14)" },
            children: "24/7"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CornerBrackets, { className: "hidden opacity-60 md:block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 items-center gap-12 px-6 py-14 md:px-14 md:py-20 lg:grid-cols-[1.25fr_1fr]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mb-6 inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 py-2 pr-4 pl-3 font-heading font-semibold text-white text-xs uppercase tracking-[0.18em] backdrop-blur", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative flex h-2.5 w-2.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-70" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative inline-flex h-2.5 w-2.5 rounded-full bg-white" })
              ] }),
              t("footer.support")
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mb-5 font-bold font-heading text-3xl text-white leading-[1.08] md:text-5xl lg:text-6xl", children: heading }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-9 max-w-xl text-lg text-white/85 leading-relaxed", children: text }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Link,
              {
                className: ctaVariants({ variant: "white", size: "lg" }),
                to: "/contact-us",
                children: [
                  buttonText,
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    HugeiconsIcon,
                    {
                      className: "h-5 w-5 transition-transform group-hover/cta:translate-x-1",
                      icon: Hn
                    }
                  )
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "tilt rounded-[1.75rem] border border-white/20 bg-white/10 p-2 shadow-2xl shadow-black/20 backdrop-blur-xl sm:p-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2", children: actions.map((action) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                className: "group flex items-center gap-3 rounded-2xl p-3 text-white transition-all duration-300 hover:bg-white hover:text-primary hover:shadow-xl sm:gap-4 sm:p-4",
                href: action.href,
                ...action.external ? { rel: "noopener noreferrer", target: "_blank" } : {},
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/15 ring-1 ring-white/25 transition-colors duration-300 group-hover:bg-primary group-hover:text-white group-hover:ring-primary sm:h-12 sm:w-12", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    HugeiconsIcon,
                    {
                      className: "h-6 w-6",
                      icon: action.icon
                    }
                  ) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "min-w-0 flex-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-xs uppercase tracking-wider opacity-70", children: action.label }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block font-heading font-semibold text-[15px] [overflow-wrap:anywhere] sm:truncate sm:text-base", children: action.value })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    HugeiconsIcon,
                    {
                      className: "h-5 w-5 shrink-0 opacity-60 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100",
                      icon: Hn
                    }
                  )
                ]
              }
            ) }, action.label)) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-2 flex items-center justify-center gap-2 px-4 pt-2 pb-1 text-white/70 text-xs", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-white/70" }),
              t("footer.location")
            ] })
          ] })
        ] })
      ]
    }
  ) }) }) });
}
export {
  CtaBanner as C,
  ImageGallery as I
};
