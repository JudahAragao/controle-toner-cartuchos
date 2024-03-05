import 'reflect-metadata';
import { JsonController, Req, Res, Get, Post, Put, Delete, Param, Body, UseBefore } from 'routing-controllers';
import ImpressoraService from '../services/ImpressoraService';
import { Data } from '../types/ImpressoraTypes';
import authenticateToken from '../middlewares/authenticationToken';

@JsonController("/toner")
@UseBefore(authenticateToken)
export default class ImpressoraController {

    private impressoraService = new ImpressoraService
    
    @Get('/')
    public async consultarTodos(@Req() request: any, @Res() response: any) {
        try {
            const datas = await this.impressoraService.getAll()
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
            const recentData = await this.impressoraService.insert(data)
            return await response.status(200).json(recentData);
        } catch (error) {
            console.error('Ocorreu um erro:', error);
            return error;
        }
    }

    @Put('/:id')
    public async alterarDadoCartuchoToner(@Param('id') id: string, @Body() data:Data, @Res() response: any) {
        try {
            const recentData = await this.impressoraService.update(id, data)
            return response.status(200).json(recentData)
        } catch (error) {
            console.error('Ocorreu um erro:', error);
            return response.status(500).json({ error: 'Erro interno do servidor' });
        }
    }

    @Delete('/:id')
    public async deletarDadoCartuchoToner(@Param('id') id: string, @Res() response: any) {
        try {
            await this.impressoraService.delete(id)
            return response.status(200).json({"msg": "Item deletado com sucesso!"})
        } catch (error) {
            console.error('Ocorreu um erro:', error);
            return response.status(500).json({ error: 'Erro interno do servidor' });
        }
    }

}