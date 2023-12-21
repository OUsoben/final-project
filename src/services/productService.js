// create this inside the service folder
import { api } from "../utils/api";

export const GET_ALL_PRODUCT = async ()=>{
    const response = await api.get("products");
    return response.data; 
}
export const GET_PRODUCT_BY_ID = async (id)=>{
    const response = await api.get(`products/${id}`);
    return response.data;
}
