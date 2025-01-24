/**
 * 计算每列的高度和位置
 * @param {Array} items - 所有项目的高度数组
 * @param {Number} columnCount - 列数
 * @param {Number} columnGap - 列间距
 * @param {Number} rowGap - 行间距
 * @returns {Object} 返回每列的项目分配和高度信息
 */
export const calculateLayout = (items, columnCount = 2, columnGap = 10, rowGap = 10) => {
  const columns = Array.from({ length: columnCount }, () => ({
    height: 0,
    items: []
  }));

  items.forEach((item, index) => {
    // 找到高度最小的列
    const minHeightColumn = columns.reduce((prev, curr) => 
      prev.height <= curr.height ? prev : curr
    );

    minHeightColumn.items.push(index);
    minHeightColumn.height += item + rowGap;
  });

  return columns;
};

/**
 * 计算图片在瀑布流中的实际显示尺寸
 * @param {Number} originalWidth - 原始宽度
 * @param {Number} originalHeight - 原始高度
 * @param {Number} containerWidth - 容器宽度
 * @returns {Object} 返回计算后的宽高
 */
export const calculateImageSize = (originalWidth, originalHeight, containerWidth) => {
  const ratio = originalHeight / originalWidth;
  return {
    width: containerWidth,
    height: containerWidth * ratio
  };
}; 