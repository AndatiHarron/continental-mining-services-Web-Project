import type { ReactNode } from "react";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "center" | "left";
  tone?: "default" | "inverted";
  as?: "h1" | "h2";
  id?: string;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  tone = "default",
  as: Heading = "h2",
  id,
  className,
}: SectionHeadingProps) {
  const inverted = tone === "inverted";

  return (
    <Reveal
      className={cn(
        "max-w-3xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            "mb-4 inline-flex items-center gap-3 font-heading font-semibold text-xs uppercase tracking-[0.2em]",
            inverted ? "text-white/80" : "text-secondary"
          )}
        >
          <span
            aria-hidden="true"
            className={cn(
              "h-px w-8",
              inverted ? "bg-white/50" : "bg-secondary"
            )}
          />
          {eyebrow}
          {align === "center" && (
            <span
              aria-hidden="true"
              className={cn(
                "h-px w-8",
                inverted ? "bg-white/50" : "bg-secondary"
              )}
            />
          )}
        </p>
      )}
      <Heading
        className={cn(
          "font-bold font-heading text-3xl leading-tight md:text-4xl lg:text-5xl",
          inverted ? "text-white" : "text-primary"
        )}
        id={id}
      >
        {title}
      </Heading>
      {description && (
        <p
          className={cn(
            "mt-5 text-lg leading-relaxed",
            inverted ? "text-white/75" : "text-muted-foreground"
          )}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}
