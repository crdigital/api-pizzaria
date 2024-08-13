import { Request, Response } from 'express';
import { ListOrderIdService } from '../../services/order/ListOrderIdService';

class ListOrderIdController {
    async handle(req: Request, res: Response){

        const order_id = req.query.order_id as string;

        const listOrderIdService = new ListOrderIdService();

        const order = await listOrderIdService.execute({
            order_id
        });

        return res.json(order);
    }
}

export { ListOrderIdController }