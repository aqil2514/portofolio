import { VARIABLE_COLOR } from "@/constant/variables";
import * as motion from "motion/react-client";

export default function PageLoader() {
  return (
    <div
      style={{ background: VARIABLE_COLOR.BLUE_PRIMARY }}
      className="fixed inset-0 flex items-center justify-center z-999"
    >
      <motion.div
        initial={{ scale: 0, opacity: 0.4 }}
        animate={{ scale: [1, 1.3, 1], opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 1.2, repeat: Infinity }}
        className="w-10 h-10 rounded-full bg-white/90 shadow-[0_0_20px_rgba(255,255,255,0.6)]"
      />
    </div>
  );
}
