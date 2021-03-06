// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueQr from 'vue-qr'; // 二维码
import 'babel-polyfill';
import VueAwesomeSwiper from 'vue-awesome-swiper'; // 轮播组件
import 'normalize.css/normalize.css';
import '@/styles/index.scss';
import App from './App';
import router from './router';
import './config/elementui';
import store from './store';
import './icons'; // 注册svg-icon组件
import './config/v-charts'; // 按需引入charts
import mock from './mock';
import i18n from './lang'; // 多语言
import './components';
import './mixins'; // mixin

Vue.prototype.mock = mock;
Vue.use(VueAwesomeSwiper);
Vue.config.productionTip = false;

// export default {
//   components: { VueQr },
// };

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  i18n,
  components: { App, VueQr },
  template: '<App/>',
});
