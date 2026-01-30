export interface IRegister{
    email: string;
    password: string; 
    fullname: string;
    password_confirm: string;
    phone_number: string;

}

export interface ILogin{
    email: string;
    password: string;
}