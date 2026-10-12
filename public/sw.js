// Retire the previous third-party advertising worker. Keeping this small local
// worker at the same URL lets browsers update an older registration safely.
self.addEventListener('install', () => self.skipWaiting())
self.addEventListener('activate', (event) => {
  event.waitUntil(
    Promise.all([
      self.registration.unregister(),
      caches.keys().then((keys) => Promise.all(keys.map((key) => caches.delete(key)))),
    ])
  )
})
