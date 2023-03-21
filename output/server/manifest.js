export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.ea80cf88.js","imports":["_app/immutable/entry/start.ea80cf88.js","_app/immutable/chunks/index.50458f76.js","_app/immutable/chunks/singletons.5092e33d.js","_app/immutable/chunks/paths.3f5e3148.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.d2d56c90.js","imports":["_app/immutable/entry/app.d2d56c90.js","_app/immutable/chunks/index.50458f76.js"],"stylesheets":[],"fonts":[]}},
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
