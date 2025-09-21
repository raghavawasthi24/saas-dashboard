import { ArrowDownUp, ListFilter, Plus, Search } from "lucide-react";
import { Input } from "../../components/ui/input";

type Props = {
  search: string;
  setSearch: any;
};

export default function Filters({ search, setSearch }: Props) {
  return (
    <div className="flex items-center justify-between mb-4 space-x-4 bg-secondary p-2 rounded-lg">
      <div className="flex items-center gap-4">
        <Plus className="w-4 h-4 cursor-pointer" />
        <ListFilter className="w-4 h-4 cursor-pointer" />
        <ArrowDownUp className="w-4 h-4 cursor-pointer" />
      </div>

      {/* Search */}
      <div className="relative w-40">
        <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Search"
          className="h-7 pl-7"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          aria-label="Search orders"
        />
      </div>
    </div>
  );
}
