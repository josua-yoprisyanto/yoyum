import { Router } from "express";
import authController from "../../controllers/admin/authController";
import { verifyToken } from "../../middlewares/verifyToken";

const router = Router()

router.post('/login', authController.login)
router.use(verifyToken)
router.get('/me', authController.me)

export default router