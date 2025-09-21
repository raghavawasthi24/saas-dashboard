import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function Theme() {
  const { theme, setTheme } = useTheme();
  return (
    <div onClick={() => setTheme(theme === "light" ? "dark" : "light")} className="cursor-pointer">
      {theme === "light" ? (
        <Moon className="h-[1.2rem] w-[1.2rem]" />
      ) : (
        <Sun className="h-[1.2rem] w-[1.2rem]" />
      )}
      <span className="sr-only">Toggle theme</span>
    </div>
  );
}
