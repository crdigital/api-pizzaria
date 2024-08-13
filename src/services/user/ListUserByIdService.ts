import prismaClient from "../../prisma";

interface UserRequest {
    id: string;
}

class ListUserByIdService {

    async execute({id}: UserRequest){
        
        const user = await prismaClient.user.findUnique({
            where:{
                id: id
            },
            select:{
                id: true,
                name: true,
                email: true,
                password: true,
                access_level: true
            }
        });

        return user;
    }
}

export { ListUserByIdService }