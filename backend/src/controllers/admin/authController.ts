import { Request, Response, NextFunction } from "express";
import db from "../../models/index";
import dotenv from 'dotenv'
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

dotenv.config()

class AuthController{
    async login(req: Request, res: Response, next: NextFunction){
        try{                        
            const email = req.body.email
            const password = req.body.password

            const user = await db.Admin.findOne({where: {email}})
            if(!user) res.json({
                status: "failed",
                message: "Incorrect credentials"
            })
            bcrypt.compare(password, user.password, (err: any, result: any) => {
                if(result) {
                    const token = jwt.sign(JSON.stringify(user), process.env.ACCESS_TOKEN)
                    res.json({
                        status: "Success",
                        token: token,
                        role: 'ADMIN'
                    })        
                }else{                    
                    res.json({
                        status: "failed",
                        message: "incorrect credentials"})
                }
            })
            
            
        }catch(e: any){
            res.json({message:e.message})
        }
    }

    async me(_: Request, res: Response, __: NextFunction){        
        try{
            if(res.locals.err) return res.json({message: res.locals.err})   
            const user = res.locals.user
            user.token = jwt.sign(JSON.stringify(user), process.env.ACCESS_TOKEN)
            res.json({
                success: true,
                admin: user,
                role: 'ADMIN'
            }) 
        }catch(e: any){
            res.json({message: e.message})
        }
    }

}

export default new AuthController()
