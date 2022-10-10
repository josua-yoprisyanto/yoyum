import { Router } from "express";
import adminRoute from './admin'
import sellerRoute from './seller'

const router = Router()

router.use('/admin', adminRoute)
router.use('/seller', sellerRoute)


export default router