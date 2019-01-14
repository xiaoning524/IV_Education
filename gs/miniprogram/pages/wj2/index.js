// pages/wj2/index.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    b11Item: 'item',
    b12Item: 'item',
    b13Item: 'item',
    b21Item: 'item',
    b22Item: 'item',
    b23Item: 'item',
    b31Item: 'item',
    b32Item: 'item',
    b33Item: 'item',
    b41Item: 'item',
    b42Item: 'item',
    b43Item: 'item',
    b51Item: 'item',
    b52Item: 'item',
    b53Item: 'item'
  },

  next: function () {
    if (app.globalData.admin) {
      wx.request({
        url: 'https://pigall.cn/gaoshan/add.php',
        data: {
          id: app.globalData.id,
          sex: app.globalData.sex,
          grade: app.globalData.grade,
          teacher: app.globalData.teacher,
          couse: app.globalData.couse,
          couseNum: app.globalData.couseNum,
          couseType: app.globalData.couseType,
          couseItem: app.globalData.couseItem,
          couseExe: app.globalData.couseExe,
          a11: app.globalData.a11,
          a12: app.globalData.a12,
          a13: app.globalData.a13,
          a21: app.globalData.a21,
          a22: app.globalData.a22,
          a23: app.globalData.a23,
          a31: app.globalData.a31,
          a32: app.globalData.a32,
          a33: app.globalData.a33,
          a41: app.globalData.a41,
          a42: app.globalData.a42,
          a43: app.globalData.a43,
          a51: app.globalData.a51,
          a52: app.globalData.a52,
          a53: app.globalData.a53,
          a61: app.globalData.a61,
          a62: app.globalData.a62,
          a63: app.globalData.a63,
          b11: app.globalData.b11,
          b12: app.globalData.b12,
          b13: app.globalData.b13,
          b21: app.globalData.b21,
          b22: app.globalData.b22,
          b23: app.globalData.b23,
          b31: app.globalData.b31,
          b32: app.globalData.b32,
          b33: app.globalData.b33,
          b41: app.globalData.b41,
          b42: app.globalData.b42,
          b43: app.globalData.b43,
          b51: app.globalData.b51,
          b52: app.globalData.b52,
          b53: app.globalData.b53
        },
        header: {
          'content-type': 'application/json'
        },
        success: function (res) {
          console.log(res.data)
        }
      })
      wx.setStorage({
        key: 'key',
        data: {
          id: app.globalData.id,
          name: app.globalData.name,
          sex: app.globalData.sex,
          grade: app.globalData.grade,
          teacher: app.globalData.teacher,
          couse: app.globalData.couse,
          couseNum: app.globalData.couseNum,
          couseType: app.globalData.couseType,
          couseItem: app.globalData.couseItem,
          couseExe: app.globalData.couseExe,
          a11: app.globalData.a11,
          a12: app.globalData.a12,
          a13: app.globalData.a13,
          a21: app.globalData.a21,
          a22: app.globalData.a22,
          a23: app.globalData.a23,
          a31: app.globalData.a31,
          a32: app.globalData.a32,
          a33: app.globalData.a33,
          a41: app.globalData.a41,
          a42: app.globalData.a42,
          a43: app.globalData.a43,
          a51: app.globalData.a51,
          a52: app.globalData.a52,
          a53: app.globalData.a53,
          a61: app.globalData.a61,
          a62: app.globalData.a62,
          a63: app.globalData.a63,
          b11: app.globalData.b11,
          b12: app.globalData.b12,
          b13: app.globalData.b13,
          b21: app.globalData.b21,
          b22: app.globalData.b22,
          b23: app.globalData.b23,
          b31: app.globalData.b31,
          b32: app.globalData.b32,
          b33: app.globalData.b33,
          b41: app.globalData.b41,
          b42: app.globalData.b42,
          b43: app.globalData.b43,
          b51: app.globalData.b51,
          b52: app.globalData.b52,
          b53: app.globalData.b53,
        }
      })
      // wx.switchTab({
      //   url: '../systemMine/index',
      // })
    } else {
      if (
        app.globalData.b11 == 0 ||
        app.globalData.b12 == 0 ||
        app.globalData.b13 == 0 ||
        app.globalData.b21 == 0 ||
        app.globalData.b22 == 0 ||
        app.globalData.b23 == 0 ||
        app.globalData.b31 == 0 ||
        app.globalData.b32 == 0 ||
        app.globalData.b33 == 0 ||
        app.globalData.b41 == 0 ||
        app.globalData.b42 == 0 ||
        app.globalData.b43 == 0 ||
        app.globalData.b51 == 0 ||
        app.globalData.b52 == 0 ||
        app.globalData.b53 == 0
      ) {
        wx.showToast({
          title: '请填写全部问卷',
          icon: 'loading',
          duration: 1000
        })
      } else {
        wx.request({
          url: 'https://pigall.cn/gaoshan/add.php',
          data: {
            id: app.globalData.id,
            sex: app.globalData.sex,
            grade: app.globalData.grade,
            teacher: app.globalData.teacher,
            couse: app.globalData.couse,
            couseNum: app.globalData.couseNum,
            couseType: app.globalData.couseType,
            couseItem: app.globalData.couseItem,
            couseExe: app.globalData.couseExe,
            a11: app.globalData.a11,
            a12: app.globalData.a12,
            a13: app.globalData.a13,
            a21: app.globalData.a21,
            a22: app.globalData.a22,
            a23: app.globalData.a23,
            a31: app.globalData.a31,
            a32: app.globalData.a32,
            a33: app.globalData.a33,
            a41: app.globalData.a41,
            a42: app.globalData.a42,
            a43: app.globalData.a43,
            a51: app.globalData.a51,
            a52: app.globalData.a52,
            a53: app.globalData.a53,
            a61: app.globalData.a61,
            a62: app.globalData.a62,
            a63: app.globalData.a63,
            b11: app.globalData.b11,
            b12: app.globalData.b12,
            b13: app.globalData.b13,
            b21: app.globalData.b21,
            b22: app.globalData.b22,
            b23: app.globalData.b23,
            b31: app.globalData.b31,
            b32: app.globalData.b32,
            b33: app.globalData.b33,
            b41: app.globalData.b41,
            b42: app.globalData.b42,
            b43: app.globalData.b43,
            b51: app.globalData.b51,
            b52: app.globalData.b52,
            b53: app.globalData.b53,
          },
          header: {
            'content-type': 'application/json;charset=utf-8'
          },
          success: function (res) {
            console.log(res.data)
          }
        })
        wx.setStorage({
          key: 'key',
          data: {
            id: app.globalData.id,
            name: app.globalData.name,
            sex: app.globalData.sex,
            grade: app.globalData.grade,
            teacher: app.globalData.teacher,
            couse: app.globalData.couse,
            couseNum: app.globalData.couseNum,
            couseType: app.globalData.couseType,
            couseItem: app.globalData.couseItem,
            couseExe: app.globalData.couseExe,
            a11: app.globalData.a11,
            a12: app.globalData.a12,
            a13: app.globalData.a13,
            a21: app.globalData.a21,
            a22: app.globalData.a22,
            a23: app.globalData.a23,
            a31: app.globalData.a31,
            a32: app.globalData.a32,
            a33: app.globalData.a33,
            a41: app.globalData.a41,
            a42: app.globalData.a42,
            a43: app.globalData.a43,
            a51: app.globalData.a51,
            a52: app.globalData.a52,
            a53: app.globalData.a53,
            a61: app.globalData.a61,
            a62: app.globalData.a62,
            a63: app.globalData.a63,
            b11: app.globalData.b11,
            b12: app.globalData.b12,
            b13: app.globalData.b13,
            b21: app.globalData.b21,
            b22: app.globalData.b22,
            b23: app.globalData.b23,
            b31: app.globalData.b31,
            b32: app.globalData.b32,
            b33: app.globalData.b33,
            b41: app.globalData.b41,
            b42: app.globalData.b42,
            b43: app.globalData.b43,
            b51: app.globalData.b51,
            b52: app.globalData.b52,
            b53: app.globalData.b53,
          }
        })
        wx.showToast({
          title: '感谢您的参与！',
          icon: 'success',
          duration: 1000
        })
        setTimeout(function (){
          wx.switchTab({
            url: '../systemMine/index',
          })
        },1000)
      }
    }
  },
  b11: function (e) {
    app.globalData.b11 = e.detail.value;
    this.setData({ b11Item: 'itemed' })
  },
  b12: function (e) {
    app.globalData.b12 = e.detail.value;
    this.setData({ b12Item: 'itemed' })
  },
  b13: function (e) {
    app.globalData.b13 = e.detail.value;
    this.setData({ b13Item: 'itemed' })
  },
  b21: function (e) {
    app.globalData.b21 = e.detail.value;
    this.setData({ b21Item: 'itemed' })
  },
  b22: function (e) {
    app.globalData.b22 = e.detail.value;
    this.setData({ b22Item: 'itemed' })
  },
  b23: function (e) {
    app.globalData.b23 = e.detail.value;
    this.setData({ b23Item: 'itemed' })
  },
  b31: function (e) {
    app.globalData.b31 = e.detail.value;
    this.setData({ b31Item: 'itemed' })
  },
  b32: function (e) {
    app.globalData.b32 = e.detail.value;
    this.setData({ b32Item: 'itemed' })
  },
  b33: function (e) {
    app.globalData.b33 = e.detail.value;
    this.setData({ b33Item: 'itemed' })
  },
  b41: function (e) {
    app.globalData.b41 = e.detail.value;
    this.setData({ b41Item: 'itemed' })
  },
  b42: function (e) {
    app.globalData.b42 = e.detail.value;
    this.setData({ b42Item: 'itemed' })
  },
  b43: function (e) {
    app.globalData.b43 = e.detail.value;
    this.setData({ b43Item: 'itemed' })
  },
  b51: function (e) {
    app.globalData.b51 = e.detail.value;
    this.setData({ b51Item: 'itemed' })
  },
  b52: function (e) {
    app.globalData.b52 = e.detail.value;
    this.setData({ b52Item: 'itemed' })
  },
  b53: function (e) {
    app.globalData.b53 = e.detail.value;
    this.setData({ b53Item: 'itemed' })
  }
})