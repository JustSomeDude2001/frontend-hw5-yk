export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.c35a76c4.js","imports":["_app/immutable/entry/start.c35a76c4.js","_app/immutable/chunks/index.50458f76.js","_app/immutable/chunks/singletons.42219a48.js","_app/immutable/chunks/paths.341140fa.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.354026cb.js","imports":["_app/immutable/entry/app.354026cb.js","_app/immutable/chunks/index.50458f76.js"],"stylesheets":[],"fonts":[]}},
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
