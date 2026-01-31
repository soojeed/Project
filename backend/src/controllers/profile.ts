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

export const GetProfile = async (req: Request, res: Response) =>{
    try{
    const profile = await prisma.profile.findMany({
        select :{
            id : true,
            fullName : true,
            title : true,
        }
    });

    res.status(200).json({isSuccess:true,message: "Profiles retrieved successfully", data: profile})
    }catch(error){
        res.status(500).json({isSuccess:false, message:"Server Error!"})
    }
       
}

export const updateProfile = async (req: Request, res: Response) =>{
    try{
        const data : IProfile = req.body;

        const profile = await prisma.profile.update({
            where : {
                id : data.id
            },
            data : {
                fullName : data.fullName,
                title : data.title,
            }
        });
        res.status(200).json({isSuccess:true, message:"Profile updated successfully", data: profile})
    }catch(error){
        res.status(500).json({isSuccess:false, message:"Server Error!"})
    }
}   


export const deleteProfile = async (req: Request, res: Response) =>{
    try{
        const {id} = req.body;

        const profile = await prisma.profile.delete({
            where : {
                id : id
            }
        });
        res.status(200).json({isSuccess:true, message:"Profile deleted successfully", data: profile})
    }catch(error){
        res.status(500).json({isSuccess:false, message:"Server Error!"})
    }

}