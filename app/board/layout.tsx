'use client'

import BoardNavigation from '@/components/custom/BoardNavigation'
import { SessionProvider } from 'next-auth/react'
import React from 'react'

const BoardLayout = ({
  children
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <SessionProvider>
      <BoardNavigation />
      {children}
    </SessionProvider>
  )
}

export default BoardLayout
