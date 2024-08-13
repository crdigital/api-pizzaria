import prismaClient from "../../prisma";

interface CategoryProps {
    category_id: string;
    name: string;
}

class UpdateCategoryService {
    
    async execute({ category_id, name }: CategoryProps){

        const categoryExists = await prismaClient.category.findUnique({
            where:{
                id: category_id
            }
        });

        if(!categoryExists){
            throw new Error("Categoria não encontrada!");
        }

        const category = await prismaClient.category.update({
            where:{
                id: category_id
            },
            data:{
                name: name
            },
            select:{
                id:true,
                name:true
            }
        });

        return category;

    }
}

export { UpdateCategoryService }