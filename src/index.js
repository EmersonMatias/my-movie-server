import express from "express";
import authRoutes from "./routes/authRoutes.js"

const app = express()

app.use(express.json())

//Rotas de autenticaçao (SIGNUP & SIGNIN)
app.use(authRoutes)



app.listen(5000, () => {
    console.log("Server Running")
})

