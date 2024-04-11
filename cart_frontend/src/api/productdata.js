import axios from ".";
import { getProductsApi } from "./products";



 export  const sendApiDataToDatabase= async()=>{
    const data = getProductsApi();
    const response = await axios.post('/api/post/data/product',{data})
    return response;
    
 }
 