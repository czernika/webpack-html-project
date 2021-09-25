const path = require('path');

const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');

const { dist } = require('../../app.config');
const { root, context, images } = dist;

const loader = {
	test: /\.(jp(e?)g|png|gif|ico|webp)$/i,
	include: [
		path.resolve(root, context, images.dir),
		'/node_modules/',
	],
	type: 'asset',
	generator: {
		filename: images.dir + '/[name].[hash:8][ext]',
	},
	parser: {
		dataUrlCondition: {
			maxSize: images.maxSize * 1024, // 8kb
		},
	},
	use: [
		{
			loader: ImageMinimizerPlugin.loader,
			options: {
				severityError: 'warning',
				minimizerOptions: {
					plugins: [
						['gifsicle', { interlaced: true, optimizationLevel: 3 }],
						['mozjpeg', { quality: 80 }],
						['pngquant', { quality: [0.6, 0.8] }],
					],
				},
			},
		},
	],
};

module.exports = loader;
