import { Input } from "@/components/ui/input";

interface UiInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  className?: string;
}

export function UiInput({ label, className, ...props }: UiInputProps) {
  return (
    <div className="flex flex-col gap-2">
      {label && (
        <span className="text-white/80 text-sm font-medium px-1">
          {label}
        </span>
      )}

      <Input
        {...props}
        className={`
          bg-white/5 
          border border-white/20 
          text-white 
          rounded-xl 
          focus-visible:ring-0 
          focus-visible:ring-offset-0 
          placeholder:text-white/40
          shadow-sm
          hover:bg-white/10 
          transition
          ${className}
        `}
      />
    </div>
  );
}
