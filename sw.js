/* オフライン用：アプリ一式を端末に保存し、通信なしでも開けるようにする */
const VERSION = 'toeic-drill-v3';
const FILES = [
  './', 'index.html', 'style.css', 'app.js', 'manifest.webmanifest',
  'icons/icon.svg', 'icons/icon-192.png', 'icons/icon-512.png', 'icons/apple-touch-icon.png',
  'data/glossary.js', 'data/p5_pos.js', 'data/p5_tense.js', 'data/p5_prep.js', 'data/p5_conj.js',
  'data/p5_rel.js', 'data/p5_usage.js', 'data/reading_p6.js', 'data/reading_p7.js', 'data/reading_p7b.js', 'data/listening.js',
];
self.addEventListener('install', (e) => {
  // cache: 'reload' でブラウザのHTTPキャッシュを通さず、必ず最新のファイルを取りに行く
  e.waitUntil(caches.open(VERSION).then((c) => c.addAll(FILES.map((f) => new Request(f, { cache: 'reload' })))).then(() => self.skipWaiting()));
});
self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== VERSION).map((k) => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    caches.match(e.request, { ignoreSearch: true }).then((hit) => hit || fetch(e.request).then((res) => {
      if (res.ok && new URL(e.request.url).origin === location.origin) {
        const copy = res.clone(); caches.open(VERSION).then((c) => c.put(e.request, copy));
      }
      return res;
    }).catch(() => caches.match('index.html')))
  );
});
