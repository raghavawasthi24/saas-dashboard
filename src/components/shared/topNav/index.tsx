import { PanelRight } from "lucide-react";
import { Star } from "lucide-react";
import { History } from "lucide-react";
import { Bell } from 'lucide-react';

export default function TopNav() {
  return (
    <div className="w-full flex justify-between gap-2 p-4 border-b">
      <div className="flex gap-4">
        <PanelRight className="w-5 h-5"/>
        <Star className="w-5 h-5"/>
      </div>
      <div className="flex gap-4">
        <History className="w-5 h-5"/>
        <Bell className="w-5 h-5"/>
        <PanelRight className="w-5 h-5"/>
      </div>
    </div>
  );
}
