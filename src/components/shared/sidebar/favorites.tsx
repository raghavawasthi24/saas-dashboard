export default function Favourites() {
  return (
    <div className="">
      <div className="flex  gap-4 mb-2">
        <p className="text-muted-foreground">Favorites</p>
        <p className="text-muted">Recently</p>
      </div>
      <ul className="list-disc flex flex-col gap-1 pl-4">
        <li>Overview</li>
        <li>Projects</li>
      </ul>
    </div>
  );
}
