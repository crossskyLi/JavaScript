// 代码切换暗黑模式;
const hack = () => {
  // make font style & bg style

  const customStyle = {
    color: '#d0d3d8',
    background: '#17181a',
    lineHeight: '30px',
    fontSize: '16px',
  };
  Array.from(document.querySelectorAll('*')).forEach((item) => {
    const ignoreElmReg = /p-4|button|input|textarea/gi;
    if (ignoreElmReg.test(item.tagName) || ignoreElmReg.test(item.className)) {
      return;
    }
    Object.entries(customStyle).forEach(([key, value]) => {
      item.style[key] = value;
    });
  });

  // 删除不要的节点
  const removeNode = () => {
    const removeList = [
      '.ColumnPageHeader',
      '.FollowButton',
      '.RichContent-actions',
      '.qr_code_pc',
    ];
    removeList.forEach((className) => {
      document.querySelector(className)?.remove();
    });
  };

  removeNode();
};
hack();
