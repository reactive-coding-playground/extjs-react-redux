module.exports = {
    entry: [
        './src/index.jsx'
    ],
    output: {
        path: './dist',
        filename: 'react-redux-demo.js',
        library: 'ReactReduxDemo',
        libraryTarget: 'var'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [{
            loader: 'babel',
            exclude: /node_modules/
        }]
    },
    devtool: 'source-map',
    watch: true
}