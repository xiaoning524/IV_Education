// pages/wj1/index.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    a11Item: 'item',
    a12Item: 'item',
    a13Item: 'item',
    a21Item: 'item',
    a22Item: 'item',
    a23Item: 'item',
    a31Item: 'item',
    a32Item: 'item',
    a33Item: 'item',
    a41Item: 'item',
    a42Item: 'item',
    a43Item: 'item',
    a51Item: 'item',
    a52Item: 'item',
    a53Item: 'item',
    a61Item: 'item',
    a62Item: 'item',
    a63Item: 'item'
  },

  next: function () {
    if(app.globalData.admin){
      wx.navigateTo({
        url: '../wj2/index',
      })
    }else{
      if (
        app.globalData.a11 == 0 ||
        app.globalData.a12 == 0 ||
        app.globalData.a13 == 0 ||
        app.globalData.a21 == 0 ||
        app.globalData.a22 == 0 ||
        app.globalData.a23 == 0 ||
        app.globalData.a31 == 0 ||
        app.globalData.a32 == 0 ||
        app.globalData.a33 == 0 ||
        app.globalData.a41 == 0 ||
        app.globalData.a42 == 0 ||
        app.globalData.a43 == 0 ||
        app.globalData.a51 == 0 ||
        app.globalData.a52 == 0 ||
        app.globalData.a53 == 0 ||
        app.globalData.a61 == 0 ||
        app.globalData.a62 == 0 ||
        app.globalData.a63 == 0
      ) {
        wx.showToast({
          title: '请填写全部问卷',
          icon: 'loading',
          duration: 1000
        })
      } else {
        wx.redirectTo({
          url: '../wj2/index',
        })
      }
    }
  },
  a11: function (e) {
    app.globalData.a11 = e.detail.value;
    this.setData({ a11Item: 'itemed' })
  },
  a12: function (e) {
    app.globalData.a12 = e.detail.value;
    this.setData({ a12Item: 'itemed' })
  },
  a13: function (e) {
    app.globalData.a13 = e.detail.value;
    this.setData({ a13Item: 'itemed' })
  },
  a21: function (e) {
    app.globalData.a21 = e.detail.value;
    this.setData({ a21Item: 'itemed' })
  },
  a22: function (e) {
    app.globalData.a22 = e.detail.value;
    this.setData({ a22Item: 'itemed' })
  },
  a23: function (e) {
    app.globalData.a23 = e.detail.value;
    this.setData({ a23Item: 'itemed' })
  },
  a31: function (e) {
    app.globalData.a31 = e.detail.value;
    this.setData({ a31Item: 'itemed' })
  },
  a32: function (e) {
    app.globalData.a32 = e.detail.value;
    this.setData({ a32Item: 'itemed' })
  },
  a33: function (e) {
    app.globalData.a33 = e.detail.value;
    this.setData({ a33Item: 'itemed' })
  },
  a41: function (e) {
    app.globalData.a41 = e.detail.value;
    this.setData({ a41Item: 'itemed' })
  },
  a42: function (e) {
    app.globalData.a42 = e.detail.value;
    this.setData({ a42Item: 'itemed' })
  },
  a43: function (e) {
    app.globalData.a43 = e.detail.value;
    this.setData({ a43Item: 'itemed' })
  },
  a51: function (e) {
    app.globalData.a51 = e.detail.value;
    this.setData({ a51Item: 'itemed' })
  },
  a52: function (e) {
    app.globalData.a52 = e.detail.value;
    this.setData({ a52Item: 'itemed' })
  },
  a53: function (e) {
    app.globalData.a53 = e.detail.value;
    this.setData({ a53Item: 'itemed' })
  },
  a61: function (e) {
    app.globalData.a61 = e.detail.value;
    this.setData({ a61Item: 'itemed' })
  },
  a62: function (e) {
    app.globalData.a62 = e.detail.value;
    this.setData({ a62Item: 'itemed' })
  },
  a63: function (e) {
    app.globalData.a63 = e.detail.value;
    this.setData({ a63Item: 'itemed' })
  }
})