'use client'

import { Spinner } from '@/components/ui/spinner'

const ListLoadingPage = () => {
  return (
    <div className='flex items-center justify-center min-h-screen'>
      <div className='text-center flex-col flex justify-center items-center gap-2'>
        <Spinner className='size-14' />
        <p>Loading...</p>
      </div>
    </div>
  )
}

export default ListLoadingPage
