// Guarda o app no aparelho para abrir rápido e funcionar sem internet.
// Ao publicar uma versão nova, troque o número abaixo (v1 -> v2).
const CACHE = 'obra-incc-v1';
const CORE = ['./', './index.html', './manifest.webmanifest', './icons/icon-192.png', './icons/icon-512.png', './icons/apple-touch-icon.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(CORE)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  // Página: tenta a internet primeiro (pega atualizações) e usa a cópia salva se estiver offline.
  if (req.mode === 'navigate') {
    e.respondWith(fetch(req).then(r => { const cp = r.clone(); caches.open(CACHE).then(c => c.put('./index.html', cp)); return r; })
      .catch(() => caches.match('./index.html')));
    return;
  }
  // Demais arquivos (gráficos, fontes, ícones): usa a cópia salva e atualiza em segundo plano.
  e.respondWith(caches.match(req).then(hit => {
    const net = fetch(req).then(r => { if (r && (r.ok || r.type === 'opaque')) { const cp = r.clone(); caches.open(CACHE).then(c => c.put(req, cp)); } return r; }).catch(() => hit);
    return hit || net;
  }));
});
