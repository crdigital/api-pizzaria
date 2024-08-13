import prismaClient from "../../prisma";

class ListUserService {
    async execute(){
        const users = await prismaClient.user.findMany({
            select:{
                id:true,
                name: true,
                email:true,
                access_level: true
            }
        });

        return users;
    }
}

export { ListUserService }