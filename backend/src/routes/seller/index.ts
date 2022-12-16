import { Router } from "express";
import authRoute from './auth'
import menuRoute from './menu'
import sellerRoute from './seller'
import { verifyToken } from "../../middlewares/verifyToken";

const router = Router()


router.use('/auth', authRoute)
router.use(verifyToken)
router.use('/menu', menuRoute)
router.use('/stand', sellerRoute)

export default router