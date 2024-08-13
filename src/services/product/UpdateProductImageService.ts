import prismaClient from "../../prisma";

interface ProductRequest {
    id:string;
    name: string;
    price: string;
    description: string;
    banner: string;
    category_id:string;
}

class UpdateProductImageService {

    async execute({ id, name, price, description, banner, category_id }: ProductRequest){

        const productExists = await prismaClient.product.findFirst({
            where:{
                id: id
            }
        });

        if(!productExists){
            throw new Error('Produto não encontrado');
        }

        const productUpdate = await prismaClient.product.update({
            where:{
                id:id
            },
            data:{
                name: name,
                price: price,
                description: description,
                banner: banner,
                category_id: category_id,
            }
        });

        return productUpdate;
    }
}

export { UpdateProductImageService }