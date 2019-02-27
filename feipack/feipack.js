let fs = require('fs');
let path = require('path')
let ejs = require('ejs')

let entry = path.resolve(__dirname,'../js/index.js');
let output = path.resolve(__dirname,'../public/main.js')
let content = fs.readFileSync(entry,'utf8')

var modules = []
console.log(content)
content = content.replace(/require\(['"](.+?)['"]\)/g,function(){
    let name = path.join(__dirname,'../js',arguments[1])
    let content = fs.readFileSync(name)
    modules.push({
        name,
        content
    })
    return `require('${name}');`
})

let template = `
(function(modules) {
    function require(moduleId) {
        var module = {
            exports: {}
        };
        modules[moduleId].call(module.exports, module, module.exports, require);
        return module.exports;
    }
    return require( "<%-entry%>");
})
({
    "<%-entry%>":
    (function(module, exports, require) {
        eval(\`<%-content%>\`);
    })
    <%for(let i=0;i<modules.length;i++){
        let module = modules[i];%>,
        "<%-module.name%>":
        (function(module, exports, require){
            eval(\`<%-module.content%>\`);
        })
    <%}%>
});
`
let r = ejs.render(template,{
    entry,
    content,
    modules
})
fs.writeFileSync(output,r)



