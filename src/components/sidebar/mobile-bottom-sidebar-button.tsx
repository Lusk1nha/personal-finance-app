import { ROUTES } from "@/constants";
import { MobileRedirectionButton } from "./mobile-redirection-button";
import { AnimatePresence, motion } from "framer-motion";

export function MobileBottomSidebar() {
  return (
    <AnimatePresence>
      <div className="bg-appGrey w-full h-[52px] md:h-[74px] fixed bottom-0 rounded-t-100">
        <motion.nav
          className="w-full h-full flex items-center justify-center sm:gap-4 px-2 pt-2"
          variants={{
            visible: {
              transition: {
                delayChildren: 0.2,
                staggerChildren: 0.05,
              },
            },
          }}
          initial="hidden"
          animate="visible"
        >
          {ROUTES.map((route) => (
            <MobileRedirectionButton key={route.href} {...route} />
          ))}
        </motion.nav>
      </div>
    </AnimatePresence>
  );
}
