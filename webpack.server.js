const path = require('path');

module.exports = {
    // Inform webpack that we are building a bundle for NodeJS, not the browser
    target: 'node',

    // Tell webpack the root file of our server app
    entry: './src/index.js',

    // Tell webpack where to put the outputted file
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },

    // Tell webpack to run babel on every file
    module: {
        rules: [
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: [
                        'react',
                        'stage-0',
                        ['env', {targets: {browsers: ['last 2 versions']}}]
                    ]
                }
            }
        ]
    }
}