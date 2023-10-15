const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
module.exports = {
    mode: "production",
    entry: {
        sidebar: path.resolve(__dirname, "..", "src", "sidebar.ts"),
        ServiceWorker: path.resolve(__dirname, "..", "src", "serviceWorker.ts"),
    },
    output: {
        path: path.join(__dirname, "../dist"),
        filename: "[name].js",
    },
    resolve: {
        extensions: [".ts", ".js"],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "ts-loader",
                exclude: /node_modules/,
            },
        ],
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                { from: "*.json", to: ".", context: "src" },
                { from: "*.html", to: ".", context: "src" }
            ]
        }),
    ],
};