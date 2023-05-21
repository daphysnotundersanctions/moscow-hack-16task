import { createApp } from 'vue';
import App from './App.vue';
import { pinia } from './plugins/pinia';
import { routerConfig } from './plugins/router';
import { vuetifyConfig } from './plugins/vuetify';

createApp(App).use(pinia).use(routerConfig).use(vuetifyConfig).mount('#app')
