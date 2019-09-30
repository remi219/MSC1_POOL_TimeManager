const webpack = require('webpack');

module.exports = {
    devServer: {
        proxy: 'http://54.198.162.120:3001',
    },
    configureWebpack: {
        plugins: [ new webpack.ProvidePlugin({ jQuery: 'jquery', }), ],
    },
};
