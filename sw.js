var cacheName = 'Bookeep-pwa';
var filesToCache = [
  '/',
  '/index.html',
  '/css/style.css',
  '/Javascript/modals.js',
  '/Javascript/Profile_sign_up.js',
  '/Javascript/Rating.js',
  '/Javascript/script.js',
  '/Javascript/Sorting.js',
  '/Javascript/tables.js',
  '/Javascript/main.js'


];

/* Start the service worker and cache all of the app's content */
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(filesToCache);
    })
  );
});

/* Serve cached content when offline */
self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});