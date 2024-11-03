"use client";

import { useEffect, useState } from "react";
import { create } from "zustand";

const STORAGE_SIDEBAR = "personal-finance-app:sidebar";

type SidebarState = {
  open: boolean;
  handle: (value: boolean) => void;
};

interface UseSidebarReturn {
  isSidebarOpen: boolean;
  openSidebar: () => void;
  closeSidebar: () => void;
  toggleSidebar: () => void;
}

const useSidebarStore = create<SidebarState>((set) => ({
  open: true,
  handle: (value) => set({ open: value }),
}));

export const useSidebar = (): UseSidebarReturn => {
  const { open, handle } = useSidebarStore();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return {
      isSidebarOpen: open,
      toggleSidebar: () => {},
      openSidebar: () => {},
      closeSidebar: () => {},
    };
  }

  function openSidebar() {
    handle(true);
    localStorage.setItem(STORAGE_SIDEBAR, "true");
  }

  function closeSidebar() {
    handle(false);
    localStorage.setItem(STORAGE_SIDEBAR, "false");
  }

  function toggleSidebar() {
    handle(!open);
    localStorage.setItem(STORAGE_SIDEBAR, open ? "false" : "true");
  }

  return {
    isSidebarOpen: open,
    toggleSidebar,
    openSidebar,
    closeSidebar,
  };
};
