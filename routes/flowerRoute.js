import  express  from "express";
import { getFlowers , postFlowers } from "../controllers/flowerController.js";


const router = express.Router();
router.get('/', getFlowers);
router.post('/',postFlowers);

export default router;