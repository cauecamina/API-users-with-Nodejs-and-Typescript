import express, { Request, Response } from 'express';

const server = express();


// eslint-disable-next-line @typescript-eslint/no-empty-object-type, @typescript-eslint/no-unused-vars
interface Teste {
    
}

server.get('/', (req: Request, res: Response) => {
  res.send('Olá Dev');
});

export { server };