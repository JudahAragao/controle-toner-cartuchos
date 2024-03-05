import 'reflect-metadata';
import * as dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import { useExpressServer } from 'routing-controllers';
import TonerController from './controllers/TonerController';
import StatusTonerController from './controllers/StatusTonerController';
import AbastecimentoController from './controllers/AbastecimentoController';
import ImpressoraController from './controllers/ImpressoraController';
import SetorController from './controllers/SetorController';

dotenv.config();

const app = express()

app.use(cors())
app.use(express.json())

useExpressServer(app, {
    controllers: 
        [
            StatusTonerController,
            TonerController, 
            AbastecimentoController,
            ImpressoraController,
            SetorController
        ],
    routePrefix: '/api'
});

const PORT = process.env.PORT || 5500
app.listen(PORT, ()=> {
    console.log(`Servir is running on port ${PORT}`)
});