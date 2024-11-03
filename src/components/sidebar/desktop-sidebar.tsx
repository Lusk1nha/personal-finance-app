"use client";

import { Logo } from "../logo";

import { RedirectButton } from "./redirection-button";
import { MaxMinSidebarButton } from "./max-min-sidebar";
import { ROUTES } from "@/constants";
import { useSidebar } from "@/hooks/use-sidebar";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";

export function DesktopSidebar() {
  const { isSidebarOpen } = useSidebar();

  return (
    <AnimatePresence>
      <div
        className={cn(
          "bg-appGrey h-full flex flex-col items-start justify-between rounded-r-200 gap-16",
          isSidebarOpen ? "min-w-[300px]" : "min-w-[88px]"
        )}
      >
        <div className="w-full flex flex-col gap-16">
          <div className="w-full flex items-center min-h-[100px] px-400">
            <Link href="/">
              <Logo
                title="Click to go to the homepage"
                ariaDescription="Logo of the company"
                type={isSidebarOpen ? "full" : "icon"}
              />
            </Link>
          </div>

          <motion.nav
            className={cn(
              "w-full flex flex-col gap-4",
              isSidebarOpen ? "pr-300" : "px-150"
            )}
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
              <RedirectButton
                key={route.href}
                variant={isSidebarOpen ? "long" : "icon"}
                {...route}
              />
            ))}
          </motion.nav>
        </div>

        <div className="w-full flex p-400">
          <MaxMinSidebarButton variant={isSidebarOpen ? "long" : "icon"} />
        </div>
      </div>
    </AnimatePresence>
  );
}
