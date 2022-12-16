import { Request, Response, NextFunction } from "express";
import { sellerSchema, imgSchema } from "../../validators/admin/seller";
import { Asserts } from "yup";
import { getImageUrl } from "../../middlewares/getImageUrl";
import db from "../../models";
const bcrypt = require('bcrypt')

interface SellerInput extends Asserts<typeof sellerSchema>{}
interface ImgInput extends Asserts<typeof imgSchema>{}


class StandController{
    async read(req: Request, res: Response, next: NextFunction){
        try{
            if(res.locals.err) return res.json({message: 'why u no give key man'})
            const sellers = await db.Seller.findAll()
            res.json({
                status: "Success",
                data: sellers
            })
        }catch(e:any){
            res.json({
                status: "failed",
                data: e.message
            })
        }
    }

    async readOne(req: Request, res: Response, next: NextFunction){
        try{
            if(res.locals.err) return res.json({message: "Do you just not have the key?"})
            const seller = await db.Seller.findOne({
                where:{
                    id: req.params.id
                },
                include: [
                    {
                        as: 'menu_items',
                        model: db.MenuItem
                    }
                ]
            })     
            
            seller.dataValues.food_items = (seller.menu_items.filter((mi: any) => {
                return mi.type === 'food'
            })).length
            seller.dataValues.drink_items = (seller.menu_items.filter((mi: any) => {
                return mi.type === 'drink'
            })).length
            seller.dataValues.other_items = (seller.menu_items.filter((mi: any) => {
                return mi.type === 'other'
            })).length
            res.json({
                status: "Success",
                data: seller
            })
        }catch(e: any){
            res.json({
                status: "failed",
                data: e.message
            })
        }
    }


    async addStand(req: Request, res: Response, next: NextFunction){
        try{            
            const {
                name,
                email,
                number,
                password,
                active,                
            }: SellerInput = sellerSchema.validateSync(req.body)

            const { img }: ImgInput = imgSchema.validateSync(req.files)            
            if(res.locals.err) return res.json({message: "Give token pls"})            
            bcrypt.hash(password, 10, async (err: any, hash: any) => {
                if(err) throw new Error(err)
                await db.Seller.create({
                    name: name,
                    email: email,
                    number: number,
                    password: hash,
                    active: active,
                    img: img ? getImageUrl(img[0].filename) : null
                })
            })

            res.json({
                success: true,
                message: "Seller succesfully created"
            })
        }catch(e: any){
            res.json({message: e.message})
        }
    }

    async updateActive(req:Request, res: Response, next: NextFunction){
        try{
            if(res.locals.err) return res.json({message: 'I do not see token, WHO IS U' })
            if(!req.params.id) return res.json({message: "At least tell me which stand you want to cahnge the status man"})                        
            if(!req.body) return res.json({message: "FOR FUCKS SAKE JUST GIVE ME A TRUE OR FALSE"})
            const stand = await db.Seller.findOne({where: {id: req.params.id}})
            stand.set({active: req.body.active})
            await stand.save()
            res.json({
                status: "Success",
                data: stand
            })
        }catch(e: any){
            res.json({message: e.message})
        }
    }

    async deleteStand(req: Request, res: Response, next: NextFunction){
        try{
            if(res.locals.err) return res.json({message: 'OI JUST GIVE ME TOKEN LAH' })
            const { id } = req.params

            await db.Seller.destroy({
                where:{
                    id: id
                }
            })

            res.json({
                success: true,
                message: "Stand successfully deleted"
            })
        }catch(err){

        }
    }

}

export default new StandController()