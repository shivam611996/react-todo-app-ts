const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env, options) => {
  const isDevMode = options.mode === "development";

  return {
    entry: "./src/index.tsx",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "bundle.js"
    },
    resolve: {
      extensions: [".js", ".jsx", ".json", ".ts", ".tsx"]
    },
    devtool: isDevMode ? "source-map" : false,
    module: {
      rules: [{
          test: /\.(ts|tsx)$/,
          exclude: /node_modules/,
          use: ["babel-loader", "ts-loader", "eslint-loader"]
        },
        {
          enforce: "pre",
          test: /\.js$/,
          loader: "source-map-loader"
        },
        {
          test: /\.(sa|sc|c)ss$/,
          use: [{
              loader: MiniCssExtractPlugin.loader,
              options: {
                hmr: isDevMode ? true : false // hot module replacement
              }
            },
            "css-loader",
            "sass-loader"
          ]
        },
        {
          test: /\.(png|svg|jpg|gif)$/i,
          use: ["file-loader"]
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "public", "index.html")
      }),
      new MiniCssExtractPlugin({
        filename: "./src/index.css"
      })
    ]
  }
};