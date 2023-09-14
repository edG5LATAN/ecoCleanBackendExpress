import express, { json } from "express";
import clienteRoute from './routes/cliente.routes.js'

import { PORT } from "./config.js";

const app =express()
app.use(express.json())


app.use('/api',clienteRoute)


app.use((req,res,next)=>{
    res.status(404).json({
        message:"endpoint not found"
    })
})

app.listen(PORT)
console.log(PORT)
