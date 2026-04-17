import { useEffect, useState } from 'react'
import { getCachedSection, cacheSection } from '@/lib/cache'

export interface UseCacheOptions {
  key: string
  fetcher?: () => Promise<any>
  enabled?: boolean
}

export function useCache({ key, fetcher, enabled = true }: UseCacheOptions) {
  const [data, setData] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    if (!enabled) return

    const loadData = async () => {
      try {
        setLoading(true)
        setError(null)

        // Try to get cached data first
        const cachedData = getCachedSection(key)
        if (cachedData) {
          setData(cachedData)
          setLoading(false)
          return
        }

        // If no cache and fetcher provided, fetch fresh data
        if (fetcher) {
          const freshData = await fetcher()
          cacheSection(key, freshData)
          setData(freshData)
        }

        setLoading(false)
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Unknown error'))
        setLoading(false)
      }
    }

    loadData()
  }, [key, fetcher, enabled])

  return { data, loading, error }
}

// Hook to update cache
export function useUpdateCache(key: string) {
  return (data: any) => {
    cacheSection(key, data)
  }
}
