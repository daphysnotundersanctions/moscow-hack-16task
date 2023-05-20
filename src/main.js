import { createApp } from 'vue';
import App from './App.vue';
import { routerConfig } from './plugins/router';
import { vuetifyConfig } from './plugins/vuetify';

createApp(App).use(routerConfig).use(vuetifyConfig).mount('#app')
