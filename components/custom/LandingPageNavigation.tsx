'use client'

import { NavigationMenu, NavigationMenuList } from '@radix-ui/react-navigation-menu'
import { LogOut, Moon, Sun } from 'lucide-react'
import { Button } from '../ui/button'
import Link from 'next/link'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '../ui/dropdown-menu'
import Logo from './Logo'
import { ThemeBtn } from './ThemeBtn'

const LandingPageNavigation = ({ isAuth = false }) => {
  const buttonList = [{ title: 'Features' }, { title: 'Pricing' }, { title: 'Resources' }]
  const buttonAuth = [
    { title: 'Log in', variant: 'ghost', text: undefined, navigate: '/auth/login' },
    { title: 'Sign up', variant: 'primary', text: 'text-white', navigate: '/auth/signup' }
  ]

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
          {!isAuth ? (
            <div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Avatar>
                    <AvatarImage sizes='400' src='https://github.com/shadcn.png' />
                    <AvatarFallback>{}</AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent className='py-3 mx-5 flex flex-col items-center'>
                  <DropdownMenuLabel className='font-bold text-lg'>asdads</DropdownMenuLabel>
                  <DropdownMenuLabel>Email: andyhoaiphong2003@gmail.com</DropdownMenuLabel>

                  <DropdownMenuSeparator className='w-full' />
                  <ThemeBtn />
                  <Button className='w-full m-1' variant='destructive'>
                    <LogOut /> Logout
                  </Button>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          ) : (
            <div className='flex gap-2'>
              <ThemeBtn />
              <div>
                {buttonAuth.map((btn, i) => (
                  <Button
                    asChild
                    className={`${btn.text} font-bold`}
                    size='lg'
                    variant={
                      btn.variant as
                        | 'ghost'
                        | 'link'
                        | 'default'
                        | 'destructive'
                        | 'outline'
                        | 'secondary'
                        | null
                        | undefined
                    }
                    key={i}
                  >
                    <Link href={btn.navigate}>{btn.title}</Link>
                  </Button>
                ))}
              </div>
            </div>
          )}
        </div>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

export default LandingPageNavigation
