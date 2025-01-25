Page({
  data: {
    list: [],
    loading: false,
    page: 1,
    pageSize: 10
  },

  onLoad() {
    this.loadData()
  },

  // 加载数据
  async loadData() {
    if (this.data.loading) return
    
    this.setData({ loading: true })

    try {
      // 模拟接口请求
      const newList = await this.mockRequest()
      
      this.setData({
        list: [...this.data.list, ...newList],
        page: this.data.page + 1
      })
    } catch (error) {
      console.error('加载数据失败:', error)
    } finally {
      this.setData({ loading: false })
    }
  },

  // 模拟数据请求
  mockRequest() {
    return new Promise((resolve) => {
      setTimeout(() => {
        const { page, pageSize } = this.data
        const list = Array.from({ length: pageSize }, (_, index) => ({
          id: (page - 1) * pageSize + index + 1,
          image: `https://picsum.photos/300/400?random=${Math.random()}`,
          title: `标题 ${(page - 1) * pageSize + index + 1}`
        }))
        resolve(list)
      }, 1000)
    })
  },

  // 触发加载更多
  onLoadMore() {
    this.loadData()
  },

  // 图片加载完成
  onImageLoad(e) {
    console.log('图片加载完成:', e.detail)
  }
}) 