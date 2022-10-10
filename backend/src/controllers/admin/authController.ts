import { Request, Response, NextFunction } from "express";
import db from "../../models/index";
import dotenv from 'dotenv'
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

dotenv.config()

class AuthController{
    async login(req: Request, res: Response, next: NextFunction){
        try{            
            let message = "Success"
            const email = req.body.email
            const password = req.body.password

            const user = await db.Admin.findOne({where: {email}})
            if(!user) message = "Incorrect credentials"
            bcrypt.compare(password, user.password, (err: any, result: any) => {
                if(result) {
                    const token = jwt.sign(JSON.stringify(user), process.env.ACCESS_TOKEN)
                    res.json({
                        status: message,
                        token: token
                    })        
                }else{
                    message = "Incorrect Credentials"
                    res.json({message: message})
                }
            })
            
            
        }catch(e: any){
            res.json({message:e.message})
        }
    }

    async me(req: Request, res: Response, next: NextFunction){        
        try{
            if(res.locals.err) return res.json({message: res.locals.err})            
            res.json({admin: res.locals.user}) 
        }catch(e: any){
            res.json({message: e.message})
        }
    }

}

export default new AuthController()
