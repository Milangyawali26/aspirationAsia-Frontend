import { api } from "../../../common/base_api_service";
import toast from "react-hot-toast";

export const addHotel = async (hotelDetails)=>{
   
    try{
        const respose= await api.post('api/addHotel',hotelDetails.values);
        toast.success("Hotel added Successfully");
        return respose;
    }
    catch(error){
        if(error.message.includes("already exist")){
            toast.error("Hotel already exist");

        }
        throw error;
    }
};


export const getAllHotels= async()=>{
    
    try{
        const response=await api.get('api/getAllHotels');
        console.log(response.data);
        return response.data;

    }catch(error){
        console.error("Error fetching hotels:",error)
        toast.error("Error fetching hotels:",error);
    }
}

export const handleDeleteHotel = async (hotelId,handleRefresh)=>{
    try{
        const response = await api.delete(`api/deleteHotel/${hotelId}`);
        toast.success("Hotel deleted SUccessfully");
        handleRefresh();
        return response
    }catch(error){
        console.error("Error deleting hotel :",error)
        toast.error("Error deleting hotel :",error)
    }
};



export const updateHotelDetails = async (hotelDetails)=>{
    console.log("hotel id ",hotelDetails.values.id)
    console.log(hotelDetails.values)
    try{
        const res = await api.put( `api/updateHotel/${hotelDetails.values.id}`,hotelDetails.values);
        console.log("details updated successfully ")
        toast.success("Hotel updated Successfully ");
        return res;


    }catch(err){
        console.error('Error updating hotel:',err);
        toast.error('Error updating hotel:',err);
    }
}