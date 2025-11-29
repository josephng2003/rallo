'use client'

import { NavigationMenu, NavigationMenuList } from '@radix-ui/react-navigation-menu'
import Logo from './Logo'
import ProfileDropdown from './ProfileDropdown'
import { useSession } from 'next-auth/react'

const BoardNavigation = () => {
  const { data: session } = useSession()

  return (
    <NavigationMenu className='shadow-sm'>
      <NavigationMenuList className='flex justify-between p-3 px-5'>
        <Logo />
        <div className='flex items-center gap-3 justify-center'>
          {session && (
            <ProfileDropdown email={session.user?.email} image={session.user?.image} name={session.user?.name} />
          )}
        </div>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

export default BoardNavigation
