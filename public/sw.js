/* Service Worker — Clockout v1 */
/* global self, caches, fetch */

var STATIC_CACHE = "clockout-static-v1";
var PAGES_CACHE = "clockout-pages-v1";

self.addEventListener("install", function (event) {
  self.skipWaiting();
});

self.addEventListener("activate", function (event) {
  event.waitUntil(
    Promise.all([
      caches.keys().then(function (keys) {
        return Promise.all(
          keys
            .filter(function (key) {
              return key !== STATIC_CACHE && key !== PAGES_CACHE;
            })
            .map(function (key) {
              return caches.delete(key);
            }),
        );
      }),
      self.clients.claim(),
    ]),
  );
});

self.addEventListener("fetch", function (event) {
  var request = event.request;

  if (request.method !== "GET") return;

  var url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  var pathname = url.pathname;

  if (
    pathname.startsWith("/assets/") ||
    /\.(css|js|woff2?|ttf|eot|svg|png|jpg|jpeg|gif|ico|webp|avif)$/i.test(pathname)
  ) {
    event.respondWith(cacheFirst(request, STATIC_CACHE));
    return;
  }

  if (request.mode === "navigate") {
    event.respondWith(networkFirst(request, PAGES_CACHE));
  }
});

function cacheFirst(request, cacheName) {
  return caches.match(request).then(function (cached) {
    if (cached) return cached;
    return fetch(request).then(function (response) {
      if (response.ok) {
        return caches.open(cacheName).then(function (cache) {
          cache.put(request, response.clone());
          return response;
        });
      }
      return response;
    });
  });
}

function networkFirst(request, cacheName) {
  return fetch(request)
    .then(function (response) {
      if (response.ok) {
        return caches.open(cacheName).then(function (cache) {
          cache.put(request, response.clone());
          return response;
        });
      }
      return response;
    })
    .catch(function () {
      return caches.match(request).then(function (cached) {
        return cached || new Response("Offline", { status: 503 });
      });
    });
}
