// pages/msxfx/index.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    num: 0,
    boy: 0,
    girl: 0,
    gNum1: 0,
    gNum2: 0,
    gNum3: 0,
    gNum4: 0,
    gNum5: 0,
    gNum6: 0,
    gNum7: 0,
    teacher: 0,
    eduNum: 0,
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
    var num = app.globalData.allNum - app.globalData.noNum;
    this.setData({
      num: num,
      boy: app.globalData.boyNum,
      girl: app.globalData.girlNum,
      gNum1: app.globalData.gNum1,
      gNum2: app.globalData.gNum2,
      gNum3: app.globalData.gNum3,
      gNum4: app.globalData.gNum4,
      gNum5: app.globalData.gNum5,
      gNum6: app.globalData.gNum6,
      gNum7: app.globalData.gNum7,
      teacher: app.globalData.teacherNum,
      eduNum: app.globalData.eduNum,
      eduNumA: app.globalData.eduNumA,
      eduNumB: app.globalData.eduNumB,
      eduNumC: app.globalData.eduNumC,
      eduNumD: app.globalData.eduNumD,
      couT1: app.globalData.couT1,
      couT2: app.globalData.couT2,
      couT3: app.globalData.couT3,
      couT4: app.globalData.couT4,
      couN1: app.globalData.couN1,
      couN2: app.globalData.couN2,
      couN3: app.globalData.couN3,
      couN4: app.globalData.couN4,
      couN5: app.globalData.couN5,
      couN6: app.globalData.couN6,
      couN7: app.globalData.couN7,
      couN8: app.globalData.couN8,
      ExeN1: app.globalData.ExeN1,
      ExeN2: app.globalData.ExeN2,
      ExeN3: app.globalData.ExeN3,
      ExeN4: app.globalData.ExeN4,
    })
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

  }
})