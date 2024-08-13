import { Request, Response } from 'express';
import { UpdateProductService } from '../../services/product/UpdateProductService';
import fs from 'fs';
import { resolve } from 'path';

class UpdateProductImageController {

    async handle(req: Request, res: Response){  

        const { id, name, price, description, oldbanner, category_id } = req.body;    
        
        if(!req.file){
            throw new Error("file is required.");
        }

        const { originalname, filename: banner } = req.file;

         // removendo a imagem antiga do produto
         fs.unlink(resolve(__dirname, '..','..','..','tmp') + '/' + oldbanner , (err) => {
            if (err) {
                console.log(`Erro ao deletar '${oldbanner}' `);                
            }
            console.log(`Arquivo '${oldbanner} deletado' `);
        });

        const updateProductService = new UpdateProductService();

        const productUpdate = await updateProductService.execute({
            id,
            name,
            price,
            description,
            banner,
            category_id
        });

        return res.json(productUpdate);
    }
}

export { UpdateProductImageController }