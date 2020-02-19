import Vue from 'vue'
import VueRouter from 'vue-router'
import BootstrapVue from "bootstrap-vue"
import App from './App.vue'

import 'sweetalert2'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import axios from 'axios'

//import components

import Spreadsheet from './components/Spreadsheet.vue'
import Pricing from './components/Pricing.vue'
import Account from './components/Account.vue'
import About from './components/About'

Vue.use(axios)

axios.defaults.headers.common['Access-Control-Allow-Origin'] = true;
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

axios.defaults.headers.common['Access-Control-Allow-Methods'] ='GET,PUT,POST,DELETE,OPTIONS';
axios.defaults.headers.common['Access-Control-Allow-Headers'] ='Content-type,Accept,X-Access-Token,X-Key';


Vue.prototype.$http = axios;

// Configuration VueAnalytics

Vue.use(VueRouter);

Vue.use(BootstrapVue)

Vue.config.productionTip = false 
const approutes = 
[
  {path:'/',component:Spreadsheet},
  {path:'/about',component:About},
  {path:'/pricing',component:Pricing},
  {path:'/account',component:Account}  
];

const router = new VueRouter(
  {
    routes:approutes
  }
);



new Vue({
  
  router:router,
  render: h => h(App),
}).$mount('#app')
