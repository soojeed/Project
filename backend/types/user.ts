import prisma from '@prisma/client';

const ROLE = prisma;

export interface IRegister{
    email: string;
    password: string;
    phone_number: string;
    fullname: string;
    password_confirm?: string;

}

export interface ILogin{
    email: string;
    password: string;
}