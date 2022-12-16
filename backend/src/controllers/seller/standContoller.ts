import { Request, Response, NextFunction } from "express";
import db from "../../models";

class StandController{
    async readOne(req: Request, res: Response, next: NextFunction){
        try{
            if(res.locals.err) return res.json({message: "Do you just not have the key?"})
            const seller = await db.Seller.findOne({
                where:{
                    id: res.locals.user.id
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
}

export default new StandController()