import prismaClient from "../../prisma";

class ListUserLevelAccessService {
    async execute(access_level: string){
        const users = await prismaClient.user.findMany({
            where:{
                access_level: access_level
            },
            orderBy:{
                name: 'asc'
            },
            select:{
                id:true,
                name: true,
                email: true,
                access_level: true
            }
        });

        return users;
    }
}

export { ListUserLevelAccessService }