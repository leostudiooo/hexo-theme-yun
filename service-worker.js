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
    "url": "404.html",
    "revision": "f9f5b1eb1ccee22b7089ecd1f3aa3e93"
  },
  {
    "url": "about.html",
    "revision": "f96e9be798792449f77810715d6100af"
  },
  {
    "url": "assets/css/0.styles.08a0540f.css",
    "revision": "3f1cf95f285c5d73fc435b716670412d"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.986af9d6.js",
    "revision": "8d07197e0e8ffe74ab8db0680dd8ed31"
  },
  {
    "url": "assets/js/11.7be33881.js",
    "revision": "8b0a2d55ccf1a98332748dcbba261bd1"
  },
  {
    "url": "assets/js/12.5fd97cf6.js",
    "revision": "bb57067cdfdb151bf29302b1576ff985"
  },
  {
    "url": "assets/js/13.09db7eea.js",
    "revision": "3fe7aad03328d4d7050ea713c24f29e0"
  },
  {
    "url": "assets/js/14.c1170179.js",
    "revision": "98d8b33ae4dd390152c24f39f777563b"
  },
  {
    "url": "assets/js/15.af6c19c7.js",
    "revision": "1ade97ada06cac636d6749ce06958f61"
  },
  {
    "url": "assets/js/16.2ce66ebd.js",
    "revision": "ecb17b2b9bc23a5713e879bb150821f5"
  },
  {
    "url": "assets/js/17.9b58af09.js",
    "revision": "eae23e758583ac9abba1e4416358119e"
  },
  {
    "url": "assets/js/18.951ee3b9.js",
    "revision": "1388b26aca9c2a9f25cbb3a7091d9a1a"
  },
  {
    "url": "assets/js/19.62f069bb.js",
    "revision": "12991eca6db8b44aac48fd3aa8228876"
  },
  {
    "url": "assets/js/2.c8e318ee.js",
    "revision": "e1f218e12637a8884888842fc51279d9"
  },
  {
    "url": "assets/js/20.ce7f7da0.js",
    "revision": "c7c142b041c1c18f4af465dbd0519de3"
  },
  {
    "url": "assets/js/21.3d977152.js",
    "revision": "53270073180e79f1fb499edceb14ff5d"
  },
  {
    "url": "assets/js/22.716fb64d.js",
    "revision": "231e11c1a8986935aa318a09dbe1d507"
  },
  {
    "url": "assets/js/23.d30134d6.js",
    "revision": "b78861abb910e96ece8cdeba7470606f"
  },
  {
    "url": "assets/js/24.6300c66c.js",
    "revision": "1841bd1fbdef2f678492375bcb4875f1"
  },
  {
    "url": "assets/js/25.d894d377.js",
    "revision": "cbd839607c7c7e1c9396cc5798aa6148"
  },
  {
    "url": "assets/js/26.cef8de83.js",
    "revision": "0721d38a2f4dc73080a63d58a0da9967"
  },
  {
    "url": "assets/js/27.2cba2054.js",
    "revision": "d58bb6748317f15a76f439b99aaf456a"
  },
  {
    "url": "assets/js/28.4e2d61f5.js",
    "revision": "d7e2de99b04923c91449c18e22a410d9"
  },
  {
    "url": "assets/js/3.636665fe.js",
    "revision": "a4ead256bede2f71f22b73488497aed5"
  },
  {
    "url": "assets/js/4.b3719a29.js",
    "revision": "b8c9e78403bf0c6be59a1d7e58043579"
  },
  {
    "url": "assets/js/5.09d06dfa.js",
    "revision": "0ba187f2ee57db2931fc864b5958665f"
  },
  {
    "url": "assets/js/6.a2b0b332.js",
    "revision": "2a6a1b7a4ede9558423a8a608b62ba3e"
  },
  {
    "url": "assets/js/7.1c4ad9da.js",
    "revision": "7cecf34158a7895a926b07598eb0f169"
  },
  {
    "url": "assets/js/8.917805ff.js",
    "revision": "4417099c1a4238e8600d2463bb824e3b"
  },
  {
    "url": "assets/js/9.1b223ebc.js",
    "revision": "24700ad8b668545992064f5762bcec0b"
  },
  {
    "url": "assets/js/app.fa7a4338.js",
    "revision": "eb906e43e9d8571f915b65ba47b4b4c3"
  },
  {
    "url": "demo.html",
    "revision": "82b100a51d8810bce29c5c47f1e5a148"
  },
  {
    "url": "en/about.html",
    "revision": "b7e39d7ffdcea77c0a4fa214ff432ad8"
  },
  {
    "url": "en/guide/additional-package-support.html",
    "revision": "d373bb15f9ec984878d1c26ee4be90fa"
  },
  {
    "url": "en/guide/config.html",
    "revision": "b35108ae04bec3f14deed3fd93296316"
  },
  {
    "url": "en/guide/faq.html",
    "revision": "052ac7d72ff637b1d9ecc397d2cf7085"
  },
  {
    "url": "en/guide/icon.html",
    "revision": "48bc92e59463cac45a256e12c60c9f19"
  },
  {
    "url": "en/guide/index.html",
    "revision": "9fc8adb6458adead390fb993a752fa43"
  },
  {
    "url": "en/guide/page.html",
    "revision": "1bcacce224c0b7e26ae392f61623e411"
  },
  {
    "url": "en/guide/third-party-support.html",
    "revision": "80d321c95caa728358ddbf0c08180a9d"
  },
  {
    "url": "en/guide/Todo.html",
    "revision": "aef8f1a7d46752ad63f5b37c81006681"
  },
  {
    "url": "en/index.html",
    "revision": "7a881c5a0e4a92bdbd7d8c24e4e9edaf"
  },
  {
    "url": "guide/additional-package-support.html",
    "revision": "18831386c1012974ab201d15c371e0f7"
  },
  {
    "url": "guide/config.html",
    "revision": "dadab8d62e1f39e1d905bd54f5228dc5"
  },
  {
    "url": "guide/faq.html",
    "revision": "33259dda80ef591367a3ef6bfd344e6c"
  },
  {
    "url": "guide/icon.html",
    "revision": "4facc0cdf4a5c8718a425722ef586bea"
  },
  {
    "url": "guide/index.html",
    "revision": "15603a96ba996f9215d8a59e432b854c"
  },
  {
    "url": "guide/page.html",
    "revision": "fb598f195714fd737f17650cfda8c080"
  },
  {
    "url": "guide/third-party-support.html",
    "revision": "54597957aa74b004f80ddf74e88f233b"
  },
  {
    "url": "guide/Todo.html",
    "revision": "a61b81f243d726785b57676f73b3a408"
  },
  {
    "url": "index.html",
    "revision": "fe2601ebfdc05e1b3eb229c76fca2be2"
  },
  {
    "url": "logo.gif",
    "revision": "36e0231044c40383b466997c8f13b6d7"
  },
  {
    "url": "yun.svg",
    "revision": "ebbd22f3cde555d95e5dec5d41ed8505"
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
