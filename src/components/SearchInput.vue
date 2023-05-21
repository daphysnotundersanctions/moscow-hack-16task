<template>
  <v-container>
    <v-row no-gutters>
      <v-text-field
        class="mr-5"
        style="max-width: 438px; width: 100%"
        v-model="areaInput"
        label="Поиск по району города или станции метро"
        prepend-inner-icon="mdi-map-marker-outline"
        variant="solo"
        rounded
      ></v-text-field>
      <v-text-field
        class="mr-7"
        style="max-width: 438px; width: 100%"
        v-model="vacancyInput"
        label="Поиск по навыкам или профессии"
        prepend-inner-icon="mdi-binoculars"
        variant="solo"
        rounded
      ></v-text-field>
      <v-btn
        class="text-none text-subtitle-1"
        width="202"
        height="56"
        prepend-icon="mdi-magnify"
        >Поиск</v-btn
      >
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from "vue";
const areaInput = ref("");
const vacancyInput = ref("");
</script>

<style></style>
