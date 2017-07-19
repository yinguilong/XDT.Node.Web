// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import $ from 'jquery'

import 'bootstrap/css/bootstrap.min.css'
import 'bootstrap/js/bootstrap.min.js'
import './assets/css/skins/_all-skins.min.css'
import './assets/css/AdminLTE.min.css'
import './assets/css/css.css'
//font-awesome
import 'font-awesome/css/font-awesome.min.css'
import './assets/css/ionicons.min.css'
import './assets/css/style.css'

import './assets/plugins/datepicker/datepicker3.css'
import './assets/plugins/daterangepicker/daterangepicker-bs3.css'
import './assets/plugins/bootstrap-wysihtml5/bootstrap3-wysihtml5.min.css'
import './assets/plugins/iCheck/minimal/_all.css'
import './assets/plugins/morris/morris.css'
import './assets/plugins/jvectormap/jquery-jvectormap-1.2.2.css'
/* js import*/

import './assets/cdn/jquery-ui.min.js'
// import './assets/cdn/raphael-min.js'
// import './assets/plugins/highcharts/highcharts.js'
import './assets/plugins/sparkline/jquery.sparkline.min.js'
import './assets/plugins/jvectormap/jquery-jvectormap-1.2.2.min.js'
// import './assets/plugins/jvectormap/jquery-jvectormap-world-mill-en.js'
import './assets/plugins/knob/jquery.knob.js'
// import './assets/cdn/moment.min.js'
// import './assets/plugins/daterangepicker/daterangepicker.js'
// import './assets/plugins/bootstrap-wysihtml5/bootstrap3-wysihtml5.all.min.js'
import './assets/plugins/slimScroll/jquery.slimscroll.min.js'
import './assets/plugins/fastclick/fastclick.js'
import './assets/plugins/datepicker/bootstrap-datepicker.js'
import './assets/plugins/iCheck/icheck.js'
import './assets/js/app.min.js'
import './assets/js/util.js'
import './assets/js/ppism.js'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
