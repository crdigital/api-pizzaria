import prismaClient from "../../prisma";

interface ClientRequest {
    name: string;
    phone?: string;
}

class CreateClientService {
    async execute({name, phone}: ClientRequest){

        const client = await prismaClient.client.create({
            data:{
                name: name,
                phone: phone
            },
            select:{
                name: true,
                phone: true
            }
        });

        return client;
    }
}

export { CreateClientService }