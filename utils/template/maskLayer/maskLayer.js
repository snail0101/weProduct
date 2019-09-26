

function showModal(that) {
  // var that = this
  // btn = e.currentTarget.dataset.name

  // 显示遮罩层
  // var animation = wx.createAnimation({
  //   duration: 200,
  //   timingFunction: "linear",
  //   delay: 0
  // })
  // that.animation = animation
  // animation.translateY(300).step()
  // that.setData({
  //   animationData: animation.export(),
  //   showModalStatus: true
  // })
  // setTimeout(function () {
  //   animation.translateY(0).step()
  //   that.setData({
  //     animationData: animation.export()
  //   })
  // }.bind(that), 200)

  that.setData({
    showModalStatus: true
  })
}

function hideModal(that) {
  // 隐藏遮罩层
  // var animation = wx.createAnimation({
  //   duration: 200,
  //   timingFunction: "linear",
  //   delay: 0
  // })
  // that.animation = animation
  // animation.translateY(300).step()
  // that.setData({
  //   animationData: animation.export(),
  // })
  // setTimeout(function () {
  //   animation.translateY(0).step()
  //   that.setData({
  //     animationData: animation.export(),
  //     showModalStatus: false
  //   })
  // }.bind(that), 200)
  that.setData({
    showModalStatus: false
  })
}

module.exports = {
  hideModal: hideModal,
  showModal: showModal
};
