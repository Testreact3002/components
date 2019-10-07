const path = require("path");
const Dotenv = require('dotenv-webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
require('dotenv').config();
module.exports = {
    devtool: 'source-map',
    entry: "./src/index.js",
    output: {
        path: path.join(__dirname, "../dist"),
        filename: "index.js",
    },
    resolve: {	
      modules: [
	    process.env.NODE_PATH, 
	    "node_modules"
      ],
    },	
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-react']
                }
            }
        }, {
            test: /\.css$/,
            use: [
                  { loader: "style-loader" },
                  { 
		    loader: "css-loader",
		    options : {
                      modules : false
		    }
		  }
                ]
        },
        {
            test: /\.(png|jpg|gif)$/,
            include: [
               new RegExp(path.normalize(process.env.NODE_PATH)+"[^/]+/img/")
            ], 
            use: [
                {
                    loader: 'file-loader',
                    options: {
                      outputPath:"img",
                    }
                }
            ]
            
        },
        {
            test: /\.(svg)$/,
            include: [
               new RegExp(path.normalize(process.env.NODE_PATH)+"[^/]+/img/")
            ], 
            use: [
                {
                    loader: 'file-loader',
                    options: {
                      outputPath:"img",
                    }
                }
            ]
            
        }
        ]
    },
    plugins: [
	new Dotenv(),
        new  CleanWebpackPlugin(),
    ]
}
