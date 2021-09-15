const { NODE_ENV } = process.env
const { CheckerPlugin } = require('awesome-typescript-loader')

/** @type { import('@vue/cli-service').ProjectOptions } */
module.exports = {
	publicPath: NODE_ENV === 'production' ? '/dir/' : '/',

	productionSourceMap: NODE_ENV !== 'production',
	
	configureWebpack: {
		resolve: { extensions: [".ts"] },
		module: {
			rules: [{
				test: /\.ts$/,
				loader: 'awesome-typescript-loader',
				exclude: /node_modules/
			}]
		},
		plugins: [
			new CheckerPlugin()
		]
	},
}