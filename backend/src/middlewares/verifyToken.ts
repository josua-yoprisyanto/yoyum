import { Request, Response, NextFunction } from "express";
const jwt = require('jsonwebtoken')

export const verifyToken = async (req: Request, res: Response, next: NextFunction) => {
    try{
        if(!req.headers.authorization){
            res.locals.err = "u no give token"
            return next()
        }
        const user = jwt.verify(req.headers.authorization, process.env.ACCESS_TOKEN)
        res.locals.user = user
        return next()
    }catch(e){
        return next(e)
    }
}