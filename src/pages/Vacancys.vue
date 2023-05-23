<template>
  <div>Поиск по вакансиям</div>

  <SearchInput />
  <div style="display: flex">
    <trainee-filter />
    <v-row no-gutters>
      <template v-for="i in 10">
        <v-col>
          <UiCard class="pa-2 ma-2" />
        </v-col>
      </template>
    </v-row>
  </div>
</template>

<script setup>
import SearchInput from "../components/SearchInput.vue";
import TraineeFilter from "../components/TraineeFilter.vue";
import UiCard from "../components/ui-kit/UiCard.vue";
</script>

<style></style>
