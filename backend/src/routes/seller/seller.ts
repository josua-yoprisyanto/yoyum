import { Router } from "express";
import StandContoller from "../../controllers/seller/standContoller";

const router = Router()

router.route('/').get(StandContoller.readOne)

export default router