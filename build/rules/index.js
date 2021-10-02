const scriptsLoader = require('../loaders/scripts');
const stylesLoader = require('../loaders/styles');
const fontsLoader = require('../loaders/fonts');
const imagesLoader = require('../loaders/images');
const svgLoader = require('../loaders/svg');
const pugLoader = require('../loaders/pug');

const { dist } = require('../../app.config');

const rules = [
	scriptsLoader,
	stylesLoader,
	fontsLoader,
	...imagesLoader,
	svgLoader,
	pugLoader,
];

module.exports = rules;
