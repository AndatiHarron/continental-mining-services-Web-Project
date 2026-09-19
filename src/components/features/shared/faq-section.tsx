import {
  Add01Icon,
  Call02Icon,
  WhatsappIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useTranslation } from "react-i18next";
import { ctaVariants } from "@/components/ui/cta";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { SITE, whatsappLink } from "@/lib/site";

export function FaqSection() {
  const { t } = useTranslation();
  const items = t("faq.items", { returnObjects: true }) as Array<{
    question: string;
    answer: string;
  }>;

  return (
    <section className="bg-muted/40 py-24 md:py-32" id="faq">
      <div className="container mx-auto grid gap-12 px-4 md:px-6 lg:grid-cols-[1fr_1.5fr] lg:gap-20">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <SectionHeading
            align="left"
            description={t("faq.description")}
            eyebrow={t("faq.eyebrow")}
            title={t("faq.heading")}
          />
          <Reveal className="mt-8 flex flex-wrap gap-3" delay={0.15}>
            <a
              className={ctaVariants({ variant: "solid" })}
              href={whatsappLink(t("common.whatsappGeneric"))}
              rel="noopener noreferrer"
              target="_blank"
            >
              <HugeiconsIcon className="h-5 w-5" icon={WhatsappIcon} />
              {t("common.whatsapp")}
            </a>
            <a
              className={ctaVariants({ variant: "outline" })}
              href={SITE.phoneHref}
            >
              <HugeiconsIcon className="h-5 w-5" icon={Call02Icon} />
              {SITE.phone}
            </a>
          </Reveal>
        </div>

        <div className="space-y-4">
          {items.map((item, index) => (
            <Reveal delay={index * 0.05} key={item.question}>
              <details
                className="group rounded-2xl border border-border bg-white shadow-sm transition-shadow open:shadow-lg open:shadow-primary/5"
                open={index === 0}
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 p-6 font-heading font-semibold text-foreground text-lg transition-colors hover:text-primary md:p-7 [&::-webkit-details-marker]:hidden">
                  <h3 className="font-semibold text-inherit text-lg">
                    {item.question}
                  </h3>
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition-all duration-300 group-open:rotate-45 group-open:bg-primary group-open:text-white">
                    <HugeiconsIcon className="h-4 w-4" icon={Add01Icon} />
                  </span>
                </summary>
                <p className="px-6 pb-7 text-muted-foreground leading-relaxed md:px-7">
                  {item.answer}
                </p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
