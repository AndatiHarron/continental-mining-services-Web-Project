import {
  ArrowRight01Icon,
  Call02Icon,
  Mail01Icon,
  Menu01Icon,
  WhatsappIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { RegionToggle } from "@/components/features/localization/region-toggle";
import { Button } from "@/components/ui/button";
import { ctaVariants } from "@/components/ui/cta";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { SITE, whatsappLink } from "@/lib/site";
import { cn } from "@/lib/utils";
import logo from "@/logo.png";

const SCROLL_THRESHOLD_PX = 24;

type NavItem = {
  labelKey: string;
  to: string;
  hash?: string;
  exact?: boolean;
};

const NAV_ITEMS: NavItem[] = [
  { labelKey: "nav.links.home", to: "/", exact: true },
  { labelKey: "nav.links.services", to: "/services" },
  { labelKey: "nav.links.fleetRentals", to: "/", hash: "fleet" },
  { labelKey: "nav.links.aboutUs", to: "/about" },
  { labelKey: "nav.links.contact", to: "/contact-us" },
];

export const Navbar = () => {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const handleScroll = () =>
      setIsScrolled(window.scrollY > SCROLL_THRESHOLD_PX);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close the mobile menu whenever the route changes
  // biome-ignore lint/correctness/useExhaustiveDependencies: pathname is the trigger
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const quoteHref = whatsappLink(t("common.whatsappGeneric"));

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-out",
        isScrolled
          ? "border-white/10 border-b bg-primary/95 py-2 shadow-black/10 shadow-lg backdrop-blur-md"
          : "bg-linear-to-b from-black/60 to-transparent py-4 md:py-5"
      )}
    >
      <div className="container mx-auto flex items-center justify-between gap-6 px-4 md:px-6">
        <Link
          aria-label={SITE.name}
          className="relative z-50 flex shrink-0 items-center transition-transform hover:scale-105"
          to="/"
        >
          <img
            alt={`${SITE.name} logo`}
            className={cn(
              "w-auto transition-all duration-500",
              isScrolled ? "h-12" : "h-14 md:h-16"
            )}
            height={64}
            src={logo}
            width={52}
          />
        </Link>

        {/* Desktop navigation */}
        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1 rounded-full border border-white/10 bg-white/5 p-1 backdrop-blur-md">
            {NAV_ITEMS.map((item) => (
              <li key={item.labelKey}>
                <Link
                  activeOptions={{
                    exact: item.exact,
                    includeHash: Boolean(item.hash),
                  }}
                  className="block rounded-full px-4 py-2 font-heading font-medium text-sm text-white/80 tracking-wide transition-all hover:bg-white/10 hover:text-white data-[status=active]:bg-white data-[status=active]:text-primary data-[status=active]:shadow-md"
                  hash={item.hash}
                  to={item.to}
                >
                  {t(item.labelKey)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            className="hidden items-center gap-2 font-medium text-sm text-white/80 transition-colors hover:text-white xl:flex"
            href={SITE.phoneHref}
          >
            <HugeiconsIcon className="h-4 w-4" icon={Call02Icon} />
            {SITE.phone}
          </a>
          <RegionToggle />
          <a
            className={ctaVariants({ variant: "primary", size: "sm" })}
            href={quoteHref}
            rel="noopener noreferrer"
            target="_blank"
          >
            {t("nav.button.quote")}
            <HugeiconsIcon
              className="h-4 w-4 transition-transform group-hover/cta:translate-x-0.5"
              icon={ArrowRight01Icon}
            />
          </a>
        </div>

        {/* Mobile navigation */}
        <div className="flex items-center gap-3 lg:hidden">
          <RegionToggle />
          <Sheet onOpenChange={setMenuOpen} open={menuOpen}>
            <SheetTrigger
              render={
                <Button
                  aria-label={t("nav.mobile.open")}
                  className="h-11 w-11 rounded-full border border-white/20 bg-white/5 text-white backdrop-blur hover:bg-white/15 hover:text-white"
                  size="icon"
                  variant="ghost"
                >
                  <HugeiconsIcon className="h-6 w-6" icon={Menu01Icon} />
                </Button>
              }
            />
            <SheetContent
              className="w-[88vw] max-w-sm border-l-white/10 bg-primary text-white"
              side="right"
            >
              <div className="relative flex h-full flex-col overflow-y-auto">
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-grid-light opacity-50"
                />
                <div className="relative flex items-center gap-3 border-white/10 border-b p-6">
                  <img
                    alt=""
                    className="h-12 w-auto"
                    height={48}
                    src={logo}
                    width={39}
                  />
                  <SheetTitle className="font-bold font-heading text-lg text-white">
                    {t("nav.mobile.title")}
                  </SheetTitle>
                </div>

                <nav aria-label="Mobile" className="relative flex-1 p-6">
                  <ul className="space-y-1">
                    {NAV_ITEMS.map((item, index) => (
                      <li key={item.labelKey}>
                        <Link
                          activeOptions={{
                            exact: item.exact,
                            includeHash: Boolean(item.hash),
                          }}
                          className="group flex items-center justify-between rounded-2xl px-4 py-4 font-bold font-heading text-2xl text-white/85 transition-colors hover:bg-white/10 hover:text-white data-[status=active]:bg-white/10 data-[status=active]:text-white"
                          hash={item.hash}
                          onClick={() => setMenuOpen(false)}
                          to={item.to}
                        >
                          <span>
                            <span className="mr-3 font-medium text-sm text-white/40">
                              {String(index + 1).padStart(2, "0")}
                            </span>
                            {t(item.labelKey)}
                          </span>
                          <HugeiconsIcon
                            className="h-5 w-5 opacity-40 transition-all group-hover:translate-x-1 group-hover:opacity-100"
                            icon={ArrowRight01Icon}
                          />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>

                <div className="relative space-y-4 p-6">
                  <div className="space-y-3 rounded-2xl border border-white/10 bg-white/5 p-5">
                    <a
                      className="flex items-center gap-3 text-sm text-white/90 hover:text-white"
                      href={SITE.phoneHref}
                    >
                      <HugeiconsIcon
                        className="h-5 w-5 shrink-0"
                        icon={Call02Icon}
                      />
                      {SITE.phone}
                    </a>
                    <a
                      className="flex items-start gap-3 text-sm text-white/90 hover:text-white"
                      href={`mailto:${SITE.email}`}
                    >
                      <HugeiconsIcon
                        className="h-5 w-5 shrink-0"
                        icon={Mail01Icon}
                      />
                      <span className="min-w-0 break-all">{SITE.email}</span>
                    </a>
                  </div>
                  <a
                    className={cn(
                      ctaVariants({ variant: "white", size: "lg" }),
                      "w-full"
                    )}
                    href={quoteHref}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <HugeiconsIcon className="h-5 w-5" icon={WhatsappIcon} />
                    {t("nav.button.quote")}
                  </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};
