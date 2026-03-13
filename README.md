# Yuki 倾诉交流APP

## 项目简介

Yuki 是一款安卓平台上的倾诉与回应社交App，支持用户匿名或实名倾诉、获取回应、发起聊天。  
前端使用 Android Kotlin，后端采用 Node.js + Express，数据库为 MongoDB。

## 技���栈

- Android (Kotlin)
- Node.js + Express
- MongoDB

## 项目结构

```
android-app/           前端安卓项目
server/                后端服务代码
database/              数据库结构说明
README.md              项目说明文档
```

## 启动方式

1. 后端启动：
   ```bash
   cd server
   npm install
   node server.js
   ```
2. 前端启动：
   - 用 Android Studio 打开 `android-app`，编译运行
3. MongoDB
   - 本地启动或Atlas云服务

## 功能列表

- 用户注册/登录/匿名
- 发布倾诉、回应、评论、点赞
- 匹配/随机聊天
- 举报与屏蔽