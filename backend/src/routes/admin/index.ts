import { Router } from "express";
import authRoute from './auth'
import standRoute from './stand'
import { verifyToken } from "../../middlewares/verifyToken";

const router = Router()

router.use('/auth', authRoute)

router.use(verifyToken)
router.use('/stand', standRoute)

export default router