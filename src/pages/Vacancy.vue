<template>
  <v-container>
    <v-breadcrumbs
      :items="['Стажировки ', 'Мэрия Москвы', 'Продуктовый дизайнер']"
    ></v-breadcrumbs>
    <VacancyCard />
  </v-container>
</template>
<script setup>
import VacancyCard from "../components/VacancyCard.vue";
</script>
<style lang=""></style>
