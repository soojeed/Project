import { Router } from "express";
import { getAllUsers, loginUser, registerUser } from '../controllers/userController'
import {Registerschema}  from "../../schema/user"
import {validationMiddleware} from "../../middleware/validation"
import { whoami } from "../controllers/userController";
const router = Router();

router.post('/new', validationMiddleware, Registerschema, registerUser)
router.post('/login', validationMiddleware, Registerschema, loginUser)
router.get("/get", getAllUsers); // ✅ sax

export default router;