// Service Worker for caching assets and enabling offline support
const CACHE_NAME = 'portfolio-v1'
const urlsToCache = ['/', '/index.html']

// Install event - cache assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(urlsToCache).catch((err) => {
          console.warn('Cache addAll error:', err)
        })
      })
  )
  self.skipWaiting()
})

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName)
          }
          return Promise.resolve()
        })
      )
    })
  )
  self.clients.claim()
})

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', (event) => {
  // Only handle GET requests
  if (event.request.method !== 'GET') {
    return
  }

  // Skip certain requests
  if (
    event.request.url.includes('/api/') ||
    event.request.url.includes('.map')
  ) {
    return
  }

  event.respondWith(
    caches.match(event.request).then((response) => {
      // Serve from cache if available
      if (response) {
        return response
      }

      // Otherwise fetch from network
      return fetch(event.request).then((response) => {
        // Don't cache non-successful responses
        if (
          !response ||
          response.status !== 200 ||
          response.type === 'error'
        ) {
          return response
        }

        // Cache successful responses
        const responseToCache = response.clone()
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, responseToCache)
        })

        return response
      })
    })
  )
})
