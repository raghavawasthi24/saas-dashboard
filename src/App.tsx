import { useState } from "react";
import LeftBar from "./components/shared/rightSideBar";
import Sidebar from "./components/shared/sidebar";
import TopNav from "./components/shared/topNav";
import Dashboard from "./pages/dashboard";
import Orders from "./pages/orders";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
  const [isSidebarOpen, setIsSideBarOpen] = useState(true);
  const [isLeftSidebarOpen, setIsLeftSidebarOpen] = useState(true);

  return (
    <div className="w-screen h-screen flex overflow-hidden select-none">
      <Sidebar isSidebarOpen={isSidebarOpen} />
      <div className="flex flex-1 flex-col overflow-auto">
        <TopNav
          setIsSideBarOpen={setIsSideBarOpen}
          isSidebarOpen={isSidebarOpen}
          isLeftSidebarOpen={isLeftSidebarOpen}
          setIsLeftSidebarOpen={setIsLeftSidebarOpen}
        />

        <Routes>
          <Route path="/*" element={<Dashboard />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
      </div>
      <LeftBar isSidebarOpen={isLeftSidebarOpen} />
    </div>
  );
}
