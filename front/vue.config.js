const webpack = require('webpack');

module.exports = {
    devServer: {
        proxy: 'http://34.238.172.100:3001',
    },
    configureWebpack: {
        plugins: [ new webpack.ProvidePlugin({ jQuery: 'jquery', }), ],
    },
};
