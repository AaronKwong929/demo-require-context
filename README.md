# require.context 注册组件以及引入依赖测试/ 缺一个路由注册

require.context
一个 webpack 的 api,通过执行 require.context 函数获取一个特定的上下文,主要用来实现自动化导入模块,在前端工程中,如果遇到从一个文件夹引入很多模块的情况,可以使用这个 api,它会遍历文件夹中的指定文件,然后自动导入,使得不需要每次显式的调用 import 导入模块

require.context(directory, useSubdirecotries, regExp)

directory {String} - 读取文件的路径

useSubdirectories {Boolean} - 是否遍历文件的子目录

regExp {RegExp} - 匹配文件的正则

### require.context 返回一个函数，其具有三个属性

resolve - 接受一个参数（匹配文件），返回这个匹配文件相对于整个工程的相对路径

keys - 返回匹配成功文件的名字组成的数组

id - 执行环境的 id, 返回的是一个字符串

---

在 /components 和 /plugins 下编写一个 index.js 用于 require.context 注册

/components/ 下为组件注册

/plugins/ 下为依赖注册(element-ui)

### 具体使用例查看/components/index.js 与 /plugins/index.js

### 使用

```js
// main.js
import '@components';
import '@plugins';
```
