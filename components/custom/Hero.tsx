import { Grid2x2Check } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const HeroBanner = () => {

  return (
    <Link href='/'>
      <div className='flex items-center gap-2 justify-center'>
        <Grid2x2Check size={40} color='#1a5fb4' />
        <h1 className='text-4xl font-bold text-gray-900'>Rallo</h1>
      </div>
    </Link>
  )
}

export default HeroBanner
