import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { useTheme } from "next-themes";

type Props = {
  icon: string;
  text: string;
  options?: string[];
};

export default function Collapsible({ icon, text, options }: Props) {
  const [open, setOpen] = useState(false);
  const { theme } = useTheme();

  return (
    <div className="flex flex-col">
      <div
        className="flex items-center p-1 cursor-default hover:bg-muted-background rounded-lg"
        onClick={() => setOpen(!open)}
      >
        <ChevronRight
          className={`w-4 h-4 opacity-30 transition-transform duration-300 ${
            open ? "rotate-90" : "rotate-0"
          }`}
        />
        <img
          src={`/assets/menu-icons/${theme}/${icon}`}
          alt=""
          className="ml-2 w-5 h-5"
        />
        <p className="ml-1">{text}</p>
      </div>

      <div className={`${open ? "flex flex-col block" : "hidden"}`}>
        {options?.map((option, idx) => (
          <p
            className="p-1 pl-13 cursor-pointer hover:bg-muted-background rounded-lg"
            key={idx}
          >
            {option}
          </p>
        ))}
      </div>
    </div>
  );
}
