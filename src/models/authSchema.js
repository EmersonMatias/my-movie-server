import joi from "joi"

const registerSchema = joi.object({
    name: joi.string()
    .required()
    .min(3)
    .alphanum(),

    password: joi.string()
    .required()
    .min(8)
    .max(30),

    email: joi.string()
    .required()
    .email()
    .lowercase()
})


export {registerSchema}