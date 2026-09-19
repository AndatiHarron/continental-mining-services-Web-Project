import {
  ArrowRight01Icon,
  ArrowUp01Icon,
  ArrowUpRight01Icon,
  Call02Icon,
  Facebook01Icon,
  Linkedin01Icon,
  Location01Icon,
  Mail01Icon,
  WhatsappIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import footerBg from "@/assets/home/abstract_topographical_map_pattern_dark_maroon_high_contrast.webp";
import { RegionToggle } from "@/components/features/localization/region-toggle";
import { FLEET } from "@/lib/fleet";
import { SERVICE_KEYS, SERVICES } from "@/lib/services";
import { SITE, whatsappLink } from "@/lib/site";
import logo from "@/logo.png";

const headingClass =
  "mb-6 flex items-center gap-3 font-heading font-semibold text-white/50 text-xs uppercase tracking-[0.25em]";
const linkClass =
  "group inline-flex items-center gap-2 text-white/70 transition-all duration-300 hover:translate-x-1 hover:text-white focus-visible:text-white";

function ColumnHeading({ children }: { children: string }) {
  return (
    <h2 className={headingClass}>
      <span aria-hidden="true" className="h-px w-6 bg-secondary" />
      {children}
    </h2>
  );
}

export const Footer = () => {
  const { t } = useTranslation();

  const quickContacts = [
    {
      icon: Call02Icon,
      label: t("contactPage.contactInfo.phone.label"),
      value: SITE.phone,
      href: SITE.phoneHref,
    },
    {
      icon: WhatsappIcon,
      label: t("common.whatsapp"),
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
  ];

  const socials = [
    { href: SITE.social.linkedin, label: "LinkedIn", icon: Linkedin01Icon },
    { href: SITE.social.facebook, label: "Facebook", icon: Facebook01Icon },
    {
      href: whatsappLink(t("common.whatsappGeneric")),
      label: "WhatsApp",
      icon: WhatsappIcon,
    },
  ];

  return (
    <footer className="relative isolate overflow-hidden bg-black text-white">
      {/* Background */}
      <img
        alt=""
        aria-hidden="true"
        className="absolute inset-0 -z-30 h-full w-full object-cover opacity-25 mix-blend-overlay"
        decoding="async"
        height={1080}
        loading="lazy"
        src={footerBg}
        width={1920}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-linear-to-b from-gray-900 via-black to-black opacity-95"
      />
      <div
        aria-hidden="true"
        className="mask-fade-y absolute inset-0 -z-10 bg-grid-light opacity-60"
      />
      <div
        aria-hidden="true"
        className="absolute -top-48 left-1/4 -z-10 h-96 w-[40rem] rounded-full bg-primary/25 blur-[140px]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-primary to-transparent"
      />

      <div className="container mx-auto px-4 pt-20 md:px-6">
        {/* Top band: brand + quick contacts */}
        <div className="grid grid-cols-1 items-center gap-10 border-white/10 border-b pb-14 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <div>
            <Link
              aria-label={SITE.name}
              className="mb-6 inline-flex items-center gap-4"
              to="/"
            >
              <img
                alt={`${SITE.name} logo`}
                className="h-20 w-auto"
                height={80}
                loading="lazy"
                src={logo}
                width={65}
              />
              <span className="font-bold font-heading text-lg leading-tight">
                Continental
                <span className="block font-normal text-sm text-white/60 uppercase tracking-[0.2em]">
                  Mining Services
                </span>
              </span>
            </Link>
            <p className="mb-6 max-w-md text-lg text-white/70 leading-relaxed">
              {t("footer.description")}
            </p>
            <div className="flex gap-3">
              {socials.map((social) => (
                <a
                  aria-label={social.label}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/80 transition-all hover:-translate-y-1 hover:border-white hover:bg-white hover:text-primary"
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

          <ul className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            {quickContacts.map((item) => (
              <li key={item.label}>
                <a
                  className="tilt spotlight spotlight-inverted group flex h-full flex-row items-center gap-4 rounded-3xl border border-white/10 bg-white/[0.05] p-5 backdrop-blur transition-colors duration-300 hover:border-white/25 hover:bg-white/10 sm:flex-col sm:items-stretch sm:justify-between sm:gap-6"
                  href={item.href}
                  {...(item.external
                    ? { rel: "noopener noreferrer", target: "_blank" }
                    : {})}
                >
                  <span className="flex shrink-0 items-center justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-white shadow-lg shadow-primary/30 transition-transform duration-300 group-hover:rotate-[-8deg]">
                      <HugeiconsIcon className="h-6 w-6" icon={item.icon} />
                    </span>
                    <HugeiconsIcon
                      className="hidden h-5 w-5 text-white/40 transition-all duration-300 group-hover:rotate-45 group-hover:text-white sm:block"
                      icon={ArrowUpRight01Icon}
                    />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-white/50 text-xs uppercase tracking-wider">
                      {item.label}
                    </span>
                    <span className="block font-heading font-semibold text-sm [overflow-wrap:anywhere]">
                      {item.value}
                    </span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Link columns */}
        <div className="grid grid-cols-1 gap-12 py-14 sm:grid-cols-2 lg:grid-cols-12">
          <nav
            aria-label={t("footer.sections.services")}
            className="lg:col-span-4"
          >
            <ColumnHeading>{t("footer.sections.services")}</ColumnHeading>
            <ul className="space-y-3.5">
              {SERVICE_KEYS.map((key) => (
                <li key={key}>
                  <Link
                    className={linkClass}
                    hash={SERVICES[key].anchor}
                    to="/services"
                  >
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 text-white/60 ring-1 ring-white/10 transition-colors group-hover:bg-primary group-hover:text-white">
                      <HugeiconsIcon
                        className="h-4 w-4"
                        icon={SERVICES[key].icon}
                      />
                    </span>
                    {t(`servicesPage.detailedList.${key}.title`)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav
            aria-label={t("nav.links.fleetRentals")}
            className="lg:col-span-3"
          >
            <ColumnHeading>{t("nav.links.fleetRentals")}</ColumnHeading>
            <ul className="space-y-3.5">
              {FLEET.map((item) => (
                <li key={item.key}>
                  <Link className={linkClass} hash="fleet" to="/">
                    <HugeiconsIcon
                      className="h-4 w-4 text-secondary transition-transform group-hover:translate-x-0.5"
                      icon={ArrowRight01Icon}
                    />
                    {t(`rental.items.${item.key}.title`)}
                    <span className="font-readout text-white/35 text-xs">
                      {item.brand}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav
            aria-label={t("footer.sections.company")}
            className="lg:col-span-2"
          >
            <ColumnHeading>{t("footer.sections.company")}</ColumnHeading>
            <ul className="space-y-3.5">
              {[
                { to: "/", label: t("nav.links.home") },
                { to: "/about", label: t("nav.links.aboutUs") },
                { to: "/services", label: t("nav.links.services") },
                { to: "/contact-us", label: t("nav.links.contact") },
              ].map((link) => (
                <li key={link.to}>
                  <Link className={linkClass} to={link.to}>
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link className={linkClass} hash="faq" to="/">
                  FAQ
                </Link>
              </li>
            </ul>
          </nav>

          <div className="lg:col-span-3">
            <ColumnHeading>{t("footer.sections.contact")}</ColumnHeading>
            <address className="space-y-4 not-italic">
              <a
                className={`${linkClass} items-start`}
                href={SITE.mapDirectionsUrl}
                rel="noopener noreferrer"
                target="_blank"
              >
                <HugeiconsIcon
                  className="mt-0.5 h-5 w-5 shrink-0 text-secondary"
                  icon={Location01Icon}
                />
                {t("footer.location")}
              </a>
              <a className={linkClass} href={SITE.phoneHref}>
                <HugeiconsIcon
                  className="h-5 w-5 shrink-0 text-secondary"
                  icon={Call02Icon}
                />
                {SITE.phone}
              </a>
              <a
                className={`${linkClass} items-start`}
                href={`mailto:${SITE.email}`}
              >
                <HugeiconsIcon
                  className="mt-0.5 h-5 w-5 shrink-0 text-secondary"
                  icon={Mail01Icon}
                />
                <span className="min-w-0 [overflow-wrap:anywhere]">
                  {SITE.email}
                </span>
              </a>
            </address>
            <p className="mt-6 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 py-2 pr-4 pl-3 text-sm text-white/85">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-secondary" />
              </span>
              {t("footer.support")}
            </p>
          </div>
        </div>
      </div>

      {/* Giant wordmark */}
      <div
        aria-hidden="true"
        className="pointer-events-none select-none overflow-hidden"
      >
        <p
          className="-mb-[0.18em] whitespace-nowrap text-center font-bold font-readout text-[19vw] text-transparent uppercase leading-none tracking-tight"
          style={{ WebkitTextStroke: "1px rgb(255 255 255 / 0.12)" }}
        >
          Continental
        </p>
      </div>

      {/* Bottom bar */}
      <div className="relative border-white/10 border-t bg-black/60 backdrop-blur">
        <div className="container mx-auto flex flex-col items-center justify-between gap-5 px-4 py-6 text-sm md:flex-row md:px-6">
          <p className="text-white/50">
            &copy; {new Date().getFullYear()} {t("footer.copyright")}
          </p>
          <div className="flex items-center gap-5">
            <span className="sr-only">{t("footer.language")}</span>
            <RegionToggle />
            <a
              className="group inline-flex items-center gap-2 text-white/60 transition-colors hover:text-white"
              href="#main-content"
            >
              {t("footer.backToTop")}
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white shadow-lg shadow-primary/30 transition-transform duration-300 group-hover:-translate-y-1">
                <HugeiconsIcon className="h-4 w-4" icon={ArrowUp01Icon} />
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
