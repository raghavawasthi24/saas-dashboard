import Profile from "./profile";
import DashboardMenus from "./dashboard-menus";
import FavouriteMenus from "./favorities-menus";
import PageMenu from "./page-menus";

/**
 * Props for Sidebar component.
 * @prop isSidebarOpen - Controls sidebar visibility.
 */
type SidebarProps = {
  isSidebarOpen: boolean;
};

/**
 * Sidebar navigation component.
 * Shows user profile, favorites, dashboard links, and page menus.
 * Appears or is hidden based on `isSidebarOpen` prop.
 */
export default function Sidebar({ isSidebarOpen }: SidebarProps) {
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
        isSidebarOpen ? "block" : "hidden",
      ].join(" ")}
      aria-hidden={!isSidebarOpen}
    >
      <Profile />
      <FavouriteMenus />
      <DashboardMenus />
      <PageMenu />
    </aside>
  );
}
