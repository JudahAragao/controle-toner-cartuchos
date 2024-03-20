// import { NextApiRequest, NextApiResponse } from 'next';
// import ping from 'ping';



// export async function getHandler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method === 'GET') {
//     const { ip } = req.query;

//     try {
//       if (typeof ip !== 'string') {
//         throw new Error('IP inválido');
//       }

//       const result = await ping.promise.probe(ip);
//       res.status(200).json({ alive: result.alive });
//     } catch (error) {
//       res.status(500).json({ error: 'Erro ao fazer ping' });
//     }
//   } else {
//     res.status(405).json({ error: 'Método não permitido' });
//   }
// }
// export const dynamic = 'force-dynamic'
// import { NextApiRequest, NextApiResponse } from 'next';
// import { useSearchParams } from 'next/navigation';
// import ping from 'ping';

// export async function GET(req: NextApiRequest, res: NextApiResponse) {
//   const searchParams = useSearchParams()
//   const ip = searchParams.get('ip')


//   try {
//     if (typeof ip !== 'string') {
//       throw new Error('IP inválido');
//     }
    
//     const result = await ping.promise.probe(ip);
//       return res.status(200).json({ alive: result.alive });
//     } catch (error) {
//       return res.status(404).json({ error: 'Erro ao fazer ping' });
//     }
// }

import { NextRequest, NextResponse } from "next/server";
import ping from 'ping';

export async function GET(req: NextRequest, res: NextResponse) {
  const url = new URL(req.url)
  const searchParams = new URLSearchParams(url.searchParams)
  const ip = searchParams.get('ip')

  if (ip !== null) {
      try {
        if (typeof ip !== 'string') {
          throw new Error('IP inválido');
        }
        
        const result = await ping.promise.probe(ip);
        return Response.json({ alive: result.alive });
        
      } catch (error) {
        return Response.json({ error: 'Erro ao fazer ping' });
      }

  }
  
}