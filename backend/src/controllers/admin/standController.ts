import { Request, Response, NextFunction } from "express";
import { emit } from "process";
import db from "../../models";
const bcrypt = require('bcrypt')


class StandController{
    async read(req: Request, res: Response, next: NextFunction){
        try{
            if(res.locals.err) return res.json({message: 'why u no give key man'})
            const sellers = await db.seller.findAll()
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
            const seller = await db.seller.findOne({where:{id: req.params.id}})
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
            if(res.locals.err) return res.json({message: "Give token pls"})
            let user = req.body
            bcrypt.hash(user.password, 10, (err: any, hash: any) => {
                user.password = hash
                db.seller.create(user).then(() => {
                    res.json({
                        status: "Success",
                        data: user
                    })
                })   .catch((e: any) => {
                    res.json({
                        status: "Failed",
                        data: e.message
                    })
                })             
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
            const stand = await db.seller.findOne({where: {id: req.params.id}})
            stand.set({active: req.body.status})
            await stand.save()
            res.json({
                status: "Success",
                data: stand
            })
        }catch(e: any){
            res.json({message: e.message})
        }
    }

}

export default new StandController()