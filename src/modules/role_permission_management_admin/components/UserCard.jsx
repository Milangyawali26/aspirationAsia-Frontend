// src/components/UserCard.jsx
import React from "react";
import { Card, Typography } from "@material-tailwind/react";
import Button from "../../../common/button"; // Adjust the path as needed

const UserCard = ({user}) => {

  console.log("user form card component:",user)   

  return (
    <Card className="p-4 shadow-md bg-white rounded-lg" key={user._id}>
      {/* User Full Name */}
      <Typography
        variant="h5"
        color="blue-gray"
        className="text-center text-xl font-bold mb-2"
      >
        {user.fullName}
      </Typography>

      {/* User Contact Details */}
      <Typography className="text-center text-md mb-1">
        Mobile Number: {user.mobileNumber}
      </Typography>
      <Typography className="text-center text-md mb-1">
        Email: {user.email}
      </Typography>

      {/* User Status and Type */}
      {/* <Typography className="text-center text-md mb-1 capitalize">
        Status: <span className={user.status === "active" ? "text-green-600 font-semibold" : "text-red-600 font-semibold"}>{user.status}</span>
      </Typography>
      <Typography className="text-center text-md mb-1 capitalize">
        User Type: {user.userType}
      </Typography> */}

      {/* Action Buttons */}
  
        <Button
          btnColor="blue"
        //   onClick={() => {
        //     navigate("/dashboard/user/form", { state: { user } });
        //   }}
        >
          Update
        </Button>
  
    </Card>
  );
};

export default UserCard;

