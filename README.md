## 一、项目介绍
本项目是用前端：react webpack axios 后端用koa mongdb 搭建的管理系统，纯前端渲染。


## 二、项目结构
```bash
├── README.md
├── server  # 项目主目录
│   ├── bin  # 程序入口
│   ├── db # 数据库模块
│   ├── lib # 第三方库
│   ├── public # 静态资源文件
│   ├── app.js  # koa扩展
│   ├── package.json # 包管理文件
│   ├── routes # 路由
│   ├── package-lock.json #锁包文件
│   └── views #视图层，使用nunjucks
├── config # webpack打包配置文件
├── bin
│   └── start.js # supervisor调用的运行脚本
├── src # 前端代码
│   ├── pages
```
## 三、运行方式
`node` 使用 `8.11.1`，使用 `nvm` 管理 `node` 版本。
```bash
nvm install 8.11.1
nvm use 8.11.1
npm run dev
npm run start
```


