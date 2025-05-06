import React, { useEffect, useState } from 'react'
import { getAllHotels } from './hotel_admin_contoller';


const useAllHotels = () => {
    const [allHotels,setAllHotels]=useState([]);
    const [reload, setReload]=useState(false);

    useEffect(()=>{
    fetchHotels();
    },[reload]);

    const fetchHotels = async()=>{
        const hotels = await getAllHotels();
      
        setAllHotels(hotels);

    };

    const handleRefresh=()=>{
        setReload(prev=>!prev);
    }
    

  return {allHotels,handleRefresh};
}

export default useAllHotels
