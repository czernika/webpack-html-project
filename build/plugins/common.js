const fs = require('fs');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const WebpackAssetsManifest = require('webpack-assets-manifest');
const WebpackBar = require('webpackbar');
const CopyPlugin = require('copy-webpack-plugin');
const SVGSpritemapPlugin = require('svg-spritemap-webpack-plugin');

const fileName = require('../utilities/filename'); 

const { htmlConfig, staticFiles, dist } = require('../../app.config');
const { icons } = dist;

let templates = [];
htmlConfig.routes.forEach(route => {
	if ( route.fromTo ) {
		route.template = route.fromTo;
		route.filename = route.fromTo.replace('.pug', '.html');
	}
	route.inject     = route.inject ?? htmlConfig.inject;
	route.publicPath = route.publicPath ?? htmlConfig.publicPath;

	templates.push(new HtmlWebpackPlugin(route));
});

const plugins = [
	new MiniCssExtractPlugin({
		filename: () => fileName('css'),
	}),

	...templates,

	new CaseSensitivePathsPlugin(),

	new WebpackAssetsManifest({
		output: 'manifest.json',
		space: 4,
	}),

	new WebpackBar(),

	new CopyPlugin(staticFiles),

	
];

if ( fs.existsSync(icons.dir) ) {
	plugins.push(
		new SVGSpritemapPlugin(
			icons.spriteMap,
			icons.sprites,
		)
	);
}

module.exports = plugins;