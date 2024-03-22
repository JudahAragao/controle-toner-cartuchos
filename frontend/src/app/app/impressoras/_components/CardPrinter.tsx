import { Button } from "@/app/components/ui/button"
import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { ImpressoraComSetor } from "../types";
import axios from "axios";
import { useEffect, useState } from "react";

type CardPrinterData = {
  data: ImpressoraComSetor;
}

const fetchData = async (ip:string | null) => {
  const response = await axios.get(`http://localhost:3000/api/ping?ip=${ip}`);

  if (!response) return 'Status Error!';

  const responseData = response.data;
    return responseData.alive ? 'Online' : 'Offline'
};

export default function CardPrinter({data}:CardPrinterData) {
  const [status, setStatus] = useState('Carregando...')

  useEffect(() => {
    const interval = setInterval(async () => {
      const newStatus = await fetchData(data.ip);
      setStatus(newStatus);
    }, 5000); // Faz a requisição a cada 5 segundos

    // Limpa o intervalo quando o componente é desmontado
    return () => clearInterval(interval);
  }, [data.ip]);

  return (
    <Card className="w-full max-w-xs">
      <CardHeader className="pb-4">
        <CardTitle>{data.marca}</CardTitle>
        <CardDescription>{data.modelo}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center space-x-4">
          <div className="grid gap-1">
            <p className="text-sm font-medium">{data.setores?.sigla}</p>
          </div>
          <PrinterIcon className="w-6 h-6" />
          <div className="grid gap-1">
            <p className="text-sm font-medium">Status</p>
            <p className="text-lg font-medium">{status}</p>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="outline" size="sm">
            <RefreshCwIcon className="w-4 h-4 mr-3"/>
            Recarga
        </Button>
      </CardFooter>
    </Card>
  )
}

function PrinterIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="6 9 6 2 18 2 18 9" />
      <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
      <rect width="12" height="8" x="6" y="14" />
    </svg>
  )
}

function RefreshCwIcon(props:any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
        <path d="M21 3v5h-5" />
        <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
        <path d="M8 16H3v5" />
      </svg>
    )
  }