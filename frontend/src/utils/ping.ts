import ping from 'ping';

export async function pingPrinter(ip: string | null): Promise<string | undefined> {
  try {
    if (ip) {
        const result = await ping.promise.probe(ip);
        return result.alive ? 'Online' : 'Offline';
    }
  } catch (error) {
    console.error('Erro ao fazer ping:', error);
    return 'Erro ao fazer ping';
  }
}