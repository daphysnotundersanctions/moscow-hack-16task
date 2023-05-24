<template>
  <div>Поиск по вакансиям</div>

  <SearchInput />
  <v-sheet class="d-flex">
    <trainee-filter />
    <v-container>
      <v-row no-gutters>
        <v-col v-for="i in 10" sm="4" cols="12">
          <UiCard class="pa-2 ma-2" />
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script setup>
import SearchInput from "../components/SearchInput.vue";
import TraineeFilter from "../components/TraineeFilter.vue";
import UiCard from "../components/ui-kit/UiCard.vue";
</script>

<style></style>
