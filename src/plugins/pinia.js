import { createPinia, defineStore } from "pinia";

export const pinia = createPinia();

export const store = defineStore("storeId", {
  state: () => {
    return {
      key: "",
    };
  },
});
