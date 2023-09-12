module.exports = {
  users: [{
    username: '',
    password: '',
    // wxpusher推送id。 若新增用户，需扫码关注 https://wxpusher.zjiecode.com/api/qrcode/R3Y5lCFAWquwQQ3voYpdcQcL4LALBKJcPHeHIMWroucNwBAgB1ZnMWsQKSKelwCj.jpg
    uid: '',
    defaultOrderType: 'random', // 默认方式选择：全部随机random、第一个=0（说明：当商家变动，自定义失效时）
    orderType: [{ // 自定义点餐
      date: 'all', // 日期。全部/周几(周日=0，周一=1)
      keyword: '', // 关键字。若不为空，则按照关键字筛选。再根据筛选结果随机。
    }]
  }]
}