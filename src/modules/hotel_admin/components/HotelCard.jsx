// src/components/HotelCard.jsx
import React from "react";
import { Card,Typography } from "@material-tailwind/react";
import Button from "../../../common/button";
import { handleDeleteHotel } from "../controller/hotel_admin_contoller";
import { useNavigate } from "react-router-dom";

const HotelCard = ({ hotel, handleRefresh }) => {
  const navigate = useNavigate();

  return (
    <Card className="p-4 shadow-md bg-white rounded-lg" key={hotel._id}>
      {/* Hotel Image */}
      <div className="mb-4">
        {hotel.image ? (
          <img
            src={hotel.image}
            alt={hotel.name}
            className="w-full h-48 object-cover rounded-md"
          />
        ) : (
          <div className="w-full h-48 bg-gray-200 rounded-md flex items-center justify-center">
            <span>No Image</span>
          </div>
        )}
      </div>

      {/* Hotel Name */}
      <Typography
        variant="h5"
        color="blue-gray"
        className="text-center text-xl font-bold mb-2"
      >
        {hotel.name}
      </Typography>

      {/* Contact Person and Details */}
      <Typography className="text-center text-md mb-1">
        Contact Person: {hotel.contactPerson}
      </Typography>
      <Typography className="text-center text-md mb-1">
        Phone: {hotel.contactNumber}
      </Typography>

      {/* Country and City */}
      <Typography className="text-center text-md mb-1">
        Location: {hotel.countryId.name} - {hotel.cityId.name}
      </Typography>

      {/* Address */}
      <Typography className="text-center text-md mb-1">
        Address: {hotel.address}
      </Typography>

      <a 
      href={hotel.website.startsWith("http")? hotel.website:`https://${hotel.website}`}
      target="_blank"
      rel="noopener noreferrer"
       className="underline hover:cursor-pointer text-center text-md mb-1 ">
          visit website 
          </a>

      <div className="flex flex-row gap-4 justify-center mt-2  ">
        <Button
          btnColor="red"
          onClick={() => {
            alert("are you sure you want to delete"),
              handleDeleteHotel(hotel._id, handleRefresh);
          }}
        >
          Delete
        </Button>
        
    

        <Button
          btnColor="blue"
          onClick={() => {
            navigate("/dashboard/hotel/form", { state: { hotel } });
          }}
        >
          Update
        </Button>
      </div>
    </Card>
  );
};

export default HotelCard;
