const path = require('path');

const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');

const { dist } = require('../../app.config');
const { root, context, images } = dist;

const loader = {
	test: /\.(png|jp(e?)g)$/,
	include: [
		path.resolve(root, context, images.dir),
		'/node_modules/',
	],
	use: [
		{
			loader: ImageMinimizerPlugin.loader,
			options: {
				severityError: 'warning',
				filename: images.dir + '/[name].[hash:8].webp',
				minimizerOptions: {
					plugins: [
						['webp', { quality: 85 }],
					],
				},
			},
		},
	],
};

module.exports = loader;
