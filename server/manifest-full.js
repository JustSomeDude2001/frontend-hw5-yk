export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.121c6e33.js","imports":["_app/immutable/entry/start.121c6e33.js","_app/immutable/chunks/index.50458f76.js","_app/immutable/chunks/singletons.f9693b42.js","_app/immutable/chunks/paths.82f518a9.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.cd6dd0d2.js","imports":["_app/immutable/entry/app.cd6dd0d2.js","_app/immutable/chunks/index.50458f76.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			},
			{
				id: "/xkcd_fetcher",
				pattern: /^\/xkcd_fetcher\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
