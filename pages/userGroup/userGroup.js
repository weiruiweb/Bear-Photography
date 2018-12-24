import {Api} from '../../utils/api.js';
var api = new Api();
const app = getApp();
import {Token} from '../../utils/token.js';
const token = new Token();

Page({
  data: {
    currentId:0,
    },
  changeTab:function(e){
    var current = e.currentTarget.dataset.id;
    this.setData({
      currentId:current
    })
  },
  onLoad(options){
   
  },


  bindRegionChange: function (e) {
    const self = this;
    console.log('picker发送选择改变，携带值为', e.detail.value)
    self.data.submitData.passage1 = e.detail.value[0]+e.detail.value[1]+e.detail.value[2];
    self.setData({
      web_region: e.detail.value
    })
  },

  
  
  intoPath(e){
    const self = this;
    api.pathTo(api.getDataSet(e,'path'),'nav');
  },

  intoPathRedi(e){
    const self = this;
    wx.navigateBack({
      delta:1
    })
  },
  


 
})

  