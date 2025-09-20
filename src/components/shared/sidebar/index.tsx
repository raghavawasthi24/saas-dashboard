import Profile from "./profile";
import DashboardMenu from "./dashboards-menu";
import Favourites from "./favorites";
import Pages from "./pages";

export default function Sidebar({ isSidebarOpen }: { isSidebarOpen: boolean }) {
  return (
    <div className={`w-1/6 p-6 h-full overflow-auto flex flex-col gap-6 border font-light ${isSidebarOpen ? "block": "hidden"}`}>
      <Profile />
      <Favourites />
      <DashboardMenu />
      <Pages />
    </div>
  );
}
