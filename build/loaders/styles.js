const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isProd = require('../utilities/isprod');

const {
	cssnanoPreset,
	dist,
} = require('../../app.config');

const loader = {
	test: /\.(s?)(a|c)ss$/i,
	use: [
		{
			loader: MiniCssExtractPlugin.loader,
			options: {
				publicPath: dist.publicPath,
			},
		},
		{
			loader: 'css-loader',
		},
		{
			loader: 'postcss-loader',
			options: {
				postcssOptions: {
					plugins: isProd ?
						{
							'css-declaration-sorter': {},
							'cssnano': { preset: cssnanoPreset },
						} :
						{},
				},
			},
		},
		{
			loader: 'sass-loader',
		},
	],
};

module.exports = loader;
