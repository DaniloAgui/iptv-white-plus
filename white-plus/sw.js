// Service Worker for White Plus PWA
// Advanced caching strategies and background sync

const CACHE_NAME = 'white-plus-v1.0.0';
const STATIC_CACHE = 'white-plus-static-v1.0.0';
const DYNAMIC_CACHE = 'white-plus-dynamic-v1.0.0';
const IMAGE_CACHE = 'white-plus-images-v1.0.0';

// Files to cache immediately
const STATIC_FILES = [
  '/',
  '/index.html',
  '/style.css',
  '/app.js',
  '/manifest.json',
  'img/logoprincipal.webp',
  'img/strim.jpg'
];

// Network-first resources
const NETWORK_FIRST = [
  '/api/',
  'https://pay.kirvano.com/',
  'https://wa.me/'
];

// Cache-first resources
const CACHE_FIRST = [
  'img/',
  '.jpg',
  '.jpeg',
  '.png',
  '.webp',
  '.gif',
  '.svg'
];

// Install event - cache static files
self.addEventListener('install', event => {
  console.log('🚀 Service Worker installing...');
  
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then(cache => {
        console.log('📦 Caching static files');
        return cache.addAll(STATIC_FILES);
      })
      .then(() => {
        console.log('✅ Static files cached');
        return self.skipWaiting();
      })
      .catch(error => {
        console.error('❌ Failed to cache static files:', error);
      })
  );
});

// Activate event - clean old caches
self.addEventListener('activate', event => {
  console.log('🔄 Service Worker activating...');
  
  event.waitUntil(
    caches.keys()
      .then(cacheNames => {
        return Promise.all(
          cacheNames.map(cacheName => {
            if (cacheName !== STATIC_CACHE && 
                cacheName !== DYNAMIC_CACHE && 
                cacheName !== IMAGE_CACHE) {
              console.log('🗑️ Deleting old cache:', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => {
        console.log('✅ Service Worker activated');
        return self.clients.claim();
      })
  );
});

// Fetch event - intelligent caching strategy
self.addEventListener('fetch', event => {
  const { request } = event;
  const url = new URL(request.url);
  
  // Skip non-GET requests
  if (request.method !== 'GET') {
    return;
  }
  
  // Handle different resource types
  if (isStaticFile(request.url)) {
    event.respondWith(cacheFirst(request, STATIC_CACHE));
  } else if (isImage(request.url)) {
    event.respondWith(cacheFirst(request, IMAGE_CACHE));
  } else if (isNetworkFirst(request.url)) {
    event.respondWith(networkFirst(request, DYNAMIC_CACHE));
  } else {
    event.respondWith(staleWhileRevalidate(request, DYNAMIC_CACHE));
  }
});

// Cache-first strategy
async function cacheFirst(request, cacheName) {
  try {
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      const cache = await caches.open(cacheName);
      cache.put(request, networkResponse.clone());
    }
    
    return networkResponse;
  } catch (error) {
    console.error('Cache-first failed:', error);
    return getOfflineFallback(request);
  }
}

// Network-first strategy
async function networkFirst(request, cacheName) {
  try {
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      const cache = await caches.open(cacheName);
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    return getOfflineFallback(request);
  }
}

// Stale-while-revalidate strategy
async function staleWhileRevalidate(request, cacheName) {
  const cachedResponse = await caches.match(request);
  
  const fetchPromise = fetch(request).then(networkResponse => {
    if (networkResponse.ok) {
      const cache = caches.open(cacheName);
      cache.then(c => c.put(request, networkResponse.clone()));
    }
    return networkResponse;
  }).catch(() => cachedResponse);
  
  return cachedResponse || fetchPromise;
}

// Helper functions
function isStaticFile(url) {
  return STATIC_FILES.some(file => url.includes(file));
}

function isImage(url) {
  return CACHE_FIRST.some(ext => url.includes(ext));
}

function isNetworkFirst(url) {
  return NETWORK_FIRST.some(pattern => url.includes(pattern));
}

function getOfflineFallback(request) {
  if (request.destination === 'document') {
    return caches.match('/index.html');
  }
  
  if (request.destination === 'image') {
    return new Response(
      '<svg width="200" height="150" xmlns="http://www.w3.org/2000/svg"><rect fill="#ddd" width="200" height="150"/><text x="50%" y="50%" text-anchor="middle" dy=".3em" fill="#999">Offline</text></svg>',
      { headers: { 'Content-Type': 'image/svg+xml' } }
    );
  }
  
  return new Response('Offline - Conteúdo não disponível', {
    status: 503,
    statusText: 'Service Unavailable'
  });
}

// Background Sync
self.addEventListener('sync', event => {
  console.log('🔄 Background sync triggered:', event.tag);
  
  if (event.tag === 'background-sync') {
    event.waitUntil(doBackgroundSync());
  }
});

async function doBackgroundSync() {
  try {
    // Perform background tasks
    console.log('📡 Performing background sync');
    
    // Sync offline actions, update cache, etc.
    const cache = await caches.open(DYNAMIC_CACHE);
    const cachedRequests = await cache.keys();
    
    // Update cached content
    for (const request of cachedRequests) {
      try {
        const response = await fetch(request);
        if (response.ok) {
          await cache.put(request, response);
        }
      } catch (error) {
        console.warn('Failed to update cached resource:', request.url);
      }
    }
    
    console.log('✅ Background sync completed');
  } catch (error) {
    console.error('❌ Background sync failed:', error);
  }
}

// Push notifications
self.addEventListener('push', event => {
  console.log('📢 Push notification received');
  
  const options = {
    body: event.data ? event.data.text() : 'Nova atualização disponível!',
    icon: 'img/logoprincipal.webp',
    badge: 'img/logoprincipal.webp',
    image: 'img/strim.jpg',
    vibrate: [200, 100, 200],
    data: {
      url: '/'
    },
    actions: [
      {
        action: 'open',
        title: 'Abrir White Plus',
        icon: 'img/logoprincipal.webp'
      },
      {
        action: 'close',
        title: 'Fechar',
        icon: 'img/logoprincipal.webp'
      }
    ]
  };
  
  event.waitUntil(
    self.registration.showNotification('White Plus', options)
  );
});

// Notification click
self.addEventListener('notificationclick', event => {
  console.log('🔔 Notification clicked');
  
  event.notification.close();
  
  if (event.action === 'open') {
    event.waitUntil(
      clients.openWindow(event.notification.data.url || '/')
    );
  }
});

// Message handling
self.addEventListener('message', event => {
  console.log('💬 Message received:', event.data);
  
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
  
  if (event.data && event.data.type === 'CACHE_URLS') {
    event.waitUntil(
      caches.open(DYNAMIC_CACHE)
        .then(cache => cache.addAll(event.data.urls))
    );
  }
});

// Performance monitoring
self.addEventListener('fetch', event => {
  const startTime = performance.now();
  
  event.respondWith(
    fetch(event.request).then(response => {
      const endTime = performance.now();
      const duration = endTime - startTime;
      
      // Log slow requests
      if (duration > 1000) {
        console.warn(`🐌 Slow request detected: ${event.request.url} (${duration.toFixed(2)}ms)`);
      }
      
      return response;
    })
  );
});

console.log('⚡ White Plus Service Worker loaded');