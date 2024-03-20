'use client'

import CardPrinter from './CardPrinter';
import { ErrorMessage } from '@/types/error-message';
import { ImpressoraComSetor } from '../types';

type CardPrinterData = {
    data: ImpressoraComSetor[] | ErrorMessage;
}

export default function CardPrinterList({data}:CardPrinterData){

    if ('error' in data) {
        return <div>Ocorreu um erro: {data.error}</div>;
    }

    if (Array.isArray(data)) {
        return (
            <div className='flex gap-4'>
                {data.map((printerData, index) => (
                    <CardPrinter key={index} data={printerData} />
                ))}
            </div>
        );
    }

    return <div>Sem dados de impressora!</div>;
}