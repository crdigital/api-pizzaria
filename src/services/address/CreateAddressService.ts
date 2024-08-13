import { PrismaClient } from "@prisma/client";
import prismaClient from "../../prisma";

interface AddressRequest {
    street: string;
    number: string;
    neighborhood: string;
    state: string;
    city: string;
    complement?: string;
    client_id: string;
}

class CreateAddressService {
    async execute({ 
        street, 
        number,
        neighborhood,
        state,
        city,
        complement,
        client_id  
    }: AddressRequest){

        const address = await prismaClient.address.create({
            data:{
                street,
                number,
                neighborhood,
                state,
                city,
                complement,
                client_id
            }
        });

        return address;
    }
}

export { CreateAddressService }