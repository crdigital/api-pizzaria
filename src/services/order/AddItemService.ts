import prismaClient from "../../prisma";

interface ItemRequest {
    amount: number;
    order_id: string;
    product_id: string;
} 

class AddItemService {
    async execute({ amount, order_id, product_id }: ItemRequest){

        const addItem = await prismaClient.item.create({
            data:{
                amount: amount,
                order_id: order_id,
                product_id: product_id 
            },
            select:{
                id:true,
                amount:true,
                order_id:true,
                product_id:true,
                order:{
                    select:{
                        id:true,
                        name_client:true,
                        table:true
                    }
                },
                product:{
                    select:{
                        name:true,
                        price:true,
                        description:true,
                        banner:true
                    }
                }
            }            
        });

        return addItem;
    }
}

export { AddItemService }