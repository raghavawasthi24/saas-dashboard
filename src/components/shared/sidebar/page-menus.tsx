import { useTheme } from "next-themes";
import Collapsible from "../../ui/collapsible";
import { PageMenus } from "../../../constants/sidebar";

/**
 * PageMenu component.
 * Displays a list of page navigation menus with support for collapsible groups.
 * Icons adapt based on the current theme.
 */
export default function PageMenu() {
  const { theme } = useTheme();

  return (
    <nav aria-label="Page navigation">
      {/* Section heading */}
      <p className="mb-2 text-muted-foreground">Pages</p>

      <div className="flex flex-col gap-1">
        {PageMenus.map((item, index) =>
          item.isCollapsible ? (
            <Collapsible
              key={item.text ?? index}
              icon={item.icon}
              text={item.text}
              options={item.options}
            />
          ) : (
            <div
              key={item.text ?? index}
              className="p-1 pl-5 flex items-center cursor-pointer hover:bg-muted-background"
              role="link"
              tabIndex={0}
            >
              <img
                src={`/assets/menu-icons/${theme}/${item.icon}`}
                alt={`${item.text} icon`}
                className="ml-2 w-5 h-5"
                loading="lazy"
                aria-hidden="true"
              />
              <p className="ml-1">{item.text}</p>
            </div>
          )
        )}
      </div>
    </nav>
  );
}
