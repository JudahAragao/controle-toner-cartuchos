import { auth } from '@/services/auth'
import { prisma } from '@/services/database'
import { Impressoras, Setores } from '@prisma/client'
import { ErrorMessage } from '@/types/error-message'
import { ImpressoraComSetor } from './types'
  
export const getPrinter = async (): Promise<Impressoras[] | ErrorMessage> => {

    const session = await auth()

    if (!session?.user?.id) {
        return {
          error: 'Not authorized',
          data: null,
        }
    }

    const impressoras = await prisma.impressoras.findMany()
    
    return impressoras
}

export const getPrinterWithSector = async ():Promise<ImpressoraComSetor[] | ErrorMessage> => {
  
  const session = await auth()

  if (!session?.user?.id) {
    return {
      error: 'Not authorized',
      data: null,
    }
  }
  
  const impressorasComSetores = await prisma.impressoras.findMany({
    include: {
      setores: true, // Alterado de setor para setores
    },
  });

  // Retorna diretamente o resultado da consulta
  return impressorasComSetores;
}