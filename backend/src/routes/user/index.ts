import { Router } from "express";
import menuRoute from './menuRoute'
import sellerRoute from './standRoute'

const router = Router()

router.use('/menu', menuRoute)
router.use('/stand', sellerRoute)

export default router