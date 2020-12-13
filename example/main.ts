import { createApp } from 'vue'
import App from './App.vue'

// 全量导入
import Erui from '../lib/index.esm.js'

createApp(App).use(Erui).mount('#app')
