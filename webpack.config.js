const path = require("path");

module.exports = {
    entry: "./src/index.ts",
    output: {
        path: path.join(__dirname, "public"),
    },
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
            {
                test: /\.ts$/,
                exclude: /(node_modules)/,
                use: {
                    loader: "swc-loader",
                    options: {
                        jsc: {
                            parser: {
                                syntax: "typescript",
                            },
                        },
                    },
                },
            },
        ],
    },
    devServer: {
        static: {
            directory: "public",
        },
        compress: true,
        port: 9000,
    },
    mode: "development",
    cache: false,
};
