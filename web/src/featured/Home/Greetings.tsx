import { fontCinzel, fontPrompt } from "@/constant/fonts";
import { cn } from "@/lib/utils";
import { TypeAnimation } from "react-type-animation";

export function HomeGreetings() {
  return (
    <div className="relative z-10 text-center text-white space-y-2">
      <p className="mb-2">Hello I am</p>
      <h1 className={cn(fontCinzel.className, "text-7xl font-semibold")}>
        Muhamad Aqil Maulana
      </h1>
      <TypeAnimation
        sequence={["Full Stack Developer", 1000]}
        className={cn(fontPrompt.className, "font-medium")}
      />
    </div>
  );
}
