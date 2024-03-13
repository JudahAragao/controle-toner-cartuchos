import {
  DashboardPage,
  DashboardPageHeader,
  DashboardPageHeaderTitle,
  DashboardPageMain,
} from '@/components/dashboard/page'
import api from '@/services/api'
import { auth } from '@/services/auth'

async function getImpressoras() {

  const session = (await auth()) as { sessionToken?: string };
  const sessionToken = session.sessionToken

  try {
    const response = await api.get('/impressoras', {
      headers: {
        Authorization: sessionToken,
      },
    });

    return response.data;
  } catch (error) {
    console.error('Erro ao obter dados:', error);
    throw error;
  }

}

export default async function Page() {

  const {impressoras} = await getImpressoras()

  return (
    <DashboardPage>
      <DashboardPageHeader>
        <DashboardPageHeaderTitle>Impressoras</DashboardPageHeaderTitle>
      </DashboardPageHeader>
      <DashboardPageMain>
        <h1>Impressoras</h1>
        {
          impressoras && impressoras?.map((impressora:any) => (
            <p>{impressora.marca}</p>
          ))
        }
      </DashboardPageMain>
    </DashboardPage>
  )
}

// export const getServerSideProps: GetServerSideProps<Props> = async() => {
//   try {
//     const response: AxiosResponse<any> = await api.get('/impressoras')
//     const data = response.data
//     return {
//       props: {
//         data,
//       },
//     };
//   } catch (error) {
//     console.error('Error fetching data:', error);

//     return {
//       redirect: {
//         destination: '/error',
//         permanent: false,
//       },
//     };
//   }
// }