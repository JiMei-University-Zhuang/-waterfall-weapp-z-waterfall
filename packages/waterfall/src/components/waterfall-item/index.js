Component({
  options: {
    multipleSlots: true
  },

  properties: {
    index: {
      type: Number
    }
  },

  lifetimes: {
    attached() {
      this.createIntersectionObserver()
        .relativeToViewport()
        .observe('.item', (res) => {
          if (res.intersectionRatio > 0) {
            this.triggerEvent('show');
          }
        });
    }
  },

  methods: {
    onLoad(e) {
      // 获取图片加载后的高度
      const query = this.createSelectorQuery();
      query.select('.item').boundingClientRect((rect) => {
        if (rect) {
          this.triggerEvent('heightchange', {
            height: rect.height,
            index: this.data.index
          });
        }
      }).exec();
    }
  }
}); 