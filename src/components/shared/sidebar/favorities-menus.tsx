import { favMenus } from "../../../constants/sidebar";

/**
 * FavouritesMenu component.
 * Displays a section of favorite menus with a heading and a list.
 */
export default function FavouritesMenu() {
  return (
    <section aria-label="Favorites menu">
      <div className="flex gap-4 mb-2">
        <p className="text-muted-foreground">Favorites</p>
        <p className="text-muted">Recently</p>
      </div>
      <ul className="list-disc flex flex-col gap-1 pl-4">
        {favMenus.map((menu, index) => (
          <li key={index}>{menu}</li>
        ))}
      </ul>
    </section>
  );
}
