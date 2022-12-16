import { Router } from "express";
import menuController from "../../controllers/seller/menuController";
import { uploadImageWithPdf } from "../../middlewares/upload";

const router = Router()

router.route('/').get(menuController.read)
router.use(
    uploadImageWithPdf.fields([
      { name: 'img', maxCount: 1 },      
    ])
  )
router.route('/create').post(menuController.createMenuItem)
router.route('/:id').get(menuController.menuItemReadOne)
router.route('/:id').put(menuController.editMenuItem)
router.route('/:id').delete(menuController.deleteMenuItem)
// router.post('/food', menuController.createFood)
// router.post('/drink', menuController.createDrink)
// router.post('/other', menuController.createOther)

export default router