import mongoose from 'mongoose'

const cartSchema = new mongoose.Schema({
    email: { type: String, required: true }, // Email of the user
    products: [
        {
            title: { type: String, required: true },
            description: { type: String },
            price: { type: Number, required: true },
            id: { type: String, required: true, unique: true },
            image: { type: String }
        }
    ]
});

const Cart = mongoose.model('Cart', cartSchema);
export default Cart;
