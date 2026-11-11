const CACHE_NAME = 'ptc-v1';
const STATIC_CACHE = 'ptc-static-v1';
const IMAGE_CACHE = 'ptc-images-v1';

const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/logo-ptc.png',
  '/apple-touch-icon.png',
  '/favicon-192.png',
];

const CACHE_STRATEGIES = {
  static: 'CacheFirst',
  images: 'CacheFirst',
  api: 'NetworkFirst',
  default: 'NetworkFirst',
};

// Cache-first strategy for static assets
async function cacheFirst(request) {
  const cache = await caches.open(STATIC_CACHE);
  const cached = await cache.match(request);
  if (cached) return cached;
  try {
    const response = await fetch(request);
    cache.put(request, response.clone());
    return response;
  } catch (error) {
    return new Response('Network error', { status: 408, statusText: 'Network error' });
  }
}

// Network-first strategy for API calls
async function networkFirst(request) {
  const cache = await caches.open(CACHE_NAME);
  try {
    const response = await fetch(request);
    cache.put(request, response.clone());
    return response;
  } catch (error) {
    const cached = await cache.match(request);
    if (cached) return cached;
    return new Response('Network error', { status: 408, statusText: 'Network error' });
  }
}

// Image caching with long TTL
async function cacheImages(request) {
  const cache = await caches.open(IMAGE_CACHE);
  const cached = await cache.match(request);
  if (cached) return cached;
  try {
    const response = await fetch(request);
    if (response.ok) {
      cache.put(request, response.clone());
    }
    return response;
  } catch (error) {
    return new Response('Network error', { status: 408, statusText: 'Network error' });
  }
}

self.addEventListener('install', (event) => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(STATIC_CACHE);
      await cache.addAll(STATIC_ASSETS);
    })()
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      const cacheNames = await caches.keys();
      await Promise.all(
        cacheNames
          .filter((cacheName) => cacheName !== STATIC_CACHE && cacheName !== IMAGE_CACHE)
          .map((cacheName) => caches.delete(cacheName))
      );
    })()
  );
});

self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests
  if (request.method !== 'GET') return;

  // Skip external requests
  if (!url.origin.includes('tudienptc.vn') && !url.origin.includes('localhost')) return;

  // Skip API calls for now
  if (url.pathname.startsWith('/api/')) return;

  // Static assets
  if (STATIC_ASSETS.includes(url.pathname) || url.pathname.match(/\.(css|js)$/)) {
    event.respondWith(cacheFirst(request));
    return;
  }

  // Images
  if (url.pathname.match(/\.(webp|png|jpg|jpeg|svg)$/)) {
    event.respondWith(cacheImages(request));
    return;
  }

  // Default: network first
  event.respondWith(networkFirst(request));
});
