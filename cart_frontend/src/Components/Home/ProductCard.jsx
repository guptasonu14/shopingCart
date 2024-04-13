import { Button } from '@mantine/core';
import './ProductCard.css'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProductsdata } from '../../redux/slices/productdataslice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ProductCard = ({ product }) => {
    const dispatch = useDispatch();
    const productinstore = useSelector((state) => state.productdata.items);
    



    const productdata = {
        image: product.image,
        id: product.id,
        title: product.title,
        description: product.description,
        price: product.price
    }

    const handleProductData = () => {

        // Check if product ID is already present in the store
        
        const isProductExists = productinstore.some(item => item.id === product.id);

        // If product ID does not exist, dispatch the action to add the product
        if (!isProductExists) {
            dispatch(setProductsdata(productdata));
            // toast("This product has been set to cart.")
        }else{
          toast("This product is already in your cart.")
            
        }

    }





    return (
        <div className="product_card">
            <div className="product_card_image">
                <img src={product.image} alt="product" />
            </div>
            <div className="product_card_info">
                <h3>{product.title}</h3>
                <p>{product.description}</p>
            </div>
            <p className='price'>Price: {product.price}</p>
            <Button className="product_card_btn" onClick={handleProductData}>Add to Cart</Button>
            <ToastContainer autoClose={1000} />
        </div>
    )
}


export default ProductCard;