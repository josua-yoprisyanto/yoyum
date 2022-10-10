import { Router } from "express";
import authRoute from './auth'
import menuRoute from './menu'
import { verifyToken } from "../../middlewares/verifyToken";

const router = Router()


router.use('/auth', authRoute)
router.use(verifyToken)
router.use('/menu', menuRoute)

export default router