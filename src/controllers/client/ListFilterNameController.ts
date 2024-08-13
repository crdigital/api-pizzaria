import { Request, Response } from 'express';
import { ListFilterNameService } from '../../services/client/ListFilterNameService';

class ListFilterNameController {

    async handle(req: Request, res: Response){

        const name = req.query.name as string;

        const listFilterNameservice = new ListFilterNameService();

        const nameClient = await listFilterNameservice.execute({name});

        return res.json(nameClient);

    }
}

export { ListFilterNameController }