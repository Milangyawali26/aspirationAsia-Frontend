import React from "react";
import { IconButton, Tooltip } from "@mui/material";
import { Navbar } from "@material-tailwind/react";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import { Outlet } from "react-router-dom";

const RolePermissionManagamentPage = () => {
  return (
    <div>
      <Navbar>
        <div className="flex  justify-between items-center w-full my-2">
          <span className="text-lg ml-5 text-black font-semibold">
            Roles And Permission
          </span>
          <Tooltip title="Add Users" arrow>
            <button
              // onClick={handleAddRole}
              className="flex  hover:cursor-pointer items-center gap-2 text-white bg-blue-500 hover:bg-blue-600 transition-all duration-200 px-4 py-2 rounded-lg mr-4"
            >
              <PersonAddAlt1Icon />
              <span className="hidden sm:inline">Add Users</span>
            </button>
          </Tooltip>
        </div>
      </Navbar>

      <Outlet />
    </div>
  );
};

export default RolePermissionManagamentPage;
