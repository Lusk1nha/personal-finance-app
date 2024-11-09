"use client";

import { MobileBottomSidebar } from "./mobile-bottom-sidebar-button";
import { DesktopSidebar } from "./desktop-sidebar";

export function Sidebar() {
  return (
    <>
      <div id="mobile-bottom-sidebar" className="lg:hidden">
        <MobileBottomSidebar />
      </div>

      <div id="desktop-sidebar" className="relative hidden lg:block">
        <DesktopSidebar />
      </div>
    </>
  );
}
