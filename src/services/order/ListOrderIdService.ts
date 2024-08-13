import prismaClient from "../../prisma";

interface OrderRequest {
    order_id: string;
}

class ListOrderIdService {
    async execute({ order_id }: OrderRequest){

        const order = await prismaClient.order.findUnique({
            where:{
                id: order_id
            }
        });

        return order;
    }
}

export { ListOrderIdService }