const path = require('path');
const imagemin = require('imagemin');
const webp = require('imagemin-webp');

const { dist } = require('../../app.config');

const { images, root, context } = dist;

imagemin(
	images.webp.from,
	{
		destination: path.resolve(root, context, images.webp.to),
		plugins: [
			webp( { quality: images.webp.quality } ),
		],
	}
);
