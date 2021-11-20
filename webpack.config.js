const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const {VueLoaderPlugin} = require('vue-loader');
const ESLintWebpackPlugin = require('eslint-webpack-plugin');


const isDev = process.env.NODE_ENV === 'development';
const isProd = process.env.NODE_ENV === 'production';
const optimization = () => {
    const config = {
        splitChunks: {
            chunks: 'all',
        },
    };
    if (isProd) {
        config.minimizer = [
            new MiniCssExtractPlugin(),
            new TerserWebpackPlugin(),
        ];
        config.minimize = true;
    }
    return config;
};
const filename = (ext) => isDev ? `[name].${ext}` : `[name].[hash].${ext}`;
const plugins = () => {
    const main = [
        new HtmlWebpackPlugin({
            template: 'index.html',
            minify: {
                collapseWhitespace: isProd,
            },
        }),
        new VueLoaderPlugin(),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: filename('css'),
        }),

    ];
    if (isDev) {
        main.push(new ESLintWebpackPlugin());
    }
    if (isProd) {
        main.push(new BundleAnalyzerPlugin());
    }
    return main;
};

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: ['@babel/polyfill', path.resolve(__dirname, './src/main.js')],
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: '[name].[contenthash].js',
    },
    name: 'webpack-vue',
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },

            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,

                    },
                    'css-loader',
                    'postcss-loader',
                ],
            },
            {
                test: /\.scss?$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,

                    }, 'css-loader', 'postcss-loader', 'sass-loader',
                ],

            },
            {
                test: /\.handlebars$/,
                loader: 'handlebars-loader',
            },
            {
                test: /\.(png|jpg|svg|gif)$/,
                use: ['file-loader'],
            },
            {
                test: /\.(ttf|woff|woff2|eot)$/,
                use: ['file-loader'],
            },
        ],
    },

    plugins: plugins(),
    optimization: optimization(),
    devServer: {
        static: path.join(__dirname, 'public'),
        compress: true,
        port: 1024,


    },
    resolve: {
        extensions: ['.js', '.json', '.jsx'],
        alias: {
            '@src': path.resolve(__dirname, 'src'),
            '@components': path.resolve(__dirname, 'src/components'),
            '@public': path.resolve(__dirname, 'public'),
            'vue$': 'vue/dist/vue.esm.js',
            '@layouts': path.resolve(__dirname, 'src/layouts'),
            '@ui-components': path.resolve(__dirname, 'src/components/ui-components'),
        },
    },
    devtool: isDev ? 'source-map' : 'nosources-source-map',
    // stats: "errors-only"

};
