import DatabaseConst from '../database/connection.js'

const StockProd = async (req, res) => {
    try {
        const productsOnStock = await DatabaseConst.GetStock()
        res.json(productsOnStock)
    } catch (error) {

    }
}

export default StockProd
