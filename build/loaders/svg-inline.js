const path = require('path');

const svgToMiniDataURI = require('mini-svg-data-uri');

const { dist } = require('../../app.config');

const { root, context, icons } = dist;

const loader = {
	test: /\.svg$/,
	include: [
		path.resolve(root, context, icons.dir),
		'/node_modules/',
	],
	type: 'asset/inline',
	generator: {
		dataUrl: content => svgToMiniDataURI(content.toString())
	},
};

module.exports = loader;
