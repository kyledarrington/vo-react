const path = require('path')
const nodeExternals = require('webpack-node-externals')

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
    },
    {
        entry : {
            server: "./server/index.js"
        },
        output : {
            path: path.join(__dirname, "server/dist"),
            publicPath: "/",
            filename: "server.js"
        },
        target: 'node',
        node: {
            __dirname: false,
            __filename: false
        },
        externals: [nodeExternals()],
        module: {
            rules: [
                {
                    test: /\.(js)$|\.(jsx)$/,
                    exclude: /node-modules/,
                    use: ['babel-loader']
                },
                {
                    test: /\.(scss)$/,
                    use: ['isomorphic-style-loader', 'css-loader', 'sass-loader']
                }
            ]
        },
    }
]
