import { usersCollection } from "../database/db.js"
import jwt from "jsonwebtoken"

export async function registerNewUser(req, res){
    const newUser = req.newUser

    try{
        usersCollection.insertOne(newUser)
        res.status(200).send("Cadastro efetuado com sucesso")
    } catch(error){
        console.log(error)
    }
}

