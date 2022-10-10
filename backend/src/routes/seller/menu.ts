import { Router } from "express";
import menuController from "../../controllers/seller/menuController";

const router = Router()

router.post('/food', menuController.createFood)
router.post('/drink', menuController.createDrink)
router.post('/other', menuController.createOther)

export default router