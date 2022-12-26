import  express  from "express";
import { Check , Login } from "../controllers/userController.js";
const router = express.Router();


router.post("/register" , Check)
router.post("/login" , Login)


export default router;