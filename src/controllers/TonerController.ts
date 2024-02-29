import 'reflect-metadata';
import { JsonController, Req, Res, Get, Post, Param, Body } from 'routing-controllers';
import TonerService from '../services/TonerService';
import { Data } from '../types/TonerTypes';

@JsonController("/toner")
export default class TonerController {

    private tonerService = new TonerService
    
    @Get('/')
    public async consultarTodos(@Req() request: any, @Res() response: any) {
        try {
            const datas = await this.tonerService.getAll()
            return response.status(200).json(datas);
        } catch (error) {
            // Tratamento de erro
            console.error('Ocorreu um erro:', error);
            return error;
        }
    }

    @Post('/')
    public async cadastrarCartuchoToner(@Body() data:Data, @Res() response: any){
        try {
            const recentData = await this.tonerService.insert(data)
            return await response.status(200).json(recentData);
        } catch (error) {
            console.error('Ocorreu um erro:', error);
            return error;
        }
    }

}