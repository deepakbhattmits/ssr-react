/** @format */

const path = require('path');
const  merge  = require('webpack-merge');

const baseConfig= require('./webpack.base.js');
const rootPath = path.join(__dirname, '.');
const config = {
	// Tell webpack the root file of our
	// server application
	entry: `${rootPath}/src/client/client.js`,

	// Tell webpack where to put
	// the output file  that is generated

	output: {
		filename: 'bundle.js',
		path: `${rootPath}/public`,
	}
};

module.exports = merge(config,baseConfig);
