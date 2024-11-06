"use client";

import { Logo } from "../logo";

import { RedirectButton } from "./redirection-button";
import { MaxMinSidebarButton } from "./max-min-sidebar";
import { ROUTES } from "@/constants";
import { useSidebar } from "@/hooks/use-sidebar";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { Routes } from "@/types/router";

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
        <div className="w-full flex flex-col gap-8">
          <div className="w-full flex items-center min-h-[100px] px-150">
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  className={cn(
                    "w-full flex items-center",
                    isSidebarOpen ? "justify-start pl-250" : "justify-center"
                  )}
                  href={Routes.Home}
                >
                  <Logo
                    title="Click to go to the homepage"
                    ariaDescription="Logo of the company"
                    type={isSidebarOpen ? "full" : "icon"}
                  />
                </Link>
              </TooltipTrigger>
              <TooltipContent
                className="bg-appGrey-300 text-appGrey"
                side="right"
              >
                Click to go to the homepage
              </TooltipContent>
            </Tooltip>
          </div>

          <motion.nav
            className="w-full flex flex-col"
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

        <div className="w-full flex items-center justify-center px-100 mb-250">
          <MaxMinSidebarButton
            variant={isSidebarOpen ? "long" : "icon"}
            className={cn(
              "w-full h-14 text-base font-bold text-appGrey-300 flex items-center gap-4 hover:text-appBeige-100",
              isSidebarOpen ? "justify-start pl-250" : "justify-center"
            )}
          />
        </div>
      </div>
    </AnimatePresence>
  );
}
