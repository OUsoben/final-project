// create this inside the service folder
import { api } from "../utils/api";

export const GET_ALL_PRODUCT = async ()=>{
    const response = await api.get("products");
    return response.data; 
}
