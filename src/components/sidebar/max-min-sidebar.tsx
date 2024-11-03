"use client";

import { useSidebar } from "@/hooks/use-sidebar";
import Image from "next/image";

import minimize from "../../../public/images/icon-minimize-menu.svg";

interface IMaxMinSidebarButtonProps {
  variant?: "icon" | "long";
}

export function MaxMinSidebarButton(
  props: Readonly<IMaxMinSidebarButtonProps>
) {
  const { variant = "long" } = props;
  const { isSidebarOpen, toggleSidebar } = useSidebar();

  const text = isSidebarOpen ? "Minimize Menu" : "Maximize Menu";

  return (
    <button
      type="button"
      className="w-full h-14 text-base font-bold text-appGrey-300 flex items-center gap-4 hover:text-appBeige-100"
      onClick={toggleSidebar}
    >
      {isSidebarOpen ? (
        <Image src={minimize} alt="Minimize icon" priority />
      ) : (
        <Image
          className="rotate-180"
          src={minimize}
          alt="Maximize icon"
          priority
        />
      )}

      {variant === "long" ? text : null}
    </button>
  );
}
