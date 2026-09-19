import { j as jsxRuntimeExports } from "../_chunks/_libs/react.mjs";
import { H as Hn, G as Gn, e as BM, q as qWr, L as Lc } from "../_chunks/_libs/@hugeicons/core-free-icons.mjs";
import { L as Link } from "../_chunks/_libs/@tanstack/react-router.mjs";
import { S as SectionHeading, R as Reveal, C as CornerBrackets } from "./section-heading-FGMrMcGU.mjs";
import { L as Layout, S as SERVICE_KEYS, b as SERVICES, F as FLEET, c as ctaVariants, a as cn, w as whatsappLink, d as SITE } from "./router-CEqEY-a1.mjs";
import { C as CtaBanner, I as ImageGallery } from "./cta-banner-B96Kd659.mjs";
import { P as PageHero } from "./page-hero-CYLr3xqw.mjs";
import { P as ProcessSteps } from "./process-steps-DAiE6mWa.mjs";
import { u as useTranslation } from "../_libs/react-i18next.mjs";
import { H as HugeiconsIcon } from "../_chunks/_libs/@hugeicons/react.mjs";
import "../_chunks/_libs/@tanstack/router-core.mjs";
import "../_libs/tiny-invariant.mjs";
import "../_chunks/_libs/@tanstack/history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/tiny-warning.mjs";
import "../_chunks/_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/framer-motion.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
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
const heroBg = "/assets/bg_o-WAIl6t1q.jpg";
const BRANDS = [...new Set(FLEET.map((item) => item.brand))];
const EquipmentRentalTeaser = () => {
  const { t } = useTranslation();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative isolate overflow-hidden bg-black py-24 text-white md:py-32", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        "aria-hidden": "true",
        className: "absolute inset-0 -z-10 bg-linear-to-br from-black via-gray-900 to-primary/50"
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
        className: "absolute -top-40 -left-40 -z-10 h-[30rem] w-[30rem] rounded-full bg-primary/25 blur-[140px]"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto grid grid-cols-1 items-center gap-12 px-4 md:px-6 lg:grid-cols-[1fr_1.35fr] lg:gap-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mb-4 inline-flex items-center gap-3 font-heading font-semibold text-white/80 text-xs uppercase tracking-[0.2em]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": "true", className: "h-px w-8 bg-white/50" }),
          t("servicesPage.rentalTeaser.eyebrow")
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mb-5 font-bold font-heading text-4xl text-white md:text-6xl", children: t("servicesPage.rentalTeaser.headline") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-8 max-w-xl text-lg text-white/75 leading-relaxed", children: t("servicesPage.rentalTeaser.text") }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("dl", { className: "mb-10 grid grid-cols-3 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col-reverse gap-1 bg-black/50 p-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { className: "text-white/60 text-xs uppercase tracking-wider", children: t("rental.machineTypes") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { className: "font-readout font-semibold text-3xl", children: String(FLEET.length).padStart(2, "0") })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-2 flex flex-col-reverse gap-1 bg-black/50 p-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { className: "text-white/60 text-xs uppercase tracking-wider", children: t("rental.brandLabel") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { className: "font-readout font-semibold text-xl leading-tight md:text-2xl", children: BRANDS.join(" · ") })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Link,
          {
            className: ctaVariants({ variant: "white", size: "lg" }),
            hash: "fleet",
            to: "/",
            children: [
              t("servicesPage.rentalTeaser.buttonText"),
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
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "grid grid-cols-2 gap-3 md:gap-4", children: FLEET.map((item, index) => {
        const title = t(`rental.items.${item.key}.title`);
        const isWide = index === 0;
        return /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: cn(isWide && "col-span-2"), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { className: "h-full", delay: index * 0.07, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Link,
          {
            className: cn(
              "tilt spotlight spotlight-inverted group img-skeleton relative flex flex-col justify-end overflow-hidden rounded-3xl ring-1 ring-white/10 transition-shadow duration-500 hover:shadow-2xl hover:shadow-primary/30",
              isWide ? "aspect-[16/9] sm:aspect-[2/1]" : "aspect-[4/5] sm:aspect-square"
            ),
            hash: "fleet",
            to: "/",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  alt: `${item.brand} ${title}`,
                  className: "absolute inset-0 h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110",
                  decoding: "async",
                  height: 500,
                  loading: "lazy",
                  sizes: isWide ? "(min-width: 1024px) 55vw, 100vw" : "(min-width: 1024px) 28vw, 50vw",
                  src: item.images[0],
                  width: isWide ? 1e3 : 500
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inset-0 bg-linear-to-t from-black/90 via-black/25 to-transparent" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inset-0 bg-linear-to-t from-primary/85 via-primary/25 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CornerBrackets, { className: "inset-3 scale-95 opacity-0 group-hover:scale-100 group-hover:opacity-100" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute top-3 left-3 z-20 rounded-full bg-black/45 px-2.5 py-1 font-heading font-semibold text-[10px] uppercase tracking-wider backdrop-blur md:top-4 md:left-4 md:text-xs", children: item.brand }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute top-3 right-3 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-white text-primary opacity-0 shadow-lg transition-all duration-300 group-hover:rotate-45 group-hover:opacity-100 md:top-4 md:right-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                HugeiconsIcon,
                {
                  className: "h-4 w-4",
                  icon: Gn
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative z-20 block p-3 md:p-5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block font-readout text-white/60 text-xs", children: String(index + 1).padStart(2, "0") }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block font-bold font-heading text-base leading-tight md:text-xl", children: title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid grid-rows-[1fr] transition-all duration-500 md:grid-rows-[0fr] md:opacity-0 md:group-hover:grid-rows-[1fr] md:group-hover:opacity-100", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-2 flex flex-wrap gap-x-3 gap-y-1", children: item.specs.slice(0, isWide ? 3 : 2).map((spec) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: "font-readout text-[11px] text-white/85 uppercase tracking-wide md:text-xs",
                    children: spec.value
                  },
                  spec.label
                )) }) }) })
              ] })
            ]
          }
        ) }) }, item.key);
      }) })
    ] })
  ] });
};
function ServiceBlock({
  serviceKey,
  index
}) {
  const { t } = useTranslation();
  const service = SERVICES[serviceKey];
  const base = `servicesPage.detailedList.${serviceKey}`;
  const title = t(`${base}.title`);
  const features = t(`${base}.featureCards`, {
    returnObjects: true
  });
  const keyFacts = t(`${base}.keyFacts`, { returnObjects: true });
  const images = service.featureImages.flat();
  const reversed = index % 2 === 1;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "article",
    {
      "aria-labelledby": `${service.anchor}-title`,
      className: "scroll-mt-28 py-16 md:py-24",
      id: service.anchor,
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid items-center gap-10 lg:grid-cols-2 lg:gap-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Reveal,
          {
            className: cn("relative", reversed && "lg:order-2"),
            x: reversed ? 30 : -30,
            y: 0,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  "aria-hidden": "true",
                  className: cn(
                    "absolute -inset-4 -z-10 rounded-[2.5rem] bg-grid-primary",
                    reversed ? "rotate-2" : "-rotate-2"
                  )
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                ImageGallery,
                {
                  alt: title,
                  className: "aspect-[4/3] rounded-3xl shadow-2xl shadow-primary/15",
                  images,
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(CornerBrackets, {})
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute -bottom-6 left-6 flex items-center gap-3 rounded-2xl bg-white px-5 py-3 shadow-xl", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx(HugeiconsIcon, { className: "h-6 w-6", icon: service.icon }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-heading font-semibold text-primary text-sm", children: t(`${base}.subtitle`) })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { className: cn(reversed && "lg:order-1"), delay: 0.1, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4 font-bold font-heading text-6xl text-primary/10 leading-none md:text-7xl", children: String(index + 1).padStart(2, "0") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "h2",
            {
              className: "mb-5 font-bold font-heading text-3xl text-primary leading-tight md:text-4xl",
              id: `${service.anchor}-title`,
              children: title
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-6 text-lg text-muted-foreground leading-relaxed", children: t(`${base}.description`) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-3 font-heading font-semibold text-secondary text-xs uppercase tracking-[0.2em]", children: t("servicesPage.keyFactsLabel") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "flex flex-wrap gap-2", children: keyFacts.map((fact) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "li",
              {
                className: "rounded-md border border-primary/20 bg-primary/5 px-3 py-1.5 font-readout text-primary text-sm uppercase tracking-wide",
                children: fact
              },
              fact
            )) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mb-10 grid gap-4 sm:grid-cols-2", children: features.map((feature) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "li",
            {
              className: cn(
                "spotlight rounded-2xl border border-border bg-white p-5 shadow-sm transition-all hover:border-primary/25 hover:shadow-md",
                features.length === 3 && "last:sm:col-span-2"
              ),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "mb-1.5 flex items-center gap-2 font-bold font-heading text-foreground", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    HugeiconsIcon,
                    {
                      className: "h-5 w-5 shrink-0 text-secondary",
                      icon: BM
                    }
                  ),
                  feature.title
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm leading-relaxed", children: feature.description })
              ]
            },
            feature.title
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-3", children: [
            service.isRental ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Link,
              {
                className: ctaVariants({ variant: "primary" }),
                hash: "fleet",
                to: "/",
                children: [
                  t(`${base}.ctaText`),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    HugeiconsIcon,
                    {
                      className: "h-4 w-4 transition-transform group-hover/cta:translate-x-1",
                      icon: Hn
                    }
                  )
                ]
              }
            ) : null,
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                className: ctaVariants({
                  variant: service.isRental ? "outline" : "primary"
                }),
                href: whatsappLink(t(`${base}.whatsappText`)),
                rel: "noopener noreferrer",
                target: "_blank",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(HugeiconsIcon, { className: "h-4 w-4", icon: qWr }),
                  service.isRental ? t("common.requestQuote") : t(`${base}.ctaText`)
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
      ] })
    }
  );
}
const ServiceDetailedList = () => /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto divide-y divide-border px-4 md:px-6", children: SERVICE_KEYS.map((key, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(ServiceBlock, { index, serviceKey: key }, key)) }) });
const ServicesIntro = () => {
  const { t } = useTranslation();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden py-20 md:py-28", children: [
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
          description: t("servicesPage.introText.text"),
          eyebrow: t("servicesPage.introText.eyebrow"),
          title: t("servicesPage.introText.headline")
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { className: "mt-14", delay: 0.1, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { "aria-label": t("servicesPage.introText.jumpTo"), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-5 text-center font-heading font-semibold text-muted-foreground text-xs uppercase tracking-[0.2em]", children: t("servicesPage.introText.jumpTo") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6", children: SERVICE_KEYS.map((key, index) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            className: "spotlight group flex h-full flex-col items-center gap-3 rounded-2xl border border-border bg-white p-5 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10",
            href: `#${SERVICES[key].anchor}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                HugeiconsIcon,
                {
                  className: "h-6 w-6",
                  icon: SERVICES[key].icon
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-heading font-semibold text-foreground text-sm leading-snug", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mr-1 text-muted-foreground", children: String(index + 1).padStart(2, "0") }),
                t(`servicesPage.detailedList.${key}.title`)
              ] })
            ]
          }
        ) }, key)) })
      ] }) })
    ] })
  ] });
};
function Services() {
  const {
    t
  } = useTranslation();
  const breadcrumbs = t("servicesPage.pageHeader.breadcrumbs", {
    returnObjects: true
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Layout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { crumbs: [{
      label: breadcrumbs[0],
      to: "/"
    }, {
      label: breadcrumbs[1]
    }], eyebrow: t("servicesPage.pageHeader.eyebrow"), image: heroBg, imageAlt: t("servicesPage.pageHeader.title"), subtitle: t("servicesPage.pageHeader.subtitle"), title: t("servicesPage.pageHeader.title") }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ServicesIntro, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ServiceDetailedList, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(EquipmentRentalTeaser, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ProcessSteps, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CtaBanner, { buttonText: t("servicesPage.ctaBanner.buttonText"), heading: t("servicesPage.ctaBanner.headline"), text: t("servicesPage.ctaBanner.subheadline") })
  ] });
}
export {
  Services as component
};
