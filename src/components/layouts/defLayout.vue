<script setup>
import { ref } from "vue";
const items = ref([
  { title: "Домой", icon: "mdi-home-outline", route: "/" },
  { title: "Избранное", icon: "mdi-heart-outline" },
  { title: "Отклики", icon: "mdi-arrow-u-right-top", route: "/responses" },
  { title: "Вакансии", icon: "mdi-briefcase-outline" },
]);
const rail = ref(true);
const drawer = ref(true);
</script>

<template>
  <v-app>
    <v-layout>
      <v-app-bar
        style="border-bottom: 1px solid #f9f9fc"
        class="flex-grow-0 elevation-0"
        app
        dark
      >
        <v-app-bar-title class="text-h5">CODA</v-app-bar-title>
        <template v-slot:append>
          <v-btn height="50" icon="mdi-bell-outline"></v-btn>
          <v-list-item
            class="d-flex flex-row-reverse"
            prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg"
          >
            <v-list-item-title class="mr-4"
              >Антон</v-list-item-title
            ></v-list-item
          >
        </template>
      </v-app-bar>
      <v-navigation-drawer
        v-model="drawer"
        :rail="rail"
        style="border-right: 1px solid #f9f9fc"
        permanent
        @mouseenter="rail = false"
        @mouseleave="rail = true"
      >
        <v-list density="compact" nav>
          <template v-for="(item, id) in items" :key="id">
            <v-list-item
              @click="$router.push(item.route)"
              :prepend-icon="item.icon"
              :title="item.title"
              :value="item.title"
            ></v-list-item>
          </template>
        </v-list>
      </v-navigation-drawer>
      <v-main style="background-color: #f9f9fc">
        <slot />
      </v-main>
    </v-layout>
  </v-app>
</template>
