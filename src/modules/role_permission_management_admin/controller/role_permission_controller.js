import toast from "react-hot-toast"
import { api } from "../../../common/base_api_service"



export const getAllUsers = async ()=>{
    try {
        const response = await api.get('user/getAllUsers');
        console.log(response.message);
        console.log(response.data);
        return response.data;
        
    } catch (error) {
        console.error("error fetching users :",error)
        toast.error("error fetching users :",error)
    }
}
