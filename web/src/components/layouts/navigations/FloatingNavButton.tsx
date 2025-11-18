"use client";

import { motion } from "motion/react";
import { useState } from "react";
import { Menu } from "lucide-react";
import { SideNavMenu } from "./SideNavMenu";

export function FloatingNavButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* TOGGLE BUTTON */}
      <motion.button
        onClick={() => setOpen(true)}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 1 }}
        className="
          fixed top-6 right-6 z-200
          w-11 h-11 rounded-full 
          bg-white/10 backdrop-blur-xl 
          border border-white/20 
          flex items-center justify-center 
          shadow-lg shadow-black/20 
          text-white
          hover:bg-white/20 
          transition
        "
      >
        <Menu size={22} />
      </motion.button>

      {/* SIDE MENU */}
      <SideNavMenu open={open} onClose={() => setOpen(false)} />
    </>
  );
}
