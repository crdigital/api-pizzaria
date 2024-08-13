import { Request, Response } from 'express';
import { RemoveCategoryService } from '../../services/category/RemoveCategoryService';

class RemoveCategoryController {

    async handle(req: Request, res: Response){

        const id = req.query.id as string;

        const remoceCategoryService = new RemoveCategoryService();

        const category = await remoceCategoryService.execute({ id });

        return res.json(category);
    }
}

export { RemoveCategoryController }