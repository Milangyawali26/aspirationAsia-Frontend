import React from "react";
import { Typography } from "@material-tailwind/react";
import HotelCard from "./HotelCard";
import useAllHotels from "../controller/useAllHotels";

const AllHotels = () => {
  const { allHotels, handleRefresh } = useAllHotels();
  console.log("All Hotels from useHotels :", allHotels);

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {!allHotels || allHotels.length === 0 ? (
          <Typography className="text-center text-lg col-span-full">
            No hotels available
          </Typography>
        ) : (
          allHotels.map((hotel) => (
            <HotelCard
              key={hotel._id}
              hotel={hotel}
              handleRefresh={handleRefresh}
            /> // Use the HotelCard component here
          ))
        )}
      </div>
    </div>
  );
};

export default AllHotels;
