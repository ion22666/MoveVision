const path = require("path");

module.exports = {
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules)/,
                use: {
                    // `.swcrc` can be used to configure swc
                    loader: "swc-loader",
                },
            },
        ],
    },
    output: {
        path: path.resolve(__dirname, "public/assets"),
    },
    devServer: {
        devMiddleware: {
            writeToDisk: true,
        },
        compress: true,
        port: 9000,
    },
    mode: "development",
    cache: false,
};
