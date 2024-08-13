import prismaClient from "../../prisma";

interface OrdeRequest {
    order_id:string;
}

class RemoveOrderService {
    async execute({ order_id }: OrdeRequest){

        const order = await prismaClient.order.delete({
            where:{
                id: order_id
            },
            select:{
                id:true,
                table: true,
                name_client: true
            }
        });

        return order;
    }
}

export { RemoveOrderService }