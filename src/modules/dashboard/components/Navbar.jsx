import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../common/button";
import { handleLogout } from "../../auth/controller/authController";


const Navbar = ({ toggleSidebar }) => {
  const navigate = useNavigate();


  // Check if the user is logged in by reading authUser from localStorage
  const user = JSON.parse(localStorage.getItem("authenticated user's data"));

  return (
    <div className="p-4 flex items-center justify-between bg-amber-200 shadow-md">
      {/* Toggle Button - only visible on mobile */}
      <button
        onClick={toggleSidebar}
        className="block lg:hidden text-gray-700 mr-4 focus:outline-none"
      >
        {/* Hamburger Icon */}
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>

      {/* Welcome text */}
      <h1 className="text-2xl font-bold text-gray-800">
        Hello, {user?.fullName || "User"} 👋
      </h1>

      {/* Logout Button */}
      <div >
        <Button
         btnColor="red"
         onClick={()=>handleLogout(navigate)}>Logout</Button>
      </div>
    </div>
  );
};

export default Navbar;
