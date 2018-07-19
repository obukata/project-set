module.exports = {
	mode: 'production',
	entry: [
		// 'babel-polyfill',
		'./assets/scripts/common.js',
	],
	output: {
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: [
					{
						// Babel を利用する
						loader: 'babel-loader',
						// Babel のオプションを指定する
						options: {
							presets: [
								// env を指定することで、ES2018 を ES5 に変換。
								// {modules: false}にしないと import 文が Babel によって CommonJS に変換され、
								// webpack の Tree Shaking 機能が使えない
								['env', {'modules': false}]
							]
						}
					}
				]
			}
		]
	}
}