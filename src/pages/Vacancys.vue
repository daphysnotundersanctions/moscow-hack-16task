<template>
  <div>Поиск по вакансиям</div>

  <SearchInput />
  <div style="display: flex">
    <trainee-filter />
    <UiCard />
  </div>
</template>

<script setup>
import SearchInput from "../components/SearchInput.vue";
import TraineeFilter from "../components/TraineeFilter.vue";
import UiCard from "../components/ui-kit/UiCard.vue";
</script>

<style></style>
