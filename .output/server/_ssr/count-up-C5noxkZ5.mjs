import { r as reactExports, j as jsxRuntimeExports } from "../_chunks/_libs/react.mjs";
import { d as useInView, c as useReducedMotion, e as animate } from "../_libs/framer-motion.mjs";
const BOLD_MARKER = "**";
function renderEmphasis(text, boldText, emphasisClassName) {
  if (text.includes(BOLD_MARKER)) {
    return text.split(BOLD_MARKER).map(
      (part, index) => index % 2 === 1 ? /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: emphasisClassName, children: part }, `${part}-${index}`) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: part }, `${part}-${index}`)
    );
  }
  const start = boldText ? text.indexOf(boldText) : -1;
  if (!boldText || start === -1) {
    return text;
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    text.slice(0, start),
    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: emphasisClassName, children: boldText }),
    text.slice(start + boldText.length)
  ] });
}
const NUMERIC_PREFIX = /^(\d+)(.*)$/;
const DURATION_S = 1.6;
function CountUp({
  value,
  className
}) {
  const ref = reactExports.useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduceMotion = useReducedMotion();
  const match = value.includes("/") ? null : NUMERIC_PREFIX.exec(value);
  const target = match ? Number(match[1]) : 0;
  const suffix = match ? match[2] : "";
  const isNumeric = match !== null;
  const [display, setDisplay] = reactExports.useState(value);
  reactExports.useEffect(() => {
    if (!(isNumeric && inView) || reduceMotion) {
      return;
    }
    const controls = animate(0, target, {
      duration: DURATION_S,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => setDisplay(`${Math.round(latest)}${suffix}`)
    });
    return () => controls.stop();
  }, [inView, isNumeric, reduceMotion, target, suffix]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className, ref, children: isNumeric ? display : value });
}
export {
  CountUp as C,
  renderEmphasis as r
};
