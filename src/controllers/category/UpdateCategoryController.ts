import { Request, Response } from 'express';
import { UpdateCategoryService } from '../../services/category/UpdateCategoryService';

class UpdateCategoryController {
    async handle(req: Request, res: Response){
        const { category_id, name } = req.body;

        const categoryService = new UpdateCategoryService();

        const category = await categoryService.execute({
            category_id,
            name
        });

        return res.json(category);
    }
}

export { UpdateCategoryController }