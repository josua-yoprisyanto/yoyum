import { Request, Response, NextFunction } from "express";
import db from "../../models";
import dotenv from 'dotenv'
import { sellerEditSchema } from "../../validators/seller/seller";
import { Asserts } from "yup";
import { imgSchema } from "../../validators/admin/seller";
import { getImageUrl } from "../../middlewares/getImageUrl";
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

dotenv.config()

interface SellerInput extends Asserts<typeof sellerEditSchema>{}
interface ImgInput extends Asserts<typeof imgSchema>{}
class authController{
    async login(req: Request, res: Response, next: NextFunction){
        try{
            const seller = await db.Seller.findOne({where: {email: req.body.email}})
            if(!seller) return res.json({
                status: "failed",
                message: "Incorrect credentials"
            })
            bcrypt.compare(req.body.password, seller.password, (err: any, result: any) => {
                if(result){
                    const token = jwt.sign(JSON.stringify(seller), process.env.ACCESS_TOKEN)
                    res.json({
                        status: "Success",
                        token: token,
                        role: 'SELLER'
                    })
                }else{
                    res.json({
                        status: "failed",
                        message: "Incorrect credentials"
                    })
                }
            })
        }catch(e: any){
            res.json({
                status: "failed",
                data: e.message
            })
        }
    }

    async me(req:Request, res:Response, next:NextFunction){
        try{
            if (res.locals.err) return res.json({message: "It's almost midnight, I am running out of ideas for the no key thing"})
            const data = await db.Seller.findAll({
                where: {id: res.locals.user.id},
                include: [
                    {
                        model: db.MenuItem,
                        as: 'menu_items'
                    },
                    
                ]
            }) 
            if(!data) return res.json({message: 'something went horribly wrong'})
            res.json({
                status: "Success",
                data: data,
                role: 'SELLER'
            })
        }catch(e: any){
            res.json({
                status: "failed",
                message: e.message
            })
        }
    }

    async editStand(req: Request, res: Response, next: NextFunction){
        try{
            const {
                name,
                number
            }: SellerInput = sellerEditSchema.validateSync(req.body)
            const { img }: ImgInput = imgSchema.validateSync(req.files)
            
            if(res.locals.err) return res.json({message: "Give token pls"})  

            const seller = await db.Seller.findOne({
                where:{
                    id: res.locals.user.id
                }
            })
            

            seller.name = name            
            seller.number = number
            seller.img = img ? getImageUrl(img[0].filename) : null

            await seller.save()

            res.json({
                success: true,
                message: "Stand details updated"
            })
        }catch(err: any){
            res.json({
                status: "failed",
                message: err.message
            })
        }
    }
}

export default new authController()