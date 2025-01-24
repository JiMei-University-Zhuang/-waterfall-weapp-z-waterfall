Component({
  options: {
    multipleSlots: true
  },
  
  properties: {
    // 列数
    column: {
      type: Number,
      value: 2
    },
    // 列间距
    columnGap: {
      type: Number,
      value: 10
    },
    // 行间距
    rowGap: {
      type: Number,
      value: 10
    },
    // 加载更多的阈值
    loadMoreThreshold: {
      type: Number,
      value: 100
    }
  },

  data: {
    leftItems: [],
    rightItems: [],
    leftHeight: 0,
    rightHeight: 0
  },

  methods: {
    // 监听子组件高度变化
    onItemHeightChange(e) {
      const { height, index } = e.detail;
      
      if (this.data.leftHeight <= this.data.rightHeight) {
        this.setData({
          leftItems: [...this.data.leftItems, index],
          leftHeight: this.data.leftHeight + height + this.data.rowGap
        });
      } else {
        this.setData({
          rightItems: [...this.data.rightItems, index],
          rightHeight: this.data.rightHeight + height + this.data.rowGap
        });
      }
    },

    // 监听滚动到底部
    onScroll(e) {
      const { scrollHeight, scrollTop, clientHeight } = e.detail;
      if (scrollHeight - scrollTop - clientHeight < this.data.loadMoreThreshold) {
        this.triggerEvent('loadmore');
      }
    }
  }
}); 