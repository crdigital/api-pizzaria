import prismaClient from "../../prisma";

interface OrderItemProps {
    order_id: string;
}

class ListOrderItemService {
    async execute({ order_id }: OrderItemProps){

        const items = await prismaClient.item.findMany({
            where:{
                order_id: order_id
            },
            select:{
                id:true,
                product_id:true,
                product:{
                    select:{
                        name:true
                    }
                },
                amount:true
            }
        });

        return items;
    }
}

export { ListOrderItemService }