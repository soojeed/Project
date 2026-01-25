import { Router } from "express";
import { registerUser } from '../controllers/userController'
import {Registerschema}  from "../../schema/user"
import {validationMiddleware} from "../../middleware/validation"

const router = Router();

router.post('/new', validationMiddleware, Registerschema, registerUser)


export default router;