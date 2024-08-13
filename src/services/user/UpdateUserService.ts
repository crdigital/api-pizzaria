import prismaClient from "../../prisma";
import { hashSync } from 'bcryptjs';


interface UserRequest {
    user_id: string;
    name: string;
    email:string;
    password: string;
    access_level: string;
    changePassword: boolean;
}

class UpdateUserService {
    async execute({ user_id, name, email, password, access_level, changePassword }: UserRequest){       
        
        const userExists = await prismaClient.user.findFirst({
            where:{
                id: user_id
            }
        });

        if(!userExists){
            throw new Error('Usuário inexistente.');
        }
                
        const passwordHash = hashSync(password, 8);

        changePassword ? password = passwordHash : password;

        const user = await prismaClient.user.update({
            where:{
                id: user_id
            },
            data:{
                name, 
                email, 
                password,
                access_level
            },
            select:{
                name:true,
                email: true,
                access_level:true
            }
        });

        return user;
    }
}

export { UpdateUserService }