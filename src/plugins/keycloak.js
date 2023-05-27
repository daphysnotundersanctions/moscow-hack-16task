import Vue from "vue";
import Keycloak from "keycloak-js";

const initOptions = {
  url: process.env.VUE_APP_KEYCLOAK_URL,
  realm: "traineeship",
  clientId: "list-keep",
};

const keycloak = new Keycloak(initOptions);

const KeycloakPlugin = {
  install: (Vue) => {
    Vue.$keycloak = keycloak;
  },
};

export default KeycloakPlugin;
