'use client'

import { SessionProvider } from 'next-auth/react'
import React from 'react'

const BoardLayout = ({
  children
}: Readonly<{
  children: React.ReactNode
}>) => {
  return <SessionProvider>{children}</SessionProvider>
}

export default BoardLayout
