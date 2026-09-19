import {
  Call02Icon,
  CheckmarkBadge01Icon,
  Rocket01Icon,
  Task01Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useTranslation } from "react-i18next";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

const STEP_ICONS = [Call02Icon, Task01Icon, Rocket01Icon, CheckmarkBadge01Icon];

export function ProcessSteps() {
  const { t } = useTranslation();
  const steps = t("process.steps", { returnObjects: true }) as Array<{
    title: string;
    text: string;
  }>;

  return (
    <section className="relative overflow-hidden bg-white py-24 md:py-32">
      <div
        aria-hidden="true"
        className="mask-fade-y absolute inset-0 bg-grid-primary"
      />
      <div className="container relative mx-auto px-4 md:px-6">
        <SectionHeading
          description={t("process.description")}
          eyebrow={t("process.eyebrow")}
          title={t("process.heading")}
        />

        <div className="relative mt-16">
          <div
            aria-hidden="true"
            className="absolute top-[3.75rem] right-[12%] left-[12%] hidden h-px bg-linear-to-r from-transparent via-primary/30 to-transparent lg:block"
          />
          <ol className="relative grid gap-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {steps.map((step, index) => (
              <li key={step.title}>
                <Reveal
                  className="spotlight group relative h-full rounded-3xl border border-border bg-white/80 p-8 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-primary/10 hover:shadow-xl"
                  delay={index * 0.1}
                >
                  <div className="mb-8 flex items-center justify-between">
                    <span className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-white shadow-lg shadow-primary/25 transition-transform duration-300 group-hover:scale-110">
                      <HugeiconsIcon
                        className="h-6 w-6"
                        icon={STEP_ICONS[index % STEP_ICONS.length]}
                      />
                    </span>
                    <span
                      aria-hidden="true"
                      className="font-bold font-heading text-5xl text-primary/10 transition-colors group-hover:text-primary/20"
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mb-3 font-bold font-heading text-primary text-xl">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.text}
                  </p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
