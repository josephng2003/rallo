import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '../ui/dropdown-menu'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { ThemeBtn } from './ThemeBtn'
import { Button } from '../ui/button'
import { LogOut } from 'lucide-react'
import { signOut } from 'next-auth/react'

const ProfileDropdown = ({
  image,
  name,
  email
}: {
  image: string | null | undefined
  name: string | null | undefined
  email: string | null | undefined
}) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar>
          <AvatarImage sizes='400' src={image || 'https://github.com/shadcn.png'} />
          <AvatarFallback>{name?.charAt(0)}</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='py-3 mx-5 flex flex-col items-center'>
        <DropdownMenuLabel className='font-bold text-lg'>{name || ' R4110'}</DropdownMenuLabel>
        <DropdownMenuLabel>Email: {email || ''}</DropdownMenuLabel>

        <DropdownMenuSeparator className='w-full' />
        <ThemeBtn />
        <Button onClick={() => signOut({ callbackUrl: '/' })} className='w-full m-1' variant='destructive'>
          <LogOut /> Logout
        </Button>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default ProfileDropdown
