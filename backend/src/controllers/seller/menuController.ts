import { Request, Response, NextFunction } from "express";
import db from "../../models";
import { menuItemSchema } from '../../validators/seller/menuItem'
import { Asserts } from 'yup'

interface MenuItemInput extends Asserts<typeof menuItemSchema>{}

class menuController{
    // async read(req: Request, res: Response, next: NextFunction){
    //     try{
    //         if (res.locals.err) return res.json({message: "It's almost midnight, I am running out of ideas for the no key thing"})
    //         const data = await db.Seller.findAll({
    //             where: {id: res.locals.user.id},
    //             include: [
    //                 {
    //                     model: db.foodItems,
    //                     as: 'food_items'
    //                 },
    //                 {
    //                     model: db.drinkItems,
    //                     as: 'drink_items'
    //                 },
    //                 {
    //                     model: db.otherItems,
    //                     as: 'other_items'
    //                 }
    //             ]
    //         }) 
    //     }catch(e: any){
    //         res.json({
    //             status: "failed",
    //             message: e.message
    //         })
    //     }
    // }

    async createMenuItem(req: Request, res: Response, next: NextFunction){
        try{
            const{
                name,
                img,
                price,
                type
            }: MenuItemInput = menuItemSchema.validateSync(req.body)
            if(res.locals.err) return res.json({message: "HOW MANY TIMES DO I HAVE TO ASK FOR A DAMN KEY"})            
            await db.MenuItem.create({
                seller_id: res.locals.user.id,
                name: name,
                img: img,
                price: price,
                type: type
            })
            res.json({
                success: true,
                message: "item succesfully created"
            })
        }catch(e: any){
            res.json({
                status: "failed",
                message: e.message
            })
        }
    }

    // async createFood(req: Request, res: Response, next: NextFunction){
    //     try{
    //         if(res.locals.err) return res.json({message: "HOW MANY TIMES DO I HAVE TO ASK FOR A DAMN KEY"})
    //         const newFoodItem = {                
    //             name: req.body.name,
    //             img: req.body.img,
    //             price: req.body.price,
    //             sellerId: res.locals.user.id
    //         }
    //         db.foodItems.create(newFoodItem).then(() => {
    //             res.json({
    //                 status: "Success",
    //                 data: req.body
    //             })
    //         }).catch((e: any) => {
    //             res.json({
    //                 status: "failed",
    //                 message: e.message
    //             })
    //         })
    //     }catch(e: any){
    //         res.json({
    //             status: "failed",
    //             message: e.message
    //         })
    //     }
    // }
    // async createDrink(req: Request, res: Response, next: NextFunction){
    //     try{
    //         if(res.locals.err) return res.json({message: "HOW MANY TIMES DO I HAVE TO ASK FOR A DAMN KEY"})
    //         const newFoodItem = {                
    //             name: req.body.name,
    //             img: req.body.img,
    //             price: req.body.price,
    //             sellerId: res.locals.user.id
    //         }
    //         db.drinkItems.create(newFoodItem).then(() => {
    //             res.json({
    //                 status: "Success",
    //                 data: req.body
    //             })
    //         }).catch((e: any) => {
    //             res.json({
    //                 status: "failed",
    //                 message: e.message
    //             })
    //         })
    //     }catch(e: any){
    //         res.json({
    //             status: "failed",
    //             message: e.message
    //         })
    //     }
    // }
    // async createOther(req: Request, res: Response, next: NextFunction){
    //     try{
    //         if(res.locals.err) return res.json({message: "HOW MANY TIMES DO I HAVE TO ASK FOR A DAMN KEY"})
    //         const newFoodItem = {
    //             name: req.body.name,
    //             img: req.body.img,
    //             price: req.body.price,
    //             sellerId: res.locals.user.id
    //         }
    //         db.otherItems.create(newFoodItem).then(() => {
    //             res.json({
    //                 status: "Success",
    //                 data: req.body
    //             })
    //         }).catch((e: any) => {
    //             res.json({
    //                 status: "failed",
    //                 message: e.message
    //             })
    //         })
    //     }catch(e: any){
    //         res.json({
    //             status: "failed",
    //             message: e.message
    //         })
    //     }
    // }
}

export default new menuController()