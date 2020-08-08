# k-ui

## 初始化
```
yarn install
```

### 启动
```
yarn serve
```

### 组件打包
```
yarn lib
```
### UI库
```bash
npm install k-cgq-ui -S 
```
### 引入
```ts
import kUi from 'k-cgq-ui'
import 'k-cgq-ui/dist/k-ui.css'

Vue.use(kUi)
```
### Button 使用
```html
<div style="margin-bottom: 10px;">
      <KButton>一般</KButton>
      <KButton type="primary">主要</KButton>
      <KButton type="success">成功</KButton>
      <KButton type="info">成功</KButton>
      <KButton type="warning">警告</KButton>
      <KButton type="danger">错误</KButton>
    </div>
    <div style="margin-bottom: 10px;">
      <KButton plain>一般</KButton>
      <KButton type="primary" plain>主要</KButton>
      <KButton type="success" plain>成功</KButton>
      <KButton type="info" plain>成功</KButton>
      <KButton type="warning" plain>警告</KButton>
      <KButton type="danger" plain>错误</KButton>
   </div>
   <div style="margin-bottom: 10px;">
      <KButton round>一般</KButton>
      <KButton type="primary" round>主要</KButton>
      <KButton type="success" round>成功</KButton>
      <KButton type="info" round>成功</KButton>
      <KButton type="warning" round>警告</KButton>
      <KButton type="danger" round>错误</KButton>
   </div>
   <div style="margin-bottom: 10px;">
      <KButton circle>般</KButton>
      <KButton type="primary" circle>要</KButton>
      <KButton type="success" circle>功</KButton>
      <KButton type="info" circle>功</KButton>
      <KButton type="warning" circle>告</KButton>
      <KButton type="danger" circle>误</KButton>
   </div>
```
