import prismaClient from "../../prisma";

interface ClientRequest {
    name: string;
}

class ListClientByNameService {
    async execute({ name }: ClientRequest){

        const client = await prismaClient.client.findFirst({
            where:{
                name: name
            }        
        });

        return client;
    }
}

export { ListClientByNameService }