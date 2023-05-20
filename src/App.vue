<template>
  <v-app>
    <defLayout><router-view></router-view> <UiCard /></defLayout>
  </v-app>
</template>

<script setup>
import UiCard from "../src/components/ui-kit/UiCard.vue";
import defLayout from "./components/layouts/defLayout.vue";
</script>

<style></style>
