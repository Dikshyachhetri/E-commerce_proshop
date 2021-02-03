import  express from "express";
import  products from "./data/products.js";
import dotenv from 'dotenv';
import connectDB from "./config/db.js"
import productRoutes from "./routes/productRoutes.js"
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

dotenv.config()

const app = express();



app.get('/', (req,res) => {
   res.send('API is running...')
})

app.use('/api/products', productRoutes)

app.use(notFound)

app.use(errorHandler)

const PORT = process.env.PORT || 5000
app.listen(PORT, function(){
    console.log(`server started in ${process.env.NODE_ENV} mode on port ${PORT}`);
})

connectDB()