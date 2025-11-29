'use client'

import { NavigationMenu, NavigationMenuList } from '@radix-ui/react-navigation-menu'
import { Button } from '../ui/button'
import Logo from './Logo'
import { ThemeBtn } from './ThemeBtn'
import { Session } from 'next-auth'
import AuthBtn from './AuthBtn'
import ProfileDropdown from './ProfileDropdown'

const LandingPageNavigation = ({ session }: { session: Session | null }) => {
  const buttonList = [{ title: 'Features' }, { title: 'Pricing' }, { title: 'Resources' }]

  return (
    <NavigationMenu className='shadow-sm'>
      <NavigationMenuList className='flex justify-between p-3 px-5'>
        <Logo />
        <div className='flex items-center gap-3 justify-center'>
          {buttonList.map((btn, i) => (
            <Button size='lg' className='font-bold' variant='ghost' key={i}>
              {btn.title}
            </Button>
          ))}
        </div>
        <div className='flex items-center gap-3 justify-center'>
          {session ? (
            <ProfileDropdown email={session.user?.email} image={session.user?.image} name={session.user?.name} />
          ) : (
            <div className='flex gap-2'>
              <ThemeBtn />
              <AuthBtn />
            </div>
          )}
        </div>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

export default LandingPageNavigation
