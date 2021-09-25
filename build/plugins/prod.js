const ShowAssetsTablePlugin = require('webpack-show-assets-table');

const compression = require('../optimization/compression');

const plugins = [
	new ShowAssetsTablePlugin(),

	...compression,
];

module.exports = plugins;
