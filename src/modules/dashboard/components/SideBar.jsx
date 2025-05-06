import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Card, Typography, List, ListItem, ListItemPrefix } from "@material-tailwind/react";
import {
  UserCircleIcon,
  BuildingOfficeIcon,
  HomeIcon,
  TruckIcon,
  GlobeAltIcon,
  MapPinIcon
} from "@heroicons/react/24/solid";

const menuItems = [
  { path: "/dashboard/rolesAndPermission", label: "Roles & Permission", icon: <UserCircleIcon className="h-6 w-6 text-blue-600" /> },
  { path: "/dashboard/hotel-category", label: "Hotel Category", icon: <BuildingOfficeIcon className="h-6 w-6 text-green-600" /> },
  { path: "/dashboard/hotel", label: "Hotel", icon: <HomeIcon className="h-6 w-6 text-purple-600" /> },
  { path: "/dashboard/vehicle-category", label: "Vehicle Category", icon: <TruckIcon className="h-6 w-6 text-yellow-600" /> },
  { path: "/dashboard/country", label: "Country", icon: <GlobeAltIcon className="h-6 w-6 text-pink-600" /> },
  { path: "/dashboard/city", label: "City", icon: <MapPinIcon className="h-6 w-6 text-red-600" /> }
];

const SideBar = ({ isSidebarOpen,closeSidebar }) => {
  const navigate = useNavigate();
  const location = useLocation(); // To determine the active route

  // Handle route navigation
  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div
      className={`fixed top-0 left-0 h-full bg-white shadow-lg z-40 transform
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        transition-transform duration-300 ease-in-out w-64 p-4
        lg:static lg:translate-x-0 lg:w-64`}
    >
      <Card className="h-full p-4 shadow-none bg-white">
        <div className="mb-6">
          <Typography variant="h5" color="blue-gray" className="text-center text-2xl font-bold">
            Admin Panel
          </Typography>
        </div>

        <List className="space-y-2">
          {menuItems.map((item) => (
            <ListItem
              key={item.path}
              className={`hover:bg-blue-200 py-3 rounded-lg cursor-pointer ${location.pathname === item.path ? 'bg-blue-200' : ''}`}
              onClick={() =>{ handleNavigation(item.path);
                closeSidebar();
              }}
            >
              <ListItemPrefix>
                {item.icon}
              </ListItemPrefix>
              <Typography className="leading-relaxed text-lg"> {/* Increased text size and line height */}
                {item.label}
              </Typography>

            </ListItem>
          ))}
        </List>
      </Card>
    </div>
  );
};

export default SideBar;
