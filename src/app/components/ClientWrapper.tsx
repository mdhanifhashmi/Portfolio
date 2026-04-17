'use client'

import { ReactNode, useEffect } from 'react'
import LoadingAnimationWrapper from './LoadingAnimationWrapper'
import { initializeCache } from '@/lib/cache'

export default function ClientWrapper({ children }: { children: ReactNode }) {
  useEffect(() => {
    // Initialize cache system
    initializeCache()

    // Register Service Worker for advanced caching and offline support
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/sw.js')
        .then((registration) => {
          console.log('Service Worker registered successfully:', registration)
        })
        .catch((error) => {
          console.warn('Service Worker registration failed:', error)
        })
    }
  }, [])

  return (
    <>
      <LoadingAnimationWrapper />
      {children}
    </>
  )
}
