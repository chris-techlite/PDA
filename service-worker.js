var cahcheNAme = 'petstotore-v1';
var cacheFiles = [
    'index.html',
    'products.js',
    'img/icon-store-512.png',
    'petstotore.webmanifest',
    'img/cat carrier.jpg',
    'img/cat collar.jpg',
    'img/cat food.png',
    'img/CAT FOOD2.png',
    'img/cat toys.jpg',
    'img/karate.webp',
    'img/yarn.jpg'
]
self.addEventListener('install', (e) => {
    console.log('[Service Worker]: Installed');
    e.waitUntil(
        caches.open(cacheName).then((cache) => {
            return cache.addAll(cacheFiles);
        })
    );
});
self.addEventListener('activate', function(e) {
    e.respondWith(
        caches.match(e.request).then(function(response) {
            return r || fetch(e.request).then(function(response) {
                return caches.open(cacheName).then(function(cache) {
                    cache.put(e.request, response.clone());
                    return response;
                });
            });
        })
    );
});
