const webpack = require('webpack');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

const { browserSync } = require('../../app.config');

const plugins = [
	new BrowserSyncPlugin(browserSync),

	new webpack.SourceMapDevToolPlugin({
		filename: '[file].map',
	}),
];

module.exports = plugins;
