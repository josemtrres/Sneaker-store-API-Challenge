import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
    },
    precio_base: {
        type: Number,
        required: true,
    },
    existencia: {
        type: Number,
        required: true,
        default: 0,
    },
});

export default mongoose.model('products', productSchema);