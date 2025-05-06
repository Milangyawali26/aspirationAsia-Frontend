import toast from "react-hot-toast";
export const API_URL = "http://139.59.25.108:9001/";


const request = async( endpoint, method='GET',data=null)=>{
    const token =localStorage.getItem("authToken");

    const config={
        method, 
        headers:{
            "Content-Type":"application/json",
            "Authorization":token ? `Bearer ${token}`: undefined,
        }
    };

    if(data){
        config.body=JSON.stringify(data);

    }
    try{
        const response = await fetch( `${API_URL}${endpoint}`,config);
        const resData=await response.json();

        if(!response.ok){
            throw new Error (resData.message || " Request Failed ");
        }
        return resData;

    }
    catch(error){
        console.error("API error : ", error.message);
        toast.error(error.message);
        throw error;
    }
};


export const api={
    get:(endpoint)=>request(endpoint,"GET"),
    post:(endpoint,data)=>request(endpoint,'POST',data),
    put:(endpoint,data)=>request(endpoint,"PUT",data),
    patch:(endpoint,data)=>request(endpoint,"PATCH",data),
    delete:(endpoint)=>request(endpoint,"DELETE")
};