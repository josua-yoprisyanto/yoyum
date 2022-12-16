import { Router } from "express";
import authController from "../../controllers/seller/authController";
import { verifyToken } from "../../middlewares/verifyToken";
import { uploadImageWithPdf } from "../../middlewares/upload";
import multer from "multer";

const multParse = multer()

const router = Router()

router.post('/login', authController.login)
router.use(verifyToken)
router.get('/me', authController.me)
router.use(
    uploadImageWithPdf.fields([
      { name: 'img', maxCount: 1 },      
    ])
  )
router.route('/').put(authController.editStand)


export default router