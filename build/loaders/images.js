const path = require('path');
const { dist } = require('../../app.config');

const { root, context, images } = dist;

const loader = [
	{
		test: /\.(jp(e?)g|png|gif|ico|webp)$/i,
		include: [
			path.resolve(root, context, images.dir),
			path.resolve(root, context, images.webp.to),
			'/node_modules/',
		],
		type: 'asset',
		parser: {
			dataUrlCondition: {
				maxSize: images.maxSize * 1024, // 8kb
			},
		},
		generator: {
			// eslint-disable-next-line
			filename: images.dir + '/[name].[hash:8][ext]',
		},
	},
];

module.exports = loader;
