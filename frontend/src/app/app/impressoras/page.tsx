import {
  DashboardPage,
  DashboardPageHeader,
  DashboardPageHeaderNav,
  DashboardPageHeaderTitle,
  DashboardPageMain,
} from '@/components/dashboard/page'
import { getPrinterWithSector } from './actions'
import CardPrinterList from './_components/CardPrinterList'
import { Button } from '@/app/components/ui/button'
import { PlusIcon } from '@radix-ui/react-icons'

export default async function Page() {

  const impressoras = await getPrinterWithSector()

  return (
    <DashboardPage>
      <DashboardPageHeader className='flex items-center justify-between'>
        <DashboardPageHeaderTitle>Impressoras</DashboardPageHeaderTitle>
        <DashboardPageHeaderNav>
          <Button variant="outline" size="sm">
            <PlusIcon className="w-4 h-4 mr-3"/>
            Impressora
          </Button>
        </DashboardPageHeaderNav>
      </DashboardPageHeader>
      <DashboardPageMain>
        
        <CardPrinterList data={impressoras}/>

      </DashboardPageMain>
    </DashboardPage>
  )
}
