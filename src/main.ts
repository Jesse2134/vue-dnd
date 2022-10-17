import 'core-js/stable'
import 'regenerator-runtime/runtime'
import 'custom-event-polyfill'
import "reflect-metadata"
import Vue from 'vue'
import App from './App14.vue'
import vuetify from './plugins/vuetify';
import '@babel/polyfill'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'
import Generic from "@/components/Generic.vue";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false

Vue.component("generic", Generic);
Vue.use(ElementUI)

new Vue({
    vuetify,
    render: h => h(App)
}).$mount('#app')
