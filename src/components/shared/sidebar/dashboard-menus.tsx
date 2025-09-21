import { NavLink } from "react-router-dom";
import Collapsible from "../../ui/collapsible";
import { useTheme } from "next-themes";
import { dashMenus } from "../../../constants/sidebar";

/**
 * DashboardMenus component.
 * Renders dashboard navigation menu items with support for collapsible sections.
 * Highlights active links and adapts icons based on current theme.
 */
export default function DashboardMenus() {
  const { theme } = useTheme();

  return (
    <nav aria-label="Dashboard navigation">
      {/* Section heading */}
      <p className="mb-2 text-muted-foreground">Dashboards</p>

      <div className="flex flex-col gap-1">
        {dashMenus.map((item) =>
          item.isCollapsible ? (
            <Collapsible key={item.path} icon={item.icon} text={item.text} />
          ) : (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `relative p-1 pl-5 flex items-center rounded-lg cursor-pointer hover:bg-muted-background ${
                  isActive ? "bg-muted-background" : ""
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {/* Sidebar indicator for active item */}
                  {isActive && (
                    <div className="absolute left-0 w-1 h-4 rounded-xl bg-foreground"></div>
                  )}
                  <img
                    src={`/assets/menu-icons/${theme}/${item.icon}`}
                    alt={`${item.text} icon`}
                    className="ml-2 w-5 h-5"
                    loading="lazy"
                    aria-hidden="true"
                  />
                  <p className="ml-1">{item.text}</p>
                </>
              )}
            </NavLink>
          )
        )}
      </div>
    </nav>
  );
}
