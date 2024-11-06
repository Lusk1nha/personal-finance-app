"use client";

import { useSidebar } from "@/hooks/use-sidebar";

import IconMinimizeMenu from "../icons/icon-minimize-menu";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

interface IMaxMinSidebarButtonProps
  extends React.HTMLAttributes<HTMLButtonElement> {
  variant?: "icon" | "long";
}

export function MaxMinSidebarButton(
  props: Readonly<IMaxMinSidebarButtonProps>
) {
  const { variant = "long", ...rest } = props;
  const { isSidebarOpen, toggleSidebar } = useSidebar();

  const text = isSidebarOpen ? "Minimize Menu" : "Maximize Menu";
  const tooltip = isSidebarOpen
    ? "Click here to minimize the sidebar"
    : "Click here to maximize the sidebar";

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <button
          title="Maximize or minimize the sidebar"
          type="button"
          className="h-14 text-base font-bold text-appGrey-300 flex items-center gap-4 hover:text-appBeige-100"
          onClick={toggleSidebar}
          {...rest}
        >
          {isSidebarOpen ? (
            <IconMinimizeMenu />
          ) : (
            <IconMinimizeMenu className="rotate-180" />
          )}

          {variant === "long" ? text : null}
        </button>
      </TooltipTrigger>
      <TooltipContent className="bg-appGrey-300 text-appGrey" side="right">
        {tooltip}
      </TooltipContent>
    </Tooltip>
  );
}
