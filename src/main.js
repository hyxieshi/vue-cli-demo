// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
Vue.config.productionTip = false

import store from './vuex/store'

import * as echarts from 'echarts';
Vue.prototype.$echarts = echarts

import axios from 'axios'
Vue.prototype.axios = axios;

import SIdentify from './components/identify' //注意引入路径
Vue.use(SIdentify)

import moment from 'moment' //日期格式化
Vue.filter('dateFormat', function(dateStr, pattern = 'YYYY-MM-DD') {
    return moment(dateStr).format(pattern);

});

import JsonExcel from 'vue-json-excel'
Vue.component('downloadExcel', JsonExcel)



/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
})