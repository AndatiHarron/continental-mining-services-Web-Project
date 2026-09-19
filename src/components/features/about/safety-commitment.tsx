import {
  Alert02Icon,
  CheckListIcon,
  FirstAidKitIcon,
  Leaf01Icon,
  MessageMultiple01Icon,
  SchoolIcon,
  Settings02Icon,
  ShieldUserIcon,
  StethoscopeIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useTranslation } from "react-i18next";
import sa1 from "@/assets/about-us/safety/sa-01.jpg";
import sa2 from "@/assets/about-us/safety/sa-02.jpg";
import { CornerBrackets } from "@/components/ui/corner-brackets";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

/** One icon per policy item, in the same order as the translation file */
const POLICY_ICONS = [
  SchoolIcon,
  ShieldUserIcon,
  Alert02Icon,
  Settings02Icon,
  FirstAidKitIcon,
  Leaf01Icon,
  StethoscopeIcon,
  MessageMultiple01Icon,
  CheckListIcon,
];

export const SafetyCommitment = () => {
  const { t } = useTranslation();
  const policy = t("about.safetyCommitment.policy", {
    returnObjects: true,
  }) as Array<{
    title: string;
    text: string;
  }>;

  return (
    <section
      className="relative isolate overflow-hidden bg-black py-24 text-white md:py-32"
      id="safety"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-linear-to-br from-black via-gray-900 to-primary/50"
      />
      <div
        aria-hidden="true"
        className="mask-fade-y absolute inset-0 -z-10 bg-grid-light"
      />

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <SectionHeading
            align="left"
            description={t("about.safetyCommitment.text")}
            eyebrow={t("about.safetyCommitment.eyebrow")}
            title={t("about.safetyCommitment.headline")}
            tone="inverted"
          />
          <Reveal className="grid grid-cols-2 gap-4" delay={0.1}>
            <div className="tilt img-skeleton relative overflow-hidden rounded-3xl">
              <img
                alt={t("about.safetyCommitment.imageAlt")}
                className="aspect-[3/4] w-full object-cover"
                decoding="async"
                height={640}
                loading="lazy"
                src={sa1}
                width={480}
              />
              <CornerBrackets />
            </div>
            <div className="tilt img-skeleton relative mt-10 overflow-hidden rounded-3xl">
              <img
                alt={t("about.safetyCommitment.imageAlt")}
                className="aspect-[3/4] w-full object-cover"
                decoding="async"
                height={640}
                loading="lazy"
                src={sa2}
                width={480}
              />
              <CornerBrackets />
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-20" delay={0.1}>
          <div className="mb-8 flex items-end justify-between gap-6">
            <h3 className="font-bold font-heading text-2xl text-white md:text-3xl">
              {t("about.safetyCommitment.policyTitle")}
            </h3>
            <span className="shrink-0 font-readout font-semibold text-5xl text-white/25 md:text-6xl">
              {String(policy.length).padStart(2, "0")}
            </span>
          </div>
        </Reveal>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {policy.map((item, index) => (
            <li key={item.title}>
              <Reveal className="h-full" delay={(index % 3) * 0.06}>
                <div className="tilt spotlight spotlight-inverted group relative flex h-full gap-5 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.05] p-6 backdrop-blur transition-all duration-300 hover:border-white/25 hover:bg-white/10">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-secondary/25 text-white ring-1 ring-white/15 transition-colors group-hover:bg-secondary">
                    <HugeiconsIcon
                      className="h-6 w-6"
                      icon={POLICY_ICONS[index % POLICY_ICONS.length]}
                    />
                  </span>
                  <span
                    aria-hidden="true"
                    className="absolute top-3 right-4 font-readout text-sm text-white/25"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h4 className="mb-1.5 font-bold font-heading text-lg text-white">
                      {item.title}
                    </h4>
                    <p className="text-sm text-white/65 leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
