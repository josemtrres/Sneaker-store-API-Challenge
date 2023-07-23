import mongoose from "mongoose";

// Define el esquema para los precios especiales
const SpecialPriceSchema = new mongoose.Schema({
    nombre_producto: {
        type: String,
        required: true,
    },
    precio_especial_personal: {
        type: Number,
        required: true,
    },
});

const UserSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true,
    },
    nombre: {
        type: String,
        required: true,
    },
    metadata: {
        precios_especiales: [SpecialPriceSchema],
    },
});

const User = mongoose.model("users", UserSchema);

export default User;
