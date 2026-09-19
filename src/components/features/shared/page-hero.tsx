import { ArrowRight01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { type ReactNode, useRef } from "react";
import { CornerBrackets } from "@/components/ui/corner-brackets";
import { cn } from "@/lib/utils";

interface Crumb {
  label: string;
  to?: string;
}

interface PageHeroProps {
  image: string;
  imageAlt: string;
  eyebrow?: string;
  title: string;
  subtitle: string;
  crumbs: Crumb[];
  children?: ReactNode;
  /** Extra classes, e.g. more bottom padding when content overlaps the hero */
  className?: string;
}

/** Shared inner-page header: full-bleed photo, breadcrumb trail and H1. */
export function PageHero({
  image,
  imageAlt,
  eyebrow,
  title,
  subtitle,
  crumbs,
  children,
  className,
}: PageHeroProps) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);

  return (
    <section
      className={cn(
        "relative isolate flex min-h-[68vh] items-end overflow-hidden bg-black pt-32 pb-16 md:min-h-[72vh] md:pb-24",
        className
      )}
      ref={ref}
    >
      <motion.div className="absolute inset-0 -z-20" style={{ y: imageY }}>
        <img
          alt={imageAlt}
          className="h-full w-full animate-hero-zoom object-cover opacity-70"
          decoding="async"
          fetchPriority="high"
          height={1080}
          src={image}
          width={1920}
        />
      </motion.div>
      <CornerBrackets className="inset-6 hidden opacity-40 md:block lg:inset-10" />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-linear-to-t from-black via-black/60 to-black/30"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-linear-to-r from-primary/40 via-transparent to-transparent"
      />
      <div
        aria-hidden="true"
        className="mask-fade-y absolute inset-0 -z-10 bg-grid-light opacity-60"
      />

      <motion.div
        className="container mx-auto px-4 md:px-6"
        style={{ y: contentY }}
      >
        <div className="fade-in slide-in-from-bottom-6 max-w-4xl animate-in fill-mode-both duration-700">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-white/70">
              {crumbs.map((crumb, index) => {
                const isLast = index === crumbs.length - 1;
                return (
                  <li className="flex items-center gap-2" key={crumb.label}>
                    {index > 0 && (
                      <HugeiconsIcon
                        aria-hidden="true"
                        className="h-3.5 w-3.5 text-white/40"
                        icon={ArrowRight01Icon}
                      />
                    )}
                    {isLast || !crumb.to ? (
                      <span
                        aria-current="page"
                        className="font-medium text-white"
                      >
                        {crumb.label}
                      </span>
                    ) : (
                      <Link
                        className="transition-colors hover:text-white"
                        to={crumb.to}
                      >
                        {crumb.label}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ol>
          </nav>

          {eyebrow && (
            <p className="mb-5 inline-flex items-center gap-3 font-heading font-semibold text-white/80 text-xs uppercase tracking-[0.25em]">
              <span aria-hidden="true" className="h-px w-10 bg-secondary" />
              {eyebrow}
            </p>
          )}
          <h1 className="mb-6 font-bold font-heading text-4xl text-white leading-[1.05] md:text-6xl lg:text-7xl">
            {title}
          </h1>
          <p className="max-w-2xl font-light text-lg text-white/80 leading-relaxed md:text-xl">
            {subtitle}
          </p>
          {children}
        </div>
      </motion.div>
    </section>
  );
}
