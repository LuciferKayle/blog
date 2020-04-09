/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "assets/css/0.styles.592fc07d.css",
    "revision": "1b44ddd27e85c639be3d2e7489577a31"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/2.a5e86a43.js",
    "revision": "5b285915b2d763a0c37d01e4f6525ba9"
  },
  {
    "url": "assets/js/3.dd42e98f.js",
    "revision": "f2b3235badf0140bab8f081f0cec323e"
  },
  {
    "url": "assets/js/4.c15f060e.js",
    "revision": "60a902e4606cdd5869d50ee71f3e6689"
  },
  {
    "url": "assets/js/5.d8a41332.js",
    "revision": "cd3ed99c02d3629be943bdeb5684e476"
  },
  {
    "url": "assets/js/6.3e6f824e.js",
    "revision": "b6a4917f6994e51d850a584f4b1eeb6b"
  },
  {
    "url": "assets/js/7.a942e442.js",
    "revision": "7a563d381507a62df304baa1e515ed9c"
  },
  {
    "url": "assets/js/8.6b343014.js",
    "revision": "1bcf019ac87230768af031ece62e5c45"
  },
  {
    "url": "assets/js/9.159e6da0.js",
    "revision": "f9f72042bca31a4effbb9e6da2b170b2"
  },
  {
    "url": "assets/js/app.481abafd.js",
    "revision": "e9dbc8bd4519c91f11e0aa8d3664757f"
  },
  {
    "url": "dataStructure/js数据结构与算法.html",
    "revision": "01ba4b8389213bc64a2e6186f35aa9d0"
  },
  {
    "url": "icons/apple.svg",
    "revision": "89b69e68c4f204d5e9032a38ce523d6d"
  },
  {
    "url": "icons/time.png",
    "revision": "34932af76e7ade41d62d3857b738eeb3"
  },
  {
    "url": "img/avatar.png",
    "revision": "85a7b76529874e7a6b1a11a82047dbd9"
  },
  {
    "url": "index.html",
    "revision": "a0d3187d474741b3ea027df3031c6171"
  },
  {
    "url": "summary/递归和缓存.html",
    "revision": "c5d1f411fe4d55143fdcaf63dad33dc5"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
