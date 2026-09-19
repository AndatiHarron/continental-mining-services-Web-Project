import { j as jsxRuntimeExports, r as reactExports } from "../_chunks/_libs/react.mjs";
import { L as Layout, h as heroBg, w as whatsappLink, d as SITE, c as ctaVariants, a as cn } from "./router-CEqEY-a1.mjs";
import { R as RE, L as Lc, q as qWr, i as iN, I as Iy, a as VE, b as Vm, e as BM, g as bz, c as Khr, s as sHr, $ as $Lr, D as Dj, h as brr, H as Hn } from "../_chunks/_libs/@hugeicons/core-free-icons.mjs";
import { R as Reveal } from "./section-heading-FGMrMcGU.mjs";
import { F as FaqSection } from "./faq-section-lfQ36lP2.mjs";
import { P as PageHero } from "./page-hero-CYLr3xqw.mjs";
import { u as useTranslation } from "../_libs/react-i18next.mjs";
import { H as HugeiconsIcon } from "../_chunks/_libs/@hugeicons/react.mjs";
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
import "../_libs/framer-motion.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
import "../_chunks/_libs/@base-ui/react.mjs";
import "../_libs/tabbable.mjs";
import "../_chunks/_libs/@floating-ui/utils.mjs";
import "../_chunks/_libs/@base-ui/utils.mjs";
import "../_libs/reselect.mjs";
import "../_libs/use-sync-external-store.mjs";
const EMPTY_ENQUIRY = {
  fullName: "",
  email: "",
  phone: "",
  interest: "",
  message: ""
};
const INTEREST_ICONS = [
  bz,
  Khr,
  sHr,
  $Lr,
  Dj
];
const fieldClass = "w-full rounded-xl border border-border bg-muted/30 px-4 py-3.5 text-foreground transition-all placeholder:text-muted-foreground/70 hover:border-primary/30 focus:border-primary focus:bg-white focus:outline-none focus:ring-4 focus:ring-primary/10";
const labelClass = "mb-2 block font-heading font-semibold text-foreground text-sm";
function composeBody(enquiry, labels) {
  return Object.keys(labels).filter((key) => enquiry[key].trim() !== "").map(
    (key) => key === "message" ? `
${enquiry.message}` : `${labels[key]}: ${enquiry[key]}`
  ).join("\n");
}
const ContactSection = () => {
  const { t } = useTranslation();
  const [enquiry, setEnquiry] = reactExports.useState(EMPTY_ENQUIRY);
  const [submitted, setSubmitted] = reactExports.useState(false);
  const interestOptions = t("contactPage.form.interestOptions", {
    returnObjects: true
  });
  const labels = {
    fullName: t("contactPage.form.fields.fullName.label"),
    email: t("contactPage.form.fields.email.label"),
    phone: t("contactPage.form.fields.phone.label"),
    interest: t("contactPage.form.fields.interest.label"),
    message: t("contactPage.form.fields.message.label")
  };
  const body = composeBody(enquiry, labels);
  const whatsappHref = whatsappLink(body || t("common.whatsappGeneric"));
  const update = (field) => (event) => setEnquiry((prev) => ({ ...prev, [field]: event.target.value }));
  const handleSubmit = (event) => {
    event.preventDefault();
    const subject = `${t("contactPage.form.emailSubject")}: ${enquiry.interest} — ${enquiry.fullName}`;
    window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  };
  const contactItems = [
    {
      icon: RE,
      label: t("contactPage.contactInfo.headquarters.label"),
      value: t("contactPage.contactInfo.headquarters.location"),
      href: SITE.mapDirectionsUrl,
      external: true
    },
    {
      icon: Lc,
      label: t("contactPage.contactInfo.phone.label"),
      value: SITE.phone,
      href: SITE.phoneHref
    },
    {
      icon: qWr,
      label: t("contactPage.contactInfo.whatsapp.label"),
      value: t("contactPage.contactInfo.whatsapp.value"),
      href: whatsappLink(t("common.whatsappGeneric")),
      external: true
    },
    {
      icon: iN,
      label: t("contactPage.contactInfo.email.label"),
      value: SITE.email,
      href: `mailto:${SITE.email}`
    },
    {
      icon: Iy,
      label: t("contactPage.contactInfo.support.label"),
      value: t("contactPage.contactInfo.support.value")
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative pb-24 md:pb-32", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container relative z-10 mx-auto -mt-16 px-4 md:-mt-24 md:px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "overflow-hidden rounded-[2rem] bg-white shadow-2xl shadow-primary/10 ring-1 ring-border lg:grid lg:grid-cols-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative isolate overflow-hidden bg-linear-to-br from-primary to-brand-dark px-7 py-12 text-white lg:col-span-2 lg:px-12 lg:py-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            "aria-hidden": "true",
            className: "absolute inset-0 -z-10 bg-grid-light"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            "aria-hidden": "true",
            className: "absolute -right-24 -bottom-24 -z-10 h-72 w-72 rounded-full bg-white/10 blur-3xl"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mb-4 font-bold font-heading text-2xl text-white md:text-3xl", children: t("contactPage.contactInfo.title") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-10 text-white/80 leading-relaxed", children: t("contactPage.contactInfo.description") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-3", children: contactItems.map((item) => {
          const content = /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/15 transition-colors group-hover:bg-white group-hover:text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(HugeiconsIcon, { className: "h-5 w-5", icon: item.icon }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-white/60 text-xs uppercase tracking-wider", children: item.label }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block break-words font-semibold text-white", children: item.value })
            ] })
          ] });
          return /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: item.href ? /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              className: "group flex items-center gap-4 rounded-2xl p-2 transition-all duration-300 hover:translate-x-1 hover:bg-white/10",
              href: item.href,
              ...item.external ? { rel: "noopener noreferrer", target: "_blank" } : {},
              children: content
            }
          ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-4 p-2", children: content }) }, item.label);
        }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 border-white/15 border-t pt-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4 font-heading font-semibold text-sm text-white/70", children: t("contactPage.contactInfo.follow") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-3", children: [
            {
              href: SITE.social.linkedin,
              label: "LinkedIn",
              icon: VE
            },
            {
              href: SITE.social.facebook,
              label: "Facebook",
              icon: Vm
            }
          ].map((social) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              "aria-label": social.label,
              className: "flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-all hover:bg-white hover:text-primary",
              href: social.href,
              rel: "noopener noreferrer",
              target: "_blank",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(HugeiconsIcon, { className: "h-5 w-5", icon: social.icon })
            },
            social.label
          )) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-7 py-12 lg:col-span-3 lg:px-14 lg:py-16", children: submitted ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          "aria-live": "polite",
          className: "flex h-full flex-col items-start justify-center",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              HugeiconsIcon,
              {
                className: "h-8 w-8",
                icon: BM
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mb-3 font-bold font-heading text-2xl text-primary md:text-3xl", children: t("contactPage.form.successTitle") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-8 max-w-lg text-lg text-muted-foreground leading-relaxed", children: t("contactPage.form.successText") }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "a",
                {
                  className: ctaVariants({ variant: "solid" }),
                  href: whatsappHref,
                  rel: "noopener noreferrer",
                  target: "_blank",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(HugeiconsIcon, { className: "h-5 w-5", icon: qWr }),
                    t("contactPage.form.whatsappButton")
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  className: ctaVariants({ variant: "outline" }),
                  onClick: () => setSubmitted(false),
                  type: "button",
                  children: t("contactPage.form.sendAnother")
                }
              )
            ] })
          ]
        }
      ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mb-2 font-bold font-heading text-2xl text-primary md:text-3xl", children: t("contactPage.form.title") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-8 text-muted-foreground", children: t("contactPage.form.intro") }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "form",
          {
            className: "space-y-5",
            id: "contact-main",
            onSubmit: handleSubmit,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-5 md:grid-cols-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: labelClass, htmlFor: "full_name", children: labels.fullName }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      autoComplete: "name",
                      className: fieldClass,
                      id: "full_name",
                      name: "full_name",
                      onChange: update("fullName"),
                      placeholder: t(
                        "contactPage.form.fields.fullName.placeholder"
                      ),
                      required: true,
                      type: "text",
                      value: enquiry.fullName
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: labelClass, htmlFor: "email", children: labels.email }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      autoComplete: "email",
                      className: fieldClass,
                      id: "email",
                      name: "email",
                      onChange: update("email"),
                      placeholder: t(
                        "contactPage.form.fields.email.placeholder"
                      ),
                      required: true,
                      type: "email",
                      value: enquiry.email
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: labelClass, htmlFor: "phone", children: [
                  labels.phone,
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-normal text-muted-foreground", children: [
                    "(",
                    t("contactPage.form.optional"),
                    ")"
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    autoComplete: "tel",
                    className: fieldClass,
                    id: "phone",
                    name: "phone",
                    onChange: update("phone"),
                    placeholder: t(
                      "contactPage.form.fields.phone.placeholder"
                    ),
                    type: "tel",
                    value: enquiry.phone
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("fieldset", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("legend", { className: labelClass, children: labels.interest }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 gap-2.5 sm:grid-cols-2 xl:grid-cols-3", children: interestOptions.map((option, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "label",
                  {
                    className: "group flex cursor-pointer items-center gap-3 rounded-xl border border-border bg-muted/30 px-3.5 py-3 font-medium text-foreground text-sm transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:bg-white hover:shadow-md has-checked:border-primary has-checked:bg-primary has-checked:text-white has-checked:shadow-lg has-checked:shadow-primary/25 has-focus-visible:ring-4 has-focus-visible:ring-primary/20",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "input",
                        {
                          checked: enquiry.interest === option,
                          className: "sr-only",
                          name: "interest",
                          onChange: update("interest"),
                          required: true,
                          type: "radio",
                          value: option
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-has-checked:bg-white/20 group-has-checked:text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                        HugeiconsIcon,
                        {
                          className: "h-5 w-5",
                          icon: INTEREST_ICONS[index % INTEREST_ICONS.length]
                        }
                      ) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "leading-snug", children: option })
                    ]
                  },
                  option
                )) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: labelClass, htmlFor: "message", children: labels.message }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "textarea",
                  {
                    className: cn(fieldClass, "min-h-[150px] resize-y"),
                    id: "message",
                    name: "message",
                    onChange: update("message"),
                    placeholder: t(
                      "contactPage.form.fields.message.placeholder"
                    ),
                    required: true,
                    rows: 5,
                    value: enquiry.message
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-3 pt-2 sm:flex-row", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    className: cn(
                      ctaVariants({ variant: "primary", size: "lg" }),
                      "sm:flex-1"
                    ),
                    type: "submit",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(HugeiconsIcon, { className: "h-5 w-5", icon: brr }),
                      t("contactPage.form.submitButton")
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "a",
                  {
                    className: cn(
                      ctaVariants({ variant: "outline", size: "lg" }),
                      "sm:flex-1"
                    ),
                    href: whatsappHref,
                    rel: "noopener noreferrer",
                    target: "_blank",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        HugeiconsIcon,
                        {
                          className: "h-5 w-5",
                          icon: qWr
                        }
                      ),
                      t("contactPage.form.whatsappButton")
                    ]
                  }
                )
              ] })
            ]
          }
        )
      ] }) })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto mt-24 px-4 md:px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mb-3 inline-flex items-center gap-3 font-heading font-semibold text-secondary text-xs uppercase tracking-[0.2em]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": "true", className: "h-px w-8 bg-secondary" }),
            t("contactPage.map.eyebrow")
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-bold font-heading text-3xl text-primary md:text-4xl", children: t("contactPage.map.location") })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            className: ctaVariants({ variant: "outline" }),
            href: SITE.mapDirectionsUrl,
            rel: "noopener noreferrer",
            target: "_blank",
            children: [
              t("contactPage.map.directions"),
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
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "img-skeleton relative overflow-hidden rounded-[2rem] shadow-xl ring-1 ring-border", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "tilt absolute top-4 left-4 z-10 hidden w-72 rounded-2xl bg-white/95 p-5 shadow-2xl ring-1 ring-border backdrop-blur md:block", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mb-3 flex items-center gap-2 font-heading font-semibold text-secondary text-xs uppercase tracking-[0.18em]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative flex h-2.5 w-2.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative inline-flex h-2.5 w-2.5 rounded-full bg-primary" })
            ] }),
            t("contactPage.contactInfo.headquarters.label")
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4 font-bold font-heading text-foreground text-xl", children: t("contactPage.contactInfo.headquarters.location") }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              className: "mb-2 flex items-center gap-2 text-muted-foreground text-sm transition-colors hover:text-primary",
              href: SITE.phoneHref,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(HugeiconsIcon, { className: "h-4 w-4", icon: Lc }),
                SITE.phone
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "flex items-center gap-2 text-muted-foreground text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(HugeiconsIcon, { className: "h-4 w-4", icon: Iy }),
            t("contactPage.contactInfo.support.value")
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "iframe",
          {
            allowFullScreen: true,
            className: "h-[420px] w-full grayscale transition-[filter] duration-700 hover:grayscale-0 md:h-[480px]",
            loading: "lazy",
            referrerPolicy: "no-referrer-when-downgrade",
            src: SITE.mapEmbedUrl,
            title: t("contactPage.map.title")
          }
        )
      ] })
    ] }) })
  ] });
};
function ContactUs() {
  const {
    t
  } = useTranslation();
  const breadcrumbs = t("contactPage.pageHeader.breadcrumbs", {
    returnObjects: true
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Layout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { className: "pb-32 md:pb-44", crumbs: [{
      label: breadcrumbs[0],
      to: "/"
    }, {
      label: breadcrumbs[1]
    }], eyebrow: t("contactPage.pageHeader.eyebrow"), image: heroBg, imageAlt: t("servicesPage.detailedList.containerMovement.title"), subtitle: t("contactPage.pageHeader.subtitle"), title: t("contactPage.pageHeader.title") }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ContactSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FaqSection, {})
  ] });
}
export {
  ContactUs as component
};
