import {
  Moon,
  PanelRight,
  SlashIcon,
  Sun,
  Star,
  History,
  Bell,
  PanelLeft,
} from "lucide-react";
import { Search } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "../../../components/ui/breadcrumb";
import { Input } from "../../ui/input";
import { useTheme } from "next-themes";
import { useLocation } from "react-router-dom";

type Props = {
  isSidebarOpen: boolean;
  setIsSideBarOpen: any;
  setIsLeftSidebarOpen: any;
  isLeftSidebarOpen: boolean;
};

export default function TopNav({
  isSidebarOpen,
  setIsSideBarOpen,
  isLeftSidebarOpen,
  setIsLeftSidebarOpen,
}: Props) {
  const { theme, setTheme } = useTheme();

  const route = useLocation();
  const path = route.pathname;
  const pathname = path.split("/")[1];
  const formattedPathName = pathname.charAt(0).toUpperCase() + pathname.slice(1);

  console.log(pathname);

  return (
    <div className="w-full flex justify-between items-center gap-2 p-5 border-b">
      {/* Left side */}
      <div className="flex items-center gap-4">
        <PanelRight
          className="w-5 h-5 flex-shrink-0 cursor-pointer"
          onClick={() => setIsSideBarOpen(!isSidebarOpen)}
        />
        <Star className="w-5 h-5 flex-shrink-0" />
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Dashboards</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <SlashIcon className="-rotate-25" />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbLink href={path}>
                {formattedPathName ? formattedPathName : "Default"}
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-4">
        <div className="relative w-40">
          <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
          <Input type="text" placeholder="Search" className="h-7 pl-7" />
        </div>
        <div onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
          {theme === "light" ? (
            <Moon className="h-[1.2rem] w-[1.2rem]" />
          ) : (
            <Sun className="h-[1.2rem] w-[1.2rem]" />
          )}
          <span className="sr-only">Toggle theme</span>
        </div>
        <History className="w-5 h-5 flex-shrink-0" />
        <Bell className="w-5 h-5 flex-shrink-0" />
        <PanelLeft
          className="w-5 h-5 flex-shrink-0"
          onClick={() => setIsLeftSidebarOpen(!isLeftSidebarOpen)}
        />
      </div>
    </div>
  );
}
