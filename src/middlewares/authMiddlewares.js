import { registerSchema } from "../models/authSchema.js";
import { usersCollection } from "../database/db.js"
import bcrypt from "bcryptjs"

export async function registerValidation(req, res,next) {
    const newUser = req.body
    const {name, password} = newUser
    newUser.email = newUser.email.toLowerCase()

    //VERIFICA SE EXISTE INFORMAÇAO VAZIA
    if (!name || !password || !newUser.email) {
        return res.status(400).send("Preencha todos os campos")
    }

    try{
        //VERIFICAÇAO EMAIL JA EXISTE
        const userAlredyExist = await usersCollection.findOne({email: newUser.email})

        if(userAlredyExist){
            return res.status(400).send("Email ja cadastrado!")
        }
    } catch(error){
        console.log(error)
    }
 
    //VERIFICAÇAO SCHEMA
    const { error } = registerSchema.validate(newUser, { abortEarly: false })
    if (error) {
        return res.status(400).send(error.message)
    }

    //ENCRIPTOGRAFANDO SENHA
    newUser.password = bcrypt.hashSync(newUser.password, 10)

    req.newUser = newUser
    next()
}

export async function loginValidation(req,res,next){
    const user = req.body
    const{email, password} = req.body

    //VERIFICA SE EXISTE INFORMAÇAO VAZIA
    if(!email || !password){
        return res.status(400).send("Campos invalidos")
    }

    try{
        //VERIFICA SE EMAIL EXISTE
        const userExist = await usersCollection.findOne({email})
        if(!userExist){
            return res.status(400).send("Email nao cadastrado")
        }
 
        const passwordCorrect = await bcrypt.compare(password, userExist.password)
        
        if(!passwordCorrect){
            return res.status(400).send("Senha invalida")
        }
    } catch(error){
        console.log(error)
    }

    

}