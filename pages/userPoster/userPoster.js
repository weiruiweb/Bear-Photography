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

  