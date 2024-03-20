import {
  DashboardPage,
  DashboardPageHeader,
  DashboardPageHeaderTitle,
  DashboardPageMain,
} from '@/components/dashboard/page'
import { getPrinterWithSector } from './actions'
import CardPrinterList from './_components/CardPrinterList'

export default async function Page() {

  const impressoras = await getPrinterWithSector()

  return (
    <DashboardPage>
      <DashboardPageHeader>
        <DashboardPageHeaderTitle>Impressoras</DashboardPageHeaderTitle>
      </DashboardPageHeader>
      <DashboardPageMain>
        
        <CardPrinterList data={impressoras}/>

      </DashboardPageMain>
    </DashboardPage>
  )
}
