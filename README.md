# eslint-plugin-miniapp

小程序 eslint 校验规则

## 如何使用

* 安装插件
```bash
npm install -D eslint-plugin-miniapp
```

* 安装规则
```json
{
  "plugins": [
    "miniapp"
  ],
  "rules": {
    // 禁止对 this.data 直接赋值
    "miniapp/no-assign-this-data": 2,
  }
}
```

