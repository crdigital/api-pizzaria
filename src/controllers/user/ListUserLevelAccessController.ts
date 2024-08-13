import { Request, Response } from 'express';
import { ListUserLevelAccessService } from '../../services/user/ListUserLevelAccessService';

class ListUserLevelAccessController {
    async handle(req: Request, res: Response){

        const { access_level } = req.body;

        const listUserAccessLevelService = new ListUserLevelAccessService();
        const users = await listUserAccessLevelService.execute(access_level);

        return res.json(users);
    }
}

export { ListUserLevelAccessController }