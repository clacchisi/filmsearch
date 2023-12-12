import { createApp } from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/reset.css'

// import { IonicVue } from '@ionic/vue';

const app = createApp(App)
app.use(Antd)
// app.use(IonicVue)
app.mount('#app');
