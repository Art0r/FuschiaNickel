const path = require('path');

module.exports = {
    entry: {
        external: '/static/exporter.js',
    },
    mode: 'production',
    output: {
        filename: '[name].bundle.js',  // output bundle file name
        path: path.resolve(__dirname, 'static/dist'),  // path to our Django static directory
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.(scss|sass)$/,
                use: [
                    'style-loader',  // Inject styles into DOM
                    'css-loader',    // Translates CSS into CommonJS
                    'sass-loader',   // Compiles Sass to CSS
                ],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif|ico)$/i,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'images/',  // Specify the output path for images
                    },
                },
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.json'], // Resolve these extensions
    },
};