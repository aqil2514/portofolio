import { cn } from "@/lib/utils";

export type BadgeVariants =
  | "fill"
  | "outline"
  | "status-live"
  | "status-progress"
  | "status-archived";

interface UiBadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  variant?: BadgeVariants;
}

const classNameVariant: Record<BadgeVariants, string> = {
  fill:
    "text-white/85 text-xs sm:text-sm px-3 py-1 rounded-md border border-white/20 bg-white/5 backdrop-blur-sm",

  outline:
    "text-white/60 text-xs px-2 py-1 rounded border border-white/10",

  "status-live":
    "text-green-200 text-xs sm:text-sm px-3 py-1 rounded-md bg-green-500/20 border border-green-400/30 backdrop-blur-md",

  "status-progress":
    "text-amber-200 text-xs sm:text-sm px-3 py-1 rounded-md bg-amber-500/20 border border-amber-400/30 backdrop-blur-md",

  "status-archived":
    "text-gray-300 text-xs sm:text-sm px-3 py-1 rounded-md bg-gray-600/30 border border-gray-500/40 backdrop-blur-md",
};

export function UiBadge({
  children,
  className,
  variant = "fill",
  ...props
}: UiBadgeProps) {
  return (
    <span {...props} className={cn(classNameVariant[variant], className)}>
      {children}
    </span>
  );
}
