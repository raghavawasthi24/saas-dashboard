import { PanelRight, Star, History, Bell, PanelLeft } from "lucide-react";
import PathHighlight from "./path-overview";
import SaSInput from "../input";
import Theme from "./theme";

/**
 * Props for TopNav component.
 */
type Props = {
  isSidebarOpen: boolean;
  setIsSideBarOpen: (open: boolean) => void;
  isLeftSidebarOpen: boolean;
  setIsLeftSidebarOpen: (open: boolean) => void;
};

/**
 * TopNav component - displays primary navigation bar.
 * Controls sidebar toggles and renders navigation icons, search input, theme switcher, and breadcrumb path.
 */
export default function TopNav({
  isSidebarOpen,
  setIsSideBarOpen,
  isLeftSidebarOpen,
  setIsLeftSidebarOpen,
}: Props) {
  return (
    <header className="w-full flex justify-between items-center gap-2 p-5 border-b">
      <div className="flex items-center gap-4">
        {/* Sidebar toggle button */}
        <PanelLeft
          className="w-5 h-5 flex-shrink-0 cursor-pointer"
          onClick={() => setIsSideBarOpen(!isSidebarOpen)}
          aria-label={isSidebarOpen ? "Close sidebar" : "Open sidebar"}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              setIsSideBarOpen(!isSidebarOpen);
            }
          }}
        />
        {/* Favorite/star icon */}
        <Star className="w-5 h-5 flex-shrink-0" aria-hidden="true" />
        {/* Breadcrumb navigation */}
        <PathHighlight />
      </div>

      <div className="flex items-center gap-4">
        {/* Search input */}
        <SaSInput />
        {/* Theme toggle */}
        <Theme />
        {/* History icon */}
        <History className="w-5 h-5 flex-shrink-0" aria-hidden="true" />
        {/* Notifications bell */}
        <Bell className="w-5 h-5 flex-shrink-0" aria-hidden="true" />
        {/* Right sidebar toggle */}
        <PanelRight
          className="w-5 h-5 flex-shrink-0 cursor-pointer"
          onClick={() => setIsLeftSidebarOpen(!isLeftSidebarOpen)}
          aria-label={
            isLeftSidebarOpen ? "Close left sidebar" : "Open left sidebar"
          }
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              setIsLeftSidebarOpen(!isLeftSidebarOpen);
            }
          }}
        />
      </div>
    </header>
  );
}
