import { Request, Response } from 'express';
import { CreateClientService } from '../../services/client/CreateClientService';

class CreateClientController {
    async handle(req: Request, res: Response){

        const { name, phone } = req.body;

        const createClientService = new CreateClientService();

        const client = await createClientService.execute({
            name,
            phone
        });

        return res.json(client);
    } 
}

export { CreateClientController }