import prismaClient from "../../prisma";

interface CategoryRequest {
    id: string;
}

class RemoveCategoryService {
    async execute({ id }: CategoryRequest){

        const categoryProductsExists = await prismaClient.product.findFirst({
            where:{
                category_id: id
            }
        });

        if(categoryProductsExists){
            throw new Error('Existem produtos inseridos nesta categoria! Remova os produtos primeiro para excluir a categoria.');
        }


        const category = await prismaClient.category.delete({
            where:{
                id
            }
        });

        return category;
    }
}

export { RemoveCategoryService }