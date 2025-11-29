'use client'

import React, { useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

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
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    )
  }

  // Only render protected content when authenticated
  if (status === 'authenticated' && session?.user?.email) {
    return (
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Board List</h1>
        <p className="text-gray-700">Welcome, {session.user.email}</p>
      </div>
    )
  }

  // Fallback for unexpected states
  return null
}

export default BoardListPage
