
import  mongoose  from "mongoose";

const productSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String },
    price: {
        type: Number,
        required: true
    },
    id: { type: String, required: true, unique: true },
    image: { type: String }
});

const Product = mongoose.model('Product', productSchema);

export default Product;

