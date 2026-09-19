import { Location01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useTranslation } from "react-i18next";
import operatingImage from "@/assets/about-us/operating.jpeg";
import { CornerBrackets } from "@/components/ui/corner-brackets";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export const RegionFocus = () => {
  const { t } = useTranslation();
  const regions = t("about.regionFocus.regions", {
    returnObjects: true,
  }) as Array<{
    name: string;
    detail: string;
  }>;

  return (
    <section className="bg-white py-24 md:py-32">
      <div className="container mx-auto grid items-center gap-14 px-4 md:px-6 lg:grid-cols-2 lg:gap-20">
        <Reveal className="relative order-2 lg:order-1" x={-30} y={0}>
          <div className="tilt img-skeleton group relative aspect-[4/3] overflow-hidden rounded-[2rem] shadow-2xl shadow-primary/15">
            <img
              alt={t("about.regionFocus.mapHighlight")}
              className="h-full w-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-105"
              decoding="async"
              height={576}
              loading="lazy"
              src={operatingImage}
              width={1024}
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />
            <CornerBrackets />
            <div className="absolute bottom-5 left-5 z-20 inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 font-heading font-semibold text-primary text-sm shadow-lg backdrop-blur">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-primary" />
              </span>
              <HugeiconsIcon className="h-4 w-4" icon={Location01Icon} />
              {t("contactPage.contactInfo.headquarters.location")}
            </div>
          </div>
        </Reveal>

        <div className="order-1 lg:order-2">
          <SectionHeading
            align="left"
            description={t("about.regionFocus.text")}
            eyebrow={t("about.regionFocus.eyebrow")}
            title={t("about.regionFocus.headline")}
          />
          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {regions.map((region, index) => (
              <li key={region.name}>
                <Reveal className="h-full" delay={index * 0.06}>
                  <div className="tilt spotlight group flex h-full items-start gap-4 rounded-2xl border border-border bg-muted/30 p-5 transition-colors hover:border-primary/30 hover:bg-white hover:shadow-lg hover:shadow-primary/10">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary text-white transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:rotate-[-8deg]">
                      <HugeiconsIcon
                        className="h-5 w-5"
                        icon={Location01Icon}
                      />
                    </span>
                    <div>
                      <h3 className="font-bold font-heading text-foreground">
                        {region.name}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {region.detail}
                      </p>
                    </div>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
