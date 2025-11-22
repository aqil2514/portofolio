import { cn } from "@/lib/utils";

export type BadgeVariants = "fill" | "outline";

interface UiBadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  variant?: BadgeVariants;
}

const classNameVariant: Record<BadgeVariants, string> = {
  fill: `text-white/85 text-xs sm:text-sm  px-3 py-1  rounded-md  border border-white/20  bg-white/5 backdrop-blur-sm`,
  outline: "text-white/60 text-xs px-2 py-1 rounded border border-white/10 ",
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
