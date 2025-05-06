import { useEffect, useState } from "react";

import { getAllHotelCategory } from "./hotel_category_admin_controller";
import { getAllCities } from "../../city_admin/controller/city_admin_controller";
import { getAllCountries } from "../../country_admin/controller/country_admin_controller";

export const useHotelFormData=()=>{

     
      const [hotelCategories, setHotelCategories] = useState([]);
      const [countries, setCountries] = useState([]);
      const [cities, setCities] = useState([]);
    
      useEffect(() => {
        // Fetch hotel categories, countries, cities (replace with your API)
        fetchHotelCategories();
        fetchCountries();
        fetchCities();
      }, []);
    
      const fetchHotelCategories = async () => {
        try {
          const hotelCategory = await getAllHotelCategory();
          setHotelCategories(hotelCategory);
          console.log(hotelCategory); // Now logging the fetched categories
        } catch (error) {
          console.error("Error fetching hotel categories:", error);
          setHotelCategories([]); // prevent map error
        }
      };
    
      
      const fetchCountries = async () => {
        try {
          const Country = await getAllCountries();
          setCountries(Country);
          console.log(Country); // Now logging the fetched categories
        } catch (error) {
          console.error("Error fetching countries:", error);
          setCountries([]); // prevent map error
        }
      };
    
      const fetchCities = async () => {
        try {
          const City = await getAllCities();
          setCities(City);
          console.log(City); // Now logging the fetched categories
        } catch (error) {
          console.error("Error fetching countries:", error);
          setCities([]); // prevent map error
        }
      };
    

    return {hotelCategories,countries,cities}
}