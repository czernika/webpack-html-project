const { merge } = require('webpack-merge');

const commonConfig = require('./webpack.common');

const prodPlugins = require('./plugins/prod');

const optimizationConfig = require('./optimization/vendor');

const { dist } = require('../app.config');

if (process.env.NODE_ENV === undefined) {
	process.env.NODE_ENV = 'production';
}

const config = {
	mode: 'production',

	target: 'browserslist',
	
	output: { pathinfo: false },

	devtool: false,

	plugins: prodPlugins,

	optimization: dist.optimization.splitChunks ? optimizationConfig : {},
};

module.exports = merge( commonConfig, config );