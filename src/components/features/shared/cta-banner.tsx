import {
  ArrowRight01Icon,
  Call02Icon,
  Mail01Icon,
  WhatsappIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import ctaBg from "@/assets/services/ore-loading/ol-1.jpg";
import { CornerBrackets } from "@/components/ui/corner-brackets";
import { ctaVariants } from "@/components/ui/cta";
import { Reveal } from "@/components/ui/reveal";
import { SITE, whatsappLink } from "@/lib/site";

interface CtaBannerProps {
  heading: string;
  text: string;
  buttonText: string;
}

/** Closing call-to-action shared by every page. */
export function CtaBanner({ heading, text, buttonText }: CtaBannerProps) {
  const { t } = useTranslation();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);

  const actions = [
    {
      icon: WhatsappIcon,
      label: t("common.whatsapp"),
      value: t("contactPage.contactInfo.whatsapp.value"),
      href: whatsappLink(t("common.whatsappGeneric")),
      external: true,
    },
    {
      icon: Call02Icon,
      label: t("contactPage.contactInfo.phone.label"),
      value: SITE.phone,
      href: SITE.phoneHref,
    },
    {
      icon: Mail01Icon,
      label: t("contactPage.contactInfo.email.label"),
      value: SITE.email,
      href: `mailto:${SITE.email}`,
    },
  ];

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <Reveal>
          <div
            className="relative isolate overflow-hidden rounded-[2rem] bg-brand-dark shadow-2xl shadow-primary/25"
            ref={ref}
          >
            {/* Background layers */}
            <motion.img
              alt=""
              aria-hidden="true"
              className="absolute inset-0 -z-30 h-[124%] w-full object-cover"
              decoding="async"
              height={900}
              loading="lazy"
              src={ctaBg}
              style={{ y: imageY, top: "-12%" }}
              width={1600}
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 -z-20 bg-linear-to-r from-brand-dark via-primary/90 to-primary/35"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 -z-10 bg-grid-light opacity-70"
            />
            <div aria-hidden="true" className="shine -z-10" />
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -right-6 -bottom-16 -z-10 select-none font-bold font-readout text-[12rem] text-transparent leading-none md:text-[18rem]"
              style={{ WebkitTextStroke: "2px rgb(255 255 255 / 0.14)" }}
            >
              24/7
            </span>
            <CornerBrackets className="hidden opacity-60 md:block" />

            <div className="grid grid-cols-1 items-center gap-12 px-6 py-14 md:px-14 md:py-20 lg:grid-cols-[1.25fr_1fr]">
              <div>
                <p className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 py-2 pr-4 pl-3 font-heading font-semibold text-white text-xs uppercase tracking-[0.18em] backdrop-blur">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-70" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-white" />
                  </span>
                  {t("footer.support")}
                </p>
                <h2 className="mb-5 font-bold font-heading text-3xl text-white leading-[1.08] md:text-5xl lg:text-6xl">
                  {heading}
                </h2>
                <p className="mb-9 max-w-xl text-lg text-white/85 leading-relaxed">
                  {text}
                </p>
                <Link
                  className={ctaVariants({ variant: "white", size: "lg" })}
                  to="/contact-us"
                >
                  {buttonText}
                  <HugeiconsIcon
                    className="h-5 w-5 transition-transform group-hover/cta:translate-x-1"
                    icon={ArrowRight01Icon}
                  />
                </Link>
              </div>

              {/* Contact console */}
              <div className="tilt rounded-[1.75rem] border border-white/20 bg-white/10 p-2 shadow-2xl shadow-black/20 backdrop-blur-xl sm:p-3">
                <ul className="space-y-2">
                  {actions.map((action) => (
                    <li key={action.label}>
                      <a
                        className="group flex items-center gap-3 rounded-2xl p-3 text-white transition-all duration-300 hover:bg-white hover:text-primary hover:shadow-xl sm:gap-4 sm:p-4"
                        href={action.href}
                        {...(action.external
                          ? { rel: "noopener noreferrer", target: "_blank" }
                          : {})}
                      >
                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/15 ring-1 ring-white/25 transition-colors duration-300 group-hover:bg-primary group-hover:text-white group-hover:ring-primary sm:h-12 sm:w-12">
                          <HugeiconsIcon
                            className="h-6 w-6"
                            icon={action.icon}
                          />
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="block text-xs uppercase tracking-wider opacity-70">
                            {action.label}
                          </span>
                          <span className="block font-heading font-semibold text-[15px] [overflow-wrap:anywhere] sm:truncate sm:text-base">
                            {action.value}
                          </span>
                        </span>
                        <HugeiconsIcon
                          className="h-5 w-5 shrink-0 opacity-60 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100"
                          icon={ArrowRight01Icon}
                        />
                      </a>
                    </li>
                  ))}
                </ul>
                <p className="mt-2 flex items-center justify-center gap-2 px-4 pt-2 pb-1 text-white/70 text-xs">
                  <span className="h-1.5 w-1.5 rounded-full bg-white/70" />
                  {t("footer.location")}
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
