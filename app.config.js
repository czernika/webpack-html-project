module.exports = {

	// webpack entry points
	entries: {
		app: [
			'./js/index.js',
			'./css/style.css',
		],
	},

	// @see https://github.com/jantimon/html-webpack-plugin#options
	htmlConfig: {
		routes: [
			{ fromTo: 'index.pug' },
			{ fromTo: 'pages/about.html' },
		],

		inject: true,

		publicPath: './',
	},

	// @see https://webpack.js.org/plugins/copy-webpack-plugin
	staticFiles: {
		patterns: [
			{
				from: 'static',
				to: 'static',
				noErrorOnMissing: true,
			},
		],
	},

	// @see https://browsersync.io/docs/options
	browserSync: {
		host: 'localhost',
		port: 3000,
		server: {
			baseDir: ['dist'],
		},
		notify: false,
		files: [
			'*.html',
			'css/**/*.css',
			'sass/**/*.scss',
			'js/**/*.js',
		],
	},

	// 
	devServerConfig: {
		port: 9000,
	},

	// output configuration
	dist: {

		// app root
		root: __dirname,

		// folders
		context: 'app',
		outputDir: 'dist',

		// fonts
		fonts: {
			dir: 'fonts',
		},

		// images
		images: {
			dir: 'img',
			maxSize: 8, //kb
			convertToWebp: true,
		},

		// icons
		icons: {
			dir: 'icons',
			spriteMap: 'app/icons/**/*.svg',
			sprites: {},
		},

		// assets public path
		publicPath: '../',

		// clean output
		clean: {
			dry: false, // change to true for testing.
			keep: (asset) => asset.includes('.gitignore'),
		},

		// split scripts on chunks or not
		optimization: {
			splitChunks: true,
			compressionThreshold: 4, //kb
			minRatio: 0.8,
		},
	},

	// @see https://cssnano.co/docs/optimisations
	cssnanoPreset: 'default',

	// custom webpack configuration
	webpackConfig: {},

}