import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'

const AuthBtn = () => {
  const buttonAuth: {
    title: string
    navigate: string
    variant: 'ghost' | 'link' | 'default' | 'destructive' | 'outline' | 'secondary' | 'primary' | null | undefined
  }[] = [
    { title: 'Log in', variant: 'ghost', navigate: '/auth/signin' },
    { title: 'Sign up', variant: 'primary', navigate: '/auth/signup' }
  ]

  return (
    <div className='flex gap-2'>
      {buttonAuth.map((btn, i) => (
        <Button asChild className='font-bold' size='lg' variant={btn.variant} key={i}>
          <Link href={btn.navigate}>{btn.title}</Link>
        </Button>
      ))}
    </div>
  )
}

export default AuthBtn
