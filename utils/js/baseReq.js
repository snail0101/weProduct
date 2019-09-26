const app = getApp()
const request = require('request.js')


//获取openid
export function getOpenId(relate) {
  // var that = this;
  wx.login({
    success: function (res) {
      request.request({
        url: `${app.globalData.API_URL}/appwx/getOpenId`,
        data: {
          appId: app.globalData.APP_ID,
          appScret: app.globalData.APP_SECRET,
          code: res.code,
        },
        success: relate,
        fail: function () { }
      })
    },
    fail: function () {
      console.log("login失败")
    }
  })
}

//1注册账户
export function adduser(formdata, resolve) {
  formdata.sysCode = app.globalData.SYS_CODE
  formdata.sysName = app.globalData.SYS_NAME
  request.request({
    url: `${app.globalData.API_URL}/appLogin/saveUser`,
    data: formdata,
    success: resolve,
    fail: function (res) {
      console.log("网络超时", res)
      wx.hideLoading()
      wx.showToast({
        title: '网络超时!',
        image: "/images/errortip.png"
      })
    },
    complete: function () {

    }
  })
}