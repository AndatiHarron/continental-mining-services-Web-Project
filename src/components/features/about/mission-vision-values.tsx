import {
  Diamond01Icon,
  EyeIcon,
  Flag01Icon,
  Settings02Icon,
  ShieldUserIcon,
  Task01Icon,
  UserGroupIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useTranslation } from "react-i18next";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

/** Icons for Safety First, Operational Integrity, Community Respect, Technical Excellence */
const VALUE_ICONS = [ShieldUserIcon, Task01Icon, UserGroupIcon, Settings02Icon];

export const MissionVisionValues = () => {
  const { t } = useTranslation();
  const coreValues = t("about.missionVisionValues.coreValues.list", {
    returnObjects: true,
  }) as string[];

  const statements = [
    { key: "mission", icon: Flag01Icon },
    { key: "vision", icon: EyeIcon },
  ] as const;

  return (
    <section className="relative overflow-hidden bg-muted/40 py-24 md:py-32">
      <div
        aria-hidden="true"
        className="mask-fade-y absolute inset-0 bg-grid-primary"
      />
      <div className="container relative mx-auto px-4 md:px-6">
        <SectionHeading
          className="mb-14"
          eyebrow={t("about.missionVisionValues.eyebrow")}
          title={t("about.missionVisionValues.heading")}
        />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {statements.map((item, index) => (
            <Reveal className="h-full" delay={index * 0.1} key={item.key}>
              <div className="tilt spotlight group relative h-full overflow-hidden rounded-3xl border border-border bg-white p-8 shadow-sm transition-shadow duration-500 hover:shadow-2xl hover:shadow-primary/10 md:p-10">
                <span
                  aria-hidden="true"
                  className="absolute -top-4 -right-2 font-bold font-readout text-[8rem] text-primary/[0.06] leading-none transition-colors duration-500 group-hover:text-primary/10"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="relative mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all duration-500 group-hover:rotate-[-6deg] group-hover:bg-primary group-hover:text-white group-hover:shadow-lg group-hover:shadow-primary/30">
                  <HugeiconsIcon className="h-8 w-8" icon={item.icon} />
                </span>
                <h3 className="relative mb-4 font-bold font-heading text-2xl text-primary">
                  {t(`about.missionVisionValues.${item.key}.title`)}
                </h3>
                <p className="relative text-lg text-muted-foreground leading-relaxed">
                  {t(`about.missionVisionValues.${item.key}.text`)}
                </p>
                <span className="absolute bottom-0 left-0 h-1 w-0 bg-linear-to-r from-primary to-secondary transition-all duration-700 group-hover:w-full" />
              </div>
            </Reveal>
          ))}

          <Reveal className="h-full" delay={0.2}>
            <div className="tilt relative h-full overflow-hidden rounded-3xl bg-linear-to-br from-primary to-brand-dark p-8 text-white shadow-primary/25 shadow-xl md:p-10">
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-grid-light"
              />
              <div aria-hidden="true" className="shine" />
              <div className="relative">
                <span className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15 text-white ring-1 ring-white/20">
                  <HugeiconsIcon className="h-8 w-8" icon={Diamond01Icon} />
                </span>
                <h3 className="mb-6 font-bold font-heading text-2xl text-white">
                  {t("about.missionVisionValues.coreValues.title")}
                </h3>
                <ol className="space-y-3">
                  {coreValues.map((value, index) => (
                    <li
                      className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/10 px-4 py-3 backdrop-blur transition-all duration-300 hover:translate-x-1.5 hover:bg-white hover:text-primary"
                      key={value}
                    >
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/15 transition-colors group-hover:bg-primary group-hover:text-white">
                        <HugeiconsIcon
                          className="h-5 w-5"
                          icon={VALUE_ICONS[index % VALUE_ICONS.length]}
                        />
                      </span>
                      <span className="font-semibold text-lg">{value}</span>
                      <span className="ml-auto font-readout text-sm opacity-50">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
