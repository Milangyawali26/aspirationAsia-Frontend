import { Typography } from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import { getAllUsers } from "../controller/role_permission_controller";
import UserCard from "./UserCard";

const AllUsers = () => {
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const users = await getAllUsers();
    console.log("hotels form fetchUsers fn :", users);
    setAllUsers(users);
  };
  console.log("users after useState :", allUsers);
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {!allUsers || allUsers.length === 0 ? (
          <Typography className="text-center text-xl col-span-full">
            No users Found !!
          </Typography>
        ) : (
          allUsers.map((user) => {
            <UserCard key={user._id} user={user} />;
          })
        )}
      </div>
    </div>
  );
};

export default AllUsers;
