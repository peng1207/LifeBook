Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: "myTitile",
    listArray: [{ name: "1", age: 12 }, { name: "2" }, { name: "3" }, { name: "4" }, { name: "5" }, { name: "6" }, { name: "7" }, { name: "8" }, { name: "9" }, { name: "10" }, { name: "11" }, { name: "12" }, { name: "13" }, { name: "14" }, { name: "15" }, { name: "16" }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  /**
   * 点击按钮
   */
  buttonOnClick: function (e) {
    wx.navigateTo({
      url: '/page/create/create',
    });
    wx.setStorage({
      key: 'huangshpeng',
      data: {
          "list":[
            {
              "year":"2017",
              "month":"12",
              "day":"01", 
              "title":"11",
              "price":"12.00",
              "id":"01"
            },
            {
              "year": "2017",
              "month": "12",
              "day": "01",
              "title": "11",
              "price": "12.00",
              "id": "01"
            },
            {
              "year": "2017",
              "month": "12",
              "day": "01",
              "title": "11",
              "price": "12.00",
              "id": "01"
            },
            {
              "year": "2017",
              "month": "12",
              "day": "02",
              "title": "11",
              "price": "12.00",
              "id": "01"
            },
            {
              "year": "2018",
              "month": "12",
              "day": "02",
              "title": "11",
              "price": "12.00",
              "id": "01"
            },
            {
              "year": "2018",
              "month": "12",
              "day": "02",
              "title": "11",
              "price": "12.00",
              "id": "02"
            }
          ]     
      },
    })
  },
  cellAction: function (e) {
    console.log(e.currentTarget.dataset.name);
    wx.navigateTo({
      url: "/page/bookDetaile/bookDetaile?name=" + e.currentTarget.dataset.name.name,
    });
      
  }
})