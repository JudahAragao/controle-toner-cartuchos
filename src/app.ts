import 'reflect-metadata';
import * as dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import { useExpressServer } from 'routing-controllers';
import TonerController from './controllers/TonerController';
import StatusTonerController from './controllers/StatusTonerController';

dotenv.config();

const app = express()

app.use(cors())
app.use(express.json())

useExpressServer(app, {
    controllers: [TonerController, StatusTonerController],
    routePrefix: '/api'
});

const PORT = process.env.PORT || 5500
app.listen(PORT, ()=> {
    console.log(`Servir is running on port ${PORT}`)
});