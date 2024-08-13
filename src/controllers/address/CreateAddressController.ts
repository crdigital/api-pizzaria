import { Request, Response } from 'express';
import { CreateAddressService } from '../../services/address/CreateAddressService';

class CreateAddressController {
    async handle(req: Request, res: Response){

        const { street, number, neighborhood, state, city, complement, client_id } = req.body;

        const createAddressService = new CreateAddressService();

        const address = await createAddressService.execute({
            street,
            number,
            neighborhood,
            state,
            city,
            complement,
            client_id
        });

        return res.json(address);
    }
}

export { CreateAddressController }