import { Request, Response } from "express";
import { IProject } from "../../types/project";
import { prisma } from "../lib/prisma";
export const CreateProject = async (req: Request, res: Response) => {
    try{
   const data : IProject = req.body;

   const project = await prisma.project.create({
data:{
    id : data.id,
    title : data.title,
    description : data.description,
}
   })
      
    }catch(error){
        console.log(error);
    }
}