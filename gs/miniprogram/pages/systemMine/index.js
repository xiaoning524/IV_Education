// pages/systemMine/index.js
const app = getApp();
import Charts from '../../wxcharts-min.js';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    avatarUrl: '',
    nickName: '请先完成测评'
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.getSetting({
      success: function (res) {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          wx.getUserInfo({
            success: function (res) {
              that.setData({
                avatarUrl: res.userInfo.avatarUrl,
                nickName: res.userInfo.nickName
              })
            }
          })
        }else{
          that.setData({
            nickName: '请授权小程序'
          })
        }
      }
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
    var data;
    wx.getStorage({
      key: 'key',
      success(res) {  
        data = res.data; 
        var num1 = (parseInt(data.b11) + parseInt(data.b12) + parseInt(data.b13)) / 3;
        var num2 = (parseInt(data.b21) + parseInt(data.b22) + parseInt(data.b23)) / 3;
        var num3 = (parseInt(data.b31) + parseInt(data.b32) + parseInt(data.b33)) / 3;
        var num4 = (parseInt(data.b41) + parseInt(data.b42) + parseInt(data.b43)) / 3;
        var num5 = (parseInt(data.b51) + parseInt(data.b52) + parseInt(data.b53)) / 3;
        new Charts({
          animation: true,
          canvasId: 'canvas',
          type: 'radar',
          categories: ['机会把握', '风险承担', '组织管理', '资源整合', '创新素养'],
          series: [{ name: '', data: [num1, num2, num3, num4, num5] }],
          width: 350,
          height: 350,
          extra: { radar: { max: 5 } }
        })
        }
    })
    
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
});
