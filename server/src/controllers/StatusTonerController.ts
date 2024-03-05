import 'reflect-metadata';
import { JsonController, Req, Res, Get, Post, Put, Delete, Param, Body, UseBefore} from 'routing-controllers';
import { Data } from '../types/StatusTonerTypes';
import StatusTonerService from '../services/StatusTonerService';
import authenticateToken from '../middlewares/authenticationToken';

@JsonController("/status-toner")
@UseBefore(authenticateToken)
export default class StatusTonerController {

    private statusTonerService = new StatusTonerService
    
    @Get('/')
    public async consultarTodos(@Req() request: any, @Res() response: any) {
        try {
            const datas = await this.statusTonerService.getAll()
            return response.status(200).json(datas);
        } catch (error) {
            console.error('Ocorreu um erro:', error);
            return response.status(500).json({ error: 'Erro interno do servidor' });
        }
    }

    @Post('/')
    public async cadastrarCartuchoToner(@Body() data:Data, @Res() response: any) {
        try {
            const recentData = await this.statusTonerService.insert(data)
            return response.status(200).json(recentData);
        } catch (error) {
            console.error('Ocorreu um erro:', error);
            return response.status(500).json({ error: 'Erro interno do servidor' });
        }
    }

    @Put('/:id')
    public async alterarDadoCartuchoToner(@Param('id') id: string, @Body() data:Data, @Res() response: any) {
        try {
            const recentData = await this.statusTonerService.update(id, data)
            return response.status(200).json(recentData)
        } catch (error) {
            console.error('Ocorreu um erro:', error);
            return response.status(500).json({ error: 'Erro interno do servidor' });
        }
    }

    @Delete('/:id')
    public async deletarDadoCartuchoToner(@Param('id') id: string, @Res() response: any) {
        try {
            await this.statusTonerService.delete(id)
            return response.status(200).json({"msg": "Item deletado com sucesso!"})
        } catch (error) {
            console.error('Ocorreu um erro:', error);
            return response.status(500).json({ error: 'Erro interno do servidor' });
        }
    }

}