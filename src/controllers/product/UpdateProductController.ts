import { Request, Response } from 'express';
import { UpdateProductService } from '../../services/product/UpdateProductService';

class UpdateProductController {

    async handle(req: Request, res: Response){  

        const { id, name, price, description, banner, category_id} = req.body;
       

        const updateProductService = new UpdateProductService();

        const productUpdate = await updateProductService.execute({
            id,
            name,
            price,
            description,
            banner,
            category_id
        });

        return res.json(productUpdate);
    }
}

export { UpdateProductController }