const { merge } = require('webpack-merge');

const commonConfig = require('./webpack.common');

const devPlugins = require('./plugins/dev');

if (process.env.NODE_ENV === undefined) {
	process.env.NODE_ENV = 'development';
}

const config = {
	mode: 'development',

	target: 'web',

	devtool: 'eval-cheap-source-map',

	plugins: devPlugins,
};

module.exports = merge( commonConfig, config );