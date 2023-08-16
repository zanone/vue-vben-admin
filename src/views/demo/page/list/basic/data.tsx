export const cardList = (() => {
  const result: any[] = [];
  for (let i = 0; i < 6; i++) {
    result.push({
      id: i,
      title: 'Admin',
      description: '后台管理系统',
      datetime: '2020-11-26 17:39',
      extra: '编辑',
      icon: 'logos:vue',
      color: '#1890ff',
      author: 'Vben',
      percent: 20 * (i + 1),
    });
  }
  return result;
})();
