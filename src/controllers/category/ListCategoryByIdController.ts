import { Request, Response } from 'express';
import { ListCategoryByIdService } from '../../services/category/ListCategoryByIdService';

class ListCategoryByIdController {

    async handle(req: Request, res: Response){

        const id = req.query.id as string;

        const listCategoryByIdService = new ListCategoryByIdService();

        const category = await listCategoryByIdService.execute({
            id
        });

        return res.json(category);
    }
}

export { ListCategoryByIdController }