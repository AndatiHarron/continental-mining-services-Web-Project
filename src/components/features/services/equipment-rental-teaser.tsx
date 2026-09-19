import {
  ArrowRight01Icon,
  ArrowUpRight01Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { CornerBrackets } from "@/components/ui/corner-brackets";
import { ctaVariants } from "@/components/ui/cta";
import { Reveal } from "@/components/ui/reveal";
import { FLEET } from "@/lib/fleet";
import { cn } from "@/lib/utils";

const BRANDS = [...new Set(FLEET.map((item) => item.brand))];

export const EquipmentRentalTeaser = () => {
  const { t } = useTranslation();

  return (
    <section className="relative isolate overflow-hidden bg-black py-24 text-white md:py-32">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-linear-to-br from-black via-gray-900 to-primary/50"
      />
      <div
        aria-hidden="true"
        className="mask-fade-y absolute inset-0 -z-10 bg-grid-light"
      />
      <div
        aria-hidden="true"
        className="absolute -top-40 -left-40 -z-10 h-[30rem] w-[30rem] rounded-full bg-primary/25 blur-[140px]"
      />

      <div className="container mx-auto grid grid-cols-1 items-center gap-12 px-4 md:px-6 lg:grid-cols-[1fr_1.35fr] lg:gap-16">
        <Reveal>
          <p className="mb-4 inline-flex items-center gap-3 font-heading font-semibold text-white/80 text-xs uppercase tracking-[0.2em]">
            <span aria-hidden="true" className="h-px w-8 bg-white/50" />
            {t("servicesPage.rentalTeaser.eyebrow")}
          </p>
          <h2 className="mb-5 font-bold font-heading text-4xl text-white md:text-6xl">
            {t("servicesPage.rentalTeaser.headline")}
          </h2>
          <p className="mb-8 max-w-xl text-lg text-white/75 leading-relaxed">
            {t("servicesPage.rentalTeaser.text")}
          </p>

          <dl className="mb-10 grid grid-cols-3 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10">
            <div className="flex flex-col-reverse gap-1 bg-black/50 p-4">
              <dt className="text-white/60 text-xs uppercase tracking-wider">
                {t("rental.machineTypes")}
              </dt>
              <dd className="font-readout font-semibold text-3xl">
                {String(FLEET.length).padStart(2, "0")}
              </dd>
            </div>
            <div className="col-span-2 flex flex-col-reverse gap-1 bg-black/50 p-4">
              <dt className="text-white/60 text-xs uppercase tracking-wider">
                {t("rental.brandLabel")}
              </dt>
              <dd className="font-readout font-semibold text-xl leading-tight md:text-2xl">
                {BRANDS.join(" · ")}
              </dd>
            </div>
          </dl>

          <Link
            className={ctaVariants({ variant: "white", size: "lg" })}
            hash="fleet"
            to="/"
          >
            {t("servicesPage.rentalTeaser.buttonText")}
            <HugeiconsIcon
              className="h-5 w-5 transition-transform group-hover/cta:translate-x-1"
              icon={ArrowRight01Icon}
            />
          </Link>
        </Reveal>

        <ul className="grid grid-cols-2 gap-3 md:gap-4">
          {FLEET.map((item, index) => {
            const title = t(`rental.items.${item.key}.title`);
            const isWide = index === 0;
            return (
              <li className={cn(isWide && "col-span-2")} key={item.key}>
                <Reveal className="h-full" delay={index * 0.07}>
                  <Link
                    className={cn(
                      "tilt spotlight spotlight-inverted group img-skeleton relative flex flex-col justify-end overflow-hidden rounded-3xl ring-1 ring-white/10 transition-shadow duration-500 hover:shadow-2xl hover:shadow-primary/30",
                      isWide
                        ? "aspect-[16/9] sm:aspect-[2/1]"
                        : "aspect-[4/5] sm:aspect-square"
                    )}
                    hash="fleet"
                    to="/"
                  >
                    <img
                      alt={`${item.brand} ${title}`}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
                      decoding="async"
                      height={500}
                      loading="lazy"
                      sizes={
                        isWide
                          ? "(min-width: 1024px) 55vw, 100vw"
                          : "(min-width: 1024px) 28vw, 50vw"
                      }
                      src={item.images[0]}
                      width={isWide ? 1000 : 500}
                    />
                    <span className="absolute inset-0 bg-linear-to-t from-black/90 via-black/25 to-transparent" />
                    <span className="absolute inset-0 bg-linear-to-t from-primary/85 via-primary/25 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    <CornerBrackets className="inset-3 scale-95 opacity-0 group-hover:scale-100 group-hover:opacity-100" />

                    <span className="absolute top-3 left-3 z-20 rounded-full bg-black/45 px-2.5 py-1 font-heading font-semibold text-[10px] uppercase tracking-wider backdrop-blur md:top-4 md:left-4 md:text-xs">
                      {item.brand}
                    </span>
                    <span className="absolute top-3 right-3 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-white text-primary opacity-0 shadow-lg transition-all duration-300 group-hover:rotate-45 group-hover:opacity-100 md:top-4 md:right-4">
                      <HugeiconsIcon
                        className="h-4 w-4"
                        icon={ArrowUpRight01Icon}
                      />
                    </span>

                    <span className="relative z-20 block p-3 md:p-5">
                      <span className="block font-readout text-white/60 text-xs">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="block font-bold font-heading text-base leading-tight md:text-xl">
                        {title}
                      </span>
                      <span className="grid grid-rows-[1fr] transition-all duration-500 md:grid-rows-[0fr] md:opacity-0 md:group-hover:grid-rows-[1fr] md:group-hover:opacity-100">
                        <span className="overflow-hidden">
                          <span className="mt-2 flex flex-wrap gap-x-3 gap-y-1">
                            {item.specs.slice(0, isWide ? 3 : 2).map((spec) => (
                              <span
                                className="font-readout text-[11px] text-white/85 uppercase tracking-wide md:text-xs"
                                key={spec.label}
                              >
                                {spec.value}
                              </span>
                            ))}
                          </span>
                        </span>
                      </span>
                    </span>
                  </Link>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
