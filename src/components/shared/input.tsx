import { Search } from "lucide-react";
import { Input } from "../ui/input";

export default function SaSInput() {
  return (
    <div className="relative w-40">
      <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
      <Input type="text" placeholder="Search" className="h-7 pl-7" />
    </div>
  );
}
