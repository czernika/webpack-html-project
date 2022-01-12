const path = require('path');

const { dist } = require('../../app.config');

const { root, context, fonts } = dist;

const loader = {
	test: /\.(ttf|eot|woff(2?)|svg)$/,
	include: [
		path.resolve(root, context, fonts.dir),
		'/node_modules/',
	],
	type: 'asset/resource',
	generator: {
		// eslint-disable-next-line
		filename: fonts.dir + '/[name]/[name].[hash:8][ext]'
	},
};

module.exports = loader;
