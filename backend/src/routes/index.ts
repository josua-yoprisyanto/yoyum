import { Router } from "express";
import path from "path";
import adminRoute from './admin'
import sellerRoute from './seller'
import userRoute from './user'

const router = Router()

const uploadPath = path.join(__dirname, '../..', 'uploads');


router.get('/uploads/:filename', (req, res) => {
    const { filename } = req.params;
    return res.sendFile(path.join(uploadPath, filename));
  });

router.use('/admin', adminRoute)
router.use('/seller', sellerRoute)
router.use('/user', userRoute)


export default router