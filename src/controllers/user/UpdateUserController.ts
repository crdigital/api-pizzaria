import { Request, Response } from 'express';
import { UpdateUserService } from '../../services/user/UpdateUserService';

class UpdateUserController {
    async handle(req: Request, res: Response){

        const { user_id, name, email, password, access_level, changePassword } = req.body; 

        const userUpdate = new UpdateUserService();

        const user = await userUpdate.execute({
            user_id,
            name,
            email,
            password,
            access_level,
            changePassword
        });

        return res.json(user);
    }
}

export { UpdateUserController }