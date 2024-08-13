import prisma from "../../prisma";
import prismaClient from "../../prisma";

interface ClientRequest {
    name: string;
}

class ListFilterNameService {
    async execute({ name }: ClientRequest){

        const client = await prismaClient.client.findMany({
            where:{
                name:{
                    contains: name
                }
            },
            select:{
                id: true,
                name: true
            }
        });        

        return client
    }
}

export { ListFilterNameService }