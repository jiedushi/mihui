module.exports = {
  rules: [
    {
      pattern: /\/mihui\/api\/dataList.do$/,
      respondwith: 'chanceLis.json'
    },
    {
      pattern: /\/Tibet\/api\/dataList.do\?page=1$/,
      respondwith: 'datalist1.json'
    },
    {
      pattern: /\/Tibet\/api\/dataList.do\?page=$/,
      respondwith: 'datalist.json'
    }
  ]
}
