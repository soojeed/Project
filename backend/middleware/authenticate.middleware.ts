import {NextFunction, Request, Response} from 'express'
import jwt from 'jsonwebtoken'
import { AuthRequest } from '../types/request'

export const authanticate = async (req: AuthRequest, res: Response, next: NextFunction) =>{
    try{
       const authHeader = req?.headers?.authorization;

       if(!authHeader ){
        res.status(401).json({message: "Unauthorized (NO AUTHHEADER)", isSuccess: false});
        return;
       }
       
       //bearer Token
       const token = authHeader.split(" ")[1];
       if(!token){
        res.status(401).json({message: "Unauthorized (NO TOKEN)", isSuccess: false});
        return;
       }

       const result : any = jwt.verify(token, process.env.JWT_SECRET_KEY as string);

       if(!result){
        res.status(401).json({message: "Unauthorized (NO RESULT)", isSuccess: false});
        return;
       }


       req.userId = result.userId;
         next();


    } catch(error){
        console.log(error);
        return res.status(401).json({message: "Unauthorized", isSuccess: false})
    }
}