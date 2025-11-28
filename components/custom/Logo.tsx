import { Grid2x2Check } from 'lucide-react'
import Link from 'next/link'

const Logo = () => {
  return (
    <Link href='/'>
      <div className='flex items-center gap-2 justify-center'>
        <Grid2x2Check size={40} color='#1447e6' />
        <h1 className='text-4xl font-mono font-bold'>Rallo</h1>
      </div>
    </Link>
  )
}

export default Logo
