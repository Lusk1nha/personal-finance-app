"use client";

import { MobileBottomSidebar } from "./mobile-bottom-sidebar-button";
import { DesktopSidebar } from "./desktop-sidebar";

export function Sidebar() {
  return (
    <>
      <div className="w-full flex lg:hidden">
        <MobileBottomSidebar />
      </div>

      <div className="hidden lg:flex">
        <DesktopSidebar />
      </div>
    </>
  );
}
