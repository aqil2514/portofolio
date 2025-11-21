import { ButtonHTMLAttributes } from "react";

interface UiButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  className?: string;
}

export function UiButton({ label, className, ...props }: UiButtonProps) {
  return (
    <button
      {...props}
      className={`
        px-6 py-2
        bg-white/5 
        border border-white/20 
        text-white 
        rounded-xl
        shadow-sm
        hover:bg-white/10 
        transition
        focus:ring-0 
        focus:ring-offset-0
        ${className}
      `}
    >
      {label}
    </button>
  );
}
