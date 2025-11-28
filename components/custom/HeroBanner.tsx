import Image from 'next/image'
import { Button } from '../ui/button'

const HeroBanner = () => {
  return (
    <div className='flex items-start gap-2 justify-center'>
      <div className='flex flex-col items-start gap-2 justify-center'>
        <h1 className='text-6xl font-bold'>Rallo</h1>
        <h2 className='text-3xl font-bold'>Task Management</h2>
        <h2 className='text-3xl font-bold'>Achieve more with Agile methodoligies</h2>
        <Button variant='primary' size='lg' className='font-bold rounded-lg shadow-lg'>
          Get started
        </Button>
            </div>
            <Image className='rounded-lg shadow-md' width={1024} height={683} src='/hero.jpg' alt='hero-banner' />
          </div>
        )
      }

      export default HeroBanner
