'use client'

import { Grid2x2Check } from 'lucide-react'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import React from 'react'

const Logo = () => {
  const theme = useTheme()

  return (
    <Link href='/'>
      <div className='flex items-center gap-2 justify-center'>
        <Grid2x2Check size={40} color='#1a5fb4' />
        <h1
          suppressHydrationWarning
          className={`text-4xl font-bold ${theme.systemTheme === 'light' ? 'text-gray-900' : 'text-white'}`}
        >
          Rallo
        </h1>
      </div>
    </Link>
  )
}

export default Logo
