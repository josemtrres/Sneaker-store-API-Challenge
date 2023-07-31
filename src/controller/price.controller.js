import DatabaseConst from "../database/connection.js";

const SpeciaPrices = async (req, res) => {
    const user_id = req.params.user_id;
    const nombre_producto = req.params.nombre_producto;
    try {
        const NewPrice = await DatabaseConst.SpecialPrice(user_id, nombre_producto)
        res.json(NewPrice)
    } catch (error) {
        res.json(401);
        console.log(error)
    }
}

export default SpeciaPrices