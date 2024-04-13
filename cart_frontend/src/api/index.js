import axiosInstance from "axios";

const url = process.env.REACT_APP_ENV === 'dev'? "http://localhost:3000" :"https://backend-cart-nu.vercel.app/" ;

const axios = axiosInstance.create({
    baseURL: url,
    headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + localStorage.getItem("token") || "",
    },
});

export default axios;