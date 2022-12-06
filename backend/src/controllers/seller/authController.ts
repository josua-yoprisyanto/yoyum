import { Request, Response, NextFunction } from "express";
import db from "../../models";
import dotenv from 'dotenv'
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

dotenv.config()

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
                        token: token
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
            console.log("Hit")
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
                data: data
            })
        }catch(e: any){
            res.json({
                status: "failed",
                message: e.message
            })
        }
    }
}

export default new authController()