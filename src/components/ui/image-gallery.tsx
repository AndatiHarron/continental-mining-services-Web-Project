import { ArrowLeft01Icon, ArrowRight01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { type KeyboardEvent, useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";

interface ImageGalleryProps {
  images: string[];
  alt: string;
  className?: string;
  imageClassName?: string;
  /** Show arrows only on hover (desktop) — they stay visible on touch screens */
  hoverControls?: boolean;
  autoplayDelay?: number;
  /** Pause autoplay, e.g. while the gallery sits in a hidden tab */
  active?: boolean;
  sizes?: string;
  /** Hide arrows and dots, e.g. when the whole gallery sits under a larger click target */
  showControls?: boolean;
  children?: React.ReactNode;
}

const AUTOPLAY_DELAY_MS = 5500;
const SWIPE_THRESHOLD_PX = 60;
const FADE_S = 0.9;

/**
 * Auto-advancing photo gallery: crossfade + slow Ken Burns zoom between
 * images, swipe / arrow-key navigation and an autoplay progress indicator.
 */
export function ImageGallery({
  images,
  alt,
  className,
  imageClassName,
  hoverControls = true,
  autoplayDelay = AUTOPLAY_DELAY_MS,
  active = true,
  sizes = "(min-width: 1024px) 50vw, 100vw",
  showControls = true,
  children,
}: ImageGalleryProps) {
  const { t } = useTranslation();
  const reduceMotion = useReducedMotion();
  const count = images.length;
  const hasMultiple = count > 1;
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const running = hasMultiple && active && !paused && !reduceMotion;

  const go = useCallback(
    (delta: number) => setIndex((current) => (current + delta + count) % count),
    [count]
  );

  useEffect(() => {
    if (!running) {
      return;
    }
    const timer = window.setTimeout(() => go(1), autoplayDelay);
    return () => window.clearTimeout(timer);
  }, [running, go, autoplayDelay]);

  // Warm the cache for the upcoming images so a crossfade never reveals a blank frame
  useEffect(() => {
    if (!(hasMultiple && active)) {
      return;
    }
    for (const offset of [1, 2]) {
      const upcoming = new Image();
      upcoming.src = images[(index + offset) % count];
    }
  }, [index, images, count, hasMultiple, active]);

  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      go(-1);
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      go(1);
    }
  };

  const controlClass = cn(
    "absolute top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-white/30 bg-black/35 text-white backdrop-blur-md transition-all hover:scale-105 hover:bg-white hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white",
    hoverControls &&
      "md:opacity-0 md:group-hover/gallery:opacity-100 md:focus-visible:opacity-100"
  );

  return (
    <div
      aria-label={alt}
      aria-roledescription="carousel"
      className={cn(
        "group/gallery img-skeleton relative isolate overflow-hidden",
        className
      )}
      onBlur={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onKeyDown={hasMultiple ? onKeyDown : undefined}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      role="region"
      tabIndex={hasMultiple ? 0 : undefined}
    >
      <AnimatePresence initial={false}>
        <motion.div
          animate={{ opacity: 1, zIndex: 1 }}
          aria-label={`${index + 1} / ${count}`}
          aria-roledescription="slide"
          className="absolute inset-0"
          drag={hasMultiple ? "x" : false}
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.15}
          // Outgoing image stays opaque underneath until the new one has faded in
          exit={{
            zIndex: 0,
            opacity: 0,
            transition: { opacity: { delay: FADE_S, duration: 0 } },
          }}
          initial={{ opacity: 0 }}
          key={images[index]}
          onDragEnd={(_, info) => {
            if (info.offset.x < -SWIPE_THRESHOLD_PX) {
              go(1);
            } else if (info.offset.x > SWIPE_THRESHOLD_PX) {
              go(-1);
            }
          }}
          role="group"
          transition={{ duration: FADE_S, ease: "easeOut" }}
        >
          <motion.img
            alt={hasMultiple ? `${alt} — ${index + 1}` : alt}
            animate={{ scale: 1, filter: "blur(0px)" }}
            className={cn(
              "pointer-events-none h-full w-full select-none object-cover",
              imageClassName
            )}
            decoding="async"
            draggable={false}
            height={800}
            initial={{ scale: 1.14, filter: "blur(6px)" }}
            loading="lazy"
            sizes={sizes}
            src={images[index]}
            transition={{
              scale: {
                duration: autoplayDelay / 1000 + FADE_S * 2,
                ease: "linear",
              },
              filter: { duration: FADE_S },
            }}
            width={1200}
          />
        </motion.div>
      </AnimatePresence>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-10 bg-linear-to-t from-black/50 via-transparent to-transparent"
      />

      {children}

      {hasMultiple && showControls && (
        <>
          <button
            aria-label={t("common.previous")}
            className={cn(controlClass, "left-3")}
            onClick={() => go(-1)}
            type="button"
          >
            <HugeiconsIcon className="h-5 w-5" icon={ArrowLeft01Icon} />
          </button>
          <button
            aria-label={t("common.next")}
            className={cn(controlClass, "right-3")}
            onClick={() => go(1)}
            type="button"
          >
            <HugeiconsIcon className="h-5 w-5" icon={ArrowRight01Icon} />
          </button>

          <div className="absolute inset-x-0 bottom-4 z-20 flex items-center justify-center gap-1.5">
            {images.map((src, dot) => (
              <button
                aria-current={dot === index}
                aria-label={t("common.goToSlide", { n: dot + 1 })}
                className={cn(
                  "relative h-1.5 cursor-pointer overflow-hidden rounded-full bg-white/40 transition-all duration-300 hover:bg-white/70",
                  dot === index ? "w-8" : "w-1.5"
                )}
                key={`dot-${src}`}
                onClick={() => setIndex(dot)}
                type="button"
              >
                {dot === index && (
                  <span
                    className={cn(
                      "absolute inset-0 origin-left rounded-full bg-white",
                      running && "animate-progress"
                    )}
                    key={`bar-${index}`}
                    style={{ animationDuration: `${autoplayDelay}ms` }}
                  />
                )}
              </button>
            ))}
          </div>
          <span className="absolute top-3 right-3 z-20 rounded-full bg-black/40 px-2.5 py-1 font-readout text-white text-xs tracking-wider backdrop-blur">
            {String(index + 1).padStart(2, "0")} /{" "}
            {String(count).padStart(2, "0")}
          </span>
        </>
      )}
    </div>
  );
}
