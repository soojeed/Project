import {Request, Response} from 'express';
import {prisma} from "../lib/prisma";
import {IProfile} from '../../types/profile'
 
const prismaa = prisma;

export const CreateProfile = async (req: Request, res: Response) =>{
    try{
       const data : IProfile = req.body;


       // check profile exist
       const profile = await prisma.profile.findUnique({
        where : {
          id : data.id
        }
       });
       if(profile){
        res.status(409).json({isSucees:false, message : "Profile Already Exits"});
        return
       }

       const create = await prisma.profile.create({
        data : {
            id : data.id,
            fullName : data.fullName,
            title : data.title,
        }
       });

       res.status(404).json({isSucees:true, message : "Profile Created Succesfully", create})

    }catch(error){
        res.status(500).json({isSuccess:false, message:"Server Error!"})
    }
}