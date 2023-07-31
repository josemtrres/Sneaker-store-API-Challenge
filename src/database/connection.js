import mongoose from "mongoose";
import Products from '../schema/product.schema.js'
import User from "../schema/user.schema.js";

const dbURL = 'mongodb://drenvio:moM5f3AodwLE5d0A@ac-aemgtkt-shard-00-00.unqyghm.mongodb.net:27017,ac-aemgtkt-shard-00-01.unqyghm.mongodb.net:27017,ac-aemgtkt-shard-00-02.unqyghm.mongodb.net:27017/?replicaSet=atlas-y8oxsk-shard-0&ssl=true&authSource=admin'

mongoose.connect(dbURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'challenge'
});

const GetStock = async () => {
    try {
        const productsOnStock = await Products.find({ existencia: { $gt: 0 } })
        return productsOnStock
    } catch (error) {
        throw error
    }
}

const ValidUser = async (user_id) => {
    const user = await User.find({ id: user_id })

    if (!user) {
        return false;
    } else {
        return true;
    }
}

const SpecialPrice = async (user_id, nombre_producto) => {
    const user = await User.find({ id: user_id })
    const product = await Products.findOne({
        existencia: { $gt: 0 },
        nombre: nombre_producto
    });
    if (user[0].metadata != 0) {
        return user[0].metadata.precios_especiales.find(producto => producto.nombre_producto === nombre_producto).precio_especial_personal
    } else {
        return stock[0].precio_base
    }

}
const DatabaseConst = {
    GetStock,
    ValidUser,
    SpecialPrice
}

export default DatabaseConst