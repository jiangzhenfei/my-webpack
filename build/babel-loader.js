var babel = require("babel-core")

module.exports = function (source, inputSourceMap) {
    // console.log(source,inputSourceMap )
    var babelOptions = {
        presets: ['env'],
        inputSourceMap: inputSourceMap,
        sourceMaps: true,
        filename: this.request.split('!')[1].split('/').pop(),
    }
    var result = babel.transform(source, babelOptions)
    this.callback(null, result.code, result.map)
}