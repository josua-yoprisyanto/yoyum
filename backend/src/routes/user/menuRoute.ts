import { Router } from "express";
import menuController from "../../controllers/user/menuController";

const router = Router()

router.route('/:id').get(menuController.readMenu)
router.route('/stand').get(menuController.readSellers)

export default router