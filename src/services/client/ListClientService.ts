import prismaClient from "../../prisma";

class ListClientService {
    async execute(){
        const clients = await prismaClient.client.findMany({
            select:{
                name: true,
                phone: true,
                addresses:true
            },
            orderBy: {
                name: 'asc'
            },
        });

        return clients;
    }
}

export { ListClientService }