import prismaClient from "../../prisma";

interface UserRequest {
    user_id: string;
}

class DeleteUserService {
    async execute({ user_id }: UserRequest){

        const user = await prismaClient.user.delete({ 
            where:{
                id: user_id
            },
            select:{
                id: true,
                name: true,
                email: true
            }
        });

        return user;
    }
}

export { DeleteUserService }