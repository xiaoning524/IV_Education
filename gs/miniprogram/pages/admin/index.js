// pages/admin/index.js
const app = getApp()

Page({
  data: {
    allNum: 0,
    noNum: 0,
    teacherNum: 0,
    boyNum: 0,
    girlNum: 0,
    gNum1: 0,
    gNum2: 0,
    gNum3: 0,
    gNum4: 0,
    gNum5: 0,
    gNum6: 0,
    gNum7: 0,
    userData: [],
    x1:0,
    x2:0,
    x3:0,
    x4:0,
    x5:0,
    x6:0,
    Exe:0,
  },
  goToWJ: function(){
    wx.navigateTo({
      url: '../wj0/index',
    })
  },
  goToxdhxd: function(){
    wx.navigateTo({
      url: '../xdhxd/index',
    })
  },
  goTomsxfx: function(){
    wx.navigateTo({
      url: '../msxfx/index',
    })
  },
  goToxgxs: function(){
    wx.navigateTo({
      url: '../xgxs/index',
    })
  },
  goTousers: function(){
    wx.navigateTo({
      url: '../users/index',
    })
  },
  onReady: function () {
    var that = this;
    that.setData({
      userData: app.globalData.userData,
      allNum: app.globalData.allNum,
      noNum: app.globalData.noNum,
      teacherNum: app.globalData.teacherNum,
      boyNum: app.globalData.boyNum,
      girlNum: app.globalData.girlNum,
      Exe: app.globalData.ExeN3 + app.globalData.ExeN4
    })
    console.log(that.data.userData)
  },
})