import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';
import cors from 'cors';
import path from 'path';

import { router } from './routes';

const app = express();

app.use(express.json());
app.use(cors());

app.use(router);

// middleware para liberar o acesso aos arquivos da pasta tmp para o frontend
app.use(
    '/files',
    express.static(path.resolve(__dirname, '..', 'tmp'))
);

// configurando o middleware de erros
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof Error) {
        return res.status(400).json({
            error: err.message
        });
    }

    return res.status(500).json({
        status: 'error',
        message: 'Internal server error.'
    });

    next();
});

const port = 3333;

app.listen(port, () => console.log(`Servidor rodando na porta 3333...`));