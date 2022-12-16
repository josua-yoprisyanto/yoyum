import { Router } from "express";
import authController from "../../controllers/seller/authController";
import { verifyToken } from "../../middlewares/verifyToken";

const router = Router()


router.post('/login', authController.login)
router.use(verifyToken)
router.get('/me', authController.me)
router.route('/').put(authController.editStand)


export default router