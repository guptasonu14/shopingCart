import React from 'react';
import './Cart.css'; 
import { useDispatch, useSelector } from 'react-redux';

const Cart = () => {
    const data= useSelector((state)=>state.productdata.items);
   
  return (
    <div className='main'>
      <div className="bg-aqua">
        {/* Cart Text Container */}
        <h1 className="cart-heading">Cart</h1>
        <hr />
   {
    data.map((item)=>(
        <>
          {/* Product Info Container */}
          <div className="product-container">
          {/* Example Product */}
          <img
            src={item.image}
            alt="Product"
            className="product-image"
          />
          <div className="product-details">
            <p className="product-name">{item.title}</p>
            <p className="product-description">{item.description}</p>
            <div className="flex items-center">
              <p className="product-price">Price: {item.price}</p>
            </div>
          </div>
          {/* Repeat for other products */}
        </div>
        <hr />

       
        
        </>
    )
        
    )
   }
       {/* Subtotal Container */}
       <div className="subtotal-container">
          <p className="subtotal-text">Subtotal: {
            data.reduce((acc,curr)=>acc+curr.price,0)
          }</p>
          <p>Total Items in cart: {data.length}</p>
        </div>

        {/* Shipping and Taxes Text */}
        <p className="shipping-text">Shipping and taxes calculated at checkout.</p>

        {/* Checkout Button */}
        <button className="checkout-button">Checkout</button>

        {/* Continue Shopping Text */}
        <p className="continue-shopping">
          <a href="/">Continue Shopping</a>
        </p>
      </div>
    </div>
  );
};

export default Cart;