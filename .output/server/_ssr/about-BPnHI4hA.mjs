import { j as jsxRuntimeExports } from "../_chunks/_libs/react.mjs";
import { S as SectionHeading, R as Reveal, C as CornerBrackets } from "./section-heading-FGMrMcGU.mjs";
import { C as CtaBanner, I as ImageGallery } from "./cta-banner-B96Kd659.mjs";
import { C as CountUp, r as renderEmphasis } from "./count-up-C5noxkZ5.mjs";
import { e as BM, j as jf, k as jm, Z as ZF, O as Oor, w as wur, v as vMr, r as ror, P as P0, z as zo, l as hf, m as Zq, n as ksr, C as CK, o as HM, R as RE } from "../_chunks/_libs/@hugeicons/core-free-icons.mjs";
import { L as Layout, e as crewImage } from "./router-CEqEY-a1.mjs";
import { P as PageHero } from "./page-hero-CYLr3xqw.mjs";
import { u as useTranslation } from "../_libs/react-i18next.mjs";
import { H as HugeiconsIcon } from "../_chunks/_libs/@hugeicons/react.mjs";
import "../_libs/framer-motion.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
import "../_chunks/_libs/@tanstack/react-router.mjs";
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
const heroBg = "/assets/develon-1vbo0XeH.jpg";
const ca1 = "/assets/ca-01-BYVll7PP.jpeg";
const ca2 = "/assets/eo-2-BKazK77O.jpg";
const ca3 = "/assets/ca-03-CJZlvxM8.jpg";
const ca4 = "/assets/ca-04-BbOSdIHB.jpg";
const sa1 = "/assets/sa-01-CHTbVgLa.jpg";
const sa2 = "/assets/sa-02-DTqA1zPM.jpg";
const tech1 = "/assets/tech-01-CEgoYTae.jpg";
const tech2 = "/assets/tech-02-CG2ltqpn.jpg";
const ve1 = "/assets/ve-01-wUqRChoy.webp";
const ATTRIBUTES = [
  { key: "capacity", images: [ca1, ca2, ca3, ca4] },
  { key: "versatility", images: [ve1] },
  { key: "safety", images: [sa1, sa2] },
  { key: "technology", images: [tech1, tech2] }
];
const CompanyAttributes = () => {
  const { t } = useTranslation();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-white py-24 md:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 md:px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SectionHeading,
      {
        className: "mb-14",
        description: t("about.companyAttributes.description"),
        eyebrow: t("about.companyAttributes.eyebrow"),
        title: t("about.companyAttributes.heading")
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4", children: ATTRIBUTES.map((attr, index) => {
      const base = `about.companyAttributes.items.${attr.key}`;
      const title = t(`${base}.title`);
      return /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { className: "h-full", delay: index * 0.08, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "tilt group relative h-[26rem] overflow-hidden rounded-[1.75rem] shadow-lg ring-1 ring-black/5 transition-shadow duration-500 hover:shadow-2xl hover:shadow-primary/25 md:h-[30rem]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        ImageGallery,
        {
          alt: title,
          className: "absolute inset-0",
          images: [...attr.images],
          sizes: "(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "pointer-events-none absolute inset-0 z-10 bg-linear-to-t from-black/90 via-black/30 to-transparent" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "pointer-events-none absolute inset-0 z-10 bg-linear-to-t from-primary/80 via-primary/15 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CornerBrackets, { className: "scale-95 opacity-0 group-hover:scale-100 group-hover:opacity-100" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pointer-events-none absolute inset-x-0 bottom-0 z-20 p-6 pb-10 text-white", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "mb-1 block font-readout text-sm text-white/70 tracking-wider", children: [
                String(index + 1).padStart(2, "0"),
                " /",
                " ",
                String(ATTRIBUTES.length).padStart(2, "0")
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold font-heading text-2xl text-white md:text-3xl", children: title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-rows-[1fr] transition-all duration-500 md:grid-rows-[0fr] md:opacity-0 md:group-hover:grid-rows-[1fr] md:group-hover:opacity-100", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "overflow-hidden text-white/85 leading-relaxed", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block pt-2", children: renderEmphasis(
                t(`${base}.description`),
                t(`${base}.boldText`),
                "font-semibold text-white"
              ) }) }) })
            ] })
          ]
        }
      ) }) }) }, attr.key);
    }) })
  ] }) });
};
const whoWeAreImage = "/assets/who-we-are-D2_WHtUC.jpeg";
const CompanyProfile = () => {
  const { t } = useTranslation();
  const paragraphs = t("about.companyProfile.bodyParagraphs", {
    returnObjects: true
  });
  const statBadges = t("about.companyProfile.statBadges", {
    returnObjects: true
  });
  const highlights = t("about.companyProfile.highlights", {
    returnObjects: true
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden bg-white py-24 md:py-32", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        "aria-hidden": "true",
        className: "mask-fade-y absolute inset-0 bg-grid-primary opacity-60"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container relative mx-auto grid grid-cols-1 items-center gap-16 px-4 md:px-6 lg:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          SectionHeading,
          {
            align: "left",
            eyebrow: t("about.companyProfile.eyebrow"),
            title: t("about.companyProfile.headline")
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Reveal,
          {
            className: "mt-6 space-y-5 text-lg leading-relaxed",
            delay: 0.1,
            children: paragraphs.map((paragraph, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: index === 0 ? "border-primary border-l-4 pl-5 text-foreground" : "text-muted-foreground",
                children: paragraph
              },
              paragraph
            ))
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { className: "mt-8 flex flex-wrap gap-3", delay: 0.2, children: statBadges.map((badge) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "span",
          {
            className: "inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 font-semibold text-primary text-sm transition-all hover:-translate-y-0.5 hover:bg-primary hover:text-white",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                HugeiconsIcon,
                {
                  className: "h-4 w-4",
                  icon: BM
                }
              ),
              badge
            ]
          },
          badge
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0.3, children: /* @__PURE__ */ jsxRuntimeExports.jsx("dl", { className: "mt-10 grid grid-cols-3 gap-3", children: highlights.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "tilt spotlight flex flex-col-reverse gap-1 rounded-2xl border border-border bg-white p-4 text-center shadow-sm md:p-5",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { className: "text-[11px] text-muted-foreground uppercase tracking-wider md:text-xs", children: item.label }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { className: "font-readout font-semibold text-2xl text-primary md:text-3xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CountUp, { value: item.value }) })
            ]
          },
          item.label
        )) }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { className: "relative pb-10 sm:pb-0", delay: 0.15, x: 30, y: 0, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            "aria-hidden": "true",
            className: "absolute -top-6 -right-6 h-40 w-40 rounded-3xl bg-grid-primary"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "tilt img-skeleton group relative aspect-[4/3] overflow-hidden rounded-[2rem] shadow-2xl shadow-primary/15 lg:aspect-[4/5]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              alt: t("about.companyProfile.imageAlt"),
              className: "h-full w-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-105",
              decoding: "async",
              height: 1e3,
              loading: "lazy",
              src: whoWeAreImage,
              width: 800
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inset-0 bg-linear-to-t from-primary/40 via-transparent to-transparent" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CornerBrackets, {})
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "tilt img-skeleton absolute -bottom-2 left-4 w-40 overflow-hidden rounded-3xl border-8 border-white shadow-2xl sm:-bottom-10 sm:-left-4 sm:w-56 md:-left-10 md:w-64", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            alt: t(
              "servicesPage.detailedList.mineDrilling.featureCards.1.title"
            ),
            className: "aspect-square h-full w-full object-cover",
            decoding: "async",
            height: 400,
            loading: "lazy",
            src: crewImage,
            width: 400
          }
        ) })
      ] })
    ] })
  ] });
};
const VALUE_ICONS = [Oor, wur, vMr, ror];
const MissionVisionValues = () => {
  const { t } = useTranslation();
  const coreValues = t("about.missionVisionValues.coreValues.list", {
    returnObjects: true
  });
  const statements = [
    { key: "mission", icon: jf },
    { key: "vision", icon: jm }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden bg-muted/40 py-24 md:py-32", children: [
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
          eyebrow: t("about.missionVisionValues.eyebrow"),
          title: t("about.missionVisionValues.heading")
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 gap-6 lg:grid-cols-3", children: [
        statements.map((item, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { className: "h-full", delay: index * 0.1, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "tilt spotlight group relative h-full overflow-hidden rounded-3xl border border-border bg-white p-8 shadow-sm transition-shadow duration-500 hover:shadow-2xl hover:shadow-primary/10 md:p-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              "aria-hidden": "true",
              className: "absolute -top-4 -right-2 font-bold font-readout text-[8rem] text-primary/[0.06] leading-none transition-colors duration-500 group-hover:text-primary/10",
              children: String(index + 1).padStart(2, "0")
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all duration-500 group-hover:rotate-[-6deg] group-hover:bg-primary group-hover:text-white group-hover:shadow-lg group-hover:shadow-primary/30", children: /* @__PURE__ */ jsxRuntimeExports.jsx(HugeiconsIcon, { className: "h-8 w-8", icon: item.icon }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "relative mb-4 font-bold font-heading text-2xl text-primary", children: t(`about.missionVisionValues.${item.key}.title`) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "relative text-lg text-muted-foreground leading-relaxed", children: t(`about.missionVisionValues.${item.key}.text`) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute bottom-0 left-0 h-1 w-0 bg-linear-to-r from-primary to-secondary transition-all duration-700 group-hover:w-full" })
        ] }) }, item.key)),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { className: "h-full", delay: 0.2, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "tilt relative h-full overflow-hidden rounded-3xl bg-linear-to-br from-primary to-brand-dark p-8 text-white shadow-primary/25 shadow-xl md:p-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              "aria-hidden": "true",
              className: "absolute inset-0 bg-grid-light"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "aria-hidden": "true", className: "shine" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15 text-white ring-1 ring-white/20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(HugeiconsIcon, { className: "h-8 w-8", icon: ZF }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mb-6 font-bold font-heading text-2xl text-white", children: t("about.missionVisionValues.coreValues.title") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("ol", { className: "space-y-3", children: coreValues.map((value, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "li",
              {
                className: "group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/10 px-4 py-3 backdrop-blur transition-all duration-300 hover:translate-x-1.5 hover:bg-white hover:text-primary",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/15 transition-colors group-hover:bg-primary group-hover:text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    HugeiconsIcon,
                    {
                      className: "h-5 w-5",
                      icon: VALUE_ICONS[index % VALUE_ICONS.length]
                    }
                  ) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-lg", children: value }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-auto font-readout text-sm opacity-50", children: String(index + 1).padStart(2, "0") })
                ]
              },
              value
            )) })
          ] })
        ] }) })
      ] })
    ] })
  ] });
};
const operatingImage = "/assets/operating-Blu0fV4a.jpeg";
const RegionFocus = () => {
  const { t } = useTranslation();
  const regions = t("about.regionFocus.regions", {
    returnObjects: true
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-white py-24 md:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto grid items-center gap-14 px-4 md:px-6 lg:grid-cols-2 lg:gap-20", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { className: "relative order-2 lg:order-1", x: -30, y: 0, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "tilt img-skeleton group relative aspect-[4/3] overflow-hidden rounded-[2rem] shadow-2xl shadow-primary/15", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          alt: t("about.regionFocus.mapHighlight"),
          className: "h-full w-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-105",
          decoding: "async",
          height: 576,
          loading: "lazy",
          src: operatingImage,
          width: 1024
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CornerBrackets, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-5 left-5 z-20 inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 font-heading font-semibold text-primary text-sm shadow-lg backdrop-blur", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative flex h-2.5 w-2.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative inline-flex h-2.5 w-2.5 rounded-full bg-primary" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(HugeiconsIcon, { className: "h-4 w-4", icon: RE }),
        t("contactPage.contactInfo.headquarters.location")
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "order-1 lg:order-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SectionHeading,
        {
          align: "left",
          description: t("about.regionFocus.text"),
          eyebrow: t("about.regionFocus.eyebrow"),
          title: t("about.regionFocus.headline")
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-10 grid gap-4 sm:grid-cols-2", children: regions.map((region, index) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { className: "h-full", delay: index * 0.06, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "tilt spotlight group flex h-full items-start gap-4 rounded-2xl border border-border bg-muted/30 p-5 transition-colors hover:border-primary/30 hover:bg-white hover:shadow-lg hover:shadow-primary/10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary text-white transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:rotate-[-8deg]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          HugeiconsIcon,
          {
            className: "h-5 w-5",
            icon: RE
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold font-heading text-foreground", children: region.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm", children: region.detail })
        ] })
      ] }) }) }, region.name)) })
    ] })
  ] }) });
};
const POLICY_ICONS = [
  P0,
  Oor,
  zo,
  ror,
  hf,
  Zq,
  ksr,
  CK,
  HM
];
const SafetyCommitment = () => {
  const { t } = useTranslation();
  const policy = t("about.safetyCommitment.policy", {
    returnObjects: true
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      className: "relative isolate overflow-hidden bg-black py-24 text-white md:py-32",
      id: "safety",
      children: [
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
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 md:px-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid items-center gap-12 lg:grid-cols-2 lg:gap-16", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              SectionHeading,
              {
                align: "left",
                description: t("about.safetyCommitment.text"),
                eyebrow: t("about.safetyCommitment.eyebrow"),
                title: t("about.safetyCommitment.headline"),
                tone: "inverted"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { className: "grid grid-cols-2 gap-4", delay: 0.1, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "tilt img-skeleton relative overflow-hidden rounded-3xl", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    alt: t("about.safetyCommitment.imageAlt"),
                    className: "aspect-[3/4] w-full object-cover",
                    decoding: "async",
                    height: 640,
                    loading: "lazy",
                    src: sa1,
                    width: 480
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(CornerBrackets, {})
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "tilt img-skeleton relative mt-10 overflow-hidden rounded-3xl", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    alt: t("about.safetyCommitment.imageAlt"),
                    className: "aspect-[3/4] w-full object-cover",
                    decoding: "async",
                    height: 640,
                    loading: "lazy",
                    src: sa2,
                    width: 480
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(CornerBrackets, {})
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { className: "mt-20", delay: 0.1, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8 flex items-end justify-between gap-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold font-heading text-2xl text-white md:text-3xl", children: t("about.safetyCommitment.policyTitle") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "shrink-0 font-readout font-semibold text-5xl text-white/25 md:text-6xl", children: String(policy.length).padStart(2, "0") })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3", children: policy.map((item, index) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { className: "h-full", delay: index % 3 * 0.06, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "tilt spotlight spotlight-inverted group relative flex h-full gap-5 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.05] p-6 backdrop-blur transition-all duration-300 hover:border-white/25 hover:bg-white/10", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-secondary/25 text-white ring-1 ring-white/15 transition-colors group-hover:bg-secondary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              HugeiconsIcon,
              {
                className: "h-6 w-6",
                icon: POLICY_ICONS[index % POLICY_ICONS.length]
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                "aria-hidden": "true",
                className: "absolute top-3 right-4 font-readout text-sm text-white/25",
                children: String(index + 1).padStart(2, "0")
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "mb-1.5 font-bold font-heading text-lg text-white", children: item.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-white/65 leading-relaxed", children: item.text })
            ] })
          ] }) }) }, item.title)) })
        ] })
      ]
    }
  );
};
function About() {
  const {
    t
  } = useTranslation();
  const breadcrumbs = t("about.pageHeader.breadcrumbs", {
    returnObjects: true
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Layout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { crumbs: [{
      label: breadcrumbs[0],
      to: "/"
    }, {
      label: breadcrumbs[1]
    }], eyebrow: t("about.pageHeader.eyebrow"), image: heroBg, imageAlt: t("about.pageHeader.title"), subtitle: t("about.pageHeader.subtitle"), title: t("about.pageHeader.title") }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CompanyProfile, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(MissionVisionValues, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CompanyAttributes, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SafetyCommitment, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(RegionFocus, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CtaBanner, { buttonText: t("about.cta.buttonText"), heading: t("about.cta.headline"), text: t("about.cta.subheadline") })
  ] });
}
export {
  About as component
};
