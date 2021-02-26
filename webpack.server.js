/** @format */

const path = require('path');
const merge  = require('webpack-merge');
const nodeExternals = require('webpack-node-externals');
const baseConfig= require('./webpack.base.js');
const rootPath = path.join(__dirname, '.');
const config = {
	// Tell webpack the root file of our
	// server application
	entry: `${rootPath}/src/index.js`,

	// Inform webpack that we're building a bundle
	// for node js, rather then for the  browser

	target: 'node',

	// Tell webpack where to put
	// the output file  that is generated

	output: {
		filename: 'bundle.js',
		path: `${rootPath}/build`,
	},
	externals:[nodeExternals()]
};

module.exports = merge(config,baseConfig);
