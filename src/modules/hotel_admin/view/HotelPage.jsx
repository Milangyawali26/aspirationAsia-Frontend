// src/pages/HotelPage.jsx
import React from "react"; // Import the HotelCard component
import { useNavigate, Outlet } from "react-router-dom";
import Button from "../../../common/button";
import { API_URL } from "../../../common/base_api_service";

const HotelPage = () => {
  const navigate= useNavigate();
  return (
    <section>
      <div className="h-full flex flex-col gap-2">
        <h1 className="text-2xl font-bold flex justify-center">Hotel</h1>
        <div className="flex gap-4 justify-center">
      
        
        <Button 
          btnColor='green'
           onClick={()=>navigate('form')}
          >
            Add Hotel
          </Button>
        
        <Button 
         btnColor='green'
         onClick={()=>navigate('allhotel')
          
         }
        >Get All Hotels</Button>
  
        </div>
        <Outlet />

        {/*  outlet includes AllHotels page and HotelForm Page */}

      </div>
    </section>
  );
};

export default HotelPage;
