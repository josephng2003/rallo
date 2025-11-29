import * as React from 'react'

const MOBILE_BREAKPOINT = 768

/**
 * Determines whether the current viewport is within the mobile breakpoint.
 *
 * The returned value updates when the viewport crosses the breakpoint; the initial value is computed on mount.
 *
 * @returns `true` if the viewport width is less than `MOBILE_BREAKPOINT` pixels, `false` otherwise.
 */
export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }
    mql.addEventListener('change', onChange)
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    return () => mql.removeEventListener('change', onChange)
  }, [])

  return !!isMobile
}