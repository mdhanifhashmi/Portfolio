'use client'

import { useEffect, useState } from 'react'
import LoadingAnimation from './LoadingAnimation'

/**
 * This component ensures LoadingAnimation only renders on the client side
 * to prevent hydration mismatches with server-rendered HTML
 */
export default function LoadingAnimationWrapper() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    // Set to true only after hydration is complete
    setIsMounted(true)
  }, [])

  // Don't render anything on server to prevent hydration mismatch
  if (!isMounted) {
    return null
  }

  return <LoadingAnimation />
}
