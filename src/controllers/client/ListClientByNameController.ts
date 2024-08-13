import { Request, Response } from 'express';
import { ListClientByNameService } from '../../services/client/ListClientByNameService';

class ListClientByNameController {
    async handle(req: Request, res: Response){

        const  name = req.query.name as string;

        const listClientByNameService = new ListClientByNameService();

        const client = await listClientByNameService.execute({name});

        return res.json(client);
    }
}

export { ListClientByNameController }