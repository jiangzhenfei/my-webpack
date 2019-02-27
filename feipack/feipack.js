let fs = require('fs');
let path = require('path')
// ejs主要局势替换模板内的内容
let ejs = require('ejs')
// 入口
let entry = path.resolve(__dirname,'../js/index.js');
let output = path.resolve(__dirname,'../public/main.js')

// style-loader
let styleLoaders = function( source ){
    console.log(JSON.stringify(source))
    return (
        `let style = document.createElement('style');
        style.innerText = ${JSON.stringify(source).replace(/(\\n)+/g,'')}
        document.head.appendChild(style)
        `
    )
    
}

// 保存所有的模块以及每个模块的依赖
const _modules = {}
/**
 * 
 * @param {文件目录} content 
 */
function resolveDevDependencies( entry ){
    // 读出文件的所有内容
    let content = fs.readFileSync(entry,'utf8');
    // 该文件模块地址为key存到_modules中
    _modules[entry] = {
        devDependencies: []
    }
    if( /.css$/.test(entry) ){
        content = styleLoaders(content)
    }else{
        // 从内容中读出所有的依赖模块
        content = content.replace(/require\(['"](.+?)['"]\)/g,function(){
            let name = path.join(__dirname,'../js',arguments[1])
            console.log(name,arguments[1])
            // 读出依赖的内容递归找出每个文件的依赖
            resolveDevDependencies(name)
            _modules[entry].devDependencies.push(name)
            return `require('${name}');`
        }).replace(/[\r\n]+/g,';') // 去掉所有的空格和换行
    }
    
    _modules[entry].content = content;
}
resolveDevDependencies(entry)


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
    <%for(let i in _modules){
        let module = _modules[i];%>
    "<%-i%>":
    (function(module, exports, require){
        eval(\`<%-module.content%>\`);
    }),
    <%}%>
});
`
let r = ejs.render(template,{
    entry,
    _modules
})
fs.writeFileSync(output,r)



