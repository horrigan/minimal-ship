const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const htmlPlugin = new HtmlWebpackPlugin({
	template: "./src/index.html",
	filename: "./index.html"
});

module.exports = {
	entry: './src/index.js',
	mode: 'development',
	module: {
		rules: [
			{ test: /\.(js|jsx)$/, exclude: /node_modules/, use: ['babel-loader'] },
			{ test: /\.less$/,
				use: [ 'style-loader',  'postcss-loader', 'less-loader' ]
			}
		],
	},
	devtool: 'inline-source-map',
	resolve: {
		extensions: ['*', '.js', '.jsx']
	},
	output: {
		path: path.resolve('dist'),
		publicPath: '/',
		filename: 'bundle.js'
	},
	plugins: [
		htmlPlugin
	],
	devServer: {
		historyApiFallback: true,
	}
};

