import { Router } from "express";
import menuRoute from './menuRoute'

const router = Router()

router.use('/menu', menuRoute)

export default router