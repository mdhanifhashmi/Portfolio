// Cache utility for storing rendered content in browser
export const CACHE_KEYS = {
  HERO_SECTION: 'portfolio_hero_cache',
  ABOUT_SECTION: 'portfolio_about_cache',
  PROJECTS_SECTION: 'portfolio_projects_cache',
  SKILLS_SECTION: 'portfolio_skills_cache',
  CONTACT_SECTION: 'portfolio_contact_cache',
  PAGE_STATE: 'portfolio_page_state',
  CACHE_TIMESTAMP: 'portfolio_cache_timestamp',
} as const

// Cache expiration time (24 hours)
const CACHE_EXPIRATION_MS = 24 * 60 * 60 * 1000

// Initialize cache on first load
export const initializeCache = async () => {
  if (typeof window === 'undefined') return

  try {
    const cachedTimestamp = localStorage.getItem(CACHE_KEYS.CACHE_TIMESTAMP)
    const now = Date.now()

    // Check if cache is expired
    if (cachedTimestamp && now - parseInt(cachedTimestamp) > CACHE_EXPIRATION_MS) {
      clearAllCache()
    }

    // Set cache timestamp if not exists
    if (!cachedTimestamp) {
      localStorage.setItem(CACHE_KEYS.CACHE_TIMESTAMP, now.toString())
    }
  } catch (error) {
    console.warn('Cache initialization failed:', error)
  }
}

// Cache section data
export const cacheSection = (key: string, data: unknown) => {
  if (typeof window === 'undefined') return

  try {
    const cacheData = {
      data,
      timestamp: Date.now(),
    }
    localStorage.setItem(key, JSON.stringify(cacheData))
  } catch (err) {
    console.warn(`Failed to cache ${key}:`, err)
  }
}

// Retrieve cached section data
export const getCachedSection = (key: string) => {
  if (typeof window === 'undefined') return null

  try {
    const cached = localStorage.getItem(key)
    if (!cached) return null

    const { data, timestamp } = JSON.parse(cached)

    // Check if cache is still valid
    if (Date.now() - timestamp > CACHE_EXPIRATION_MS) {
      localStorage.removeItem(key)
      return null
    }

    return data
  } catch (error) {
    console.warn(`Failed to retrieve cache for ${key}:`, error)
    return null
  }
}

// Clear specific cache
export const clearCache = (key: string) => {
  if (typeof window === 'undefined') return
  try {
    localStorage.removeItem(key)
  } catch (error) {
    console.warn(`Failed to clear cache for ${key}:`, error)
  }
}

// Clear all cache
export const clearAllCache = () => {
  if (typeof window === 'undefined') return

  try {
    Object.values(CACHE_KEYS).forEach((key) => {
      localStorage.removeItem(key)
    })
  } catch (error) {
    console.warn('Failed to clear all cache:', error)
  }
}

// Check if cache exists
export const hasCachedData = () => {
  if (typeof window === 'undefined') return false

  try {
    return (
      localStorage.getItem(CACHE_KEYS.HERO_SECTION) !== null ||
      localStorage.getItem(CACHE_KEYS.ABOUT_SECTION) !== null ||
      localStorage.getItem(CACHE_KEYS.PROJECTS_SECTION) !== null
    )
  } catch {
    return false
  }
}

// Prefetch and cache all sections (called during initial load/loading animation)
export const prefetchAllSections = async () => {
  if (typeof window === 'undefined') return

  try {
    // Simulate fetching section data
    const sectionData = {
      hero: {
        title: 'Hanif Mohammad',
        subtitle: 'Entry Level Software Engineer',
      },
      about: {
        loaded: true,
      },
      projects: {
        loaded: true,
      },
      skills: {
        loaded: true,
      },
      contact: {
        loaded: true,
      },
    }

    // Cache all sections
    cacheSection(CACHE_KEYS.HERO_SECTION, sectionData.hero)
    cacheSection(CACHE_KEYS.ABOUT_SECTION, sectionData.about)
    cacheSection(CACHE_KEYS.PROJECTS_SECTION, sectionData.projects)
    cacheSection(CACHE_KEYS.SKILLS_SECTION, sectionData.skills)
    cacheSection(CACHE_KEYS.CONTACT_SECTION, sectionData.contact)

    return true
  } catch (error) {
    console.warn('Prefetch failed:', error)
    return false
  }
}
