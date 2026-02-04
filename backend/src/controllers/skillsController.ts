import{ prisma }from '../lib/prisma'
import {Response, Request} from 'express'
import {Iskilss} from "../../types/skills"

export const CreateSkils = async (req:Request, res:Response) =>{
    try{
    const data : Iskilss =  req.body;

    const skills = await prisma.skill.findUnique({
        where :{
            id : data.id
        }
    });
    if(skills){
        res.status(409).json({isSucees: false, message: "Skilss Already Exits"});
        return
    }


    const SkillsCreate = await prisma.skill.create({
        data:{
            id : data.id,
            name : data.name,
            level : data.level,
            category : data.category

        }
    });
     
    res.status(200).json({isSuccess : true , message: "Successfully Created!", SkillsCreate})



    }catch(error){
        console.log(error);
        res.status(500).json({isSuccess: false, message:'Server error', })
    }
}


export const GetSkills = async (req:Request, res:Response) =>{
    try{
      const getSkills = await prisma.skill.findMany({
        select:{
            id : true,
            name : true,
            level: true,
            category: true
        }
      });

      res.status(200).json({isSuccess:true , message : "Skills retrieved successfully ", data:getSkills})



    }catch(error){
        res.status(500).json({isSuccess: false, message:'Server error'})
    }
}