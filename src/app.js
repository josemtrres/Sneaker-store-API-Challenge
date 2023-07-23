import express from 'express'
import products from './routes/products.routes.js'

// Inicialización de express
const app = express()

// Evita ataques por medio de esta cabezera
app.disable('X-Powered-By')
// Se establece que la aplicación usará JSON
app.use(express.json())

// Uso de las rutas
app.use('/api/', products)

// exportacion de app para ser usada por el navegador
export default app