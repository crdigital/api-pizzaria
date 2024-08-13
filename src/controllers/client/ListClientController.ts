import { Request, Response } from 'express';
import { ListClientService } from '../../services/client/ListClientService';

class ListClientController {
    async handle(req: Request, res: Response){
        
        const listClientService = new ListClientService();

        const clients = await listClientService.execute();

        return res.json(clients);
    }
}

export { ListClientController }