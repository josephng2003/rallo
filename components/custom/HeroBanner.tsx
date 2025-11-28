import Image from 'next/image'
import { Button } from '../ui/button'
import { FileStack, MessageSquare, SquareCheckBig, SquareKanban } from 'lucide-react'

const HeroBanner = () => {
  const keyFeature = [
    { title: 'Kanban board', icon: <SquareKanban size={40} color='#1447e6' /> },
    { title: 'Task management', icon: <SquareCheckBig size={40} color='#1447e6' /> },
    { title: 'Reporting', icon: <FileStack size={40} color='#1447e6' /> },
    { title: 'Collaboration', icon: <MessageSquare size={40} color='#1447e6' /> }
  ]

  return (
    <div>
      <div className='flex flex-col md:flex-row gap-6 md:gap-10 justify-between items-center md:items-start w-full my-10 px-4 sm:px-6 md:px-12 lg:px-20'>
        <div className='flex flex-col items-center md:items-start gap-4 justify-center text-center md:text-left'>
          <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-mono'>Rallo</h1>
          <div>
            <h2 className='text-lg sm:text-xl md:text-2xl font-bold'>Achieve more with Agile methodologies</h2>
          </div>
          <Button
            variant='primary'
            size='lg'
            className='font-bold rounded-lg shadow-lg text-white mt-4 w-full sm:w-auto'
          >
            Get started
          </Button>
        </div>
        <div className='relative w-full md:w-1/2 max-w-[900px] h-64 sm:h-80 md:h-96 lg:h-[420px] mt-6 md:mt-0'>
          <Image src='/hero-banner.jpg' alt='hero-banner' fill className='object-cover rounded-lg shadow-lg' />
        </div>
      </div>
      <div className='flex flex-col gap-8 items-start w-full my-10 px-4 sm:px-6 md:px-12 lg:px-20'>
        <h2 className='text-2xl sm:text-3xl font-bold'>Key features</h2>
        <div className='flex flex-col sm:flex-row gap-6 sm:gap-8 md:gap-20 w-full justify-between'>
          {keyFeature.map((feature, i) => (
            <div key={i} className='flex flex-col items-center gap-4'>
              <div className='bg-muted w-fit rounded-lg p-2'>{feature.icon}</div>
              <h2 className='font-bold'>{feature.title}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
export default HeroBanner
