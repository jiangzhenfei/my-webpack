let fs = require('fs');
let path = require('path')
// ejs主要局势替换模板内的内容
let ejs = require('ejs')

let entry = path.resolve(__dirname,'../js/index.js');
let output = path.resolve(__dirname,'../public/main.js')
let content = fs.readFileSync(entry,'utf8')

// 保存所有依赖的模块的名称和内容
var modules = []
content = content.replace(/require\(['"](.+?)['"]\)/g,function(){
    let name = path.join(__dirname,'../js',arguments[1])
    let content = fs.readFileSync(name)
    modules.push({
        name,
        content
    })
    return `require('${name}');`
})

// 去掉换行符
content = content.replace(/[\r\n]+/g,';')

// 最后需要拼成的模板
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



