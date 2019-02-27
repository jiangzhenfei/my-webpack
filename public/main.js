
(function(modules) {
    function require(moduleId) {
        var module = {
            exports: {}
        };
        modules[moduleId].call(module.exports, module, module.exports, require);
        return module.exports;
    }
    return require( "/Users/fei/webpack/my-webpack/js/index.js");
})
({
    
    "/Users/fei/webpack/my-webpack/js/index.js":
    (function(module, exports, require){
        eval(`let name = require('/Users/fei/webpack/my-webpack/js/people.js');;console.log(name)`);
    }),
    
    "/Users/fei/webpack/my-webpack/js/people.js":
    (function(module, exports, require){
        eval(`let r = require('/Users/fei/webpack/my-webpack/js/two.js');;console.log( r );module.exports = 'fei11'`);
    }),
    
    "/Users/fei/webpack/my-webpack/js/two.js":
    (function(module, exports, require){
        eval(`module.exports = '测试'`);
    }),
    
});
