# h-utils

tips

1. 每次添加新的子包时，应在跟目录执行 npm install 重置包之间的依赖关系，否则 rollup 会找不到依赖倒置打包有问题

工作流

1. 多包管理 [Lerna](https://lerna.js.org/)
2. 构建工具 [Rollup](https://www.rollupjs.com/)
3. 代码格式化 [Prettier](https://prettier.io/)
4. 代码检查 [ESLint](https://eslint.org/)
   - [ESLint 规则](https://zh-hans.eslint.org/docs/latest/rules/)
