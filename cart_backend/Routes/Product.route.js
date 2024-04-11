import express from "express";
import Product from '../Models/Product.model.js'
import Cart from '../Models/cart.model.js'
import createError from "http-errors";
import { authSchema,registerSchema } from "../Helpers/validation_schema.js";
import { signAccessToken, signRefreshToken,verifyRefreshToken,verifyAccessToken, isTokenValid } from "../Helpers/jwt_helper.js";
const router = express.Router();


router.post('/post/product',async(req,res)=>{
    try {
        const data = req.body;
        if(data){

            for(const productdata of data){
                const product = new Product({
                    title:productdata.title,
                    description:productdata.description,
                    price:productdata.price,
                    id:productdata.id,
                    image:productdata.image
                })
                await product.save();
    
            }
            res.send({message:"Successfully Saved Data !"})
        }else{
            res.send({message:"Something Error !"})
        }

        

    } catch (error) {
       console.log(error)
    }
});

router.get('/get/product',async(req,res)=>{
    const data = await Product.find();
     res.send({data})
})

router.post('/cart', async (req, res) => {
    try {
        const { email, product } = req.body;
        const cart = await Cart.findOne({ email });

        if (!cart) {
            // Create a new cart if one doesn't exist for the user
            const newCart = new Cart({ email, products: [product] });
            await newCart.save();
        } else {
            // Add the product to the existing cart
            cart.products.push(product);
            await cart.save();
        }

        res.status(200).json({ message: 'Product added to cart successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
});


export default router;