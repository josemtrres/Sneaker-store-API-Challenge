import DatabaseConst from "../database/connection.js";

const SpeciaPrices = async (req, res) => {
    const { user_id, nombre_producto } = req.body
    try {
        const NewPrice = await DatabaseConst.SpecialPrice(user_id, nombre_producto)
        res.json(NewPrice)
    } catch (error) {

    }
}

export default SpeciaPrices