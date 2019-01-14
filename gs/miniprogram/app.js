//app.js
App({
  onLaunch: function () {
    var that = this;
    var allNum = 0, noNum = 0, teacher = 0, boy = 0, girl = 0, gnum1 = 0, gnum2 = 0, gnum3 = 0, gnum4 = 0, gnum5 = 0, gnum6 = 0, gnum7 = 0, eduNum = 0, eduNumA = 0, eduNumB = 0, eduNumC = 0, eduNumD = 0, couT1 = 0, couT2 = 0, couT3 = 0, couT4 = 0, couN1 = 0, couN2 = 0, couN3 = 0, couN4 = 0, couN5 = 0, couN6 = 0, couN7 = 0, couN8 = 0, ExeN1 = 0, ExeN2 = 0, ExeN3 = 0, ExeN4 = 0;
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {  wx.cloud.init({  traceUser: true })
    }
    wx.cloud.init();
    wx.cloud.callFunction({
      name: 'login',
      success: res => {
        if ('oKNsJ4zY02fPN1UI89460Q5KgEGw'  == res.result.openid || 'oKNsJ46WHxBtwnjDSaIQrTbbmD4A' == res.result.openid) {
          that.globalData.admin = true;
          wx.request({
            url: 'https://pigall.cn/gaoshan/get.php',
            data: {},
            header: {
              'content-type': 'application/json;charset=utf-8'
            },
            success: function (res) {
              var data = res.data.user;
              var noNum = 0;
              for (var i = 0; i < data.length; i++) {
                if (data[i].a11 == data[i].a12 && data[i].a12 == data[i].a13 && data[i].a21 == data[i].a22 && data[i].a22 == data[i].a23 && data[i].a31 == data[i].a32 && data[i].a32 == data[i].a33 && data[i].a41 == data[i].a42 && data[i].a42 == data[i].a43 && data[i].a51 == data[i].a52 && data[i].a52 == data[i].a53 && data[i].a61 == data[i].a62 && data[i].a62 == data[i].a63 && data[i].b11 == data[i].b12 && data[i].b12 == data[i].b13 && data[i].b21 == data[i].b22 && data[i].b22 == data[i].b23 && data[i].b31 == data[i].b32 && data[i].b32 == data[i].b33 && data[i].b41 == data[i].b42 && data[i].b42 == data[i].b43 && data[i].b51 == data[i].b52 && data[i].b52 == data[i].b53) { noNum++; }
                else {
                  if (data[i].teacher == 1) { teacher++; }
                  if (data[i].sex == 1) { boy++; } else { girl++; }
                  if (data[i].couse == 1) { eduNum++; }
                  if (data[i].couseExe == 1) { ExeN1++ } else if (data[i].couseExe == 2) { ExeN2++ } else if (data[i].couseExe == 3) { ExeN3++ } else if (data[i].couseExe == 4) { ExeN4++ }
                  for (var j = 0; j < data[i].couseType.length; j++) {
                    switch (data[i].couseType[j]) {
                      case "1": couT1++; break;
                      case "2": couT2++; break;
                      case "3": couT3++; break;
                      case "4": couT4++; break;
                    }
                  }
                  if (data[i].couseExe == 1) { eduNumA++ } else if (data[i].couseExe == 2) { eduNumB++ } else if (data[i].couseExe == 3) { eduNumC++ } else if (data[i].couseExe == 4) { eduNumD++ }
                  for (var k = 0; k < data[i].couseItem.length; k++) {
                    switch (data[i].couseItem[k]) {
                      case "1": couN1++; break;
                      case "2": couN2++; break;
                      case "3": couN3++; break;
                      case "4": couN4++; break;
                      case "5": couN5++; break;
                      case "6": couN6++; break;
                      case "7": couN7++; break;
                      case "8": couN8++; break;
                    }
                  }
                  switch (data[i].grade) {
                    case "1": gnum1++; break;
                    case "2": gnum2++; break;
                    case "3": gnum3++; break;
                    case "4": gnum4++; break;
                    case "5": gnum5++; break;
                    case "6": gnum6++; break;
                    case "7": gnum7++; break;
                  }
                }
              }
              that.globalData.allNum = data.length;
              that.globalData.noNum = noNum;
              that.globalData.teacherNum = teacher;
              that.globalData.boyNum = boy;
              that.globalData.girlNum = girl;
              that.globalData.gNum1 = gnum1;
              that.globalData.gNum2 = gnum2;
              that.globalData.gNum3 = gnum3;
              that.globalData.gNum4 = gnum4;
              that.globalData.gNum5 = gnum5;
              that.globalData.gNum6 = gnum6;
              that.globalData.gNum7 = gnum7;
              that.globalData.eduNum = eduNum;
              that.globalData.eduNumA = eduNumA;
              that.globalData.eduNumB = eduNumB;
              that.globalData.eduNumC = eduNumC;
              that.globalData.eduNumD = eduNumD;
              that.globalData.couT1 = couT1;
              that.globalData.couT2 = couT2;
              that.globalData.couT3 = couT3;
              that.globalData.couT4 = couT4;
              that.globalData.couN1 = couN1;
              that.globalData.couN2 = couN2;
              that.globalData.couN3 = couN3;
              that.globalData.couN4 = couN4;
              that.globalData.couN5 = couN5;
              that.globalData.couN6 = couN6;
              that.globalData.couN7 = couN7;
              that.globalData.couN8 = couN8;
              that.globalData.ExeN1 = ExeN1;
              that.globalData.ExeN2 = ExeN2;
              that.globalData.ExeN3 = ExeN3;
              that.globalData.ExeN4 = ExeN4;
            }
          })
        }
      that.globalData.id = res.result.openid;
      },
    })
    wx.request({
      url: 'https://pigall.cn/gaoshan/data.json',
      headers: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        that.globalData.userData = res.data;
      }
    })
  },
  globalData: {
    admin: false, id: '', name: '',
    sex: 0, grade: 0, teacher: 0,
    couse: 0, couseNum: 0, couseType: '', couseItem: '', couseExe: 0,
    detailsIndex: 0,
    userData: [],
    teacherNum: 0, boyNum: 0, girlNum: 0, gNum1: 0,
    gNum2: 0, gNum3: 0, gNum4: 0, gNum5: 0,
    gNum6: 0, gNum7: 0, eduNum: 0, eduNumA: 0,
    eduNumB: 0, eduNumC: 0, eduNumD: 0,
    couT1: 0, couT2: 0, couT3: 0, couT4: 0,
    couN1: 0, couN2: 0, couN3: 0, couN4: 0,
    couN5: 0, couN6: 0, couN7: 0, couN8: 0,
    ExeN1: 0, ExeN2: 0, ExeN3: 0, ExeN4: 0,
  }
})
