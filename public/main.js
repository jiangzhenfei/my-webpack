
(function(modules) {
    function require(moduleId) {
        var module = {
            exports: {}
        };
        modules[moduleId].call(module.exports, module, module.exports, require);
        return module.exports;
    }
    return require( "../js/index.js");
})
({
    
    "../js/index.js":
    (function(module, exports, require){
        eval(`let name = require('./people.js');;let css = require('../css/style.css');;console.log(name)`);
    }),
    
    "./people.js":
    (function(module, exports, require){
        eval(`let r = require('./two.js');;console.log( r );module.exports = 'fei11'`);
    }),
    
    "./two.js":
    (function(module, exports, require){
        eval(`module.exports = '测试'`);
    }),
    
    "../css/style.css":
    (function(module, exports, require){
        eval(`let style = document.createElement('style');
        style.innerText = "html,body{    width: 100%;    height: 100%;    background: red;}"
        document.head.appendChild(style)
        `);
    }),
    
});
