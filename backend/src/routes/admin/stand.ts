import { Router } from "express";
import StandController from "../../controllers/admin/standController";

const router = Router()

router.get('/', StandController.read)
router.post('/create', StandController.addStand)
router.put('/active/:id', StandController.updateActive)

export default router