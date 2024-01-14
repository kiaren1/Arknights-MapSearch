import { createApp } from 'vue'
import{Tab,Tabs,Form, Field, CellGroup} from 'vant'
import App from './App.vue'
import router from './router/index.js'
import store from './store/store.js'


import './style.css'
import 'vant/lib/index.css';


createApp(App)
.use(Form)
.use(Field)
.use(CellGroup)
.use(router)
.use(store)
.use(Tab)
.use(Tabs)
.mount('#app')
