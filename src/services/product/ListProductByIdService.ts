import prismaClient from "../../prisma";

interface ProductRequest {
    id: string;
}

class ListProductByIdService {
    async execute({ id }: ProductRequest){

        const product = await prismaClient.product.findUnique({
            where:{
                id: id
            },
            select:{
                id: true,
                name: true,
                price: true,
                description:true,
                banner: true,
                category_id: true,
                category:{
                    select:{
                        id: true,
                        name: true
                    }
                }
            }
        });

        return product;
    }
}

export { ListProductByIdService }