# Waterfall Component for WeChat Mini Program

`z-waterfall`,一个轻量级、高性能的微信小程序瀑布流组件，支持懒加载和自动布局计算。

## ✨ 特性

- 🖼️ 支持图片懒加载
- 📱 支持上拉加载更多
- 🎨 灵活的样式自定义
- 📐 智能间距计算
- 🔌 原生组件模式（类似 swiper）
- 🔄 数据与视图完全解耦

## 📦 安装

### 使用 npm

`npm install @waterfall-weapp/z-waterfall`

### 使用 yarn

`yarn add @waterfall-weapp/z-waterfall`

## 🚀 快速开始

### 1. 引入组件

在页面的 json 配置文件中声明组件：

```json
{
"usingComponents": 
  {
   "waterfall": "@waterfall-weapp/z-waterfall/src/components/waterfall/index"
  }
}
```

### 2. 使用组件

**在 wxml 文件中：**

```xml
<waterfall
  column="2"
  column-gap="10"
  row-gap="10"
  bindloadmore="onLoadMore"
>
  <block wx:for="{{list}}" wx:key="id">
    <view slot="item-{{index}}">
     <image lazy-load src="{{item.image}}"mode="widthFix"style="width: 100%;"/>
     <view class="title">{{item.title}}</view>
    </view>
  </block>
</waterfall>
```

**在 js 文件中：**

```js
Page({
  data: {
  list: []
},
onLoadMore() {
  // 加载更多数据
  this.loadMoreData();
},
loadMoreData() {
  // 实现加载数据的逻辑
}
});
```

## 📖 API

### Props


| 属性              | 说明                               | 类型     | 默认值 |
| ----------------- | ---------------------------------- | -------- | ------ |
| column            | 瀑布流列数                         | `number` | 2      |
| columnGap         | 列间距（单位：rpx）                | `number` | 10     |
| rowGap            | 行间距（单位：rpx）                | `number` | 10     |
| loadMoreThreshold | 触发加载更多的距离阈值（单位：px） | `number` | 100    |

### Events


| 事件名   | 说明                         | 回调参数            |
| -------- | ---------------------------- | ------------------- |
| loadmore | 滚动到底部时触发加载更多事件 | -                   |
| scroll   | 滚动时触发                   | event: 滚动事件对象 |

### Slots


| 名称         | 说明                             |
| ------------ | -------------------------------- |
| item-{index} | 瀑布流子项，index 为列表项的索引 |

## 🎨 自定义样式

组件提供了基础的样式类名，你可以通过覆盖这些类名来自定义样式：

```css
/ 瀑布流容器 /
.waterfall {
/ 自定义样式 /
}
/ 瀑布流列 /
.waterfall-column {
/ 自定义样式 /
}
/ 瀑布流项 /
.waterfall-item {
/ 自定义样式 /
}
```

## 🌰 示例

完整示例请参考 [examples/basic](../examples/basic) 目录。

## 📝 注意事项

1. 确保图片设置了 `mode="widthFix"` 以保证正确的宽高比
2. 建议使用 `lazy-load` 属性来优化图片加载性能
3. 列表项必须有唯一的 `key` 值

## 🤝 贡献

欢迎提交 Issue 或 Pull Request！

## 📄 License

[MIT](./LICENSE)
