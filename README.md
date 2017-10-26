# ts写一个测试npm包

1. 写一个工具函数
2. 测试该函数
3. 编译ts
4. 发布

```
npm run build
npm run pub
```

**关于单元测试**

*这里暂时没用单元测试的方法去做，后面补充。*

在test/index.ts 引入src的工具函数来测试是否正确，这里的测试代码是用webpack转成bundlejs在浏览器中跑的

```
npm test
打开浏览器输入localhost:8080 
打开console查看

```
