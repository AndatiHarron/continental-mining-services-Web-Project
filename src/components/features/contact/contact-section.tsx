import {
  ArrowRight01Icon,
  Call02Icon,
  CheckmarkCircle02Icon,
  Clock01Icon,
  ContainerTruck01Icon,
  Drill,
  Facebook01Icon,
  Linkedin01Icon,
  Location01Icon,
  Mail01Icon,
  Message01Icon,
  SentIcon,
  TractorIcon,
  TruckIcon,
  WhatsappIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { type FormEvent, useState } from "react";
import { useTranslation } from "react-i18next";
import { ctaVariants } from "@/components/ui/cta";
import { Reveal } from "@/components/ui/reveal";
import { SITE, whatsappLink } from "@/lib/site";
import { cn } from "@/lib/utils";

interface Enquiry {
  fullName: string;
  email: string;
  phone: string;
  interest: string;
  message: string;
}

const EMPTY_ENQUIRY: Enquiry = {
  fullName: "",
  email: "",
  phone: "",
  interest: "",
  message: "",
};

/** Icons for: general inquiry, ore haulage, drilling, equipment rental, logistics */
const INTEREST_ICONS = [
  Message01Icon,
  TruckIcon,
  Drill,
  TractorIcon,
  ContainerTruck01Icon,
];

const fieldClass =
  "w-full rounded-xl border border-border bg-muted/30 px-4 py-3.5 text-foreground transition-all placeholder:text-muted-foreground/70 hover:border-primary/30 focus:border-primary focus:bg-white focus:outline-none focus:ring-4 focus:ring-primary/10";
const labelClass =
  "mb-2 block font-heading font-semibold text-foreground text-sm";

function composeBody(
  enquiry: Enquiry,
  labels: Record<keyof Enquiry, string>
): string {
  return (Object.keys(labels) as Array<keyof Enquiry>)
    .filter((key) => enquiry[key].trim() !== "")
    .map((key) =>
      key === "message"
        ? `\n${enquiry.message}`
        : `${labels[key]}: ${enquiry[key]}`
    )
    .join("\n");
}

export const ContactSection = () => {
  const { t } = useTranslation();
  const [enquiry, setEnquiry] = useState<Enquiry>(EMPTY_ENQUIRY);
  const [submitted, setSubmitted] = useState(false);
  const interestOptions = t("contactPage.form.interestOptions", {
    returnObjects: true,
  }) as string[];

  const labels: Record<keyof Enquiry, string> = {
    fullName: t("contactPage.form.fields.fullName.label"),
    email: t("contactPage.form.fields.email.label"),
    phone: t("contactPage.form.fields.phone.label"),
    interest: t("contactPage.form.fields.interest.label"),
    message: t("contactPage.form.fields.message.label"),
  };

  const body = composeBody(enquiry, labels);
  const whatsappHref = whatsappLink(body || t("common.whatsappGeneric"));

  const update =
    (field: keyof Enquiry) => (event: { target: { value: string } }) =>
      setEnquiry((prev) => ({ ...prev, [field]: event.target.value }));

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const subject = `${t("contactPage.form.emailSubject")}: ${enquiry.interest} — ${enquiry.fullName}`;
    window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  };

  const contactItems = [
    {
      icon: Location01Icon,
      label: t("contactPage.contactInfo.headquarters.label"),
      value: t("contactPage.contactInfo.headquarters.location"),
      href: SITE.mapDirectionsUrl,
      external: true,
    },
    {
      icon: Call02Icon,
      label: t("contactPage.contactInfo.phone.label"),
      value: SITE.phone,
      href: SITE.phoneHref,
    },
    {
      icon: WhatsappIcon,
      label: t("contactPage.contactInfo.whatsapp.label"),
      value: t("contactPage.contactInfo.whatsapp.value"),
      href: whatsappLink(t("common.whatsappGeneric")),
      external: true,
    },
    {
      icon: Mail01Icon,
      label: t("contactPage.contactInfo.email.label"),
      value: SITE.email,
      href: `mailto:${SITE.email}`,
    },
    {
      icon: Clock01Icon,
      label: t("contactPage.contactInfo.support.label"),
      value: t("contactPage.contactInfo.support.value"),
    },
  ];

  return (
    <section className="relative pb-24 md:pb-32">
      <div className="container relative z-10 mx-auto -mt-16 px-4 md:-mt-24 md:px-6">
        <Reveal>
          <div className="overflow-hidden rounded-[2rem] bg-white shadow-2xl shadow-primary/10 ring-1 ring-border lg:grid lg:grid-cols-5">
            {/* Contact details */}
            <div className="relative isolate overflow-hidden bg-linear-to-br from-primary to-brand-dark px-7 py-12 text-white lg:col-span-2 lg:px-12 lg:py-16">
              <div
                aria-hidden="true"
                className="absolute inset-0 -z-10 bg-grid-light"
              />
              <div
                aria-hidden="true"
                className="absolute -right-24 -bottom-24 -z-10 h-72 w-72 rounded-full bg-white/10 blur-3xl"
              />
              <h2 className="mb-4 font-bold font-heading text-2xl text-white md:text-3xl">
                {t("contactPage.contactInfo.title")}
              </h2>
              <p className="mb-10 text-white/80 leading-relaxed">
                {t("contactPage.contactInfo.description")}
              </p>

              <ul className="space-y-3">
                {contactItems.map((item) => {
                  const content = (
                    <>
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/15 transition-colors group-hover:bg-white group-hover:text-primary">
                        <HugeiconsIcon className="h-5 w-5" icon={item.icon} />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-white/60 text-xs uppercase tracking-wider">
                          {item.label}
                        </span>
                        <span className="block break-words font-semibold text-white">
                          {item.value}
                        </span>
                      </span>
                    </>
                  );
                  return (
                    <li key={item.label}>
                      {item.href ? (
                        <a
                          className="group flex items-center gap-4 rounded-2xl p-2 transition-all duration-300 hover:translate-x-1 hover:bg-white/10"
                          href={item.href}
                          {...(item.external
                            ? { rel: "noopener noreferrer", target: "_blank" }
                            : {})}
                        >
                          {content}
                        </a>
                      ) : (
                        <div className="flex items-center gap-4 p-2">
                          {content}
                        </div>
                      )}
                    </li>
                  );
                })}
              </ul>

              <div className="mt-10 border-white/15 border-t pt-8">
                <p className="mb-4 font-heading font-semibold text-sm text-white/70">
                  {t("contactPage.contactInfo.follow")}
                </p>
                <div className="flex gap-3">
                  {[
                    {
                      href: SITE.social.linkedin,
                      label: "LinkedIn",
                      icon: Linkedin01Icon,
                    },
                    {
                      href: SITE.social.facebook,
                      label: "Facebook",
                      icon: Facebook01Icon,
                    },
                  ].map((social) => (
                    <a
                      aria-label={social.label}
                      className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-all hover:bg-white hover:text-primary"
                      href={social.href}
                      key={social.label}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <HugeiconsIcon className="h-5 w-5" icon={social.icon} />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="px-7 py-12 lg:col-span-3 lg:px-14 lg:py-16">
              {submitted ? (
                <div
                  aria-live="polite"
                  className="flex h-full flex-col items-start justify-center"
                >
                  <span className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <HugeiconsIcon
                      className="h-8 w-8"
                      icon={CheckmarkCircle02Icon}
                    />
                  </span>
                  <h2 className="mb-3 font-bold font-heading text-2xl text-primary md:text-3xl">
                    {t("contactPage.form.successTitle")}
                  </h2>
                  <p className="mb-8 max-w-lg text-lg text-muted-foreground leading-relaxed">
                    {t("contactPage.form.successText")}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <a
                      className={ctaVariants({ variant: "solid" })}
                      href={whatsappHref}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <HugeiconsIcon className="h-5 w-5" icon={WhatsappIcon} />
                      {t("contactPage.form.whatsappButton")}
                    </a>
                    <button
                      className={ctaVariants({ variant: "outline" })}
                      onClick={() => setSubmitted(false)}
                      type="button"
                    >
                      {t("contactPage.form.sendAnother")}
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  <h2 className="mb-2 font-bold font-heading text-2xl text-primary md:text-3xl">
                    {t("contactPage.form.title")}
                  </h2>
                  <p className="mb-8 text-muted-foreground">
                    {t("contactPage.form.intro")}
                  </p>
                  <form
                    className="space-y-5"
                    id="contact-main"
                    onSubmit={handleSubmit}
                  >
                    <div className="grid gap-5 md:grid-cols-2">
                      <div>
                        <label className={labelClass} htmlFor="full_name">
                          {labels.fullName}
                        </label>
                        <input
                          autoComplete="name"
                          className={fieldClass}
                          id="full_name"
                          name="full_name"
                          onChange={update("fullName")}
                          placeholder={t(
                            "contactPage.form.fields.fullName.placeholder"
                          )}
                          required
                          type="text"
                          value={enquiry.fullName}
                        />
                      </div>
                      <div>
                        <label className={labelClass} htmlFor="email">
                          {labels.email}
                        </label>
                        <input
                          autoComplete="email"
                          className={fieldClass}
                          id="email"
                          name="email"
                          onChange={update("email")}
                          placeholder={t(
                            "contactPage.form.fields.email.placeholder"
                          )}
                          required
                          type="email"
                          value={enquiry.email}
                        />
                      </div>
                    </div>

                    <div>
                      <label className={labelClass} htmlFor="phone">
                        {labels.phone}{" "}
                        <span className="font-normal text-muted-foreground">
                          ({t("contactPage.form.optional")})
                        </span>
                      </label>
                      <input
                        autoComplete="tel"
                        className={fieldClass}
                        id="phone"
                        name="phone"
                        onChange={update("phone")}
                        placeholder={t(
                          "contactPage.form.fields.phone.placeholder"
                        )}
                        type="tel"
                        value={enquiry.phone}
                      />
                    </div>

                    <fieldset>
                      <legend className={labelClass}>{labels.interest}</legend>
                      <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 xl:grid-cols-3">
                        {interestOptions.map((option, index) => (
                          <label
                            className="group flex cursor-pointer items-center gap-3 rounded-xl border border-border bg-muted/30 px-3.5 py-3 font-medium text-foreground text-sm transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:bg-white hover:shadow-md has-checked:border-primary has-checked:bg-primary has-checked:text-white has-checked:shadow-lg has-checked:shadow-primary/25 has-focus-visible:ring-4 has-focus-visible:ring-primary/20"
                            key={option}
                          >
                            <input
                              checked={enquiry.interest === option}
                              className="sr-only"
                              name="interest"
                              onChange={update("interest")}
                              required
                              type="radio"
                              value={option}
                            />
                            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-has-checked:bg-white/20 group-has-checked:text-white">
                              <HugeiconsIcon
                                className="h-5 w-5"
                                icon={
                                  INTEREST_ICONS[index % INTEREST_ICONS.length]
                                }
                              />
                            </span>
                            <span className="leading-snug">{option}</span>
                          </label>
                        ))}
                      </div>
                    </fieldset>

                    <div>
                      <label className={labelClass} htmlFor="message">
                        {labels.message}
                      </label>
                      <textarea
                        className={cn(fieldClass, "min-h-[150px] resize-y")}
                        id="message"
                        name="message"
                        onChange={update("message")}
                        placeholder={t(
                          "contactPage.form.fields.message.placeholder"
                        )}
                        required
                        rows={5}
                        value={enquiry.message}
                      />
                    </div>

                    <div className="flex flex-col gap-3 pt-2 sm:flex-row">
                      <button
                        className={cn(
                          ctaVariants({ variant: "primary", size: "lg" }),
                          "sm:flex-1"
                        )}
                        type="submit"
                      >
                        <HugeiconsIcon className="h-5 w-5" icon={SentIcon} />
                        {t("contactPage.form.submitButton")}
                      </button>
                      <a
                        className={cn(
                          ctaVariants({ variant: "outline", size: "lg" }),
                          "sm:flex-1"
                        )}
                        href={whatsappHref}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <HugeiconsIcon
                          className="h-5 w-5"
                          icon={WhatsappIcon}
                        />
                        {t("contactPage.form.whatsappButton")}
                      </a>
                    </div>
                  </form>
                </>
              )}
            </div>
          </div>
        </Reveal>
      </div>

      {/* Map */}
      <div className="container mx-auto mt-24 px-4 md:px-6">
        <Reveal>
          <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="mb-3 inline-flex items-center gap-3 font-heading font-semibold text-secondary text-xs uppercase tracking-[0.2em]">
                <span aria-hidden="true" className="h-px w-8 bg-secondary" />
                {t("contactPage.map.eyebrow")}
              </p>
              <h2 className="font-bold font-heading text-3xl text-primary md:text-4xl">
                {t("contactPage.map.location")}
              </h2>
            </div>
            <a
              className={ctaVariants({ variant: "outline" })}
              href={SITE.mapDirectionsUrl}
              rel="noopener noreferrer"
              target="_blank"
            >
              {t("contactPage.map.directions")}
              <HugeiconsIcon
                className="h-4 w-4 transition-transform group-hover/cta:translate-x-1"
                icon={ArrowRight01Icon}
              />
            </a>
          </div>
          <div className="img-skeleton relative overflow-hidden rounded-[2rem] shadow-xl ring-1 ring-border">
            <div className="tilt absolute top-4 left-4 z-10 hidden w-72 rounded-2xl bg-white/95 p-5 shadow-2xl ring-1 ring-border backdrop-blur md:block">
              <p className="mb-3 flex items-center gap-2 font-heading font-semibold text-secondary text-xs uppercase tracking-[0.18em]">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-primary" />
                </span>
                {t("contactPage.contactInfo.headquarters.label")}
              </p>
              <p className="mb-4 font-bold font-heading text-foreground text-xl">
                {t("contactPage.contactInfo.headquarters.location")}
              </p>
              <a
                className="mb-2 flex items-center gap-2 text-muted-foreground text-sm transition-colors hover:text-primary"
                href={SITE.phoneHref}
              >
                <HugeiconsIcon className="h-4 w-4" icon={Call02Icon} />
                {SITE.phone}
              </a>
              <p className="flex items-center gap-2 text-muted-foreground text-sm">
                <HugeiconsIcon className="h-4 w-4" icon={Clock01Icon} />
                {t("contactPage.contactInfo.support.value")}
              </p>
            </div>
            <iframe
              allowFullScreen
              className="h-[420px] w-full grayscale transition-[filter] duration-700 hover:grayscale-0 md:h-[480px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src={SITE.mapEmbedUrl}
              title={t("contactPage.map.title")}
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
};
