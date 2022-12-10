import { Router } from "express";
import menuController from "../../controllers/user/menuController";

const router = Router()

router.route('/').get(menuController.readSellers)

export default router