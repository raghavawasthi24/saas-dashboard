import Activities from "./activties";
import Conatct from "./contact";
import Notifications from "./notification";

export default function LeftBar({ isSidebarOpen }: { isSidebarOpen: boolean }) {
  return (
    <div className={`w-1/5 p-6 h-full overflow-auto flex flex-col gap-8 border font-light ${isSidebarOpen ? "block": "hidden"}`}>
      <Notifications />
      <Activities />
      <Conatct />
    </div>
  );
}
