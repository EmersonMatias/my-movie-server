import express from "express";

const app = express()

app.get("/", (req,res) => {

    res.send("Tudo funcionando")
})


app.listen(5000, () => {
    console.log("Server Running")
})

