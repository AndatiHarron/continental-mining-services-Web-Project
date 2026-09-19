import { cva, type VariantProps } from "class-variance-authority";

/**
 * Link-styled call-to-action buttons. Apply to <a> / <Link> directly so we
 * never nest a <button> inside an anchor.
 */
export const ctaVariants = cva(
  "group/cta inline-flex shrink-0 cursor-pointer select-none items-center justify-center gap-2 whitespace-nowrap rounded-full font-heading font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-60 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary:
          "bg-secondary text-white shadow-secondary/25 shadow-xl hover:-translate-y-0.5 hover:bg-brand-dark",
        solid:
          "bg-primary text-white shadow-lg shadow-primary/20 hover:-translate-y-0.5 hover:bg-brand-dark",
        white:
          "bg-white text-primary shadow-black/10 shadow-xl hover:-translate-y-0.5 hover:bg-white/90",
        glass:
          "border border-white/25 bg-white/5 text-white backdrop-blur-md hover:border-white/40 hover:bg-white/15",
        outline:
          "border border-primary/25 bg-white text-primary hover:border-primary/50 hover:bg-primary/5",
      },
      size: {
        sm: "h-10 px-5 text-sm",
        md: "h-12 px-6 text-sm",
        lg: "h-14 px-8 text-base",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export type CtaVariantProps = VariantProps<typeof ctaVariants>;
