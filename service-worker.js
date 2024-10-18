const cacheName = 'pwa-app-v1';
const assetsToCache = [
    '/pwa-app/',
    '/pwa-app/index.html',
    '/pwa-app/manifest.json',
    '/pwa-app/images/icon-192x192.png',
    '/pwa-app/images/icon-512x512.png'
];

// Install the service worker
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(cacheName)
        .then(cache => {
            return cache.addAll(assetsToCache);
        })
    );
});

// Fetch the cached assets
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
        .then(response => {
            return response || fetch(event.request);
        })
    );
});
