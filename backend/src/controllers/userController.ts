import { prisma} from '../lib/prisma'
import { IRegister } from "../../types/user";
import { Request, Response } from "express";
import  argon2  from 'argon2'


const prismaa = prisma;

export const registerUser = async (req: Request, res: Response) =>{
    try{
        const data : IRegister = req.body;

        //check if passward and confirm password is match

        if(data.password !== data.password_confirm){
            res.status(400).json({message:"password is not match", isSuccess:false});
            return
        }

        // check if user already exists
        const user = await prisma.users.findUnique({
            where: {
                email : data.email
            }
        });

        if(user){
            res.status(409).json({Message : "User Already Exits", isSucces: false})
        
            return
        
        }
        
    
        // hashed password 

        const password_Hashed = await argon2.hash(data.password);


        // Create user
      const  createUser = await prisma.users.create({
        data:{
            email : data.email.toLowerCase(),
            password : password_Hashed,
            fullname : data.fullname,
            phone_number : data.phone_number
        }
      });


      res.status(200).json({message:"Create User Succusfully", isSuccess:true, createUser});
    

    } catch(error){
        console.log(error);
        res.status(500).json({Message:"something went wrong!", isSucces:false});
    }
} 


