module.exports = {
    entry: "./index.js",
    output: {
        filename: "dist/bundle.js"
    },
    resolve: {
        extensions: ["", ".js", ".jsx", ".vue"]
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: "/node_modules/",
                loader: "babel-loader"
            }, {
                test: /\.vue$/,
                exclude: "/node_modules/",
                loader: "vue-loader"
            }
        ]
    }
}
