<template>
  <div class="text-h4 ml-10">Поиск стажёров</div>

  <SearchInput />
  <v-sheet class="d-flex">
    <InternsFilter />
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
import InternsFilter from "../components/InternsFilter.vue";
import UiCard from "../components/ui-kit/UiCard.vue";
</script>

<style></style>
