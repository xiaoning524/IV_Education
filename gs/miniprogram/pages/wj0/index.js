// pages/wj0/index.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    sexItem: 'item',
    gradeItem: 'item',
    teacherItem: 'item',
    couseItem: 'item',
    couseNumItem: 'item',
    couseTypeItem: 'item',
    couseItemItem: 'item',
    couseExeItem: 'item'
  },

  next: function(){
    if (app.globalData.admin){
      wx.navigateTo({
        url: '../wj1/index',
      })
    }else{
      if (
        app.globalData.sex == 0 ||
        app.globalData.grade == 0 ||
        app.globalData.teacher == 0 ||
        app.globalData.couse == 0 ||
        app.globalData.couseNum == 0 ||
        app.globalData.couseType == 0 ||
        app.globalData.couseItem == 0 ||
        app.globalData.couseExe == 0
      ) {
        wx.showToast({
          title: '请填写全部问卷',
          icon: 'loading',
          duration: 1000
        })
      } else {
        wx.redirectTo({
          url: '../wj1/index',
        })
      }
    }
  },
  sex: function(e){
    app.globalData.sex = e.detail.value;
    this.setData({ sexItem: 'itemed' })
  },
  grade: function (e) {
    app.globalData.grade = e.detail.value;
    this.setData({ gradeItem: 'itemed' })
  },
  teacher: function (e) {
    app.globalData.teacher = e.detail.value;
    this.setData({ teacherItem: 'itemed' })
  },
  couse: function (e) {
    app.globalData.couse = e.detail.value;
    this.setData({ couseItem: 'itemed' })
  },
  couseNum: function (e) {
    app.globalData.couseNum = e.detail.value;
    this.setData({ couseNumItem: 'itemed' })
  },
  couseType: function (e) {
    app.globalData.couseType = e.detail.value.join("");
    if (e.detail.value.length != 0){
      this.setData({ couseTypeItem: 'itemed' })
    }else{
      this.setData({ couseTypeItem: 'item' })
    }
  },
  couseItem: function (e) {
    app.globalData.couseItem = e.detail.value.join("");
    if (e.detail.value.length != 0) {
      this.setData({ couseItemItem: 'itemed' })
    } else {
      this.setData({ couseItemItem: 'item' })
    }
  },
  couseExe: function (e) {
    app.globalData.couseExe = e.detail.value;
    this.setData({ couseExeItem: 'itemed' })
  }
})