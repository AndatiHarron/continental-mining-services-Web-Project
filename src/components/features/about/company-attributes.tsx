import { useTranslation } from "react-i18next";
import ca1 from "@/assets/about-us/capacity/ca-01.jpeg";
import ca2 from "@/assets/about-us/capacity/ca-02.jpg";
import ca3 from "@/assets/about-us/capacity/ca-03.jpg";
import ca4 from "@/assets/about-us/capacity/ca-04.jpg";
import sa1 from "@/assets/about-us/safety/sa-01.jpg";
import sa2 from "@/assets/about-us/safety/sa-02.jpg";
import tech1 from "@/assets/about-us/technology/tech-01.jpg";
import tech2 from "@/assets/about-us/technology/tech-02.jpg";
import ve1 from "@/assets/about-us/versatility/ve-01.webp";
import { CornerBrackets } from "@/components/ui/corner-brackets";
import { ImageGallery } from "@/components/ui/image-gallery";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { renderEmphasis } from "@/lib/rich-text";

const ATTRIBUTES = [
  { key: "capacity", images: [ca1, ca2, ca3, ca4] },
  { key: "versatility", images: [ve1] },
  { key: "safety", images: [sa1, sa2] },
  { key: "technology", images: [tech1, tech2] },
] as const;

export const CompanyAttributes = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-white py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading
          className="mb-14"
          description={t("about.companyAttributes.description")}
          eyebrow={t("about.companyAttributes.eyebrow")}
          title={t("about.companyAttributes.heading")}
        />

        <ul className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
          {ATTRIBUTES.map((attr, index) => {
            const base = `about.companyAttributes.items.${attr.key}`;
            const title = t(`${base}.title`);
            return (
              <li key={attr.key}>
                <Reveal className="h-full" delay={index * 0.08}>
                  <div className="tilt group relative h-[26rem] overflow-hidden rounded-[1.75rem] shadow-lg ring-1 ring-black/5 transition-shadow duration-500 hover:shadow-2xl hover:shadow-primary/25 md:h-[30rem]">
                    <ImageGallery
                      alt={title}
                      className="absolute inset-0"
                      images={[...attr.images]}
                      sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
                    >
                      <span className="pointer-events-none absolute inset-0 z-10 bg-linear-to-t from-black/90 via-black/30 to-transparent" />
                      <span className="pointer-events-none absolute inset-0 z-10 bg-linear-to-t from-primary/80 via-primary/15 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                      <CornerBrackets className="scale-95 opacity-0 group-hover:scale-100 group-hover:opacity-100" />
                      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 p-6 pb-10 text-white">
                        <span className="mb-1 block font-readout text-sm text-white/70 tracking-wider">
                          {String(index + 1).padStart(2, "0")} /{" "}
                          {String(ATTRIBUTES.length).padStart(2, "0")}
                        </span>
                        <h3 className="font-bold font-heading text-2xl text-white md:text-3xl">
                          {title}
                        </h3>
                        <div className="grid grid-rows-[1fr] transition-all duration-500 md:grid-rows-[0fr] md:opacity-0 md:group-hover:grid-rows-[1fr] md:group-hover:opacity-100">
                          <p className="overflow-hidden text-white/85 leading-relaxed">
                            <span className="block pt-2">
                              {renderEmphasis(
                                t(`${base}.description`),
                                t(`${base}.boldText`),
                                "font-semibold text-white"
                              )}
                            </span>
                          </p>
                        </div>
                      </div>
                    </ImageGallery>
                  </div>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
