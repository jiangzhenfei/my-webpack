
const path = require('path');
function resolve (dir) {
    return path.join(__dirname, './', dir)
}
module.exports = {
    entry:__dirname + '/js/index.js',
    mode: 'development',
    output: {
        path: __dirname + "/public",//打包后的文件存放的地方
        filename: "bundle.js"//打包后输出文件的文件名
    },
    devtool: 'eval-source-map',
    module: {
        rules: [{
            test: /\.js$/,
            use: [{
                //这里写 loader 的路径
                loader: resolve('./build/babel-loader.js'), 
            }]
        },
        {
            test: /\.css$/,
            use: [{
                //这里写 loader 的路径
                loader: resolve('./build/css-loader.js'), 
            }]
        }
        ]
    }
}