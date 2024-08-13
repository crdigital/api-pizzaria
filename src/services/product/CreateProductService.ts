import prismaClient from "../../prisma";

interface ProductRequest {
    name: string;
    price: string;
    description: string;
    banner: string;
    category_id:string;
}

class CreateProductService {
    async execute({ name, price, description, banner,category_id}: ProductRequest){


        if(name === '' || category_id === ''){
            throw new Error("name and category_id fields is required.");
        }

        const product = await prismaClient.product.create({
            data:{
                name: name,
                price: price,
                description: description,
                banner: banner,
                category_id: category_id
            },
            select:{
                name:true,
                price: true,
                description: true,
                banner: true,
                category: {
                    select:{
                        name: true
                    }
                }
            }
        });

        return product;



    }
}

export { CreateProductService };