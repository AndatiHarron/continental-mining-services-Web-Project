import { j as jsxRuntimeExports } from "../_chunks/_libs/react.mjs";
import { a as cn } from "./router-CEqEY-a1.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
function CornerBrackets({ className }) {
  const base = "absolute h-6 w-6 border-white/80 transition-all duration-500";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "span",
    {
      "aria-hidden": "true",
      className: cn("pointer-events-none absolute inset-4 z-20", className),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: cn(base, "top-0 left-0 border-t-2 border-l-2") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: cn(base, "top-0 right-0 border-t-2 border-r-2") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: cn(base, "bottom-0 left-0 border-b-2 border-l-2") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: cn(base, "right-0 bottom-0 border-r-2 border-b-2") })
      ]
    }
  );
}
function Reveal({
  children,
  className,
  delay = 0,
  y = 24,
  x = 0
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      className,
      initial: { opacity: 0, y, x },
      transition: { duration: 0.6, delay, ease: [0.215, 0.61, 0.355, 1] },
      viewport: { once: true, margin: "0px 0px 60px 0px" },
      whileInView: { opacity: 1, y: 0, x: 0 },
      children
    }
  );
}
function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  tone = "default",
  as: Heading = "h2",
  id,
  className
}) {
  const inverted = tone === "inverted";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Reveal,
    {
      className: cn(
        "max-w-3xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      ),
      children: [
        eyebrow && /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "p",
          {
            className: cn(
              "mb-4 inline-flex items-center gap-3 font-heading font-semibold text-xs uppercase tracking-[0.2em]",
              inverted ? "text-white/80" : "text-secondary"
            ),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  "aria-hidden": "true",
                  className: cn(
                    "h-px w-8",
                    inverted ? "bg-white/50" : "bg-secondary"
                  )
                }
              ),
              eyebrow,
              align === "center" && /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  "aria-hidden": "true",
                  className: cn(
                    "h-px w-8",
                    inverted ? "bg-white/50" : "bg-secondary"
                  )
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Heading,
          {
            className: cn(
              "font-bold font-heading text-3xl leading-tight md:text-4xl lg:text-5xl",
              inverted ? "text-white" : "text-primary"
            ),
            id,
            children: title
          }
        ),
        description && /* @__PURE__ */ jsxRuntimeExports.jsx(
          "p",
          {
            className: cn(
              "mt-5 text-lg leading-relaxed",
              inverted ? "text-white/75" : "text-muted-foreground"
            ),
            children: description
          }
        )
      ]
    }
  );
}
export {
  CornerBrackets as C,
  Reveal as R,
  SectionHeading as S
};
