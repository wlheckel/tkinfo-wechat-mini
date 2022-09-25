// pages/Home/Home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    message: 'hello world !!',
    students: [
      {id: 1, name: 'leo', age: 20},
      {id: 2, name: 'zhangsuan', age: 25},
      {id: 3, name: 'lisi', age: 30},
      {id: 4, name: 'wangwu', age: 35},
    ],
    counter: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },
  addClick(){
    this.data.counter += 1
    this.setData({
      counter: this.data.counter
    })
  }
})