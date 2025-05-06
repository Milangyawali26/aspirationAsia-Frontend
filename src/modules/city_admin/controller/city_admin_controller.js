import toast from "react-hot-toast"
import { api } from "../../../common/base_api_service";


export const getAllCities = async()=>{
 try {
    const response = await api.get('api/getAllcities');
    console.log(response.message);
    console.log(response.data);
    return response.data

 } catch (error) {
    console.error("Error fetching cities :",error),
    toast.error("Error fetching cities :",error)
}
}