const path = require('path');
const { merge } = require('webpack-merge');

const commonConfig = require('./webpack.common');

const servePlugins = require('./plugins/serve');

const {
	dist,
	devServerConfig,
} = require('../app.config.js');
const { root, outputDir } = dist; 

if (process.env.NODE_ENV === undefined) {
	process.env.NODE_ENV = 'development';
}

const defaultServeConfig = {
	static: {
		directory: path.join(root, outputDir),
	},
	open: true,
	compress: true,
	hot: true,
};

const devServer = { ...defaultServeConfig, ...devServerConfig };

const config = {
	mode: 'development',

	target: 'web',

	devtool: 'eval-cheap-source-map',

	devServer,

	plugins: servePlugins,
};

module.exports = merge( commonConfig, config );