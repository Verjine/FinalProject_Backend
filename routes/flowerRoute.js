import  express  from "express";
import { getFlowers , postFlower, getOneFlower,updateFlower,deleteFlower } from "../controllers/flowerController.js";

const router = express.Router();
router.get('/', getFlowers);
router.put('/:id', updateFlower );
router.get('/:id', getOneFlower );

router.post('/',postFlower);
router.delete('/:id',deleteFlower);





export default router;