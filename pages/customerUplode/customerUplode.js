import {Api} from '../../utils/api.js';
var api = new Api();
const app = getApp();

Page({
  data: {
    position: ['分类1', '分类2', '分类3'],
    },

  onLoad(options){
     const self = this;
  },
   position(e) {
    this.setData({
      index: e.detail.value
    })
  },
  intoPathRedi(e){
    const self = this;
    wx.navigateBack({
      delta:1
    })
  },
  intoPathRedirect(e){
    const self = this;
    api.pathTo(api.getDataSet(e,'path'),'redi');
  }, 
 
})

  