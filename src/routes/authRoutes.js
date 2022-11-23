import { Router } from "express";
import { registerNewUser } from "../controllers/authController.js";
import { loginValidation, registerValidation } from "../middlewares/authMiddlewares.js";

const router = Router();


//SIGN UP
router.post("/registrar", registerValidation, registerNewUser)

//SIGN IN
router.post("/entrar", loginValidation)

export default router 