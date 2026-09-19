import { j as jsxRuntimeExports } from "../_chunks/_libs/react.mjs";
import { q as qWr, L as Lc, u as R } from "../_chunks/_libs/@hugeicons/core-free-icons.mjs";
import { w as whatsappLink, c as ctaVariants, d as SITE } from "./router-CEqEY-a1.mjs";
import { S as SectionHeading, R as Reveal } from "./section-heading-FGMrMcGU.mjs";
import { u as useTranslation } from "../_libs/react-i18next.mjs";
import { H as HugeiconsIcon } from "../_chunks/_libs/@hugeicons/react.mjs";
function FaqSection() {
  const { t } = useTranslation();
  const items = t("faq.items", { returnObjects: true });
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-muted/40 py-24 md:py-32", id: "faq", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto grid gap-12 px-4 md:px-6 lg:grid-cols-[1fr_1.5fr] lg:gap-20", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:sticky lg:top-32 lg:self-start", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SectionHeading,
        {
          align: "left",
          description: t("faq.description"),
          eyebrow: t("faq.eyebrow"),
          title: t("faq.heading")
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { className: "mt-8 flex flex-wrap gap-3", delay: 0.15, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            className: ctaVariants({ variant: "solid" }),
            href: whatsappLink(t("common.whatsappGeneric")),
            rel: "noopener noreferrer",
            target: "_blank",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(HugeiconsIcon, { className: "h-5 w-5", icon: qWr }),
              t("common.whatsapp")
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            className: ctaVariants({ variant: "outline" }),
            href: SITE.phoneHref,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(HugeiconsIcon, { className: "h-5 w-5", icon: Lc }),
              SITE.phone
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: items.map((item, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: index * 0.05, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "details",
      {
        className: "group rounded-2xl border border-border bg-white shadow-sm transition-shadow open:shadow-lg open:shadow-primary/5",
        open: index === 0,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("summary", { className: "flex cursor-pointer list-none items-center justify-between gap-6 p-6 font-heading font-semibold text-foreground text-lg transition-colors hover:text-primary md:p-7 [&::-webkit-details-marker]:hidden", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-inherit text-lg", children: item.question }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition-all duration-300 group-open:rotate-45 group-open:bg-primary group-open:text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx(HugeiconsIcon, { className: "h-4 w-4", icon: R }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "px-6 pb-7 text-muted-foreground leading-relaxed md:px-7", children: item.answer })
        ]
      }
    ) }, item.question)) })
  ] }) });
}
export {
  FaqSection as F
};
