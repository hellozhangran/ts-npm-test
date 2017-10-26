# ts写一个测试npm包

1. 首先用ts写一个工具函数，见src/index.ts
2. 测试该函数。 npm test 用webpack启动本地服务测试，测试代码见test/index.ts
3. 如果测试没问题，npm build，把ts代码编译放入lib/
4. npm run pub 发布该包
5. 随便建一个测试demo，引入一下这个 ts-npm-test包试下好不好使


```
npm test
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
