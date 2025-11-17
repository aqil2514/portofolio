import { cn } from "@/lib/utils";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function MainContainer({ children, className, ...props }: Props) {
  return (
    <div {...props} className={cn("container mx-auto py-20", className)}>
      {children}
    </div>
  );
}
