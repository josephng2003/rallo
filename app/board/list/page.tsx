'use client'

import React from 'react'
import { useSession } from 'next-auth/react'
const BoardListPage = () => {
  const { data: session, status } = useSession()
  return <div>{session?.user?.email}</div>
}

export default BoardListPage
