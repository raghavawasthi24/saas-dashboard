import { useEffect, useRef, useState } from "react";
import Notifications from "./notification";
import Activities from "./activties";
import Contact from "./contact";

type SidebarProps = {
  isSidebarOpen: boolean;
  setIsSideBarOpen: (open: boolean) => void;
};

export default function NotificationBar({
  isSidebarOpen,
  setIsSideBarOpen,
}: SidebarProps) {
  const sidebarRef = useRef<HTMLDivElement | null>(null);
  const [isResponsive, setIsResponsive] = useState(false);

  // Helper to check window width and update isResponsive accordingly
  function handleResize() {
    setIsResponsive(window.innerWidth <= 1300);
  }

  useEffect(() => {
    // Initial check on mount
    handleResize();

    // Listen to window resize to toggle responsive mode dynamically
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (!isResponsive || !isSidebarOpen) {
      return; // Only apply outside click logic if responsive sidebar is open
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
        "w-1/6",
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
            ? "w-64 fixed top-0 right-0 z-50" // fixed sidebar on small screens
            : "w-1/6 block"
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
}
