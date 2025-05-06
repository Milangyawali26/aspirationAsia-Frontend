import { useState } from "react";
import { api } from "../../../common/base_api_service";
import toast from "react-hot-toast";


export const getAllCountries = async () => {

  try {
    const response = await api.get(`api/getAllCountries`);
  
    console.log(response.message);
    console.log(response.data); 
    return(response.data)
  } catch (error) {
    console.error('Error fetching countries :', error);
    toast.error('Error fetching countries :', error);
  }
};
