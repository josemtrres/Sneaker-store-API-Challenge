import DatabaseConst from "../database/connection.js"
// Middleware que verifica la existencia del usuario ingresado
function VerifySP(req, res, next) {
    try {
        const { user_id, nombre_producto } = req.body
        if (DatabaseConst.ValidUser(user_id, nombre_producto)) {
            throw error;
        }
        next()
    } catch (error) { }
}

export default VerifySP