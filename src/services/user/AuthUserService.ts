import prismaClient from "../../prisma";
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

interface AuthRequest {
    email: string;
    password: string;
}

class AuthUserService {
    async execute({email,password}: AuthRequest){
        
        const user = await prismaClient.user.findFirst({
            where:{
                email: email
            }
        });
        
        if(!user){
            throw new Error("Usuário não encontrado.");
        }

        // verificar senha
        const passwordMatch = await compare(password, user.password );

        if(!passwordMatch){
            throw new Error("Senha inválida.");
        }

        // gerar o token JWT e devolver os dados do usuario como id, nome e email
        const token = sign(
            {
                name: user.name,
                email: user.email,
                access_level: user.access_level
            },
            process.env.JWT_SECRET,
            {
                subject: user.id,
                expiresIn: '30d'
            }
        );

        return { 
            id: user.id,
            name: user.name,
            email: user.email,
            access_level: user.access_level,                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
            token: token
        };
    }
}

export { AuthUserService };