import { c as createRouter, L as Link, a as createRootRoute, u as useRouterState, b as createFileRoute, l as lazyRouteComponent, O as Outlet, H as HeadContent, S as Scripts } from "../_chunks/_libs/@tanstack/react-router.mjs";
import { r as reactExports, j as jsxRuntimeExports } from "../_chunks/_libs/react.mjs";
import { K as KR, H as Hn, L as Lc, V as Vz, i as iN, q as qWr, a as VE, b as Vm, G as Gn, $ as $Lr, B as B3, D as Dj, N as Nhr, s as sHr, c as Khr, R as RE, d as Rn, f as fL } from "../_chunks/_libs/@hugeicons/core-free-icons.mjs";
import { c as cva } from "../_libs/class-variance-authority.mjs";
import { c as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { c as createInstance } from "../_libs/i18next.mjs";
import { B as Browser } from "../_libs/_jlZyyM7A.mjs";
import { B as Backend } from "../_libs/i18next-http-backend.mjs";
import { u as useTranslation, i as initReactI18next } from "../_libs/react-i18next.mjs";
import { H as HugeiconsIcon } from "../_chunks/_libs/@hugeicons/react.mjs";
import { M as MotionConfig, u as useScroll, a as useSpring, m as motion } from "../_libs/framer-motion.mjs";
import { D as DialogRoot, a as DialogTrigger, B as Button$1, b as DialogPopup, c as DialogClose, d as DialogTitle, e as DialogPortal, f as DialogBackdrop } from "../_chunks/_libs/@base-ui/react.mjs";
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
import "../_libs/use-sync-external-store.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
import "../_libs/tabbable.mjs";
import "../_chunks/_libs/@floating-ui/utils.mjs";
import "../_chunks/_libs/@base-ui/utils.mjs";
import "../_libs/reselect.mjs";
const heroBg$2 = "/assets/abstract_topographical_map_pattern_dark_maroon_high_contrast-edwih0Lx.webp";
const ctaVariants = cva(
  "group/cta inline-flex shrink-0 cursor-pointer select-none items-center justify-center gap-2 whitespace-nowrap rounded-full font-heading font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-60 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary: "bg-secondary text-white shadow-secondary/25 shadow-xl hover:-translate-y-0.5 hover:bg-brand-dark",
        solid: "bg-primary text-white shadow-lg shadow-primary/20 hover:-translate-y-0.5 hover:bg-brand-dark",
        white: "bg-white text-primary shadow-black/10 shadow-xl hover:-translate-y-0.5 hover:bg-white/90",
        glass: "border border-white/25 bg-white/5 text-white backdrop-blur-md hover:border-white/40 hover:bg-white/15",
        outline: "border border-primary/25 bg-white text-primary hover:border-primary/50 hover:bg-primary/5"
      },
      size: {
        sm: "h-10 px-5 text-sm",
        md: "h-12 px-6 text-sm",
        lg: "h-14 px-8 text-base"
      }
    },
    defaultVariants: {
      variant: "primary",
      size: "md"
    }
  }
);
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const RegionToggle = () => {
  const { i18n: i18n2 } = useTranslation();
  const [region, setRegion] = reactExports.useState(i18n2.language);
  reactExports.useEffect(() => {
    setRegion(i18n2.language);
  }, [i18n2.language]);
  const handleLanguageChange = (lang) => {
    if (lang !== region) {
      i18n2.changeLanguage(lang);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center rounded-full border border-white/10 bg-white/5 p-1 backdrop-blur-sm", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        "aria-label": "Switch to English",
        "aria-pressed": region === "en",
        className: cn(
          "relative rounded-full px-3 py-1.5 font-bold font-heading text-xs uppercase tracking-wider transition-all duration-300",
          region === "en" ? "bg-secondary text-white shadow-md shadow-secondary/20" : "text-white/50 hover:bg-white/5 hover:text-white"
        ),
        onClick: () => handleLanguageChange("en"),
        type: "button",
        children: "En"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        "aria-label": "Switch to French",
        "aria-pressed": region === "fr",
        className: cn(
          "relative rounded-full px-3 py-1.5 font-bold font-heading text-xs uppercase tracking-wider transition-all duration-300",
          region === "fr" ? "bg-secondary text-white shadow-md shadow-secondary/20" : "text-white/50 hover:bg-white/5 hover:text-white"
        ),
        onClick: () => handleLanguageChange("fr"),
        type: "button",
        children: "Fr"
      }
    )
  ] });
};
const heroBg$1 = "/assets/hero-jpLZs9sk.jpg";
const bulldozerImg = "/assets/bulldozer-D80AWtxv.webp";
const excavatorImg = "/assets/excavators-BGOkMzjY.avif";
const loaderImg = "/assets/ca-03-CJZlvxM8.jpg";
const dumpTruckImg = "/assets/heavy_dump_trucks-JSOyhr55.webp";
const me1 = "/assets/eo-1-QLTVphYD.webp";
const excavatorAdtImg = "/assets/me-02-DhK1Emdb.jpg";
const loaderRockImg = "/assets/ol-1-BleRKO6r.jpg";
const hcf1 = "/assets/hcf-01-D-OV1Qah.png";
const hcf2 = "/assets/hcf-02-BZv0ZX42.png";
const hcf3 = "/assets/hcf-03-Dk9u6A3f.png";
const tipperImg = "/assets/re-01-B7CBXV03.jpg";
const FLEET = [
  {
    key: "excavators",
    brand: "Hyundai",
    images: [excavatorImg, heroBg$1, excavatorAdtImg],
    specs: [
      { label: "operatingWeight", value: "21–35 t" },
      { label: "enginePower", value: "120–210 kW" },
      { label: "bucketCapacity", value: "0.8–2.1 m³" }
    ],
    reference: {
      model: "Hyundai HX300A L",
      source: "hyundai-ce.eu",
      specs: [
        { label: "machineClass", value: "class30t", translate: true },
        { label: "engine", value: "Cummins B6.7" },
        { label: "enginePower", value: "194 kW (260 HP)" }
      ]
    }
  },
  {
    key: "bulldozers",
    brand: "Hyundai",
    images: [bulldozerImg],
    specs: [
      { label: "operatingWeight", value: "18–38 t" },
      { label: "enginePower", value: "150–320 kW" },
      { label: "bladeCapacity", value: "3.5–7.0 m³" }
    ],
    reference: {
      model: "Hyundai HD-series",
      source: "hd-hyundaice.com",
      specs: [{ label: "trackConfig", value: "XL · LGP" }]
    }
  },
  {
    key: "loaders",
    brand: "Hyundai",
    images: [loaderImg, loaderRockImg, me1],
    specs: [
      { label: "operatingWeight", value: "12–25 t" },
      { label: "enginePower", value: "100–180 kW" },
      { label: "bucketCapacity", value: "1.8–4.5 m³" }
    ],
    reference: {
      model: "Hyundai HL955A",
      source: "hyundai-ce.eu",
      specs: [
        { label: "operatingWeight", value: "15,800 kg" },
        { label: "engine", value: "Cummins B6.7 · Stage V" },
        { label: "enginePower", value: "149 kW" },
        { label: "bucketCapacity", value: "2.4–2.8 m³" },
        { label: "transmission", value: "fiveSpeedLockup", translate: true }
      ]
    }
  },
  {
    key: "dumpTrucks",
    brand: "Hyundai",
    images: [dumpTruckImg, excavatorAdtImg],
    specs: [
      { label: "payload", value: "41 t" },
      { label: "enginePower", value: "368 kW" },
      { label: "drive", value: "6x6, 8x8" }
    ],
    reference: {
      model: "Hyundai HA45A",
      source: "hyundai-ce.eu",
      specs: [
        { label: "type", value: "articulatedDumpTruck", translate: true },
        { label: "payload", value: "41 t" },
        { label: "operatingWeight", value: "30.5 t" },
        { label: "ratedPower", value: "368 kW / 2,100 rpm" },
        { label: "torque", value: "2,476 Nm" },
        { label: "heapedCapacity", value: "26 m³" },
        { label: "drive", value: "fullTime6x6", translate: true },
        { label: "transmission", value: "autoRetarder", translate: true },
        { label: "tippingAngle", value: "70°" },
        { label: "emission", value: "Stage V" }
      ]
    }
  },
  {
    key: "tipperTrucks",
    brand: "SAG (Sagmoto)",
    images: [hcf1, hcf2, hcf3, tipperImg],
    specs: [{ label: "drive", value: "8x4" }],
    reference: {
      model: "SAG (Sagmoto) heavy-duty trucks",
      source: "sagmoto-trucks.com",
      specs: [
        { label: "engine", value: "Weichai WP12 / WP13" },
        { label: "enginePower", value: "420–580 HP" },
        { label: "drive", value: "4x4 · 6x6 · 8x4" },
        { label: "groundClearance", value: "320–400+ mm" }
      ]
    }
  }
];
const containerImg = "/assets/el-1-CYHEVXDH.jpg";
const el2 = "/assets/el-2-CkF1nNbK.avif";
const heroBg = "/assets/el-3-Z-sBm7OV.jpg";
const el4 = "/assets/el-4-BQVivoVv.webp";
const el5 = "/assets/el-5-CFCcXTza.jpg";
const td1 = "/assets/td-1-D6meMNXb.webp";
const td2 = "/assets/td-2-RaG94657.webp";
const frt1 = "/assets/el-2-CkF1nNbK.avif";
const frt2 = "/assets/frt-02-C5de68J3.jpg";
const et1 = "/assets/et-01-DSHFKlws.png";
const flatbedImg = "/assets/et-02-zHNn-2XS.jpg";
const et3 = "/assets/et-03-D-d6UHrR.jpg";
const et4 = "/assets/et-04-CkXw53ev.jpg";
const et5 = "/assets/et-05-IjMqVLor.avif";
const so1 = "/assets/so-01-BW57Y-8Q.jpeg";
const so2 = "/assets/so-02-zpV4UEbw.jpg";
const vs1 = "/assets/et-02-zHNn-2XS.jpg";
const vs2 = "/assets/vs-02-DVfeR4iF.webp";
const crewImage = "/assets/crew-C7n9c_sM.webp";
const drillImg = "/assets/drill-DLbXwzfG.avif";
const drillingImg = "/assets/drilling-Crs7JG2n.webp";
const eo1 = "/assets/eo-1-QLTVphYD.webp";
const eo2 = "/assets/eo-2-BKazK77O.jpg";
const eo3 = "/assets/eo-3-CH3ZSfp5.jpg";
const eo4 = "/assets/eo-4-C23DyysZ.jpg";
const eo5 = "/assets/eo-5-B-RpgpBt.jpg";
const eo6 = "/assets/eo-6-CcHM5h0C.jpg";
const st1 = "/assets/st-1-B8cmPIL4.webp";
const st2 = "/assets/st-2-7s-zQB5x.webp";
const st3 = "/assets/st-3-D34hOgpe.jpg";
const re2 = "/assets/re-02-oxOWgx7-.webp";
const SERVICE_KEYS = [
  "oreHaulage",
  "mineDrilling",
  "flatbedCargo",
  "containerMovement",
  "tipperTruckRentals",
  "earthMovingRental"
];
const SERVICES = {
  oreHaulage: {
    anchor: "ore-haulage",
    icon: Khr,
    cover: loaderRockImg,
    featureImages: [
      [eo1, eo2, eo3, eo4, eo5, eo6],
      [st1, st2, st3]
    ],
    isRental: false
  },
  mineDrilling: {
    anchor: "mine-drilling",
    icon: sHr,
    cover: drillingImg,
    featureImages: [[drillImg, drillingImg], [crewImage]],
    isRental: false
  },
  flatbedCargo: {
    anchor: "flatbed-cargo",
    icon: Nhr,
    cover: flatbedImg,
    featureImages: [
      [et1, flatbedImg, et3, et4, et5],
      [so1, so2],
      [vs1, vs2]
    ],
    isRental: false
  },
  containerMovement: {
    anchor: "container-movement",
    icon: Dj,
    cover: containerImg,
    featureImages: [
      [containerImg, el2, heroBg, el4, el5],
      [td1, td2]
    ],
    isRental: false
  },
  tipperTruckRentals: {
    anchor: "tipper-truck-rentals",
    icon: B3,
    cover: hcf1,
    featureImages: [
      [hcf1, hcf2, hcf3],
      [tipperImg, re2]
    ],
    isRental: true
  },
  earthMovingRental: {
    anchor: "earth-moving-equipment",
    icon: $Lr,
    cover: me1,
    featureImages: [
      [me1, excavatorAdtImg],
      [frt1, frt2]
    ],
    isRental: true
  }
};
const SITE = {
  name: "Continental Mining Services",
  shortName: "CMS",
  url: "https://continental-mining.vercel.app".replace(/\/$/, ""),
  phone: "+232 75 311632",
  phoneHref: "tel:+23275311632",
  email: "info@continental-miningservices.com",
  whatsappNumber: "23275311632",
  city: "Freetown",
  country: "Sierra Leone",
  countryCode: "SL",
  geo: { latitude: 8.4844, longitude: -13.2344 },
  mapEmbedUrl: "https://www.google.com/maps?q=Freetown%2C%20Sierra%20Leone&z=12&output=embed",
  mapDirectionsUrl: "https://www.google.com/maps/search/?api=1&query=Freetown%2C%20Sierra%20Leone",
  social: {
    linkedin: "https://www.linkedin.com/company/continental-miningservices/",
    facebook: "https://www.facebook.com/continental-miningservices/"
  }
};
const whatsappLink = (text) => `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(text)}`;
const logo = "/assets/logo-CLP8R1nX.png";
const headingClass = "mb-6 flex items-center gap-3 font-heading font-semibold text-white/50 text-xs uppercase tracking-[0.25em]";
const linkClass = "group inline-flex items-center gap-2 text-white/70 transition-all duration-300 hover:translate-x-1 hover:text-white focus-visible:text-white";
function ColumnHeading({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: headingClass, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": "true", className: "h-px w-6 bg-secondary" }),
    children
  ] });
}
const Footer = () => {
  const { t } = useTranslation();
  const quickContacts = [
    {
      icon: Lc,
      label: t("contactPage.contactInfo.phone.label"),
      value: SITE.phone,
      href: SITE.phoneHref
    },
    {
      icon: qWr,
      label: t("common.whatsapp"),
      value: t("contactPage.contactInfo.whatsapp.value"),
      href: whatsappLink(t("common.whatsappGeneric")),
      external: true
    },
    {
      icon: iN,
      label: t("contactPage.contactInfo.email.label"),
      value: SITE.email,
      href: `mailto:${SITE.email}`
    }
  ];
  const socials = [
    { href: SITE.social.linkedin, label: "LinkedIn", icon: VE },
    { href: SITE.social.facebook, label: "Facebook", icon: Vm },
    {
      href: whatsappLink(t("common.whatsappGeneric")),
      label: "WhatsApp",
      icon: qWr
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "relative isolate overflow-hidden bg-black text-white", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "img",
      {
        alt: "",
        "aria-hidden": "true",
        className: "absolute inset-0 -z-30 h-full w-full object-cover opacity-25 mix-blend-overlay",
        decoding: "async",
        height: 1080,
        loading: "lazy",
        src: heroBg$2,
        width: 1920
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        "aria-hidden": "true",
        className: "absolute inset-0 -z-20 bg-linear-to-b from-gray-900 via-black to-black opacity-95"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        "aria-hidden": "true",
        className: "mask-fade-y absolute inset-0 -z-10 bg-grid-light opacity-60"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        "aria-hidden": "true",
        className: "absolute -top-48 left-1/4 -z-10 h-96 w-[40rem] rounded-full bg-primary/25 blur-[140px]"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        "aria-hidden": "true",
        className: "absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-primary to-transparent"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 pt-20 md:px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 items-center gap-10 border-white/10 border-b pb-14 lg:grid-cols-[1fr_1.4fr] lg:gap-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              "aria-label": SITE.name,
              className: "mb-6 inline-flex items-center gap-4",
              to: "/",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    alt: `${SITE.name} logo`,
                    className: "h-20 w-auto",
                    height: 80,
                    loading: "lazy",
                    src: logo,
                    width: 65
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-bold font-heading text-lg leading-tight", children: [
                  "Continental",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block font-normal text-sm text-white/60 uppercase tracking-[0.2em]", children: "Mining Services" })
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-6 max-w-md text-lg text-white/70 leading-relaxed", children: t("footer.description") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-3", children: socials.map((social) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              "aria-label": social.label,
              className: "flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/80 transition-all hover:-translate-y-1 hover:border-white hover:bg-white hover:text-primary",
              href: social.href,
              rel: "noopener noreferrer",
              target: "_blank",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(HugeiconsIcon, { className: "h-5 w-5", icon: social.icon })
            },
            social.label
          )) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "grid grid-cols-1 gap-3 sm:grid-cols-3", children: quickContacts.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            className: "tilt spotlight spotlight-inverted group flex h-full flex-row items-center gap-4 rounded-3xl border border-white/10 bg-white/[0.05] p-5 backdrop-blur transition-colors duration-300 hover:border-white/25 hover:bg-white/10 sm:flex-col sm:items-stretch sm:justify-between sm:gap-6",
            href: item.href,
            ...item.external ? { rel: "noopener noreferrer", target: "_blank" } : {},
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex shrink-0 items-center justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-white shadow-lg shadow-primary/30 transition-transform duration-300 group-hover:rotate-[-8deg]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(HugeiconsIcon, { className: "h-6 w-6", icon: item.icon }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  HugeiconsIcon,
                  {
                    className: "hidden h-5 w-5 text-white/40 transition-all duration-300 group-hover:rotate-45 group-hover:text-white sm:block",
                    icon: Gn
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "min-w-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-white/50 text-xs uppercase tracking-wider", children: item.label }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block font-heading font-semibold text-sm [overflow-wrap:anywhere]", children: item.value })
              ] })
            ]
          }
        ) }, item.label)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 gap-12 py-14 sm:grid-cols-2 lg:grid-cols-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "nav",
          {
            "aria-label": t("footer.sections.services"),
            className: "lg:col-span-4",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ColumnHeading, { children: t("footer.sections.services") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-3.5", children: SERVICE_KEYS.map((key) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Link,
                {
                  className: linkClass,
                  hash: SERVICES[key].anchor,
                  to: "/services",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 text-white/60 ring-1 ring-white/10 transition-colors group-hover:bg-primary group-hover:text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      HugeiconsIcon,
                      {
                        className: "h-4 w-4",
                        icon: SERVICES[key].icon
                      }
                    ) }),
                    t(`servicesPage.detailedList.${key}.title`)
                  ]
                }
              ) }, key)) })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "nav",
          {
            "aria-label": t("nav.links.fleetRentals"),
            className: "lg:col-span-3",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ColumnHeading, { children: t("nav.links.fleetRentals") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-3.5", children: FLEET.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { className: linkClass, hash: "fleet", to: "/", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  HugeiconsIcon,
                  {
                    className: "h-4 w-4 text-secondary transition-transform group-hover:translate-x-0.5",
                    icon: Hn
                  }
                ),
                t(`rental.items.${item.key}.title`),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-readout text-white/35 text-xs", children: item.brand })
              ] }) }, item.key)) })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "nav",
          {
            "aria-label": t("footer.sections.company"),
            className: "lg:col-span-2",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ColumnHeading, { children: t("footer.sections.company") }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-3.5", children: [
                [
                  { to: "/", label: t("nav.links.home") },
                  { to: "/about", label: t("nav.links.aboutUs") },
                  { to: "/services", label: t("nav.links.services") },
                  { to: "/contact-us", label: t("nav.links.contact") }
                ].map((link) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { className: linkClass, to: link.to, children: link.label }) }, link.to)),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { className: linkClass, hash: "faq", to: "/", children: "FAQ" }) })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ColumnHeading, { children: t("footer.sections.contact") }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("address", { className: "space-y-4 not-italic", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                className: `${linkClass} items-start`,
                href: SITE.mapDirectionsUrl,
                rel: "noopener noreferrer",
                target: "_blank",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    HugeiconsIcon,
                    {
                      className: "mt-0.5 h-5 w-5 shrink-0 text-secondary",
                      icon: RE
                    }
                  ),
                  t("footer.location")
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { className: linkClass, href: SITE.phoneHref, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                HugeiconsIcon,
                {
                  className: "h-5 w-5 shrink-0 text-secondary",
                  icon: Lc
                }
              ),
              SITE.phone
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                className: `${linkClass} items-start`,
                href: `mailto:${SITE.email}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    HugeiconsIcon,
                    {
                      className: "mt-0.5 h-5 w-5 shrink-0 text-secondary",
                      icon: iN
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "min-w-0 [overflow-wrap:anywhere]", children: SITE.email })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-6 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 py-2 pr-4 pl-3 text-sm text-white/85", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative flex h-2.5 w-2.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary opacity-75" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative inline-flex h-2.5 w-2.5 rounded-full bg-secondary" })
            ] }),
            t("footer.support")
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        "aria-hidden": "true",
        className: "pointer-events-none select-none overflow-hidden",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "p",
          {
            className: "-mb-[0.18em] whitespace-nowrap text-center font-bold font-readout text-[19vw] text-transparent uppercase leading-none tracking-tight",
            style: { WebkitTextStroke: "1px rgb(255 255 255 / 0.12)" },
            children: "Continental"
          }
        )
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative border-white/10 border-t bg-black/60 backdrop-blur", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto flex flex-col items-center justify-between gap-5 px-4 py-6 text-sm md:flex-row md:px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-white/50", children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " ",
        t("footer.copyright")
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sr-only", children: t("footer.language") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(RegionToggle, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            className: "group inline-flex items-center gap-2 text-white/60 transition-colors hover:text-white",
            href: "#main-content",
            children: [
              t("footer.backToTop"),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white shadow-lg shadow-primary/30 transition-transform duration-300 group-hover:-translate-y-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(HugeiconsIcon, { className: "h-4 w-4", icon: Rn }) })
            ]
          }
        )
      ] })
    ] }) })
  ] });
};
const buttonVariants = cva(
  "group/button inline-flex shrink-0 cursor-pointer select-none items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-clip-padding font-medium text-sm outline-none transition-all focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/80",
        outline: "border-border bg-background shadow-xs hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 aria-expanded:bg-secondary aria-expanded:text-secondary-foreground",
        ghost: "hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-muted/50",
        destructive: "bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:border-destructive/40 focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:focus-visible:ring-destructive/40 dark:hover:bg-destructive/30",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 gap-1.5 in-data-[slot=button-group]:rounded-md px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        xs: "h-6 gap-1 in-data-[slot=button-group]:rounded-md rounded-[min(var(--radius-md),8px)] px-2 text-xs has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-8 gap-1 in-data-[slot=button-group]:rounded-md rounded-[min(var(--radius-md),10px)] px-2.5 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5",
        lg: "h-10 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-3 has-data-[icon=inline-start]:pl-3",
        icon: "size-9",
        "icon-xs": "size-6 in-data-[slot=button-group]:rounded-md rounded-[min(var(--radius-md),8px)] [&_svg:not([class*='size-'])]:size-3",
        "icon-sm": "size-8 in-data-[slot=button-group]:rounded-md rounded-[min(var(--radius-md),10px)]",
        "icon-lg": "size-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Button$1,
    {
      className: cn(buttonVariants({ variant, size, className })),
      "data-slot": "button",
      ...props
    }
  );
}
function Sheet({ ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(DialogRoot, { "data-slot": "sheet", ...props });
}
function SheetTrigger({ ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTrigger, { "data-slot": "sheet-trigger", ...props });
}
function SheetPortal({ ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(DialogPortal, { "data-slot": "sheet-portal", ...props });
}
function SheetOverlay({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    DialogBackdrop,
    {
      className: cn(
        "data-closed:fade-out-0 data-open:fade-in-0 fixed inset-0 z-50 bg-black/10 duration-100 data-closed:animate-out data-open:animate-in data-ending-style:opacity-0 data-starting-style:opacity-0 supports-backdrop-filter:backdrop-blur-xs",
        className
      ),
      "data-slot": "sheet-overlay",
      ...props
    }
  );
}
function SheetContent({
  className,
  children,
  side = "right",
  showCloseButton = true,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(SheetPortal, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SheetOverlay, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      DialogPopup,
      {
        className: cn(
          "data-[side=right]:data-closed:slide-out-to-right-10 data-[side=right]:data-open:slide-in-from-right-10 data-[side=left]:data-closed:slide-out-to-left-10 data-[side=left]:data-open:slide-in-from-left-10 data-[side=top]:data-closed:slide-out-to-top-10 data-[side=top]:data-open:slide-in-from-top-10 data-closed:fade-out-0 data-open:fade-in-0 data-[side=bottom]:data-closed:slide-out-to-bottom-10 data-[side=bottom]:data-open:slide-in-from-bottom-10 fixed z-50 flex flex-col gap-4 bg-background bg-clip-padding text-sm shadow-lg transition duration-200 ease-in-out data-[side=bottom]:inset-x-0 data-[side=top]:inset-x-0 data-[side=left]:inset-y-0 data-[side=right]:inset-y-0 data-[side=top]:top-0 data-[side=right]:right-0 data-[side=bottom]:bottom-0 data-[side=left]:left-0 data-[side=bottom]:h-auto data-[side=left]:h-full data-[side=right]:h-full data-[side=top]:h-auto data-[side=left]:w-3/4 data-[side=right]:w-3/4 data-closed:animate-out data-open:animate-in data-[side=bottom]:border-t data-[side=left]:border-r data-[side=top]:border-b data-[side=right]:border-l data-[side=left]:sm:max-w-sm data-[side=right]:sm:max-w-sm",
          className
        ),
        "data-side": side,
        "data-slot": "sheet-content",
        ...props,
        children: [
          children,
          showCloseButton && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            DialogClose,
            {
              "data-slot": "sheet-close",
              render: /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  className: "absolute top-4 right-4",
                  size: "icon-sm",
                  variant: "ghost"
                }
              ),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(HugeiconsIcon, { icon: fL, strokeWidth: 2 }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sr-only", children: "Close" })
              ]
            }
          )
        ]
      }
    )
  ] });
}
function SheetTitle({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    DialogTitle,
    {
      className: cn("font-medium text-foreground", className),
      "data-slot": "sheet-title",
      ...props
    }
  );
}
const SCROLL_THRESHOLD_PX = 24;
const NAV_ITEMS = [
  { labelKey: "nav.links.home", to: "/", exact: true },
  { labelKey: "nav.links.services", to: "/services" },
  { labelKey: "nav.links.fleetRentals", to: "/", hash: "fleet" },
  { labelKey: "nav.links.aboutUs", to: "/about" },
  { labelKey: "nav.links.contact", to: "/contact-us" }
];
const Navbar = () => {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = reactExports.useState(false);
  const [menuOpen, setMenuOpen] = reactExports.useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  reactExports.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > SCROLL_THRESHOLD_PX);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  reactExports.useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);
  const quoteHref = whatsappLink(t("common.whatsappGeneric"));
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "header",
    {
      className: cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-out",
        isScrolled ? "border-white/10 border-b bg-primary/95 py-2 shadow-black/10 shadow-lg backdrop-blur-md" : "bg-linear-to-b from-black/60 to-transparent py-4 md:py-5"
      ),
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto flex items-center justify-between gap-6 px-4 md:px-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            "aria-label": SITE.name,
            className: "relative z-50 flex shrink-0 items-center transition-transform hover:scale-105",
            to: "/",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                alt: `${SITE.name} logo`,
                className: cn(
                  "w-auto transition-all duration-500",
                  isScrolled ? "h-12" : "h-14 md:h-16"
                ),
                height: 64,
                src: logo,
                width: 52
              }
            )
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { "aria-label": "Main", className: "hidden lg:block", children: /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "flex items-center gap-1 rounded-full border border-white/10 bg-white/5 p-1 backdrop-blur-md", children: NAV_ITEMS.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            activeOptions: {
              exact: item.exact,
              includeHash: Boolean(item.hash)
            },
            className: "block rounded-full px-4 py-2 font-heading font-medium text-sm text-white/80 tracking-wide transition-all hover:bg-white/10 hover:text-white data-[status=active]:bg-white data-[status=active]:text-primary data-[status=active]:shadow-md",
            hash: item.hash,
            to: item.to,
            children: t(item.labelKey)
          }
        ) }, item.labelKey)) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden items-center gap-4 lg:flex", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              className: "hidden items-center gap-2 font-medium text-sm text-white/80 transition-colors hover:text-white xl:flex",
              href: SITE.phoneHref,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(HugeiconsIcon, { className: "h-4 w-4", icon: Lc }),
                SITE.phone
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(RegionToggle, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              className: ctaVariants({ variant: "primary", size: "sm" }),
              href: quoteHref,
              rel: "noopener noreferrer",
              target: "_blank",
              children: [
                t("nav.button.quote"),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  HugeiconsIcon,
                  {
                    className: "h-4 w-4 transition-transform group-hover/cta:translate-x-0.5",
                    icon: Hn
                  }
                )
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 lg:hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(RegionToggle, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Sheet, { onOpenChange: setMenuOpen, open: menuOpen, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              SheetTrigger,
              {
                render: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    "aria-label": t("nav.mobile.open"),
                    className: "h-11 w-11 rounded-full border border-white/20 bg-white/5 text-white backdrop-blur hover:bg-white/15 hover:text-white",
                    size: "icon",
                    variant: "ghost",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(HugeiconsIcon, { className: "h-6 w-6", icon: Vz })
                  }
                )
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              SheetContent,
              {
                className: "w-[88vw] max-w-sm border-l-white/10 bg-primary text-white",
                side: "right",
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex h-full flex-col overflow-y-auto", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      "aria-hidden": "true",
                      className: "absolute inset-0 bg-grid-light opacity-50"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex items-center gap-3 border-white/10 border-b p-6", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "img",
                      {
                        alt: "",
                        className: "h-12 w-auto",
                        height: 48,
                        src: logo,
                        width: 39
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SheetTitle, { className: "font-bold font-heading text-lg text-white", children: t("nav.mobile.title") })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { "aria-label": "Mobile", className: "relative flex-1 p-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-1", children: NAV_ITEMS.map((item, index) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Link,
                    {
                      activeOptions: {
                        exact: item.exact,
                        includeHash: Boolean(item.hash)
                      },
                      className: "group flex items-center justify-between rounded-2xl px-4 py-4 font-bold font-heading text-2xl text-white/85 transition-colors hover:bg-white/10 hover:text-white data-[status=active]:bg-white/10 data-[status=active]:text-white",
                      hash: item.hash,
                      onClick: () => setMenuOpen(false),
                      to: item.to,
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mr-3 font-medium text-sm text-white/40", children: String(index + 1).padStart(2, "0") }),
                          t(item.labelKey)
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          HugeiconsIcon,
                          {
                            className: "h-5 w-5 opacity-40 transition-all group-hover:translate-x-1 group-hover:opacity-100",
                            icon: Hn
                          }
                        )
                      ]
                    }
                  ) }, item.labelKey)) }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative space-y-4 p-6", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 rounded-2xl border border-white/10 bg-white/5 p-5", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "a",
                        {
                          className: "flex items-center gap-3 text-sm text-white/90 hover:text-white",
                          href: SITE.phoneHref,
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              HugeiconsIcon,
                              {
                                className: "h-5 w-5 shrink-0",
                                icon: Lc
                              }
                            ),
                            SITE.phone
                          ]
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "a",
                        {
                          className: "flex items-start gap-3 text-sm text-white/90 hover:text-white",
                          href: `mailto:${SITE.email}`,
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              HugeiconsIcon,
                              {
                                className: "h-5 w-5 shrink-0",
                                icon: iN
                              }
                            ),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "min-w-0 break-all", children: SITE.email })
                          ]
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "a",
                      {
                        className: cn(
                          ctaVariants({ variant: "white", size: "lg" }),
                          "w-full"
                        ),
                        href: quoteHref,
                        rel: "noopener noreferrer",
                        target: "_blank",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(HugeiconsIcon, { className: "h-5 w-5", icon: qWr }),
                          t("nav.button.quote")
                        ]
                      }
                    )
                  ] })
                ] })
              }
            )
          ] })
        ] })
      ] })
    }
  );
};
const welcome$1 = "Welcome to our app";
const description$1 = "Your go-to multilingual React application.";
const common$1 = { "skipToContent": "Skip to main content", "requestQuote": "Request a Quote", "whatsapp": "WhatsApp", "callUs": "Call us", "emailUs": "Email us", "learnMore": "Learn more", "close": "Close", "previous": "Previous image", "next": "Next image", "goToSlide": "Go to image {{n}}", "scrollDown": "Scroll to explore", "whatsappGeneric": "Hello, I would like to request a quote. You can also reach me at info@continental-miningservices.com", "sourceLabel": "Source" };
const home$1 = { "pageMeta": { "title": "Mining Logistics & Equipment Rental in Sierra Leone | Continental Mining", "description": "Sierra Leone's premier mining partner. Ore haulage, mine drilling, flatbed and container logistics, and heavy equipment rental from our Freetown base — 24/7." } };
const hero$1 = { "badge": "Sierra Leone's Premier Mining Partner", "location": "Freetown · Sierra Leone", "heading": { "part1": "Mining Logistics", "part2": "Leaders in the Region" }, "description": "From Ore Haulage to Heavy Equipment Rentals. We deliver capacity, safety, and efficiency to your operations.", "button": { "quote": "Request a Quote", "fleet": "View Rental Fleet" }, "image": { "alt": "Hyundai excavator loading rock into a mining dump truck at an open-pit mine" }, "stats": [{ "value": "6", "label": "Core mining services" }, { "value": "24/7", "label": "Operational support" }, { "value": "100%", "label": "Local expertise" }, { "value": "41 t", "label": "Rated dump-truck payload" }] };
const services$1 = { "eyebrow": "What we do", "heading": "Core Services", "description": "Comprehensive mining support solutions tailored to the challenging terrain of Sierra Leone — from the drill site to the port.", "cta": "Explore all services", "items": { "oreHaulage": { "title": "Ore Loading & Haulage", "description": "High-capacity tipper trucks designed for efficient ore movement across rugged terrain. We ensure your yield reaches its destination safely." }, "drilling": { "title": "Mine Drilling", "description": "Precision drilling services with experienced crews and state-of-the-art equipment for exploration and production." }, "logistics": { "title": "Logistics", "description": "Safe flatbed and container movement across the region. We handle the complex logistics so you can focus on mining." } } };
const rental$1 = { "eyebrow": "Equipment rental · Fleet explorer", "heading": "Fleet Available for Rent", "description": "Modern, well-maintained Hyundai and SAG (Sagmoto) heavy machinery ready for deployment — with flexible rental terms to match your project timeline. Select a machine to explore its specifications and technology.", "button": { "fleet": "View Full Fleet" }, "requestMachine": "Request this machine", "whatsappText": "Hello, I would like to check availability and rates for: {{machine}}.", "featuredModel": "Featured model", "specLabels": { "operatingWeight": "Operating weight", "enginePower": "Engine power", "bucketCapacity": "Bucket capacity", "bladeCapacity": "Blade capacity", "payload": "Rated payload", "drive": "Configurations", "model": "Model", "type": "Type", "ratedPower": "Rated power", "emission": "Emission standard", "torque": "Max. torque", "heapedCapacity": "Heaped body capacity", "tippingAngle": "Tipping angle", "transmission": "Transmission", "engine": "Engine", "machineClass": "Machine class", "groundClearance": "Ground clearance", "trackConfig": "Track configurations" }, "specValues": { "articulatedDumpTruck": "Articulated dump truck", "fullTime6x6": "Full-time 6x6", "fiveSpeedLockup": "5-speed with lock-up clutch", "class30t": "30-tonne class", "autoRetarder": "Automatic with retarder" }, "items": { "excavators": { "title": "Excavators", "description": "Heavy duty excavators for large scale earth moving.", "longDescription": "Heavy-duty Hyundai HX-series crawler excavators for large-scale earth moving, mass excavation and loading haul trucks at the pit face. Our excavator fleet covers the 21–35 tonne class, with 120–210 kW engines and 0.8–2.1 m³ buckets.", "features": ["Hi MATE telematics for remote monitoring of machine activity and performance", "AAVM camera system giving the operator a 360° view around the machine", "IMOD detection warns when people or objects come within 5 metres", "Cummins engines balancing power, precise control and lower running costs"] }, "bulldozers": { "title": "Bulldozers", "description": "Powerful bulldozers for site clearing and preparation.", "longDescription": "Powerful Hyundai crawler dozers for site clearing, levelling and preparation before mining and construction work begins. Our bulldozers cover the 18–38 tonne class with 150–320 kW engines and 3.5–7.0 m³ blades.", "features": ["Hyundai HD-series crawler dozer platform", "XL and low-ground-pressure (LGP) track configurations for soft or wet ground", "Built for site clearing, levelling and preparation"] }, "loaders": { "title": "Front Loaders", "description": "Versatile loaders for material handling and loading.", "longDescription": "Versatile Hyundai HL-series wheel loaders for material handling, stockpile work and loading ore into haul trucks. Our loaders range from 12 to 25 tonnes with 100–180 kW engines and 1.8–4.5 m³ buckets.", "features": ["Onboard weighing system to measure every bucket and manage production", "Smart Power mode — up to 5% fuel savings in heavy-load work", "AAVM 360° view and IMOD object detection within 5 metres", "Hydraulic locking differential and Z-bar linkage for strong lifting and tilt forces"] }, "dumpTrucks": { "title": "Heavy Dump Trucks", "description": "6x6 and 8x8 configurations for all terrains.", "longDescription": "Hyundai articulated dump trucks for long hauls across rough, uneven terrain, with 6x6 and 8x8 configurations for all terrains. Our featured Hyundai HA45A carries a rated payload of 41 tonnes.", "features": ["Full-time 6x6 drive with automatic transmission and retarder", "Self-levelling hydro-gas front suspension for rough haul roads", "70° tipping angle and 26 m³ heaped body for fast, clean dumping", 'Auto-grease system, 7" colour display and Hi MATE telematics'] }, "tipperTrucks": { "title": "Tipper Trucks", "description": "High-capacity 8x4 tipper trucks for hauling.", "longDescription": "High-capacity SAG (Sagmoto) tipper trucks for hauling ore and bulk material on mining operations and construction projects. Well-maintained and ready for deployment across Sierra Leone.", "features": ["Weichai WP12 / WP13 diesel engines from 420 to 580 HP", "Locking inter-axle and inter-wheel differentials for off-road traction", "320 mm to over 400 mm ground clearance on off-road models", "Reinforced chassis frames with additional cross-members", "Transmission options including FAST manual / AMT, ZF and Allison automatic"] } }, "card": { "viewSpecs": "View Specs" }, "fleetRange": "CMS fleet range", "referenceModel": "Manufacturer reference model", "technology": "Technology & features", "sourceNote": "Manufacturer published data ({{source}}). Specifications vary by model and configuration.", "brandLabel": "Built by", "selectMachine": "Select a machine", "machineTypes": "Machine types" };
const keyAttributes$1 = { "eyebrow": "Why choose us", "heading": "Why Choose Us", "description": "Our commitment to excellence drives everything we do.", "points": ["International safety standards", "Deep knowledge of West African terrain", "Fleet maintained to rigorous standards", "24/7 operational support"], "items": { "capacity": { "title": "Capacity", "description": "Our trucks offer **superior capacity** for heavy-duty transportation needs.", "boldText": "superior capacity" }, "reliability": { "title": "Reliability", "description": "Engineered for **maximum reliability**, ensuring consistent performance on-site.", "boldText": "maximum reliability" }, "efficiency": { "title": "Efficiency", "description": "Designed to enhance **operational efficiency** and reduce transit times.", "boldText": "operational efficiency" }, "versatility": { "title": "Versatility", "description": "Our trucks are **versatile** for various hauling applications.", "boldText": "versatile" } } };
const process$1 = { "eyebrow": "How we work", "heading": "From First Call to Final Delivery", "description": "An integrated approach that bridges the gap between extraction and export.", "steps": [{ "title": "Consult", "text": "Tell us about your location, timeline and requirements — by phone, email, WhatsApp or our contact form." }, { "title": "Plan", "text": "Our Freetown team prepares a customized service proposal matched to your site and schedule." }, { "title": "Deploy", "text": "We mobilize well-maintained equipment and trained personnel wherever you need them in Sierra Leone." }, { "title": "Deliver & Support", "text": "From the moment ore is drilled to the moment it reaches the port, we keep your materials moving — backed by 24/7 support." }] };
const faq$1 = { "eyebrow": "FAQ", "heading": "Frequently Asked Questions", "description": "Quick answers about our services, fleet and coverage. Can't find what you need? Our team is one call away.", "items": [{ "question": "What services does Continental Mining Services offer?", "answer": "We provide six core services: ore loading and haulage, mine drilling (exploration and blast hole), flatbed cargo movement for heavy machinery, port-to-site container movement, tipper truck rentals, and earth moving equipment rental." }, { "question": "Where in Sierra Leone do you operate?", "answer": "We are headquartered in Freetown and deploy equipment and personnel across Sierra Leone — from the iron-ore rich northern districts to the diamond fields of the east." }, { "question": "What equipment is available for rent?", "answer": "Our rental fleet includes excavators, bulldozers, front loaders, compactors, tipper trucks and heavy dump trucks in 6x6 and 8x8 configurations. Rental terms are flexible to match your project timeline." }, { "question": "How do I request a quote?", "answer": "Message us on WhatsApp or call +232 75 311632, email info@continental-miningservices.com, or use our contact form. Share your location, timeline and requirements and we will prepare a customized service proposal." }, { "question": "How do you manage safety on site?", "answer": "Safety is our culture. All operators undergo rigorous training, personal protective equipment is mandatory, machinery is regularly inspected and equipped with modern telemetry, and we comply with local and international mining safety regulations." }, { "question": "Do you provide support outside business hours?", "answer": "Yes. We offer 24/7 operational support so your operations never face downtime due to equipment failure." }] };
const cta$1 = { "heading": "Ready to Optimize Your Operations?", "description": "Contact us today to discuss your mining logistics and equipment needs.", "button": "Get in Touch" };
const nav$1 = { "links": { "home": "Home", "fleetRentals": "Fleet Rentals", "services": "Services", "contact": "Contact", "aboutUs": "About Us" }, "button": { "quote": "Request Quote" }, "mobile": { "language": "Language", "open": "Open menu", "title": "Menu" } };
const footer$1 = { "description": "Delivering capacity, safety, and efficiency to Sierra Leone's mining sector.", "sections": { "contact": "Contact", "quickLinks": "Quick Links", "services": "Services", "company": "Company" }, "location": "Freetown, Sierra Leone", "support": "24/7 operational support", "links": { "home": "Home", "services": "Services", "contact": "Contact", "equipmentRental": "Equipment Rental" }, "language": "Language", "backToTop": "Back to top", "copyright": "Continental Mining Services. All rights reserved.", "privacyPolicy": "Privacy Policy" };
const notFound$1 = { "pageMeta": { "title": "Page Not Found | Continental Mining Services" }, "code": "404", "title": "This site doesn't exist on our map", "text": "The page you are looking for may have moved or no longer exists.", "home": "Back to home", "services": "View our services" };
const about$1 = { "pageMeta": { "title": "About Us – Mining Logistics Partner in Sierra Leone | Continental Mining", "slug": "/about", "description": "Learn about Continental Mining Services: a Freetown-based mining logistics partner combining international safety standards with deep local knowledge." }, "pageHeader": { "eyebrow": "About CMS", "title": "Building Africa's Mining Future", "subtitle": "A dedicated partner for heavy logistics and mining support in West Africa.", "breadcrumbs": ["Home", "About Us"] }, "companyProfile": { "eyebrow": "Our story", "headline": "Who We Are", "bodyParagraphs": ["Continental Mining Services (CMS) is a premier provider of mining logistics and support services based in Freetown, Sierra Leone. We specialize in the critical 'last mile' of mining operations—from ore haulage and precision drilling to the movement of heavy machinery.", "Founded with a vision to modernize local mining infrastructure, CMS combines international safety standards with deep local knowledge of the West African terrain. Our fleet is maintained to rigorous standards, ensuring that your operations never face downtime due to equipment failure."], "imageAlt": "Engineers and managers planning a mining project around a meeting table", "statBadges": ["100% Local Expertise", "24/7 Operational Support"], "highlights": [{ "value": "Freetown", "label": "Headquarters" }, { "value": "24/7", "label": "Operational support" }, { "value": "6", "label": "Integrated services" }] }, "missionVisionValues": { "eyebrow": "What drives us", "heading": "Mission, Vision & Values", "mission": { "title": "Our Mission", "text": "To provide reliable, safe, and efficient mining support services that empower our clients to maximize their extraction potential while minimizing operational risks." }, "vision": { "title": "Our Vision", "text": "To become the leading mining logistics partner in West Africa, known for our integrity, modern fleet, and unwavering commitment to safety." }, "coreValues": { "title": "Core Values", "list": ["Safety First", "Operational Integrity", "Community Respect", "Technical Excellence"] } }, "safetyCommitment": { "eyebrow": "Health & safety", "headline": "Uncompromising Safety Standards", "text": "In the mining industry, safety is not just a policy—it is our culture. All CMS operators undergo rigorous training, and our machinery is equipped with modern telemetry and safety features to protect both personnel and the environment.", "policyTitle": "Mining Safety Policy & Best Practices", "imageAlt": "Mining crew wearing personal protective equipment on site", "policy": [{ "title": "Comprehensive Training", "text": "All personnel undergo rigorous safety training before entering mining sites." }, { "title": "Personal Protective Equipment", "text": "Mandatory helmets, gloves, boots, high-visibility vests and respiratory protection." }, { "title": "Hazard Identification", "text": "Continuous risk assessment and hazard identification to prevent accidents." }, { "title": "Equipment Safety", "text": "Regular inspection and maintenance of all machinery and vehicles." }, { "title": "Emergency Preparedness", "text": "Clear evacuation plans, regular drills and accessible first-aid kits." }, { "title": "Environmental Protection", "text": "Measures to prevent contamination and protect local ecosystems." }, { "title": "Health Monitoring", "text": "Ongoing health checks for all workers to detect and address issues early." }, { "title": "Communication", "text": "Reliable communication systems for reporting hazards and emergencies." }, { "title": "Compliance", "text": "Adherence to all local and international mining safety regulations and standards." }], "ctaButton": { "text": "View Our Safety Policy", "link": "#" } }, "regionFocus": { "eyebrow": "Where we operate", "headline": "Operating in Sierra Leone", "text": "Headquartered in Freetown, we understand the unique logistical challenges of the region. From the iron ore rich northern districts to the diamond fields of the east, CMS has the capability to deploy equipment and personnel where you need them most.", "mapHighlight": "Mineral processing plant at a mining site in Sierra Leone", "regions": [{ "name": "Freetown", "detail": "Headquarters and operations base" }, { "name": "Northern districts", "detail": "Iron-ore rich mining regions" }, { "name": "Eastern districts", "detail": "Diamond fields" }, { "name": "Port to site", "detail": "Container and cargo movement nationwide" }] }, "companyAttributes": { "eyebrow": "Capabilities", "heading": "Our Core Strengths", "description": "Built on a foundation of excellence and innovation.", "items": { "capacity": { "title": "Capacity", "description": "Our cranes offer lifting capacities of 70mt to 130mt.", "boldText": "70mt to 130mt" }, "versatility": { "title": "Versatility", "description": "Designed for a variety of lifting applications in mining.", "boldText": "variety of lifting applications" }, "safety": { "title": "Safety", "description": "Equipped with advanced safety features for **secure** operations.", "boldText": "secure" }, "technology": { "title": "Technology", "description": "Integrates modern technology for enhanced lifting efficiency.", "boldText": "modern technology" } } }, "cta": { "headline": "Ready to Optimize Your Operation?", "subheadline": "Contact our team to discuss your project requirements.", "buttonText": "Contact Us" } };
const servicesPage$1 = { "pageMeta": { "title": "Ore Haulage, Drilling & Equipment Rental | Continental Mining Services", "slug": "/services", "description": "Ore haulage, mine drilling, flatbed cargo, container movement, tipper truck and earth moving equipment rental across Sierra Leone. Request a quote today." }, "pageHeader": { "eyebrow": "Our services", "title": "Operational Excellence", "subtitle": "Delivering efficient, safe, and scalable solutions for the mining lifecycle.", "breadcrumbs": ["Home", "Services"] }, "introText": { "eyebrow": "Integrated support", "headline": "End-to-End Mining Support", "text": "Continental Mining Services streamlines your operations by bridging the gap between extraction and export. Our integrated approach ensures that from the moment ore is drilled to the moment it reaches the port, your materials are moving efficiently.", "jumpTo": "Jump to a service" }, "detailedList": { "oreHaulage": { "title": "Ore Loading & Haulage", "subtitle": "High-Volume Material Movement", "description": "Our core competency lies in the efficient loading and transportation of mined materials. We utilize a fleet of high-capacity tipper trucks and front loaders designed to handle the rough terrain of Sierra Leone's mining districts.", "featureCards": [{ "title": "Efficient Operations", "description": "Our team excels in loading and transporting ore safely." }, { "title": "Safe Transport", "description": "We ensure secure delivery of ore to clients." }], "ctaText": "Request Haulage Quote", "whatsappText": "Hello, I would like to request a quote for ore haulage services.", "keyFacts": ["High-capacity tipper trucks", "Front-loader loading", "Built for rough terrain"] }, "mineDrilling": { "title": "Mine Drilling Services", "subtitle": "Precision Extraction & Exploration", "description": "We offer specialized drilling services for both exploration and blast hole drilling. Our experienced crews use modern rigs to ensure depth accuracy and sample integrity, critical for geological assessment and efficient blasting.", "featureCards": [{ "title": "Precision Drilling", "description": "Advanced techniques for accurate mineral extraction." }, { "title": "Experienced Crew", "description": "Skilled professionals ensuring efficient operations." }], "ctaText": "Discuss Drilling Needs", "whatsappText": "Hello, I would like to discuss my mine drilling requirements.", "keyFacts": ["Exploration drilling", "Blast hole drilling", "Depth accuracy & sample integrity"] }, "flatbedCargo": { "title": "Flatbed Cargo Movement", "subtitle": "Heavy Machinery Transportation", "description": "We provide reliable flatbed cargo movement services for transporting heavy machinery and equipment across all terrains. Our fleet is equipped to handle large-scale logistics needs with precision and care.", "featureCards": [{ "title": "Efficient Transport", "description": "Reliable logistics for transporting heavy materials." }, { "title": "Seamless Operations", "description": "Streamlined processes for quick loading and unloading." }, { "title": "Versatile Solutions", "description": "Adaptable services for diverse cargo needs." }], "ctaText": "Get Flatbed Rates", "whatsappText": "Hello, I am interested in getting rates for flatbed cargo movement.", "keyFacts": ["Heavy machinery transport", "All terrains", "Large-scale logistics"] }, "containerMovement": { "title": "Container Movement", "subtitle": "Port-to-Site Connectivity", "description": "We facilitate seamless container movement from ports to your site. Our services ensure secure and timely transportation of shipping containers, supporting your supply chain operations.", "featureCards": [{ "title": "Efficient Loading", "description": "We facilitate seamless loading and unloading operations." }, { "title": "Timely Delivery", "description": "Ensuring on-time transportation to specified destinations." }], "ctaText": "Request Container Services", "whatsappText": "Hello, I would like to request information about your container movement services.", "keyFacts": ["Port-to-site", "Secure & on time", "Supply chain support"] }, "tipperTruckRentals": { "title": "Tipper Truck Rentals", "subtitle": "High-Capacity Vehicle Solutions", "description": "Our tipper truck rental fleet offers high-capacity vehicles for various hauling needs. Whether for mining operations or construction projects, we provide well-maintained trucks ready for deployment.", "featureCards": [{ "title": "High-Capacity Fleet", "description": "Trucks available for various hauling needs." }, { "title": "Reliable Equipment", "description": "Well-maintained vehicles ensuring consistent performance." }], "ctaText": "View Truck Fleet", "whatsappText": "Hello, I would like to check availability and rates for tipper truck rentals.", "keyFacts": ["SAG (Sagmoto) tipper trucks", "Mining & construction", "Deployment-ready"] }, "earthMovingRental": { "title": "Earth Moving Equipment Rental", "subtitle": "Advanced Machinery Solutions", "description": "We offer advanced machinery rental for earthworks and construction. Our fleet includes excavators, bulldozers, and compactors, all maintained to the highest standards for your project needs.", "featureCards": [{ "title": "Modern Equipment", "description": "Advanced machinery for earthworks and construction." }, { "title": "Flexible Rental Terms", "description": "Adaptable rental solutions to match your project timeline." }], "ctaText": "Browse Equipment", "whatsappText": "Hello, I would like to check availability and rates for earth moving equipment.", "keyFacts": ["Hyundai excavators", "Bulldozers & compactors", "Flexible rental terms"] } }, "rentalTeaser": { "eyebrow": "Equipment rental", "headline": "Need Machinery?", "text": "We also offer direct rentals of our heavy equipment fleet, including excavators, bulldozers, and compactors.", "buttonText": "View Rental Catalog", "buttonLink": "/" }, "ctaBanner": { "headline": "Streamline Your Operations Today", "subheadline": "Contact our Freetown team for a customized service proposal.", "buttonText": "Contact Us" }, "keyFactsLabel": "At a glance" };
const contactPage$1 = { "pageMeta": { "title": "Contact Us – Freetown, Sierra Leone | Continental Mining Services", "slug": "/contact-us", "description": "Contact Continental Mining Services in Freetown for quotes on ore haulage, mine drilling, logistics and equipment rental. Call or WhatsApp +232 75 311632." }, "pageHeader": { "eyebrow": "Contact", "breadcrumbs": ["Home", "Contact"], "title": "Start Your Project", "subtitle": "Reach out to our team for inquiries, fleet availability, and project quotes." }, "contactInfo": { "title": "Contact Information", "description": "Our team is available to discuss your mining logistics needs.", "headquarters": { "label": "Headquarters", "location": "Freetown, Sierra Leone" }, "email": { "label": "Email Us" }, "phone": { "label": "Call Us" }, "whatsapp": { "label": "WhatsApp", "value": "Chat with our team" }, "support": { "label": "Operational Support", "value": "Available 24/7" }, "follow": "Follow us" }, "form": { "title": "Send a Message", "intro": "Tell us what you need and we will get back to you with a customized proposal.", "fields": { "fullName": { "label": "Full Name", "placeholder": "John Doe" }, "email": { "label": "Email Address", "placeholder": "john@company.com" }, "phone": { "label": "Phone Number", "placeholder": "+232..." }, "interest": { "label": "I am interested in...", "placeholder": "Select an option" }, "message": { "label": "Project Details", "placeholder": "Tell us about your location, timeline, and requirements..." } }, "interestOptions": ["General Inquiry", "Ore Haulage Quote", "Drilling Services", "Equipment Rental", "Logistics/Cargo"], "optional": "optional", "submitButton": "Send Message", "whatsappButton": "Send via WhatsApp instead", "emailSubject": "Website enquiry", "successTitle": "Almost there!", "successText": "Your email app should now open with your message ready to send. Prefer instant chat? Send the same details on WhatsApp.", "sendAnother": "Edit message" }, "map": { "eyebrow": "Visit us", "location": "Freetown, Sierra Leone", "title": "Map showing Freetown, Sierra Leone", "directions": "Get directions" } };
const chain$1 = { "eyebrow": "The mining logistics chain", "heading": "From Pit to Port", "description": "We bridge the gap between extraction and export. Explore how our services connect along the chain — from the moment ore is drilled to the moment it reaches the port.", "stage": "Stage", "viewService": "View service", "steps": [{ "title": "Drill", "text": "Exploration and blast hole drilling with modern rigs, ensuring the depth accuracy and sample integrity critical for geological assessment and efficient blasting." }, { "title": "Load", "text": "Excavators and front loaders load mined material efficiently and safely at the face, keeping trucks moving and production on schedule." }, { "title": "Haul", "text": "High-capacity tipper and dump trucks move ore across the rough terrain of Sierra Leone's mining districts, delivering your yield safely." }, { "title": "Relocate", "text": "Flatbed trailers transport heavy machinery and equipment across all terrains, with streamlined loading and unloading." }, { "title": "Ship", "text": "Containers move securely and on time between the port and your site, supporting your supply chain operations." }] };
const enTranslation = {
  welcome: welcome$1,
  description: description$1,
  common: common$1,
  home: home$1,
  hero: hero$1,
  services: services$1,
  rental: rental$1,
  keyAttributes: keyAttributes$1,
  process: process$1,
  faq: faq$1,
  cta: cta$1,
  nav: nav$1,
  footer: footer$1,
  notFound: notFound$1,
  about: about$1,
  servicesPage: servicesPage$1,
  contactPage: contactPage$1,
  chain: chain$1
};
const welcome = "Welcome to our app - fr";
const description = "Your go-to multilingual React application. - fr";
const common = { "skipToContent": "Aller au contenu principal", "requestQuote": "Demander un Devis", "whatsapp": "WhatsApp", "callUs": "Appelez-nous", "emailUs": "Écrivez-nous", "learnMore": "En savoir plus", "close": "Fermer", "previous": "Image précédente", "next": "Image suivante", "goToSlide": "Aller à l'image {{n}}", "scrollDown": "Défiler pour explorer", "whatsappGeneric": "Bonjour, je souhaite demander un devis. Vous pouvez aussi me joindre à info@continental-miningservices.com", "sourceLabel": "Source" };
const home = { "pageMeta": { "title": "Logistique Minière et Location d'Équipements en Sierra Leone | Continental Mining", "description": "Partenaire minier de premier plan en Sierra Leone. Transport de minerai, forage, logistique par remorque plate et conteneurs, location d'équipements lourds — 24h/24." } };
const hero = { "badge": "Partenaire Minier de Premier Plan en Sierra Leone", "location": "Freetown · Sierra Leone", "heading": { "part1": "Logistique Minière", "part2": "Leaders dans la Région" }, "description": "Du Transport de Minerai à la Location d'Équipements Lourds. Nous offrons capacité, sécurité et efficacité à vos opérations.", "button": { "quote": "Demander un Devis", "fleet": "Voir la Flotte de Location" }, "image": { "alt": "Pelle Hyundai chargeant de la roche dans un tombereau minier sur une mine à ciel ouvert" }, "stats": [{ "value": "6", "label": "Services miniers clés" }, { "value": "24/7", "label": "Support opérationnel" }, { "value": "100%", "label": "Expertise locale" }, { "value": "41 t", "label": "Charge utile nominale" }] };
const services = { "eyebrow": "Nos métiers", "heading": "Services Principaux", "description": "Solutions complètes de soutien minier adaptées au terrain difficile de la Sierra Leone — du site de forage jusqu'au port.", "cta": "Découvrir tous les services", "items": { "oreHaulage": { "title": "Chargement et Transport de Minerai", "description": "Camions-bennes à haute capacité conçus pour le transport efficace de minerai sur terrain accidenté. Nous garantissons que votre production atteint sa destination en toute sécurité." }, "drilling": { "title": "Forage Minier", "description": "Services de forage de précision avec des équipes expérimentées et des équipements de pointe pour l'exploration et la production." }, "logistics": { "title": "Logistique", "description": "Transport sécurisé de remorques plates et de conteneurs dans toute la région. Nous gérons la logistique complexe pour que vous puissiez vous concentrer sur l'exploitation minière." } } };
const rental = { "eyebrow": "Location d'équipements · Explorateur de flotte", "heading": "Flotte Disponible à la Location", "description": "Machinerie lourde Hyundai et SAG (Sagmoto) moderne et bien entretenue, prête à être déployée — avec des conditions de location flexibles adaptées à votre projet. Sélectionnez une machine pour découvrir ses spécifications et sa technologie.", "button": { "fleet": "Voir la Flotte Complète" }, "requestMachine": "Demander cette machine", "whatsappText": "Bonjour, je souhaite connaître la disponibilité et les tarifs pour : {{machine}}.", "featuredModel": "Modèle phare", "specLabels": { "operatingWeight": "Poids en ordre de marche", "enginePower": "Puissance moteur", "bucketCapacity": "Capacité du godet", "bladeCapacity": "Capacité de la lame", "payload": "Charge utile nominale", "drive": "Configurations", "model": "Modèle", "type": "Type", "ratedPower": "Puissance nominale", "emission": "Norme d'émission", "torque": "Couple max.", "heapedCapacity": "Capacité de benne à ras bord", "tippingAngle": "Angle de basculement", "transmission": "Transmission", "engine": "Moteur", "machineClass": "Catégorie", "groundClearance": "Garde au sol", "trackConfig": "Configurations de chenilles" }, "specValues": { "articulatedDumpTruck": "Tombereau articulé", "fullTime6x6": "6x6 permanent", "fiveSpeedLockup": "5 vitesses avec embrayage de verrouillage", "class30t": "Catégorie 30 tonnes", "autoRetarder": "Automatique avec ralentisseur" }, "items": { "excavators": { "title": "Pelles Mécaniques", "description": "Pelles mécaniques robustes pour les travaux de terrassement à grande échelle.", "longDescription": "Pelles sur chenilles Hyundai série HX pour les grands travaux de terrassement, l'excavation de masse et le chargement des camions au front de taille. Notre flotte couvre la catégorie 21–35 tonnes, avec des moteurs de 120–210 kW et des godets de 0,8–2,1 m³.", "features": ["Télématique Hi MATE pour le suivi à distance de l'activité et des performances", "Système de caméras AAVM offrant une vue à 360° autour de la machine", "Détection IMOD : alerte lorsque des personnes ou objets approchent à moins de 5 mètres", "Moteurs Cummins alliant puissance, contrôle précis et coûts d'exploitation réduits"] }, "bulldozers": { "title": "Bulldozers", "description": "Bulldozers puissants pour le déblaiement et la préparation des sites.", "longDescription": "Bouteurs sur chenilles Hyundai puissants pour le défrichage, le nivellement et la préparation des sites avant les travaux miniers et de construction. Nos bulldozers couvrent la catégorie 18–38 tonnes, avec des moteurs de 150–320 kW et des lames de 3,5–7,0 m³.", "features": ["Plateforme de bouteurs sur chenilles Hyundai série HD", "Configurations de chenilles XL et basse pression au sol (LGP) pour les sols meubles ou humides", "Conçus pour le défrichage, le nivellement et la préparation des sites"] }, "loaders": { "title": "Chargeuses Frontales", "description": "Chargeuses polyvalentes pour la manutention et le chargement de matériaux.", "longDescription": "Chargeuses sur pneus Hyundai série HL polyvalentes pour la manutention, le travail sur stocks et le chargement du minerai dans les camions. Nos chargeuses vont de 12 à 25 tonnes, avec des moteurs de 100–180 kW et des godets de 1,8–4,5 m³.", "features": ["Système de pesage embarqué pour mesurer chaque godet et piloter la production", "Mode Smart Power — jusqu'à 5 % d'économie de carburant en travaux lourds", "Vue à 360° AAVM et détection d'objets IMOD à moins de 5 mètres", "Différentiel à blocage hydraulique et cinématique en Z pour de fortes forces de levage et de cavage"] }, "dumpTrucks": { "title": "Camions à Benne Basculante Lourds", "description": "Configurations 6x6 et 8x8 pour tous les terrains.", "longDescription": "Tombereaux articulés Hyundai pour les longs trajets sur terrains accidentés, en configurations 6x6 et 8x8 pour tous les terrains. Notre modèle phare, le Hyundai HA45A, offre une charge utile nominale de 41 tonnes.", "features": ["Transmission intégrale 6x6 permanente, boîte automatique et ralentisseur", "Suspension avant hydropneumatique autonivelante pour les pistes difficiles", "Angle de basculement de 70° et benne de 26 m³ à ras bord pour un déchargement rapide", 'Graissage automatique, écran couleur 7" et télématique Hi MATE'] }, "tipperTrucks": { "title": "Camions-Bennes", "description": "Camions-bennes 8x4 à haute capacité pour le transport.", "longDescription": "Camions-bennes SAG (Sagmoto) à haute capacité pour le transport de minerai et de matériaux en vrac sur les opérations minières et les chantiers de construction. Bien entretenus et prêts à être déployés dans toute la Sierra Leone.", "features": ["Moteurs diesel Weichai WP12 / WP13 de 420 à 580 ch", "Différentiels à blocage inter-ponts et inter-roues pour la motricité tout-terrain", "Garde au sol de 320 mm à plus de 400 mm sur les modèles tout-terrain", "Châssis renforcés avec traverses supplémentaires", "Options de transmission FAST manuelle / AMT, ZF et Allison automatique"] } }, "card": { "viewSpecs": "Voir les Spécifications" }, "fleetRange": "Gamme de la flotte CMS", "referenceModel": "Modèle de référence constructeur", "technology": "Technologie et équipements", "sourceNote": "Données publiées par le constructeur ({{source}}). Les spécifications varient selon le modèle et la configuration.", "brandLabel": "Construit par", "selectMachine": "Choisir une machine", "machineTypes": "Types de machines" };
const keyAttributes = { "eyebrow": "Pourquoi CMS", "heading": "Pourquoi Nous Choisir", "description": "Notre engagement envers l'excellence guide tout ce que nous faisons.", "points": ["Normes de sécurité internationales", "Connaissance approfondie du terrain ouest-africain", "Flotte entretenue selon des normes rigoureuses", "Support opérationnel 24h/24, 7j/7"], "items": { "capacity": { "title": "Capacité", "description": "Nos camions offrent une **capacité supérieure** pour les besoins de transport lourd.", "boldText": "capacité supérieure" }, "reliability": { "title": "Fiabilité", "description": "Conçus pour une **fiabilité maximale**, garantissant des performances constantes sur site.", "boldText": "fiabilité maximale" }, "efficiency": { "title": "Efficacité", "description": "Conçus pour améliorer **l'efficacité opérationnelle** et réduire les temps de transit.", "boldText": "l'efficacité opérationnelle" }, "versatility": { "title": "Polyvalence", "description": "Nos camions sont **polyvalents** pour diverses applications de transport.", "boldText": "polyvalents" } } };
const process = { "eyebrow": "Notre méthode", "heading": "Du Premier Appel à la Livraison Finale", "description": "Une approche intégrée qui comble le fossé entre l'extraction et l'exportation.", "steps": [{ "title": "Consulter", "text": "Parlez-nous de votre emplacement, de votre calendrier et de vos exigences — par téléphone, email, WhatsApp ou via notre formulaire." }, { "title": "Planifier", "text": "Notre équipe de Freetown prépare une proposition de service personnalisée, adaptée à votre site et à votre calendrier." }, { "title": "Déployer", "text": "Nous mobilisons des équipements bien entretenus et du personnel formé partout où vous en avez besoin en Sierra Leone." }, { "title": "Livrer et Accompagner", "text": "Du forage du minerai jusqu'à son arrivée au port, vos matériaux circulent efficacement — avec un support 24h/24." }] };
const faq = { "eyebrow": "FAQ", "heading": "Questions Fréquentes", "description": "Réponses rapides sur nos services, notre flotte et notre couverture. Vous ne trouvez pas votre réponse ? Notre équipe est à un appel.", "items": [{ "question": "Quels services propose Continental Mining Services ?", "answer": "Nous proposons six services clés : chargement et transport de minerai, forage minier (exploration et trous de mine), transport de machinerie lourde sur remorque plate, mouvement de conteneurs du port au site, location de camions-bennes et location d'équipements de terrassement." }, { "question": "Où intervenez-vous en Sierra Leone ?", "answer": "Notre siège est à Freetown et nous déployons équipements et personnel dans toute la Sierra Leone — des districts du nord riches en minerai de fer aux champs de diamants de l'est." }, { "question": "Quels équipements sont disponibles à la location ?", "answer": "Notre flotte comprend des pelles mécaniques, des bulldozers, des chargeuses frontales, des compacteurs, des camions-bennes et des tombereaux lourds en configurations 6x6 et 8x8. Les conditions de location sont flexibles pour s'adapter à votre projet." }, { "question": "Comment demander un devis ?", "answer": "Écrivez-nous sur WhatsApp ou appelez le +232 75 311632, envoyez un email à info@continental-miningservices.com, ou utilisez notre formulaire de contact. Indiquez votre emplacement, votre calendrier et vos besoins : nous préparerons une proposition personnalisée." }, { "question": "Comment gérez-vous la sécurité sur site ?", "answer": "La sécurité est notre culture. Tous les opérateurs suivent une formation rigoureuse, les équipements de protection individuelle sont obligatoires, les machines sont régulièrement inspectées et équipées de télémétrie moderne, et nous respectons les réglementations locales et internationales." }, { "question": "Assurez-vous un support en dehors des heures de bureau ?", "answer": "Oui. Nous offrons un support opérationnel 24h/24, 7j/7 afin que vos opérations ne subissent jamais d'arrêt dû à une défaillance d'équipement." }] };
const cta = { "heading": "Prêt à Optimiser Vos Opérations ?", "description": "Contactez-nous dès aujourd'hui pour discuter de vos besoins en logistique minière et en équipements.", "button": "Nous Contacter" };
const nav = { "links": { "home": "Accueil", "fleetRentals": "Location de Flotte", "services": "Services", "contact": "Contact", "aboutUs": "À Propos" }, "button": { "quote": "Demander un Devis" }, "mobile": { "language": "Langue", "open": "Ouvrir le menu", "title": "Menu" } };
const footer = { "description": "Offrant capacité, sécurité et efficacité au secteur minier de la Sierra Leone.", "sections": { "contact": "Contact", "quickLinks": "Liens Rapides", "services": "Services", "company": "Entreprise" }, "location": "Freetown, Sierra Leone", "support": "Support opérationnel 24h/24", "links": { "home": "Accueil", "services": "Services", "contact": "Contact", "equipmentRental": "Location d'Équipement" }, "language": "Langue", "backToTop": "Retour en haut", "copyright": "Continental Mining Services. Tous droits réservés.", "privacyPolicy": "Politique de Confidentialité" };
const notFound = { "pageMeta": { "title": "Page Introuvable | Continental Mining Services" }, "code": "404", "title": "Ce site ne figure pas sur notre carte", "text": "La page que vous recherchez a peut-être été déplacée ou n'existe plus.", "home": "Retour à l'accueil", "services": "Voir nos services" };
const about = { "pageMeta": { "title": "À Propos – Partenaire en Logistique Minière en Sierra Leone | Continental Mining", "slug": "/about", "description": "Découvrez Continental Mining Services : un partenaire en logistique minière basé à Freetown, alliant normes de sécurité internationales et connaissance locale." }, "pageHeader": { "eyebrow": "À propos de CMS", "title": "Construire l'Avenir Minier de l'Afrique", "subtitle": "Un partenaire dédié pour la logistique lourde et le soutien minier en Afrique de l'Ouest.", "breadcrumbs": ["Accueil", "À Propos"] }, "companyProfile": { "eyebrow": "Notre histoire", "headline": "Qui Nous Sommes", "bodyParagraphs": ["Continental Mining Services (CMS) est un fournisseur de premier plan de services de logistique et de soutien minier basé à Freetown, en Sierra Leone. Nous nous spécialisons dans le 'dernier kilomètre' critique des opérations minières—du transport de minerai et du forage de précision au déplacement de machinerie lourde.", "Fondée avec une vision de moderniser l'infrastructure minière locale, CMS combine les normes de sécurité internationales avec une connaissance approfondie du terrain ouest-africain. Notre flotte est maintenue selon des normes rigoureuses, garantissant que vos opérations ne rencontrent jamais d'arrêt en raison d'une défaillance d'équipement."], "imageAlt": "Ingénieurs et responsables planifiant un projet minier autour d'une table de réunion", "statBadges": ["100% Expertise Locale", "Support Opérationnel 24/7"], "highlights": [{ "value": "Freetown", "label": "Siège social" }, { "value": "24/7", "label": "Support opérationnel" }, { "value": "6", "label": "Services intégrés" }] }, "missionVisionValues": { "eyebrow": "Ce qui nous anime", "heading": "Mission, Vision et Valeurs", "mission": { "title": "Notre Mission", "text": "Fournir des services de soutien minier fiables, sûrs et efficaces qui permettent à nos clients de maximiser leur potentiel d'extraction tout en minimisant les risques opérationnels." }, "vision": { "title": "Notre Vision", "text": "Devenir le partenaire de logistique minière de premier plan en Afrique de l'Ouest, reconnu pour notre intégrité, notre flotte moderne et notre engagement indéfectible envers la sécurité." }, "coreValues": { "title": "Valeurs Fondamentales", "list": ["Sécurité d'Abord", "Intégrité Opérationnelle", "Respect de la Communauté", "Excellence Technique"] } }, "safetyCommitment": { "eyebrow": "Santé et sécurité", "headline": "Normes de Sécurité Intransigeantes", "text": "Dans l'industrie minière, la sécurité n'est pas seulement une politique—c'est notre culture. Tous les opérateurs CMS suivent une formation rigoureuse, et notre machinerie est équipée de télémétrie moderne et de fonctionnalités de sécurité pour protéger à la fois le personnel et l'environnement.", "policyTitle": "Politique de Sécurité Minière et Bonnes Pratiques", "imageAlt": "Équipe minière portant des équipements de protection individuelle sur site", "policy": [{ "title": "Formation Complète", "text": "Tout le personnel suit une formation rigoureuse à la sécurité avant d'accéder aux sites miniers." }, { "title": "Équipements de Protection Individuelle", "text": "Casques, gants, bottes, gilets haute visibilité et protection respiratoire obligatoires." }, { "title": "Identification des Dangers", "text": "Évaluation continue des risques et identification des dangers pour prévenir les accidents." }, { "title": "Sécurité des Équipements", "text": "Inspection et entretien réguliers de toutes les machines et de tous les véhicules." }, { "title": "Préparation aux Urgences", "text": "Plans d'évacuation clairs, exercices réguliers et trousses de premiers secours accessibles." }, { "title": "Protection de l'Environnement", "text": "Mesures pour prévenir la contamination et protéger les écosystèmes locaux." }, { "title": "Suivi de la Santé", "text": "Contrôles de santé réguliers pour tous les travailleurs afin de détecter et traiter les problèmes tôt." }, { "title": "Communication", "text": "Systèmes de communication fiables pour signaler les dangers et les urgences." }, { "title": "Conformité", "text": "Respect de toutes les réglementations et normes de sécurité minière locales et internationales." }], "ctaButton": { "text": "Voir Notre Politique de Sécurité", "link": "#" } }, "regionFocus": { "eyebrow": "Où nous intervenons", "headline": "Opérant en Sierra Leone", "text": "Basés à Freetown, nous comprenons les défis logistiques uniques de la région. Des districts du nord riches en minerai de fer aux champs de diamants de l'est, CMS a la capacité de déployer des équipements et du personnel là où vous en avez le plus besoin.", "mapHighlight": "Usine de traitement de minerai sur un site minier en Sierra Leone", "regions": [{ "name": "Freetown", "detail": "Siège social et base opérationnelle" }, { "name": "Districts du nord", "detail": "Régions minières riches en minerai de fer" }, { "name": "Districts de l'est", "detail": "Champs de diamants" }, { "name": "Du port au site", "detail": "Transport de conteneurs et de cargaisons dans tout le pays" }] }, "companyAttributes": { "eyebrow": "Capacités", "heading": "Nos Forces Principales", "description": "Construit sur une base d'excellence et d'innovation.", "items": { "capacity": { "title": "Capacité", "description": "Nos grues offrent des capacités de levage de 70mt à 130mt.", "boldText": "70mt à 130mt" }, "versatility": { "title": "Polyvalence", "description": "Conçues pour diverses applications de levage dans l'exploitation minière.", "boldText": "diverses applications de levage" }, "safety": { "title": "Sécurité", "description": "Équipées de fonctionnalités de sécurité avancées pour des opérations **sécurisées**.", "boldText": "sécurisées" }, "technology": { "title": "Technologie", "description": "Intègre une technologie moderne pour améliorer l'efficacité du levage.", "boldText": "technologie moderne" } } }, "cta": { "headline": "Prêt à Optimiser Votre Opération ?", "subheadline": "Contactez notre équipe pour discuter de vos besoins de projet.", "buttonText": "Nous Contacter" } };
const servicesPage = { "pageMeta": { "title": "Transport de Minerai, Forage et Location d'Équipements | Continental Mining", "slug": "/services", "description": "Transport de minerai, forage minier, remorque plate, conteneurs, location de camions-bennes et d'équipements de terrassement en Sierra Leone. Demandez un devis." }, "pageHeader": { "eyebrow": "Nos services", "title": "Excellence Opérationnelle", "subtitle": "Offrant des solutions efficaces, sûres et évolutives pour le cycle de vie minier.", "breadcrumbs": ["Accueil", "Services"] }, "introText": { "eyebrow": "Soutien intégré", "headline": "Soutien Minier de Bout en Bout", "text": "Continental Mining Services rationalise vos opérations en comblant le fossé entre l'extraction et l'exportation. Notre approche intégrée garantit que, du moment où le minerai est foré jusqu'au moment où il atteint le port, vos matériaux se déplacent efficacement.", "jumpTo": "Accéder à un service" }, "detailedList": { "oreHaulage": { "title": "Chargement et Transport de Minerai", "subtitle": "Mouvement de Matériaux à Grand Volume", "description": "Notre compétence principale réside dans le chargement et le transport efficaces des matériaux minés. Nous utilisons une flotte de camions-bennes à haute capacité et de chargeuses frontales conçues pour gérer le terrain accidenté des districts miniers de la Sierra Leone.", "featureCards": [{ "title": "Opérations Efficaces", "description": "Notre équipe excelle dans le chargement et le transport sécurisé du minerai." }, { "title": "Transport Sécurisé", "description": "Nous garantissons une livraison sécurisée du minerai aux clients." }], "ctaText": "Demander un Devis de Transport", "whatsappText": "Bonjour, je souhaite demander un devis pour des services de transport de minerai.", "keyFacts": ["Camions-bennes à haute capacité", "Chargement par chargeuses", "Conçu pour terrain accidenté"] }, "mineDrilling": { "title": "Services de Forage Minier", "subtitle": "Extraction et Exploration de Précision", "description": "Nous offrons des services de forage spécialisés pour l'exploration et le forage de trous de mine. Nos équipes expérimentées utilisent des installations modernes pour garantir la précision de la profondeur et l'intégrité des échantillons, essentielles pour l'évaluation géologique et le dynamitage efficace.", "featureCards": [{ "title": "Forage de Précision", "description": "Techniques avancées pour l'extraction précise des minéraux." }, { "title": "Équipe Expérimentée", "description": "Professionnels qualifiés garantissant des opérations efficaces." }], "ctaText": "Discuter des Besoins de Forage", "whatsappText": "Bonjour, je souhaite discuter de mes besoins en forage minier.", "keyFacts": ["Forage d'exploration", "Forage de trous de mine", "Précision et intégrité des échantillons"] }, "flatbedCargo": { "title": "Mouvement de Cargaison sur Remorque Plate", "subtitle": "Transport de Machinerie Lourde", "description": "Nous fournissons des services fiables de mouvement de cargaison sur remorque plate pour transporter de la machinerie et des équipements lourds sur tous les terrains. Notre flotte est équipée pour répondre aux besoins logistiques à grande échelle avec précision et soin.", "featureCards": [{ "title": "Transport Efficace", "description": "Logistique fiable pour le transport de matériaux lourds." }, { "title": "Opérations Fluides", "description": "Processus rationalisés pour un chargement et déchargement rapides." }, { "title": "Solutions Polyvalentes", "description": "Services adaptables pour divers besoins de cargaison." }], "ctaText": "Obtenir les Tarifs de Remorque Plate", "whatsappText": "Bonjour, je souhaite obtenir les tarifs pour le transport sur remorque plate.", "keyFacts": ["Transport de machinerie lourde", "Tous terrains", "Logistique à grande échelle"] }, "containerMovement": { "title": "Mouvement de Conteneurs", "subtitle": "Connectivité Port-Site", "description": "Nous facilitons le mouvement fluide des conteneurs des ports à votre site. Nos services garantissent un transport sécurisé et ponctuel des conteneurs d'expédition, soutenant vos opérations de chaîne d'approvisionnement.", "featureCards": [{ "title": "Chargement Efficace", "description": "Nous facilitons des opérations de chargement et déchargement fluides." }, { "title": "Livraison Ponctuelle", "description": "Garantissant un transport à temps vers les destinations spécifiées." }], "ctaText": "Demander des Services de Conteneurs", "whatsappText": "Bonjour, je souhaite obtenir des informations sur vos services de mouvement de conteneurs.", "keyFacts": ["Du port au site", "Sûr et ponctuel", "Chaîne d'approvisionnement"] }, "tipperTruckRentals": { "title": "Location de Camions-Bennes", "subtitle": "Solutions de Véhicules à Haute Capacité", "description": "Notre flotte de location de camions-bennes offre des véhicules à haute capacité pour divers besoins de transport. Que ce soit pour des opérations minières ou des projets de construction, nous fournissons des camions bien entretenus prêts à être déployés.", "featureCards": [{ "title": "Flotte à Haute Capacité", "description": "Camions disponibles pour divers besoins de transport." }, { "title": "Équipement Fiable", "description": "Véhicules bien entretenus garantissant une performance constante." }], "ctaText": "Voir la Flotte de Camions", "whatsappText": "Bonjour, je souhaite connaître la disponibilité et les tarifs de location de camions-bennes.", "keyFacts": ["Camions-bennes SAG (Sagmoto)", "Mines et construction", "Prêts à être déployés"] }, "earthMovingRental": { "title": "Location d'Équipement de Terrassement", "subtitle": "Solutions de Machinerie Avancée", "description": "Nous offrons la location de machinerie avancée pour les travaux de terrassement et de construction. Notre flotte comprend des excavatrices, des bulldozers et des compacteurs, tous entretenus selon les normes les plus élevées pour répondre aux besoins de votre projet.", "featureCards": [{ "title": "Équipement Moderne", "description": "Machinerie avancée pour les travaux de terrassement et de construction." }, { "title": "Conditions de Location Flexibles", "description": "Solutions de location adaptables pour correspondre au calendrier de votre projet." }], "ctaText": "Parcourir l'Équipement", "whatsappText": "Bonjour, je souhaite connaître la disponibilité et les tarifs des équipements de terrassement.", "keyFacts": ["Pelles Hyundai", "Bulldozers et compacteurs", "Location flexible"] } }, "rentalTeaser": { "eyebrow": "Location d'équipements", "headline": "Besoin de Machinerie ?", "text": "Nous offrons également la location directe de notre flotte d'équipements lourds, y compris des excavatrices, des bulldozers et des compacteurs.", "buttonText": "Voir le Catalogue de Location", "buttonLink": "/" }, "ctaBanner": { "headline": "Rationalisez Vos Opérations Aujourd'hui", "subheadline": "Contactez notre équipe de Freetown pour une proposition de service personnalisée.", "buttonText": "Nous Contacter" }, "keyFactsLabel": "En bref" };
const contactPage = { "pageMeta": { "title": "Nous Contacter – Freetown, Sierra Leone | Continental Mining Services", "slug": "/contact-us", "description": "Contactez Continental Mining Services à Freetown pour vos devis : transport de minerai, forage, logistique et location d'équipements. Appel ou WhatsApp +232 75 311632." }, "pageHeader": { "eyebrow": "Contact", "breadcrumbs": ["Accueil", "Contact"], "title": "Démarrez Votre Projet", "subtitle": "Contactez notre équipe pour des demandes de renseignements, la disponibilité de la flotte et les devis de projet." }, "contactInfo": { "title": "Informations de Contact", "description": "Notre équipe est disponible pour discuter de vos besoins en logistique minière.", "headquarters": { "label": "Siège Social", "location": "Freetown, Sierra Leone" }, "email": { "label": "Envoyez-nous un Email" }, "phone": { "label": "Appelez-nous" }, "whatsapp": { "label": "WhatsApp", "value": "Discutez avec notre équipe" }, "support": { "label": "Support Opérationnel", "value": "Disponible 24h/24, 7j/7" }, "follow": "Suivez-nous" }, "form": { "title": "Envoyer un Message", "intro": "Dites-nous ce dont vous avez besoin et nous vous répondrons avec une proposition personnalisée.", "fields": { "fullName": { "label": "Nom Complet", "placeholder": "Jean Dupont" }, "email": { "label": "Adresse Email", "placeholder": "jean@entreprise.com" }, "phone": { "label": "Numéro de Téléphone", "placeholder": "+232..." }, "interest": { "label": "Je suis intéressé par...", "placeholder": "Sélectionnez une option" }, "message": { "label": "Détails du Projet", "placeholder": "Parlez-nous de votre emplacement, de votre calendrier et de vos exigences..." } }, "interestOptions": ["Demande Générale", "Devis de Transport de Minerai", "Services de Forage", "Location d'Équipement", "Logistique/Cargaison"], "optional": "facultatif", "submitButton": "Envoyer le Message", "whatsappButton": "Envoyer plutôt via WhatsApp", "emailSubject": "Demande via le site web", "successTitle": "Presque terminé !", "successText": "Votre application de messagerie devrait s'ouvrir avec votre message prêt à être envoyé. Vous préférez le chat instantané ? Envoyez les mêmes informations sur WhatsApp.", "sendAnother": "Modifier le message" }, "map": { "eyebrow": "Nous trouver", "location": "Freetown, Sierra Leone", "title": "Carte de Freetown, Sierra Leone", "directions": "Obtenir l'itinéraire" } };
const chain = { "eyebrow": "La chaîne logistique minière", "heading": "De la Mine au Port", "description": "Nous comblons le fossé entre l'extraction et l'exportation. Découvrez comment nos services s'enchaînent — du forage du minerai jusqu'à son arrivée au port.", "stage": "Étape", "viewService": "Voir le service", "steps": [{ "title": "Forer", "text": "Forage d'exploration et de trous de mine avec des installations modernes, garantissant la précision de profondeur et l'intégrité des échantillons essentielles à l'évaluation géologique et au dynamitage." }, { "title": "Charger", "text": "Pelles et chargeuses frontales chargent les matériaux extraits de manière efficace et sûre au front de taille, pour que les camions et la production avancent." }, { "title": "Transporter", "text": "Camions-bennes et tombereaux à haute capacité transportent le minerai sur le terrain accidenté des districts miniers de la Sierra Leone." }, { "title": "Déplacer", "text": "Les remorques plates transportent machines et équipements lourds sur tous les terrains, avec un chargement et un déchargement rationalisés." }, { "title": "Expédier", "text": "Les conteneurs circulent en toute sécurité et à temps entre le port et votre site, au service de votre chaîne d'approvisionnement." }] };
const frTranslation = {
  welcome,
  description,
  common,
  home,
  hero,
  services,
  rental,
  keyAttributes,
  process,
  faq,
  cta,
  nav,
  footer,
  notFound,
  about,
  servicesPage,
  contactPage,
  chain
};
const i18n = createInstance();
const LANGUAGE_STORAGE_KEY = "i18nextLng";
const savedLanguage = (() => {
  try {
    return typeof window === "undefined" ? null : window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
  } catch {
    return null;
  }
})();
i18n.use(Backend).use(Browser).use(initReactI18next).init({
  fallbackLng: "fr",
  lng: "en",
  debug: false,
  resources: {
    en: {
      translation: enTranslation
    },
    fr: {
      translation: frTranslation
    }
  },
  interpolation: {
    escapeValue: false
    // not needed for react as it escapes by default
  }
});
const CHAT_SCRIPT_ID = "lyrro-ai-script";
const CHAT_SCRIPT_SRC = "//code.tidio.co/zlndi6qxipdtoljf37hsefdf5wlwzjce.js";
let savedLanguageRestored = false;
function useRestoreSavedLanguage() {
  const { i18n: i18n2 } = useTranslation();
  reactExports.useEffect(() => {
    if (savedLanguageRestored) {
      return;
    }
    savedLanguageRestored = true;
    if (savedLanguage?.startsWith("fr") && !i18n2.language.startsWith("fr")) {
      i18n2.changeLanguage("fr");
    }
  }, [i18n2]);
}
const MAX_TILT_DEG = 7;
function usePointerEffects() {
  reactExports.useEffect(() => {
    let tilted = null;
    const resetTilt = () => {
      if (tilted) {
        tilted.style.setProperty("--rx", "0deg");
        tilted.style.setProperty("--ry", "0deg");
        tilted.dataset.tilting = "false";
        tilted = null;
      }
    };
    const onMove = (event) => {
      const target = event.target;
      const card = target?.closest(".spotlight");
      if (card) {
        const rect = card.getBoundingClientRect();
        card.style.setProperty("--mx", `${event.clientX - rect.left}px`);
        card.style.setProperty("--my", `${event.clientY - rect.top}px`);
      }
      const tiltCard = event.pointerType === "mouse" ? target?.closest(".tilt") : null;
      if (tiltCard !== tilted) {
        resetTilt();
      }
      if (tiltCard) {
        const rect = tiltCard.getBoundingClientRect();
        const px = (event.clientX - rect.left) / rect.width - 0.5;
        const py = (event.clientY - rect.top) / rect.height - 0.5;
        tiltCard.style.setProperty(
          "--ry",
          `${(px * MAX_TILT_DEG * 2).toFixed(2)}deg`
        );
        tiltCard.style.setProperty(
          "--rx",
          `${(-py * MAX_TILT_DEG * 2).toFixed(2)}deg`
        );
        tiltCard.dataset.tilting = "true";
        tilted = tiltCard;
      }
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", resetTilt);
    return () => {
      window.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("pointerleave", resetTilt);
    };
  }, []);
}
function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 30,
    restDelta: 1e-3
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      "aria-hidden": "true",
      className: "fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-linear-to-r from-secondary via-primary to-white",
      style: { scaleX }
    }
  );
}
function Layout({ children }) {
  const { t } = useTranslation();
  usePointerEffects();
  useRestoreSavedLanguage();
  reactExports.useEffect(() => {
    if (!document.getElementById(CHAT_SCRIPT_ID)) {
      const script = document.createElement("script");
      script.id = CHAT_SCRIPT_ID;
      script.src = CHAT_SCRIPT_SRC;
      script.async = true;
      document.body.appendChild(script);
    }
    return () => {
      document.getElementById(CHAT_SCRIPT_ID)?.remove();
    };
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(MotionConfig, { reducedMotion: "user", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-h-screen flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "a",
      {
        className: "fixed top-3 left-3 z-[100] -translate-y-24 rounded-full bg-white px-5 py-3 font-heading font-semibold text-primary text-sm shadow-xl transition-transform focus:translate-y-0",
        href: "#main-content",
        children: t("common.skipToContent")
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollProgress, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "grow", id: "main-content", tabIndex: -1, children }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] }) });
}
function NotFound() {
  const { t } = useTranslation();
  reactExports.useEffect(() => {
    document.title = t("notFound.pageMeta.title");
    const robots = document.createElement("meta");
    robots.name = "robots";
    robots.content = "noindex";
    document.head.appendChild(robots);
    return () => robots.remove();
  }, [t]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative isolate flex min-h-[100svh] items-center overflow-hidden bg-black pt-28 pb-20", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "img",
      {
        alt: "",
        "aria-hidden": "true",
        className: "absolute inset-0 -z-20 h-full w-full object-cover opacity-40",
        height: 1080,
        src: heroBg$2,
        width: 1920
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        "aria-hidden": "true",
        className: "absolute inset-0 -z-10 bg-linear-to-br from-black via-black/80 to-primary/50"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        "aria-hidden": "true",
        className: "mask-fade-y absolute inset-0 -z-10 bg-grid-light"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 text-center md:px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "p",
        {
          "aria-hidden": "true",
          className: "fade-in zoom-in-95 animate-in bg-linear-to-b from-white to-white/10 bg-clip-text font-bold font-heading text-[9rem] text-transparent leading-none duration-700 md:text-[14rem]",
          children: t("notFound.code")
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mx-auto mb-5 max-w-2xl font-bold font-heading text-3xl text-white md:text-5xl", children: t("notFound.title") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mb-10 max-w-xl text-lg text-white/70", children: t("notFound.text") }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col justify-center gap-4 sm:flex-row", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Link,
          {
            className: ctaVariants({ variant: "primary", size: "lg" }),
            to: "/",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(HugeiconsIcon, { className: "h-5 w-5", icon: KR }),
              t("notFound.home")
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Link,
          {
            className: ctaVariants({ variant: "glass", size: "lg" }),
            to: "/services",
            children: [
              t("notFound.services"),
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
      ] })
    ] })
  ] }) });
}
const DEFAULT_OG_IMAGE = `${SITE.url}/og-image.jpg`;
function getCurrentLanguage() {
  return i18n.language?.startsWith("fr") ? "fr" : "en";
}
function getTranslations() {
  return getCurrentLanguage() === "fr" ? frTranslation : enTranslation;
}
const absoluteUrl = (path) => `${SITE.url}${path === "/" ? "/" : path}`;
function getSEOData(config) {
  const currentLang = getCurrentLanguage();
  const canonicalUrl = absoluteUrl(config.path);
  const ogImage = config.ogImage || DEFAULT_OG_IMAGE;
  return {
    meta: [
      { title: config.title },
      { name: "description", content: config.description },
      ...config.keywords ? [{ name: "keywords", content: config.keywords }] : [],
      {
        name: "robots",
        content: "index, follow, max-image-preview:large, max-snippet:-1"
      },
      { property: "og:title", content: config.title },
      { property: "og:description", content: config.description },
      { property: "og:url", content: canonicalUrl },
      { property: "og:type", content: "website" },
      { property: "og:image", content: ogImage },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: config.title },
      {
        property: "og:locale",
        content: currentLang === "fr" ? "fr_FR" : "en_US"
      },
      {
        property: "og:locale:alternate",
        content: currentLang === "fr" ? "en_US" : "fr_FR"
      },
      { property: "og:site_name", content: SITE.name },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: config.title },
      { name: "twitter:description", content: config.description },
      { name: "twitter:image", content: ogImage }
    ],
    links: [
      { rel: "canonical", href: canonicalUrl },
      { rel: "alternate", hrefLang: "x-default", href: canonicalUrl }
    ],
    scripts: (config.jsonLd ?? []).map((data) => ({
      type: "application/ld+json",
      children: JSON.stringify(data)
    }))
  };
}
const ORG_ID = `${SITE.url}/#organization`;
function organizationJsonLd(description2) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": ORG_ID,
    name: SITE.name,
    alternateName: SITE.shortName,
    url: `${SITE.url}/`,
    logo: `${SITE.url}/logo.png`,
    image: DEFAULT_OG_IMAGE,
    description: description2,
    telephone: SITE.phone,
    email: SITE.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: SITE.city,
      addressCountry: SITE.countryCode
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE.geo.latitude,
      longitude: SITE.geo.longitude
    },
    areaServed: { "@type": "Country", name: SITE.country },
    knowsLanguage: ["en", "fr"],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: SITE.phone,
      email: SITE.email,
      contactType: "customer service",
      areaServed: SITE.countryCode,
      availableLanguage: ["English", "French"],
      hoursAvailable: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        opens: "00:00",
        closes: "23:59"
      }
    },
    sameAs: [SITE.social.linkedin, SITE.social.facebook]
  };
}
function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE.url}/#website`,
    url: `${SITE.url}/`,
    name: SITE.name,
    inLanguage: ["en", "fr"],
    publisher: { "@id": ORG_ID }
  };
}
function breadcrumbJsonLd(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path)
    }))
  };
}
function faqJsonLd(items) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer }
    }))
  };
}
function servicesJsonLd(services2) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: services2.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        name: service.name,
        description: service.description,
        url: absoluteUrl(service.path),
        provider: { "@id": ORG_ID },
        areaServed: { "@type": "Country", name: SITE.country }
      }
    }))
  };
}
const Route$4 = createRootRoute({
  head: () => {
    const translations = getTranslations();
    return {
      meta: [
        { charSet: "utf-8" },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1, viewport-fit=cover"
        },
        { title: translations.home.pageMeta.title },
        {
          name: "description",
          content: translations.home.pageMeta.description
        },
        { name: "author", content: SITE.name },
        { name: "format-detection", content: "telephone=yes" },
        { name: "geo.region", content: SITE.countryCode },
        { name: "geo.placename", content: SITE.city },
        { property: "og:site_name", content: SITE.name },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" }
      ],
      links: [
        {
          rel: "icon",
          type: "image/png",
          sizes: "48x48",
          href: "/favicon.png"
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "192x192",
          href: "/logo-192.png"
        },
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/apple-touch-icon.png"
        },
        { rel: "manifest", href: "/manifest.json" }
      ],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify(
            organizationJsonLd(translations.footer.description)
          )
        },
        {
          type: "application/ld+json",
          children: JSON.stringify(websiteJsonLd())
        }
      ]
    };
  },
  component: RootComponent
});
function RootComponent() {
  const [lang, setLang] = reactExports.useState(getCurrentLanguage());
  reactExports.useEffect(() => {
    const updateLang = () => setLang(getCurrentLanguage());
    updateLang();
    i18n.on("languageChanged", updateLang);
    return () => {
      i18n.off("languageChanged", updateLang);
    };
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(RootDocument, { lang, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) });
}
function RootDocument({
  children,
  lang
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
const $$splitComponentImporter$3 = () => import("./services-DKD7_h2J.mjs");
const Route$3 = createFileRoute("/services")({
  component: lazyRouteComponent($$splitComponentImporter$3, "component"),
  head: () => {
    const translations = getTranslations();
    const page = translations.servicesPage;
    return getSEOData({
      title: page.pageMeta.title,
      description: page.pageMeta.description,
      keywords: "ore haulage Sierra Leone, mine drilling services, blast hole drilling, flatbed cargo, container movement, tipper truck rental, earth moving equipment rental, mining logistics",
      path: "/services",
      jsonLd: [breadcrumbJsonLd([{
        name: translations.nav.links.home,
        path: "/"
      }, {
        name: translations.nav.links.services,
        path: "/services"
      }]), servicesJsonLd(SERVICE_KEYS.map((key) => ({
        name: page.detailedList[key].title,
        description: page.detailedList[key].description,
        path: `/services#${SERVICES[key].anchor}`
      })))]
    });
  }
});
const $$splitComponentImporter$2 = () => import("./contact-us-C990FPqv.mjs");
const Route$2 = createFileRoute("/contact-us")({
  component: lazyRouteComponent($$splitComponentImporter$2, "component"),
  head: () => {
    const translations = getTranslations();
    const pageMeta = translations.contactPage.pageMeta;
    return getSEOData({
      title: pageMeta.title,
      description: pageMeta.description,
      keywords: "contact Continental Mining Services, mining services Freetown, ore haulage quote, drilling services quote, equipment rental Sierra Leone, mining logistics contact",
      path: "/contact-us",
      jsonLd: [breadcrumbJsonLd([{
        name: translations.nav.links.home,
        path: "/"
      }, {
        name: translations.nav.links.contact,
        path: "/contact-us"
      }]), {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        name: pageMeta.title,
        description: pageMeta.description,
        url: absoluteUrl("/contact-us"),
        mainEntity: {
          "@id": `${absoluteUrl("/")}#organization`
        }
      }, faqJsonLd(translations.faq.items)]
    });
  }
});
const $$splitComponentImporter$1 = () => import("./about-BPnHI4hA.mjs");
const Route$1 = createFileRoute("/about")({
  component: lazyRouteComponent($$splitComponentImporter$1, "component"),
  head: () => {
    const translations = getTranslations();
    const pageMeta = translations.about.pageMeta;
    return getSEOData({
      title: pageMeta.title,
      description: pageMeta.description,
      keywords: "about Continental Mining Services, mining company Sierra Leone, mining logistics Freetown, mining safety standards, West Africa mining partner",
      path: "/about",
      jsonLd: [breadcrumbJsonLd([{
        name: translations.nav.links.home,
        path: "/"
      }, {
        name: translations.nav.links.aboutUs,
        path: "/about"
      }]), {
        "@context": "https://schema.org",
        "@type": "AboutPage",
        name: pageMeta.title,
        description: pageMeta.description,
        url: absoluteUrl("/about"),
        mainEntity: {
          "@id": `${absoluteUrl("/")}#organization`
        }
      }]
    });
  }
});
const $$splitComponentImporter = () => import("./index-B0ELGQOX.mjs");
const Route = createFileRoute("/")({
  component: lazyRouteComponent($$splitComponentImporter, "component"),
  head: () => {
    const translations = getTranslations();
    return getSEOData({
      title: translations.home.pageMeta.title,
      description: translations.home.pageMeta.description,
      keywords: "mining services Sierra Leone, mining logistics, ore haulage, mine drilling, equipment rental, excavator rental, dump truck rental, container movement, Freetown",
      path: "/",
      jsonLd: [breadcrumbJsonLd([{
        name: translations.nav.links.home,
        path: "/"
      }]), faqJsonLd(translations.faq.items)]
    });
  }
});
const ServicesRoute = Route$3.update({
  id: "/services",
  path: "/services",
  getParentRoute: () => Route$4
});
const ContactUsRoute = Route$2.update({
  id: "/contact-us",
  path: "/contact-us",
  getParentRoute: () => Route$4
});
const AboutRoute = Route$1.update({
  id: "/about",
  path: "/about",
  getParentRoute: () => Route$4
});
const IndexRoute = Route.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$4
});
const rootRouteChildren = {
  IndexRoute,
  AboutRoute,
  ContactUsRoute,
  ServicesRoute
};
const routeTree = Route$4._addFileChildren(rootRouteChildren)._addFileTypes();
function getRouter() {
  const router2 = createRouter({
    routeTree,
    scrollRestoration: true,
    defaultNotFoundComponent: NotFound,
    defaultPreload: "intent"
  });
  return router2;
}
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  FLEET as F,
  Layout as L,
  SERVICE_KEYS as S,
  cn as a,
  SERVICES as b,
  ctaVariants as c,
  SITE as d,
  crewImage as e,
  heroBg$1 as f,
  dumpTruckImg as g,
  heroBg as h,
  excavatorAdtImg as i,
  drillingImg as j,
  flatbedImg as k,
  loaderRockImg as l,
  containerImg as m,
  router as r,
  tipperImg as t,
  whatsappLink as w
};
