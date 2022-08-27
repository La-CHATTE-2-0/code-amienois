# parcel-pwa

A minimalistic PWA made with Parcel. Mostly serves as a reference implementation for anyone that want to make PWAs and love Parcel.

[Application deployed here](https://nicolas-van.github.io/parcel-pwa/). (And yes, it's an real installable PWA in the real working world of real working things with things that really work, not a damn example with a guy saying you "yeah, it should work".)

That application is deployed to Github Pages using Github Actions. You can simply fork this repository and it will deployed on your Github account automatically.

## Things to note:

* [manifest.webmanifest](./manifest.webmanifest) as well as the [favicon.ico](./favicon.ico), [logo192.png](./logo192.png) and [logo512.png](./logo512.png) files.
* Usage of the [parcel-plugin-sw-cache](https://github.com/mischnic/parcel-plugin-sw-cache) which is not great but works to generate a service worker using [workbox](https://developers.google.com/web/tools/workbox).
* The `cache` key in the [package.json](./package.json) containing the configuration of `parcel-plugin-sw-cache`.
