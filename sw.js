const CACHE_NAME = 'terranova-german-v1';
const assetsToCache = [
  'index.html',
  'flashcards.json',
  'manifest.json',
  'icon-192.png',
  'icon-512.png'
];

// Install Event - Caches app shell and the 708 flashcards dataset
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(assetsToCache))
  );
});

// Fetch Event - Serves from cache when offline
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
