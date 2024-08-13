
import prismaClient from "../../prisma";
import { hashSync } from 'bcryptjs';

interface UserRequest {
    name: string;
    email: string;
    password: string;
    access_level: string;
}

class CreateUserService {
    async execute({ name, email, password, access_level }: UserRequest){

        if(!email){
            throw new Error("E-mail é requerido para realizar o cadastro.");
        }

        const userAlreadExists = await prismaClient.user.findFirst({
            where:{ email: email }
        });
        
        if(userAlreadExists){
            throw new Error(`Já existe usuário cadastrado com este E-mail: ${email}`);
        }

        const passwordHash = hashSync(password, 8);

       const user = await prismaClient.user.create({
        data:{
            name: name, 
            email: email,
            password: passwordHash,
            access_level: access_level
        },
        select:{
            name: true,
            email: true,
            access_level:true
        }
       });

        return user;
    }
}

export { CreateUserService };