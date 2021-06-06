import { createApp } from 'vue'
import GuitarsPage from './GuitarPage.vue'
import config from './config';

import './../../assets/css/app.css';

createApp(GuitarsPage).use(config).mount('#app')
