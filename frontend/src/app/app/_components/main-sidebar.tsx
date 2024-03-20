'use client'

import {
  DashboardSidebar,
  DashboardSidebarHeader,
  DashboardSidebarMain,
  DashboardSidebarNav,
  DashboardSidebarNavMain,
  DashboardSidebarNavLink,
  DashboardSidebarNavHeader,
  DashboardSidebarNavHeaderTitle,
  DashboardSidebarFooter,
} from '@/components/dashboard/sidebar'
import { usePathname } from 'next/navigation'
import { ArchiveIcon, HomeIcon, LayersIcon, MixerVerticalIcon, ReaderIcon } from '@radix-ui/react-icons'
import { UserDropdown } from './user-dropdown'
import { Logo } from '@/ui/logo'
import { Session } from 'next-auth'

type MainSidebarProps = {
  user: Session['user']
}

export function MainSidebar({ user }: MainSidebarProps) {
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <DashboardSidebar>
      <DashboardSidebarHeader>
        <Logo />
      </DashboardSidebarHeader>
      <DashboardSidebarMain className="flex flex-col flex-grow">
        <DashboardSidebarNav>
          <DashboardSidebarNavMain>

            <DashboardSidebarNavLink 
              href="/app" 
              active={isActive('/app')}
            >
              <HomeIcon className="w-3 h-3 mr-3" />
              Dashboard
            </DashboardSidebarNavLink>

            <DashboardSidebarNavLink 
              href="/app/impressoras"
              active={isActive('/app/impressoras')}
            >
              <ReaderIcon className="w-3 h-3 mr-3" />
              Impressoras
            </DashboardSidebarNavLink>

            <DashboardSidebarNavLink 
              href="/app/cartuchos"
              active={isActive('/app/cartuchos')}
            >
              <ArchiveIcon className="w-3 h-3 mr-3" />
              Cartuchos & Toners
            </DashboardSidebarNavLink>

            <DashboardSidebarNavLink 
              href="/app/setores"
              active={isActive('/app/setores')}
            >
              <LayersIcon className="w-3 h-3 mr-3" />
              Setores
            </DashboardSidebarNavLink>
            
            <DashboardSidebarNavLink
              href="/app/settings"
              active={isActive('/app/settings')}
            >
              <MixerVerticalIcon className="w-3 h-3 mr-3" />
              Configurações
            </DashboardSidebarNavLink>

          </DashboardSidebarNavMain>
        </DashboardSidebarNav>

        <DashboardSidebarNav className="mt-auto">
          <DashboardSidebarNavHeader>
            <DashboardSidebarNavHeaderTitle>
              Links extras
            </DashboardSidebarNavHeaderTitle>
          </DashboardSidebarNavHeader>
          <DashboardSidebarNavMain>
            <DashboardSidebarNavLink href="/">
              Precisa de ajuda?
            </DashboardSidebarNavLink>
            <DashboardSidebarNavLink href="/">Site</DashboardSidebarNavLink>
          </DashboardSidebarNavMain>
        </DashboardSidebarNav>
      </DashboardSidebarMain>
      <DashboardSidebarFooter>
        <UserDropdown user={user} />
      </DashboardSidebarFooter>
    </DashboardSidebar>
  )
}
