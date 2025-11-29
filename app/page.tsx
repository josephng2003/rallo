import HeroBanner from '@/components/custom/HeroBanner'
import LandingPageNavigation from '@/components/custom/LandingPageNavigation'
import { authOptions } from '@/lib/auth'
import { getServerSession } from 'next-auth'

export default async function HomePage() {
  const session = await getServerSession(authOptions) // server-side
  return (
    <>
      <LandingPageNavigation session={session} />
      <HeroBanner />
    </>
  )
}
