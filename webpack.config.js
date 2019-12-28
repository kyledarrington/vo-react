const path = require('path')

module.exports = [
    {
        entry: {
            main: "./src/index.jsx",
        },
        module: {
            rules: [
                {
                    test: /\.(js)$|\.(jsx)$/,
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
            extensions: ['*', '.js', '.jsx', '.json']
        },
        output: {
            path: path.resolve(__dirname, 'public'),
            publicPath: "public/",
            filename: "[name].bundle.js"
        },
        devServer: {
            contentBase: path.join(__dirname, 'public'),
            historyApiFallback: true
        }
    },
    {
        entry: {
            blog: "./src/blog/index.jsx",
        },
        module: {
            rules: [
                {
                    test: /\.(js)$|\.(jsx)$/,
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
            extensions: ['*', '.js', '.jsx', '.json']
        },
        output: {
            path: path.resolve(__dirname, 'public/blog'),
            publicPath: path.join(__dirname, 'public'),
            filename: "[name].bundle.js"
        },
        devServer: {
            contentBase: path.join(__dirname, 'public'),
            historyApiFallback: true
        }
    }
]
