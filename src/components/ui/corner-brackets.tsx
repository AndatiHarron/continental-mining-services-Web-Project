import { cn } from "@/lib/utils";

/** Viewfinder-style corner marks laid over machinery photos. */
export function CornerBrackets({ className }: { className?: string }) {
  const base = "absolute h-6 w-6 border-white/80 transition-all duration-500";
  return (
    <span
      aria-hidden="true"
      className={cn("pointer-events-none absolute inset-4 z-20", className)}
    >
      <span className={cn(base, "top-0 left-0 border-t-2 border-l-2")} />
      <span className={cn(base, "top-0 right-0 border-t-2 border-r-2")} />
      <span className={cn(base, "bottom-0 left-0 border-b-2 border-l-2")} />
      <span className={cn(base, "right-0 bottom-0 border-r-2 border-b-2")} />
    </span>
  );
}
