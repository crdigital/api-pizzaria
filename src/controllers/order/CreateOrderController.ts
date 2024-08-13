import { Request, Response } from 'express';
import { CreateOrderService } from '../../services/order/CreateOrderService';

class CreateOrderController {
    async handle(req: Request, res: Response) {

        const { table, name_client } = req.body;

        const date = new Date();
        const options = { timeZone: 'America/Sao_Paulo' };
        const time = date.toLocaleString('pt-BR', options);

        const orderService = new CreateOrderService();

        const order = await orderService.execute({
            table,
            name_client,
            time
        });

        return res.json(order);        
    }
}

export { CreateOrderController }