import prismaClient from "../../prisma";

interface CategoryRequest {
    id: string;
}

class ListCategoryByIdService {

    async execute({ id }: CategoryRequest){

        const category = await prismaClient.category.findUnique({
            where:{
                id: id
            },
            select:{
                id: true,
                name: true
            }
        });

        return category;
    }
}

export { ListCategoryByIdService }