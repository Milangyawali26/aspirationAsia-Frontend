import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";
import Navbar from "../components/Navbar";

const DashboardPage = () => {
  const [openSidebar, setOpenSidebar] = useState(false);

  // Toggle sidebar visibility
  const toggleSidebar = () => {
    setOpenSidebar(!openSidebar);
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div>
        <SideBar
          isSidebarOpen={openSidebar}
          closeSidebar={() => setOpenSidebar(false)}
        />
      </div>

      {/* Main content area */}
      <div className="flex flex-1 flex-col">
        {/* Navbar */}
        <div className="fixed top-0 left-0 right-0 z-50 bg-amber-200 shadow">
          <Navbar toggleSidebar={toggleSidebar} />
        </div>

        {/* Main content */}
        <main className="flex-1 overflow-y-auto mt-20 p-4  bg-gray-200">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardPage;
