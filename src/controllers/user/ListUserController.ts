import { Request, Response } from 'express';
import { ListUserService } from '../../services/user/ListUserService';

class ListUserController {
    async handle(req: Request, res: Response){
        const userList = new ListUserService();
        const users = await userList.execute();
        
        return res.json(users);
    }
}

export { ListUserController }