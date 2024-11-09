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

  const sidebarWidth = 300;
  const collapsedWidth = 88;

  const sidebarVariants = {
    open: {
      width: sidebarWidth,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
      },
    },
    closed: {
      width: collapsedWidth,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
      },
    },
  };

  const contentVariants = {
    open: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
      },
    },
    closed: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
      },
    },
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={false}
        animate={isSidebarOpen ? "open" : "closed"}
        variants={sidebarVariants}
        className="left-0 top-0 h-full overflow-hidden"
        style={{ width: sidebarWidth }}
      >
        <motion.div
          variants={contentVariants}
          className="h-full flex flex-col items-start justify-between bg-appGrey rounded-r-200 gap-16"
        >
          <div className="w-full flex flex-col gap-4">
            {/* Seção do Logo */}
            <div
              className={cn(
                "w-full flex items-center justify-center min-h-[100px]",
                isSidebarOpen ? "px-6" : "px-2"
              )}
            >
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    className={cn(
                      "flex items-center",
                      isSidebarOpen
                        ? "justify-start w-full"
                        : "justify-center w-auto"
                    )}
                    href={Routes.Home}
                  >
                    <Logo
                      title="Clique para ir à página inicial"
                      ariaDescription="Logo da empresa"
                      type={isSidebarOpen ? "full" : "icon"}
                    />
                  </Link>
                </TooltipTrigger>
                {!isSidebarOpen && (
                  <TooltipContent
                    className="bg-appGrey-300 text-appGrey"
                    side="right"
                  >
                    Clique para ir à página inicial
                  </TooltipContent>
                )}
              </Tooltip>
            </div>

            {/* Navegação */}
            <nav
              className={cn(
                "flex flex-col w-full",
                isSidebarOpen ? "items-start" : "items-center"
              )}
            >
              {ROUTES.map((route) => (
                <RedirectButton
                  key={route.href}
                  variant={isSidebarOpen ? "long" : "icon"}
                  {...route}
                />
              ))}
            </nav>
          </div>

          {/* Botão de Expandir/Colapsar */}
          <div
            className={cn(
              "w-full flex items-center mb-6",
              isSidebarOpen ? "px-6" : "px-2 justify-center"
            )}
          >
            <MaxMinSidebarButton
              variant={isSidebarOpen ? "long" : "icon"}
              className={cn(
                "h-14 text-base font-bold text-appGrey-300 flex items-center gap-4 hover:text-appBeige-100",
                isSidebarOpen ? "w-full justify-start" : "w-auto justify-center"
              )}
            />
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
