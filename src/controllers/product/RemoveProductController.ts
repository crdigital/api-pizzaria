import { Request, Response } from 'express';
import { RemoveProductService } from '../../services/product/RemoveProductService';

class RemoveProductController {
    async handle(req: Request, res: Response){

        const id = req.query.id as string;

        const removeProductService = new RemoveProductService();

        const product = await removeProductService.execute({id});

        return res.json(product);
    }
}

export { RemoveProductController }