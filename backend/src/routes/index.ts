import { Router } from "express";
import adminRoute from './admin'
import sellerRoute from './seller'
import userRoute from './user'

const router = Router()

router.use('/admin', adminRoute)
router.use('/seller', sellerRoute)
router.use('/user', userRoute)


export default router