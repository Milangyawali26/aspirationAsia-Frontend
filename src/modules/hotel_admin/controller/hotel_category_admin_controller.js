import { useState } from "react";
import { api } from "../../../common/base_api_service";

export const getAllHotelCategory = async () => {

  try {
    const response = await api.get(`api/getAllHotelCategory`);
   
    console.log(response.data);
    return response.data;

  } catch (error) {
    console.error('Error fetching hotel category:', error);
  }
};


