import { Request, Response, NextFunction } from "express";
import db from "../../models/index";
import dotenv from 'dotenv'
const jwt = require('jsonwebtoken')

dotenv.config()

class AuthController{
    async login(req: Request, res: Response, next: NextFunction){
        try{            
            let message = "Success"
            const email = req.body.email
            const password = req.body.password

            const user = await db.Admin.findOne({where: {email}})
            if(!user) message = "Incorrect credentials"
            if(user.password != password) message = "Incorrect credentials"
            const token = jwt.sign(JSON.stringify(user), process.env.ACCESS_TOKEN)
            res.json({
                status: message,
                token: token
            })
        }catch(e: any){
            res.json({message:e.message})
        }
    }

}

export default new AuthController()
