const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractCss = new ExtractTextPlugin({
    filename: '[name].[hash].css'
});

//dir path
const rootPath = path.resolve(__dirname);
const srcPath = path.resolve(rootPath, 'src');
const distPath = path.resolve(rootPath, 'dist');

const config = {
    entry: {
        main: path.resolve(srcPath, 'main/index.js'),
        signIn: path.resolve(srcPath, 'signIn/index.js'),
        signUp: path.resolve(srcPath, 'signUp/index.js'),
        forgetPassword: path.resolve(srcPath, 'forgetPassword/index.js'),
        vendors: ['vue', 'axios', 'lodash']
    },

    output: {
        path: distPath,
        filename: '[name].[hash].js'
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ],
                include: [srcPath]
            }, {
                test: /\.css$/,
                use: extractCss.extract({
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true
                            }
                        }
                    ],
                    // use style-loader in development
                    fallback: 'style-loader'
                })
            }, {
                test: /\.scss$/,
                use: extractCss.extract({
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true
                            }
                        }, {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true
                            }
                        }
                    ],
                    // use style-loader in development
                    fallback: 'style-loader'
                }),
                include: [srcPath]
            }, {
                test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 40000,
                            name: '[name].[ext]?[hash]'
                        }
                    }
                ]
            }, {
                test: /\.(png|jpe?g|gif|svg)(\?\S*)?$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 40000,
                            name: '[name].[ext]?[hash]'
                        }
                    }
                ],
                include: [srcPath]
            },  {
                test: /\.vue$/,
                use: [
                    {
                        loader: 'vue-loader',
                        options: {
                            loader: {
                                scss: extractCss.extract({
                                    use: [
                                        {
                                            loader: 'css-loader',
                                            options: {
                                                sourceMap: true
                                            }
                                        }, {
                                            loader: 'sass-loader',
                                            options: {
                                                sourceMap: true
                                            }
                                        }
                                    ],
                                    fallback: 'vue-style-loader'
                                })
                            }
                        }
                    }
                ],
                include: [srcPath]
            }
        ]
    },

    devtool: 'source-map',

    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true
    },

    plugins: [
        extractCss,
        new HtmlWebpackPlugin({
            title: '主界面',
            template: path.resolve(srcPath, 'main/index.html'),
            filename: 'index.html',
            //chunks这个参数告诉插件要引用entry里面的哪几个入口
            chunks: ['main', 'vendors'],
            //要把script插入到标签里
            inject: 'body'
        }),
        new HtmlWebpackPlugin({
            title: '登录界面',
            template: path.resolve(srcPath, 'signIn/index.html'),
            filename: 'signIn.html',
            chunks: ['signIn', 'vendors'],
            inject: 'body'
        }),
        new HtmlWebpackPlugin({
            title: '注册界面',
            template: path.resolve(srcPath, 'signUp/index.html'),
            filename: 'signUp.html',
            chunks: ['signUp', 'vendors'],
            inject: 'body'
        }),
        new HtmlWebpackPlugin({
            title: '忘记密码界面',
            template: path.resolve(srcPath, 'forgetPassword/index.html'),
            filename: 'forgetPassword.html',
            chunks: ['forgetPassword', 'vendors'],
            inject: 'body'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendors',
            filename: '[name].[hash].js'
        })
    ]
};

module.exports = config;
