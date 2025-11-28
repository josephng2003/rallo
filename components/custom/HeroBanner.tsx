import Image from 'next/image'
import { Button } from '../ui/button'
import { MessageSquare, SquareCheckBig, SquareKanban } from 'lucide-react'

const HeroBanner = () => {
  const keyFeature = [
    { title: 'Kanban board', icon: <SquareKanban size={40} color='#1447e6' /> },
    { title: 'Task management', icon: <SquareCheckBig size={40} color='#1447e6' /> },
    { title: 'Reporting', icon: <SquareCheckBig size={40} color='#1447e6' /> },
    { title: 'Collaboration', icon: <MessageSquare size={40} color='#1447e6' /> }
  ]

  return (
    <div>
      <div className='flex gap-2 justify-between items-center w-full my-10 px-20'>
        <div className='flex flex-col items-start gap-4 justify-center'>
          <h1 className='text-8xl font-bold font-mono'>Rallo</h1>
          <div>
            <h2 className='text-2xl font-bold'>Achieve more with Agile methodoligies</h2>
          </div>
          <Button variant='primary' size='lg' className='font-bold rounded-lg shadow-lg text-white'>
            Get started
          </Button>
        </div>
        <Image className='rounded-lg shadow-lg' width={900} height={683} src='/hero-banner.jpg' alt='hero-banner' />
      </div>
      <div className='flex gap-20 flex-col items-start w-full my-10 px-20'>
        <h2 className='text-3xl font-bold'>Key features</h2>
        <div className='flex justify-between w-full px-20'>
          {keyFeature.map((feature, i) => (
            <div key={i} className='flex flex-col items-center gap-4'>
              <div className='bg-gray-200 w-fit rounded-lg p-2'>{feature.icon}</div>
              <h2 className='font-bold'>{feature.title}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
export default HeroBanner
