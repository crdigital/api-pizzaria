import { Request, Response } from 'express';
import { UpdateOrderService } from '../../services/order/UpdateOrderservice';

class UpdateOrderController {
    async handle(req: Request, res: Response){

        const { order_id, name, table } = req.body;
        
        const updateOrderService = new UpdateOrderService();

        const order = await updateOrderService.execute({
            order_id,
            name,
            table
        });

        return res.json(order);
    }
}

export { UpdateOrderController }