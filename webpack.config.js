const path = require('path')

module.exports = {
    entry: "./src/index.jsx",
    module: {
        rules: [
            {
                test: /\.(js)|\.(jsx)$/,
                exclude: /node-modules/,
                use: ['babel-loader']
            },
            {
                test: /\.(scss)$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    output: {
        path: path.resolve(__dirname, 'public'),
        publicPath: "public/",
        filename: "bundle.js"
    },
    devServer: {
        contentBase: './public',
        historyApiFallback: true
    }
}