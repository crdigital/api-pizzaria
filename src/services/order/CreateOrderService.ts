import prismaClient from "../../prisma";

interface OrderRequest {
    table: number;
    name_client: string;
    time: string;
}


class CreateOrderService {
    async execute({ table, name_client, time }: OrderRequest) {

        const order = await prismaClient.order.create({
            data: {
                table: table,
                name_client: name_client,
                time
            },
            select: {
                id: true,
                table: true,
                name_client: true,
                time: true
            }
        });

        return order;
    }
}

export { CreateOrderService }