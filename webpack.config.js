const path = require("path");
const webpack = require("webpack");

module.exports = {
    mode: "development",
    plugins: [new webpack.HotModuleReplacementPlugin()],
    entry: path.resolve(__dirname, "src", "index.js"),
    output: {
        path: path.resolve(__dirname, "public"),
        filename: "bundle.js",
    },
    devServer: {
        // contentBase: path.resolve(__dirname, 'public'),
        open: true,
        // clientLogLevel: 'silent',
        port: 3000,
        hot: true,
    },
    module: {
        rules: [
            {
                test: /\.(jsx|js)$/,
                include: path.resolve(__dirname, "src"),
                exclude: /node_modules/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: [
                                [
                                    "@babel/preset-env",
                                    {
                                        targets: "defaults",
                                    },
                                ],
                                "@babel/preset-react",
                            ],
                        },
                    },
                ],
            },
            {
              test: /\.(png|jp(e*)g|svg|gif)$/,
              use: [
                {
                  loader: 'file-loader',
                  options: {
                    name: "images/[hash]-[name].[ext]",
                  },
                },
              ],
            },
       {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              // Prefer `dart-sass`
              implementation: require.resolve("sass"),
              },
           },
          {
            loader: 'postcss-loader'
          }
        ],
        },
      ],
    },
};
