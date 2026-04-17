// Utility to preload and cache images
export const preloadImage = (src: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = () => resolve(src)
    img.onerror = () => reject(new Error(`Failed to load image: ${src}`))
    img.src = src
  })
}

// Preload multiple images
export const preloadImages = async (urls: string[]): Promise<string[]> => {
  try {
    const results = await Promise.allSettled(
      urls.map((url) => preloadImage(url))
    )

    return results
      .filter((result) => result.status === 'fulfilled')
      .map((result) => (result.status === 'fulfilled' ? result.value : ''))
      .filter(Boolean)
  } catch (error) {
    console.warn('Image preload failed:', error)
    return []
  }
}

// Cache icon URLs
const ICON_URLS = [
  'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg',
  'https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg',
  'https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg',
  'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg',
  'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg',
  'https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg',
  'https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg',
  'https://raw.githubusercontent.com/devicons/devicon/master/icons/kubernetes/kubernetes-plain.svg',
]

// Preload critical images during initial load
export const preloadCriticalAssets = async () => {
  if (typeof window === 'undefined') return

  try {
    // Preload icons for skills section (will be displayed quickly)
    await preloadImages(ICON_URLS)
  } catch (error) {
    console.warn('Critical asset preload failed:', error)
  }
}
