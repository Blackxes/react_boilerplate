const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const { merge } = require('webpack-merge');

const Environment = process.env.NODE_ENV;

// common config
const commonConfig = {
    entry: {
        app: path.resolve(__dirname, 'app/index.tsx')
    },
    externals: {},
    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                loader: 'file-loader',
                options: {
                    outputPath: 'assets/images'
                }
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                loader: 'file-loader',
                options: {
                    outputPath: 'assets/fonts'
                }
            },
            {
                test: /\.tsx?$/,
                use: 'awesome-typescript-loader'
            },
            {
                test: /\.jsx?$/,
                use: 'babel-loader'
            }
        ]
    },
    output: {
        chunkFilename: '[name].bundle.js',
        filename: 'js/[name].bundle.js',
        path: path.resolve(__dirname, 'dist/'),
        publicPath: ''
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'app/templates/template.html'),
            filename: path.resolve(__dirname, 'dist/index.html')
        }),
        new FaviconsWebpackPlugin({
            logo: path.resolve(__dirname, 'assets/icons/favicon.ico'),
            outputPath: '',
            prefix: 'assets/icons',
            favicons: {
                icons: {
                    android: false,
                    appleIcon: false,
                    appleStartup: false,
                    coast: false,
                    favicons: true,
                    firefox: false,
                    windows: false,
                    yandex: false
                }
            }
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    resolve: {
        extensions: ['.css', '.scss', '.ts', '.tsx', '.js', '.jsx']
    },

    mode: 'development',
    devtool: 'eval-source-map',
    devServer: {
        contentBase: '/',
        hot: true
    },
    node: {
        fs: 'empty'
    }
};

// development config
const devConfig = {
    mode: 'development',
    devtool: 'eval-source-map',
    devServer: {
        contentBase: '/',
        hot: true
    }
};

// production config
const prodConfig = {
    mode: 'production',
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    },
    externals: {
        react: 'React',
        'react-dom': 'ReactDOM',
        'react-router-dom': 'ReactRouterDOM',
        'styled-component': 'styled-component',
        redux: 'redux',
        lodash: '_',
        'redux-saga': 'umd redux-saga',
        '@fortawesome/fontawesome-svg-core': 'FontAwesomeCVGCore',
        '@fortawesome/free-regular-svg-icons': 'FontAwesomeRegularIcons',
        '@fortawesome/free-solid-svg-icons': 'FontAwesomeSolidIcons',
        '@fortawesome/react-fontawesome': 'FontAwesomeReactMiddleware',
        'final-form': 'FinalForm',
        'react-final-form': 'ReactFinalForm'
    }
};

module.exports = (env, argv) => {
    switch (argv.mode) {
        case 'development':
            return merge(commonConfig, devConfig);
        case 'production':
            return merge(commonConfig, prodConfig);
    }
};
