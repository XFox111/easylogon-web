console.log("[sw.js]: Running service worker");

/** @type {string} */
let cacheName = "easylogon-pwa";

/** @type {string[]} */
let filesToCache = [
	"/",
	"/success",
	"/error",
	"/privacy",
	"/assets/index.js",
	"/assets/PrivacyPage.js",
	"/assets/index.css",
	"/favicon.svg"
];

self.addEventListener("install", /** @param {InstallEvent} event */ event =>
	event.waitUntil((async () =>
	{
		/** @type {Cache} */
		let cache = await caches.open(cacheName);
		await cache.addAll(filesToCache);
	})())
);

self.addEventListener("fetch", /** @param {FetchEvent} event */ event =>
	event.respondWith(
		(async () =>
		{
			// Don't cache anything but GET requests
			if (event.request.method !== "GET")
				return await fetch(event.request);

			// Try cache first
			let response = await caches.match(new URL(event.request.url));

			if (response)
				return response;

			response = await fetch(event.request);

			// If fetch succeeds, cache the response
			if (response.ok)
			{
				console.log("[sw.js]: Caching file", event.request.url);

				const cache = await caches.open(cacheName);
				await cache.put(event.request, response.clone());
			}

			return response;
		})()
	)
);
