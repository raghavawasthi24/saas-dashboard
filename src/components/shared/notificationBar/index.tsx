import React, { useEffect, useRef, useState } from "react";
import Notifications from "./notification";
import Activities from "./activties";
import Contact from "./contact";

type SidebarProps = {
  isSidebarOpen: boolean;
  setIsSideBarOpen: (open: boolean) => void;
};

const NotificationBar = ({ isSidebarOpen, setIsSideBarOpen }: SidebarProps) => {
  const sidebarRef = useRef<HTMLDivElement | null>(null);
  const [isResponsive, setIsResponsive] = useState(false);

  // check window width and update isResponsive accordingly
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

  return (
    <aside
      className={[
        "w-1/5",
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
            ? "w-72 fixed top-0 right-0 z-50"
            : "w-1/5 block"
          : "hidden",
      ].join(" ")}
      ref={sidebarRef}
      aria-hidden={!isSidebarOpen}
    >
      <Notifications />
      <Activities />
      <Contact />
    </aside>
  );
};

export default React.memo(NotificationBar);
