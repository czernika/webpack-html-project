const { merge } = require('webpack-merge');
const path = require('path');

const fileName = require('./utilities/filename');

const rules = require('./rules');

const commonPlugins = require('./plugins/common');

const {
	entries,
	webpackConfig,
	dist,
} = require('../app.config');
const { root, context, outputDir, clean } = dist;

const commonConfig = {
	entry: entries,

	context: path.resolve(root, context),

	output: {
		path: path.resolve(root, outputDir),

		filename: () => fileName('js'),
		publicPath: '',
		clean,
	},

	stats: 'errors-only',

	module: { rules },

	plugins: [
		...commonPlugins,
	],
};

module.exports = merge( commonConfig, webpackConfig );
