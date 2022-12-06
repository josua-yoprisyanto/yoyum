import { Request, Response, NextFunction } from "express";
import db from '../../models'
import { Op } from 'sequelize'

class menuController{
    async readSellers(req: Request, res: Response, next: NextFunction){
        try{
            const sellers = await db.Seller.findAll({
                attributes: {
                    exclude: ['password']
                }
            })
            res.json({
                success: true,
                data: sellers
            })
        }catch(e: any){
            res.json({
                status: "failed",
                message: e.message
            })
        }
    }

    async readMenu(req: Request, res: Response, next: NextFunction){
        try{
            const { id } = req.params
            const { itemName } = req.query
            const menuItems = await db.MenuItem.findAndCountAll({
                where:{
                    seller_id: id,
                    ...(itemName && {
                        name: {[Op.like]: `%${itemName}%`}
                    })
                }
            })
            res.json({
                success: true,
                data: menuItems
            })
        }catch(err){
            res.json({
                success: false,
                message: err
            })
        }
    }
}

export default new menuController()