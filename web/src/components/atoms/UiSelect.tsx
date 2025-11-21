import { BasicSelect } from "@/@types/General";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface UiSelectProps {
  label?: string;              // 👈 tambahan baru
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  options: BasicSelect[];
  onValueChange?: (v: string) => void;
  className?: string;
}

export function UiSelect({
  label,
  value,
  defaultValue,
  placeholder = "Select",
  options,
  onValueChange,
  className,
}: UiSelectProps) {
  return (
    <div className="flex flex-col gap-2">
      {label && (
        <span className="text-white/80 text-sm font-medium px-1">
          {label}
        </span>
      )}

      <Select value={value} defaultValue={defaultValue} onValueChange={onValueChange}>
        <SelectTrigger
          className={`
            min-w-[180px] 
            bg-white/5 
            border border-white/20 
            text-white 
            rounded-xl 
            focus:ring-0 
            focus:ring-offset-0 
            shadow-sm 
            hover:bg-white/10 
            transition
            ${className}
          `}
        >
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>

        <SelectContent
          className="
            bg-[#1e3648] 
            border border-white/20 
            text-white 
            rounded-xl 
            shadow-xl
          "
        >
          {options.map((opt) => (
            <SelectItem
              key={opt.value}
              value={opt.value}
              className="
                text-white 
                focus:bg-white/10 
                focus:text-white 
                cursor-pointer
              "
            >
              {opt.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
