import { prisma} from '../lib/prisma'
import { ILogin, IRegister } from "../../types/user";
import { Request, Response } from "express";
import  argon2  from 'argon2'
import { generateToken } from '../../helpers/jwt';
import { AuthRequest } from '../../types/request';


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
            phone_number : data.phone_number,
            fullname : data.fullname,
           
           
        }
      });


      res.status(200).json({message:"Create User Succusfully", isSuccess:true, createUser});
    

    } catch(error){
        console.log(error);
        res.status(500).json({Message:"something went wrong!", isSucces:false});
    }
} 

export const getAllUsers = async (req: Request, res: Response) => {
  const users = await prisma.users.findMany({
    select: {
      id: true,
      fullname: true,
      email: true,
      phone_number: true,
      last_login: true,
      created_at: true,
      updated_at: true,

      // ❌ ha soo celin password
    }
  });

  res.json(users);
};


export const loginUser = async (req: Request, res: Response) =>{
  try{
      const data : ILogin = req.body;
     
        // check if user exists
        const user = await prisma.users.findUnique({
            where: {
                email : data.email.toLowerCase(),
            }
           
        });
         if(!user){
                res.status(404).json({
                    isSuccess: false,
                    message: 'correct email or password!',
                });
                return;
            }

        // verify password

 const isPasswordCorrect = await argon2.verify(user.password, data.password);

 if(!isPasswordCorrect){
    res.status(404).json({
        isSuccess: false,
        message: 'correct email or password!',
    });
    return;
    
 }

//  const {password, last_login, ...rest} = user;
 const token =  generateToken(user.id);
  
 res.status(200).json({
    isSuccess: true,
    message: 'Login successful!',
    user,
    token: token,
  });


  }
  catch (error) {
    console.log(error);
    res.status(500).json({
      isSuccess: false,
      message: 'Something went wrong!',
    });
  }
}




export const whoami = async (req: AuthRequest, res: Response) => {
  try {
    // 1️⃣ Hubi userId
    if (!req.userId) {
      return res.status(401).json({
        isSuccess: false,
        message: "Unauthorized",
      });
    }

    // 2️⃣ Raadi user (password ha soo celin)
    const user = await prisma.users.findUnique({
      where: {
        id: req.userId,
      },
      select: {
        id: true,
        email: true,
        fullname: true,
        phone_number: true,
     
      },
    });

    if (!user) {
      return res.status(404).json({
        isSuccess: false,
        message: "User not found",
      });
    }

    // 3️⃣ Response sax ah
    return res.status(200).json({
      isSuccess: true,
      message: "User fetched successfully",
      user,
    });

  } catch (error) {
    console.error(error);
    return res.status(500).json({
      isSuccess: false,
      message: "Something went wrong!",
    });
  }
};


