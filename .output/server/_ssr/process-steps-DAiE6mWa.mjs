import { j as jsxRuntimeExports } from "../_chunks/_libs/react.mjs";
import { L as Lc, w as wur, U as U3, t as gM } from "../_chunks/_libs/@hugeicons/core-free-icons.mjs";
import { S as SectionHeading, R as Reveal } from "./section-heading-FGMrMcGU.mjs";
import { u as useTranslation } from "../_libs/react-i18next.mjs";
import { H as HugeiconsIcon } from "../_chunks/_libs/@hugeicons/react.mjs";
const STEP_ICONS = [Lc, wur, U3, gM];
function ProcessSteps() {
  const { t } = useTranslation();
  const steps = t("process.steps", { returnObjects: true });
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
          description: t("process.description"),
          eyebrow: t("process.eyebrow"),
          title: t("process.heading")
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mt-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            "aria-hidden": "true",
            className: "absolute top-[3.75rem] right-[12%] left-[12%] hidden h-px bg-linear-to-r from-transparent via-primary/30 to-transparent lg:block"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ol", { className: "relative grid gap-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-8", children: steps.map((step, index) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Reveal,
          {
            className: "spotlight group relative h-full rounded-3xl border border-border bg-white/80 p-8 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-primary/10 hover:shadow-xl",
            delay: index * 0.1,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8 flex items-center justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-white shadow-lg shadow-primary/25 transition-transform duration-300 group-hover:scale-110", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  HugeiconsIcon,
                  {
                    className: "h-6 w-6",
                    icon: STEP_ICONS[index % STEP_ICONS.length]
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    "aria-hidden": "true",
                    className: "font-bold font-heading text-5xl text-primary/10 transition-colors group-hover:text-primary/20",
                    children: String(index + 1).padStart(2, "0")
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mb-3 font-bold font-heading text-primary text-xl", children: step.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed", children: step.text })
            ]
          }
        ) }, step.title)) })
      ] })
    ] })
  ] });
}
export {
  ProcessSteps as P
};
