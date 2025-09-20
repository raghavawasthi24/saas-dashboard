import Sidebar from "./components/shared/sidebar";
import Dashboard from "./pages/dashboard";

export default function App() {
  return (
    <div className="w-screen h-screen flex overflow-hidden select-none">
      <Sidebar />
      <div className="flex-1">
        <Dashboard />
      </div>
    </div>
  );
}

{
  /* <Button
variant="outline"
size="icon"
onClick={() => setTheme(theme === "light" ? "dark" : "light")}
>
{theme === "light" ? (
  <Moon className="h-[1.2rem] w-[1.2rem]" />
) : (
  <Sun className="h-[1.2rem] w-[1.2rem]" />
)}
<span className="sr-only">Toggle theme</span>
</Button> */
}
