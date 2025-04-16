import express from 'express';
import { router } from './routes'

const server = express();

server: server.use(express.json());
server.use(router);


export { server };