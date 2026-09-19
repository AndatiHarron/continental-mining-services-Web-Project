import { r as reactExports, j as jsxRuntimeExports } from "../_chunks/_libs/react.mjs";
import { H as Hn } from "../_chunks/_libs/@hugeicons/core-free-icons.mjs";
import { L as Link } from "../_chunks/_libs/@tanstack/react-router.mjs";
import { C as CornerBrackets } from "./section-heading-FGMrMcGU.mjs";
import { a as cn } from "./router-CEqEY-a1.mjs";
import { u as useScroll, b as useTransform, m as motion } from "../_libs/framer-motion.mjs";
import { H as HugeiconsIcon } from "../_chunks/_libs/@hugeicons/react.mjs";
function PageHero({
  image,
  imageAlt,
  eyebrow,
  title,
  subtitle,
  crumbs,
  children,
  className
}) {
  const ref = reactExports.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      className: cn(
        "relative isolate flex min-h-[68vh] items-end overflow-hidden bg-black pt-32 pb-16 md:min-h-[72vh] md:pb-24",
        className
      ),
      ref,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { className: "absolute inset-0 -z-20", style: { y: imageY }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            alt: imageAlt,
            className: "h-full w-full animate-hero-zoom object-cover opacity-70",
            decoding: "async",
            fetchPriority: "high",
            height: 1080,
            src: image,
            width: 1920
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CornerBrackets, { className: "inset-6 hidden opacity-40 md:block lg:inset-10" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            "aria-hidden": "true",
            className: "absolute inset-0 -z-10 bg-linear-to-t from-black via-black/60 to-black/30"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            "aria-hidden": "true",
            className: "absolute inset-0 -z-10 bg-linear-to-r from-primary/40 via-transparent to-transparent"
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
          motion.div,
          {
            className: "container mx-auto px-4 md:px-6",
            style: { y: contentY },
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fade-in slide-in-from-bottom-6 max-w-4xl animate-in fill-mode-both duration-700", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { "aria-label": "Breadcrumb", className: "mb-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx("ol", { className: "flex flex-wrap items-center gap-2 text-sm text-white/70", children: crumbs.map((crumb, index) => {
                const isLast = index === crumbs.length - 1;
                return /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2", children: [
                  index > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
                    HugeiconsIcon,
                    {
                      "aria-hidden": "true",
                      className: "h-3.5 w-3.5 text-white/40",
                      icon: Hn
                    }
                  ),
                  isLast || !crumb.to ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      "aria-current": "page",
                      className: "font-medium text-white",
                      children: crumb.label
                    }
                  ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Link,
                    {
                      className: "transition-colors hover:text-white",
                      to: crumb.to,
                      children: crumb.label
                    }
                  )
                ] }, crumb.label);
              }) }) }),
              eyebrow && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mb-5 inline-flex items-center gap-3 font-heading font-semibold text-white/80 text-xs uppercase tracking-[0.25em]", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": "true", className: "h-px w-10 bg-secondary" }),
                eyebrow
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mb-6 font-bold font-heading text-4xl text-white leading-[1.05] md:text-6xl lg:text-7xl", children: title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "max-w-2xl font-light text-lg text-white/80 leading-relaxed md:text-xl", children: subtitle }),
              children
            ] })
          }
        )
      ]
    }
  );
}
export {
  PageHero as P
};
