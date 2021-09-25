const CompressionPlugin = require('compression-webpack-plugin');
const zlib = require('zlib');

const { dist } = require('../../app.config');

const compressionPlugins = [
	new CompressionPlugin({
		filename: '[path][base].gz',
		algorithm: 'gzip',
		test: /\.(js|css)$/,
		threshold: dist.optimization.compressionThreshold * 1024, // 2 kb.
		minRatio: dist.optimization.minRatio,
	}),
	new CompressionPlugin({
		filename: '[path][base].br',
		algorithm: 'brotliCompress',
		test: /\.(js|css)$/,
		compressionOptions: {
			params: {
				[zlib.constants.BROTLI_PARAM_QUALITY]: 11,
			},
		},
		threshold: dist.optimization.compressionThreshold * 1024, // 2 kb
		minRatio: dist.optimization.minRatio,
	}),
];

module.exports = compressionPlugins;
