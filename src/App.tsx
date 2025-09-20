import LeftBar from "./components/shared/rightSideBar";
import Sidebar from "./components/shared/sidebar";
import TopNav from "./components/shared/topNav";
import Dashboard from "./pages/dashboard";

export default function App() {
  return (
    <div className="w-screen h-screen flex overflow-hidden select-none">
      <Sidebar />
      <div className="flex flex-1 flex-col">
        <TopNav />
        <Dashboard />
      </div>
      <LeftBar />
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
