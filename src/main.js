import { createApp } from "vue";
import KeyCloakService from "./plugins/kc";
import App from "./App.vue";
import { pinia } from "./plugins/pinia";
import { routerConfig } from "./plugins/router";
import { vuetifyConfig } from "./plugins/vuetify";

const renderApp = () => {
  createApp(App).use(pinia).use(routerConfig).use(vuetifyConfig).mount("#app");
};

KeyCloakService.CallLogin(renderApp);
