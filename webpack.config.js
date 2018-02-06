var path = require('path');

var webpack = require('webpack');
var htmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var isProd = process.env.NODE_ENV === 'production';

module.exports = {
	entry: './src/app.js',
	output: {
		path: path.resolve(__dirname, './dist'),
		publicPath:'/dist/',
		filename: 'js/build.js',
		chunkFilename: 'js/[name].[chunkhash:5].js',
	},
	module: {
		rules: [{
			test: /\.jsx$/,
			loader: 'babel-loader',
			exclude: /node_modules/
		}, {
			test: /\.js$/,
			loader: 'babel-loader',
			exclude: /node_modules/
		}, {
			test: /\.css$/,
			loader: 'style-loader!css-loader'
		}, {
			test: /\.(scss||sass)$/,
			loader: 'style-loader!css-loader!sass-loader'
		}, {
			test: /\.(eot|ttf|woff|woff2)$/,
			loader: 'file-loader',
			options: {
				name: 'font/[name].[ext]?[hash]'
			}
		}, {
			test: /\.(png|jpg|gif|svg)$/,
			loader: 'file-loader',
			options: {
				name: 'img/[name].[ext]?[hash]'
			}
		}]
	},
	resolve: {
		extensions: ['.jsx', '.js', '.json', '.scss', '.css'],
		alias: {
			'@': path.resolve(__dirname, './src')
		}
	},
	devServer: {
		historyApiFallback: true,
		noInfo: true,
		disableHostCheck: true,
		host: '0.0.0.0',
		port: 8081
	},
	target: 'web',
	devtool: '#eval-source-map'
};

if (isProd) {
	module.exports.devtool = '#source-map';
	module.exports.plugins = (module.exports.plugins || []).concat([
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: '"production"'
			}
		}),
		new webpack.optimize.UglifyJsPlugin({
			sourceMap: true,
			compress: {
				warnings: false
			}
		}),
		new webpack.LoaderOptionsPlugin({
			minimize: true
		}),
		new ExtractTextPlugin('css/style.css'),
		new htmlWebpackPlugin({
			title: 'index',
			filename: 'index.html', //通过模板生成的文件名
			template: 'template.html', //模板路径
			inject: 'body', //是否自动在模板文件添加 自动生成的js文件链接
			hash: true
		})
	]);
}