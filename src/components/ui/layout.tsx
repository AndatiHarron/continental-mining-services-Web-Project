import { MotionConfig, motion, useScroll, useSpring } from "framer-motion";
import { type ReactNode, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Footer } from "@/components/features/layout/footer";
import { Navbar } from "@/components/features/layout/navbar";
import { savedLanguage } from "@/i18n/config";

const CHAT_SCRIPT_ID = "lyrro-ai-script";
const CHAT_SCRIPT_SRC = "//code.tidio.co/zlndi6qxipdtoljf37hsefdf5wlwzjce.js";

let savedLanguageRestored = false;

/**
 * Pages are server-rendered in English. Restore a visitor's saved language
 * from the page layout (not the root), so the switch happens only after the
 * lazily-loaded route content has finished hydrating.
 */
function useRestoreSavedLanguage() {
  const { i18n } = useTranslation();
  useEffect(() => {
    if (savedLanguageRestored) {
      return;
    }
    savedLanguageRestored = true;
    if (savedLanguage?.startsWith("fr") && !i18n.language.startsWith("fr")) {
      i18n.changeLanguage("fr");
    }
  }, [i18n]);
}

const MAX_TILT_DEG = 7;

/**
 * Feeds cursor coordinates to `.spotlight` cards and tilt angles to `.tilt`
 * cards (see index.css). Mouse only, so touch scrolling is unaffected.
 */
function usePointerEffects() {
  useEffect(() => {
    let tilted: HTMLElement | null = null;

    const resetTilt = () => {
      if (tilted) {
        tilted.style.setProperty("--rx", "0deg");
        tilted.style.setProperty("--ry", "0deg");
        tilted.dataset.tilting = "false";
        tilted = null;
      }
    };

    const onMove = (event: PointerEvent) => {
      const target = event.target as Element | null;

      const card = target?.closest<HTMLElement>(".spotlight");
      if (card) {
        const rect = card.getBoundingClientRect();
        card.style.setProperty("--mx", `${event.clientX - rect.left}px`);
        card.style.setProperty("--my", `${event.clientY - rect.top}px`);
      }

      const tiltCard =
        event.pointerType === "mouse"
          ? target?.closest<HTMLElement>(".tilt")
          : null;
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
    restDelta: 0.001,
  });
  return (
    <motion.div
      aria-hidden="true"
      className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-linear-to-r from-secondary via-primary to-white"
      style={{ scaleX }}
    />
  );
}

export function Layout({ children }: { children: ReactNode }) {
  const { t } = useTranslation();
  usePointerEffects();
  useRestoreSavedLanguage();

  useEffect(() => {
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

  return (
    <MotionConfig reducedMotion="user">
      <div className="flex min-h-screen flex-col">
        <a
          className="fixed top-3 left-3 z-[100] -translate-y-24 rounded-full bg-white px-5 py-3 font-heading font-semibold text-primary text-sm shadow-xl transition-transform focus:translate-y-0"
          href="#main-content"
        >
          {t("common.skipToContent")}
        </a>
        <ScrollProgress />
        <Navbar />
        <main className="grow" id="main-content" tabIndex={-1}>
          {children}
        </main>
        <Footer />
      </div>
    </MotionConfig>
  );
}
