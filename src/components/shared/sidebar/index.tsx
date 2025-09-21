import React, { useEffect, useRef, useState } from "react";
import Profile from "./profile";
import DashboardMenus from "./dashboard-menus";
import FavouriteMenus from "./favorities-menus";
import PageMenu from "./page-menus";

type SidebarProps = {
  isSidebarOpen: boolean;
  setIsSideBarOpen: (open: boolean) => void;
};

const Sidebar = ({
  isSidebarOpen,
  setIsSideBarOpen,
}: SidebarProps) => {
  const sidebarRef = useRef<HTMLDivElement | null>(null);
  const [isResponsive, setIsResponsive] = useState(false);

  // Helper to check window width and update isResponsive accordingly
  function handleResize() {
    setIsResponsive(window.innerWidth <= 1300);
  }

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  /**
   * early return if width > 1300px and sidebar is already closed
   * if clicked outside sidebar , close the sidebar
   */
  useEffect(() => {
    if (!isResponsive || !isSidebarOpen) {
      return;
    }

    function handleClickOutside(event: MouseEvent) {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        setIsSideBarOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isResponsive, isSidebarOpen, setIsSideBarOpen]);

  const className = [
    "p-6",
    "h-full",
    "overflow-auto",
    "flex",
    "flex-col",
    "gap-6",
    "border",
    "font-light",
    "bg-background",
    isSidebarOpen
      ? isResponsive
        ? "w-64 fixed top-0 left-0 z-50"
        : "w-1/6 block"
      : "hidden",
  ].join(" ");

  return (
    <aside className={className} ref={sidebarRef} aria-hidden={!isSidebarOpen}>
      <Profile />
      <FavouriteMenus />
      <DashboardMenus />
      <PageMenu />
    </aside>
  );
}

export default React.memo(Sidebar);
