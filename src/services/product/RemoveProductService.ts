
import prismaClient from "../../prisma";

interface ProductRequest {
    id: string;
}

class RemoveProductService {
    async execute({ id }: ProductRequest){

        const product = await prismaClient.product.delete({
            where:{
                id
            }
        });

        return product;
    }
}

export { RemoveProductService }