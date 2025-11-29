'use client'

import { useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import ListLoadingPage from './loading'

const BoardListPage = () => {
  const { data: session, status } = useSession()
  const router = useRouter()

  // Redirect unauthenticated users to sign-in page
  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/auth/signin')
    }
  }, [status, router])

  // Show loading state while authenticating
  if (status === 'loading') {
    return <ListLoadingPage />
  }

  // Only render protected content when authenticated
  if (status === 'authenticated' && session?.user?.email) {
    return (
      <div className='p-4'>
        <h1 className='text-2xl font-bold mb-4'>Board List</h1>
        <p className='text-gray-700'>Welcome, {session.user.email}</p>
      </div>
    )
  }

  // Fallback for unexpected states
  return null
}

export default BoardListPage
