import HeroBanner from '@/components/custom/HeroBanner'
import LandingPageNavigation from '@/components/custom/LandingPageNavigation'

export default function HomePage() {
  return (
    <>
      <LandingPageNavigation isAuth />
      <HeroBanner />
    </>
  )
}
