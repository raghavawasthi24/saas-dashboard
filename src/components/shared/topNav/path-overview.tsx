import { SlashIcon } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "../../ui/breadcrumb";
import { useLocation } from "react-router-dom";

/**
 * PathHighlight component.
 * Displays a breadcrumb navigation based on the current URL path.
 * Highlights the root "Dashboards" and the first segment of the path.
 */
export default function PathHighlight() {
  const location = useLocation();
  const path = location.pathname;

  // Extract the first path segment after "/" (e.g. for "/settings/profile" => "settings")
  const firstSegment = path.split("/")[1] || "";

  // Capitalize the first letter, fallback to "Default" if empty
  const formattedSegment =
    firstSegment.charAt(0).toUpperCase() + firstSegment.slice(1) || "Default";

  return (
    <Breadcrumb className="hidden sm:block">
      <BreadcrumbList>
        {/* Root breadcrumb */}
        <BreadcrumbItem>
          <BreadcrumbLink href="/default">Dashboards</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbSeparator>
          <SlashIcon className="-rotate-25" aria-hidden="true" />
        </BreadcrumbSeparator>

        {/* Current page breadcrumb */}
        <BreadcrumbItem>
          <BreadcrumbLink href={path} className="text-foreground">{formattedSegment}</BreadcrumbLink>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
