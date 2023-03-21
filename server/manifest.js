export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.10a63fa4.js","imports":["_app/immutable/entry/start.10a63fa4.js","_app/immutable/chunks/index.50458f76.js","_app/immutable/chunks/singletons.6140ae89.js","_app/immutable/chunks/paths.70769117.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.62047f57.js","imports":["_app/immutable/entry/app.62047f57.js","_app/immutable/chunks/index.50458f76.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js')
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
