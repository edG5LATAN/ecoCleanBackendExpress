import express, { json } from "express";
import clienteRoute from './routes/cliente.routes.js'
import cors from 'cors'

import { PORT } from "./config.js";

const app =express()
app.use(cors())
app.use(express.json())


app.use('/',clienteRoute)


app.use((req,res,next)=>{
    res.status(404).json({
        message:"endpoint not found"
    })
})

app.listen(PORT)
console.log(PORT)
