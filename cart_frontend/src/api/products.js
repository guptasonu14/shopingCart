import axios from ".";


export const getProductsApi = async () => {
    const response = await axios.get('/api/data/get/product');
    console.log(response.data.data)
    return response.data.data;
}