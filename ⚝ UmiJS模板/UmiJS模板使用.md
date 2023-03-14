## UMIJS TO USE

> DOSC：https://v3.umijs.org/zh-CN/docs/getting-started



### 指令套餐

- 通用
  ```shell
  yarn add axios ahooks prop-types antd 
  yarn add -D cross-env @umijs/fabric prettier stylelint eslint husky lint-staged 
  ```



### UI库

- `antd`  主要用于研发企业级中后台产品
- `antd-mobile ` 移动端组件
- `Material UI`  全球顶级React组件库 Google

  ```shell
  yarn add @mui/material @emotion/react @emotion/styled
  ```



### 必备工具

- `ahooks`  一套高质量可靠的 React Hooks 库
- `axios `  一个基于 promise 的网络请求库
- `cross-env -D`  使用环境变量
- `react-hook-form`  一种Form方案



### 常用工具

- `prop-types` 定义组件接收 props 类型
- `clasnames`  动态添加 CSS
- `immutable`  数据不可变性



### 规范化工具

- `husky`  提交时hook处理

- `@umijs/fabric stylelint prettier eslint -D`  css格式化 检查代码规范

  ```js
  husky install
  npx husky add .husky/pre-commit "yarn lint-staged"
  
  "scripts": {
    "prepare": "husky install"
  },
  "husky": {
    "pre-commit": "lint-staged"
    },
  "lint-staged": {
    "*.{js,jsx,less,md,json}": [
      "prettier --write",
      "git add"
    ],
    "*.ts?(x)": [
      "prettier --parser=typescript --write"
    ]
  },
  ```



### 移动端适用

- lib-flexible
- 自动将 px 转换 rem（换算单位:**pc端一般基数为37.5，移动端一般为16或者32**）
  - [postcss-plugin-px2rem](https://www.npmjs.com/package/postcss-plugin-px2rem)
  - [postcss-pxtorem](https://www.npmjs.com/package/postcss-pxtorem) `推荐`
  - [postcss-px2rem](https://www.npmjs.com/package/postcss-px2rem)
- 自动将 px 转换 viewport
  - [postcss-px-to-viewport](https://github.com/evrone/postcss-px-to-viewport)



### 目录结构参考

```js
- src 开发目录
- pages 视图
    - module-a 模块A
      - components 私有组件
        - ComA.tsx
        - ComB.tsx
      - index.module.less
      - index.tsx
      - Content.tsx
    - module-b 模块B
- components 公共组件
  - index.ts 导出所有组件
  - header
    - index.tsx
    - index.module.less
    - User.tsx
    - useGetBaseInfo.hooks.ts
- routers 路由文件
- store redux中的数据
- utils 这里是以utils为后缀
  - index.ts
  - a.utils.ts
  - b.utils.ts
- hooks 这里是以hooks为后缀
  - index.ts
  - a.hooks.ts
  - b.hooks.ts
- styles 静态资源文件
- service api请求,这里是以api为后缀
  - a.api.ts 按照后端微服务进行划分
  - b.api.ts
- constans 常量
```



### Commit规范

```shell
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

 type主要有以下几种类型：

- **feat**: 一个新特性
- **fix**: 修复bug
- **docs**: 文档修改
- **style**: 不影响代码含义的更改（空格、格式、缺少分号等）
- **refactor**: 代码重构
- **perf**: 优化性能
- **test**: 测试用例修改
- **chore**: 对构建过程或辅助工具和库的更改，例如文档生成























