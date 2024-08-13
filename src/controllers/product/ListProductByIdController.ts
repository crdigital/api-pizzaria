import { Request, Response } from 'express';
import { ListProductByIdService } from '../../services/product/ListProductByIdService';

class ListProductByIdController {

    async handle(req: Request, res: Response){

        const id = req.query.id as string;

        const listProductByIdService = new ListProductByIdService();

        const product = await listProductByIdService.execute({
            id
        });

        return res.json(product);
    }
}

export { ListProductByIdController }