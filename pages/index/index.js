import {Api} from '../../utils/api.js';
var api = new Api();
const app = getApp();


Page({
  data: {
    background: ['/images/banner.png', '/images/banner.png', '/images/banner.png'],
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    circular: true,
    interval: 2000,
    duration: 500,
    previousMargin: 0,
    nextMargin: 0,
    currentId:0,
    swiperIndex:0,
  },
  onLoad(options) {
    const self = this;

  },
  swiperChange(e) {
    const that = this;
    that.setData({
      swiperIndex: e.detail.current,
    })
  },
  intoPath(e){
    const self = this;
    api.pathTo(api.getDataSet(e,'path'),'nav');
  },
  intoPathRedirect(e){
    const self = this;
    api.pathTo(api.getDataSet(e,'path'),'redi');
  }, 
})

  