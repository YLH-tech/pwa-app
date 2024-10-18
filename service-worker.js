self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open('my-cache').then(function(cache) {
            return cache.addAll([
                '/index.html',
                '/style.css',
                '/loopingStyle.css',
                '/tableStyle.css',
                '/loopingScript.js',
                '/modifyScript.js',
                'LTC.png'
            ]);
        })
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
        })
    );
});
