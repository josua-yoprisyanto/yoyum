import { Router } from "express";
import StandController from "../../controllers/admin/standController";
import { uploadImageWithPdf } from "../../middlewares/upload";

const router = Router()

router.get('/', StandController.read)
router.get('/:id', StandController.readOne)
router.delete('/:id', StandController.deleteStand)
router.put('/active/:id', StandController.updateActive)
router.use(
    uploadImageWithPdf.fields([
      { name: 'img', maxCount: 1 },      
    ])
  )
router.post('/create', StandController.addStand)

export default router