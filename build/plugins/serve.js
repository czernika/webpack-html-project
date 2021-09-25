const webpack = require('webpack');

const plugins = [
	new webpack.SourceMapDevToolPlugin({
		filename: '[file].map',
	}),
];

module.exports = plugins;
