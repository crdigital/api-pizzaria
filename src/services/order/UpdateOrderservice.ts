import prismaClient from "../../prisma";

interface OrderRequest {
    order_id: string;
    name: string;
    table: number;
}

class UpdateOrderService {
    async execute({order_id, name, table}: OrderRequest){

        const order = prismaClient.order.update({
            where:{id: order_id},
            data:{
                name_client: name,
                table: table
            }
        });

        return order;
    }
}

export { UpdateOrderService }