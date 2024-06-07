var CACHE_NAME = "cache-v1"; 
//キャッシュするファイル or ディレクトリを指定する
var urlsToCache = [
  "/CubismSdkMotionSyncPluginForWeb/Samples/TypeScript/Demo/dist/",
  "/CubismSdkMotionSyncPluginForWeb/Samples/TypeScript/Demo/dist/Resources/かめ太_Live2D/かめ太_Live2D.4096/texture_00.png",
  "/CubismSdkMotionSyncPluginForWeb/Samples/TypeScript/Demo/dist/Resources/かめ太_Live2D/かめ太_Live2D.4096/texture_01.png",
  "/CubismSdkMotionSyncPluginForWeb/Samples/TypeScript/Demo/dist/Resources/かめ太_Live2D/かめ太_Live2D.cdi3.json",
  "/CubismSdkMotionSyncPluginForWeb/Samples/TypeScript/Demo/dist/Resources/かめ太_Live2D/かめ太_Live2D.model3.json",
  "/CubismSdkMotionSyncPluginForWeb/Samples/TypeScript/Demo/dist/Resources/かめ太_Live2D/かめ太_Live2D.physics3.json",
  "/CubismSdkMotionSyncPluginForWeb/Samples/TypeScript/Demo/dist/Resources/かめ太_Live2D/かめ太_Live2D.moc3",
  "/CubismSdkMotionSyncPluginForWeb/Samples/TypeScript/Demo/dist/Core/",
  "/CubismSdkMotionSyncPluginForWeb/Samples/TypeScript/Demo/dist/src/",
  "/CubismSdkMotionSyncPluginForWeb/Samples/TypeScript/Demo/dist/Resources/",
  "/CubismSdkMotionSyncPluginForWeb/Samples/TypeScript/Demo/dist/assets",
  "/CubismSdkMotionSyncPluginForWeb/Samples/TypeScript/Demo/dist/app/"

];

// install
self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      console.log("Opened cache");
      return cache.addAll(urlsToCache);
    })
  );
});
// activate
self.addEventListener("activate", function (event) {
  var cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(function (cacheNames) {
      return Promise.all(
        cacheNames.map(function (cacheName) {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
// fetch
self.addEventListener("fetch", function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      if (response) {
        return response;
      }

      var fetchRequest = event.request.clone();

      return fetch(fetchRequest).then(function (response) {
        if (!response || response.status !== 200 || response.type !== "basic") {
          return response;
        }

        var responseToCache = response.clone();

        caches.open(CACHE_NAME).then(function (cache) {
          cache.put(event.request, responseToCache);
        });

        return response;
      });
    })
  );
});