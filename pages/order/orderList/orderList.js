// pages/order/orderList/orderList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    order_title: ['全部', '待付款', '待发货', '待收货', '已完成'],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this
    that.setData({
      current: options.tab
    })
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
  // swiper切换(点击)
  changeTitle: function (e) {
    var that = this
    var index = e.currentTarget.dataset.id
    that.setData({
      current: index,
    })
  },
  // swiper切换(滑动)
  changeSwiper: function (e) {
    var that = this
    var current = e.detail.current
    if (e.detail.source == "touch") {
      that.setData({
        current: current
      })
    }
  },

  // 前往订单详情
  toOrderData:function(e){
    var index = e.currentTarget.dataset.index
    wx.navigateTo({
      url: '../orderData/orderData?index='+index,
    })
  }
})