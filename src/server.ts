//aqui está o servidor da aplicação

import express, { Request, Response} from 'express';
import path from 'path';
import dotenv from 'dotenv';
import {mongoConnect} from './dataBase/mongo';
import mainRoutes from './routes/produtoRoutes';

dotenv.config();
mongoConnect();
const server = express(); 

server.use(express.static(path.join(__dirname,'../public')));
server.use(express.urlencoded({extended:true}))



server.use(mainRoutes);
server.use((req:Request, res:Response)=>{//404 para quando não por encontrado a pagina
    res.status(404)
    res.json({error:'Endpoit não enontrado'})
})

server.listen(process.env.PORT || 3000)