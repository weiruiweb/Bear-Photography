//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
  tabCurrent:0,
  isShow:false,
  chooseType:0,
  chooseType1:0,
  },
  
  onLoad: function () {
  
  },
  select_this:function(e){
    var current= e.currentTarget.dataset.current;
    this.setData({
      tabCurrent:current
    })
  },
  goBuy:function(){
    var isShow = !this.data.isShow;
    this.setData({
      isShow:isShow
    })
  },
  close:function(){
    wx.navigateTo({
      url:'/pages/confirmOrder/confirmOrder'
    })
    this.setData({
      isShow:false
    })
  },
  chooseType:function(e){
    var chooseType = e.currentTarget.dataset.type;
    this.setData({
      chooseType:chooseType
    })
  },
})
