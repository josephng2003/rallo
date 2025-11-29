import { authOptions } from '@/lib/auth'
import { getServerSession } from 'next-auth'
import React from 'react'
import { redirect } from 'next/navigation'

const AuthLayoutPage = async ({
  children
}: Readonly<{
  children: React.ReactNode
}>) => {
  const session = await getServerSession(authOptions)
  if (session) {
    redirect('/board/list')
  }
  return children
}

export default AuthLayoutPage
