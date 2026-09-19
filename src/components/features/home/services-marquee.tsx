import { useTranslation } from "react-i18next";
import { SERVICE_KEYS } from "@/lib/services";

/** Decorative scrolling strip of service names (content is repeated elsewhere). */
export const ServicesMarquee = () => {
  const { t } = useTranslation();
  const titles = SERVICE_KEYS.map((key) =>
    t(`servicesPage.detailedList.${key}.title`)
  );

  return (
    <div
      aria-hidden="true"
      className="relative overflow-hidden border-white/10 border-y bg-primary py-5"
    >
      <div className="mask-fade-x flex">
        <div className="flex w-max shrink-0 animate-marquee items-center hover:[animation-play-state:paused]">
          {[...titles, ...titles].map((title, index) => (
            <span
              className="flex items-center gap-8 px-4 font-bold font-heading text-lg text-white uppercase tracking-wider md:text-xl"
              // biome-ignore lint/suspicious/noArrayIndexKey: list is duplicated on purpose
              key={`${title}-${index}`}
            >
              {title}
              <span className="h-2.5 w-2.5 rotate-45 bg-white/40" />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
