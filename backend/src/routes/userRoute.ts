import express from "express";
import { getAllUsers, loginUser, registerUser } from '../controllers/userController'
import {Registerschema}  from "../../schema/user"
import {validationMiddleware} from "../../middleware/validation"
import { whoami } from "../controllers/userController";
import { authanticate } from "../../middleware/authenticate.middleware";
const router = express.Router();


router.post('/new', validationMiddleware, Registerschema, registerUser)
router.post('/login', validationMiddleware, Registerschema, loginUser)
router.get("/get", getAllUsers); // ✅ sax
router.get("/whoami", authanticate, whoami); // ✅ sax
export default router;