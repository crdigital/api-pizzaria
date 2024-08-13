import { Request, Response  } from 'express';
import { ListOrderItemService } from '../../services/order/ListOrderItemService';

class ListOrderItemConroller {
    async handle( req: Request, res: Response ){

        const order_id = req.query.order_id as string;

        const listOrderItemService = new ListOrderItemService();

        const items = await listOrderItemService.execute({ order_id });

        return res.json(items);
    }
}

export { ListOrderItemConroller }