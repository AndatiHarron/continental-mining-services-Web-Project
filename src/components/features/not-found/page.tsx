import { ArrowRight01Icon, Home01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Link } from "@tanstack/react-router";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import heroBg from "@/assets/home/abstract_topographical_map_pattern_dark_maroon_high_contrast.webp";
import { ctaVariants } from "@/components/ui/cta";
import { Layout } from "@/components/ui/layout";

export default function NotFound() {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = t("notFound.pageMeta.title");
    const robots = document.createElement("meta");
    robots.name = "robots";
    robots.content = "noindex";
    document.head.appendChild(robots);
    return () => robots.remove();
  }, [t]);

  return (
    <Layout>
      <section className="relative isolate flex min-h-[100svh] items-center overflow-hidden bg-black pt-28 pb-20">
        <img
          alt=""
          aria-hidden="true"
          className="absolute inset-0 -z-20 h-full w-full object-cover opacity-40"
          height={1080}
          src={heroBg}
          width={1920}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-linear-to-br from-black via-black/80 to-primary/50"
        />
        <div
          aria-hidden="true"
          className="mask-fade-y absolute inset-0 -z-10 bg-grid-light"
        />

        <div className="container mx-auto px-4 text-center md:px-6">
          <p
            aria-hidden="true"
            className="fade-in zoom-in-95 animate-in bg-linear-to-b from-white to-white/10 bg-clip-text font-bold font-heading text-[9rem] text-transparent leading-none duration-700 md:text-[14rem]"
          >
            {t("notFound.code")}
          </p>
          <h1 className="mx-auto mb-5 max-w-2xl font-bold font-heading text-3xl text-white md:text-5xl">
            {t("notFound.title")}
          </h1>
          <p className="mx-auto mb-10 max-w-xl text-lg text-white/70">
            {t("notFound.text")}
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              className={ctaVariants({ variant: "primary", size: "lg" })}
              to="/"
            >
              <HugeiconsIcon className="h-5 w-5" icon={Home01Icon} />
              {t("notFound.home")}
            </Link>
            <Link
              className={ctaVariants({ variant: "glass", size: "lg" })}
              to="/services"
            >
              {t("notFound.services")}
              <HugeiconsIcon
                className="h-5 w-5 transition-transform group-hover/cta:translate-x-1"
                icon={ArrowRight01Icon}
              />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
