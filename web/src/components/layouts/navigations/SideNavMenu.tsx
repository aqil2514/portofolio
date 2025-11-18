"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { X } from "lucide-react";
import { usePageTransition } from "@/providers/PageTransitionProvider";
import { LanguageSwitcher } from "@/featured/Home/LanguageSwitcher";
import { usePathname } from "@/i18n/navigations";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About Me", href: "/about-me" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export function SideNavMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const { setTransition, setIsReady } = usePageTransition();
  const pathname = usePathname();

  // index halaman saat ini
  const currentIndex = navItems.findIndex((item) => item.href === pathname);

  return (
    <>
      {/* BACKDROP */}
      {open && (
        <motion.div
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-150"
        />
      )}

      {/* SIDE PANEL */}
      <motion.aside
        initial={{ x: 300 }}
        animate={{ x: open ? 0 : 300 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="
          fixed top-0 right-0 h-full w-64 
          bg-white/10 backdrop-blur-xl 
          border-l border-white/20 
          z-200 p-6 flex flex-col gap-8
          shadow-[0_0_30px_rgba(0,0,0,0.4)]
        "
      >
        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-white hover:scale-110 transition"
        >
          <X size={22} />
        </button>

        {/* Language Switcher */}
        <LanguageSwitcher variant="menu" />

        {/* TITLE */}
        <h2 className="text-white font-semibold text-xl mt-8">Navigation</h2>

        {/* MENU LIST */}
        <motion.nav
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: {
              transition: { staggerChildren: 0.12 },
            },
          }}
          className="flex flex-col gap-5 mt-4"
        >
          {navItems.map((item, targetIndex) => {
            const isActive = item.href === pathname;

            return (
              <motion.div
                key={item.href}
                variants={{
                  hidden: { opacity: 0, x: 20 },
                  show: { opacity: 1, x: 0 },
                }}
              >
                {isActive ? (
                  /* ITEM AKTIF (bukan link) */
                  <span
                    className="
                      text-white text-lg font-semibold 
                      cursor-default pl-2 border-l-4 border-white
                    "
                  >
                    {item.label}
                  </span>
                ) : (
                  /* ITEM LINK */
                  <Link
                    href={item.href}
                    onClick={() => {
                      setIsReady(false);

                      // Tentukan transisi slide
                      if (currentIndex < targetIndex) {
                        setTransition("slideRight");
                      } else if (currentIndex > targetIndex) {
                        setTransition("slideLeft");
                      }

                      onClose();
                    }}
                    className="
                      text-white/90 text-lg 
                      hover:text-white transition
                    "
                  >
                    {item.label}
                  </Link>
                )}
              </motion.div>
            );
          })}
        </motion.nav>
      </motion.aside>
    </>
  );
}
