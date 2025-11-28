import Logo from '@/components/custom/Logo'
import { SignupForm } from '@/components/custom/SignupForm'

import Image from 'next/image'

export default function SignupPage() {
  return (
    <div className='grid min-h-svh lg:grid-cols-2'>
      <div className='flex flex-col gap-4 p-6 md:p-10'>
        <div className='flex justify-center gap-2 md:justify-start'>
          <Logo />
        </div>
        <div className='flex flex-1 items-center justify-center'>
          <div className='w-full max-w-xs'>
            <SignupForm />
          </div>
        </div>
      </div>
      <div className='bg-muted relative hidden lg:block'>
        <Image
          src='/auth.jpg'
          alt='Image'
          width={1000}
          height={200}
          className='absolute inset-0 h-full w-full object-cover dark:brightness-[0.8] dark:grayscale'
        />
      </div>
    </div>
  )
}
