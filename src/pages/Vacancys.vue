<template>
  <v-sheet>
    <div class="text-h4">Поиск по вакансиям</div>
    <SearchInput />
  </v-sheet>
  <v-container class="d-flex">
    <trainee-filter />
    <v-row no-gutters>
      <v-col v-for="(i, id) in vacancys" :key="id" sm="4" cols="12">
        <UiCard :card-id="i.id" :cardInfo="i" class="pa-2 ma-2" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { onMounted, ref } from "vue";
import vacancy from "../API/ways/vacancy.js";
import SearchInput from "../components/SearchInput.vue";
import TraineeFilter from "../components/TraineeFilter.vue";
import UiCard from "../components/ui-kit/UiCard.vue";

const vacancys = ref([
  {
    title: "Продуктовый дизайнер",
    price: "75 000",
    id: "1",
    place: "Москва, Новый арбат",
    company: "Sparrow agency",
    workFormat: ["Удалёнка", "Офис"],
    employment: ["Удалёнка", "Офис"],
    vacancyText:
      "Ищем в первую очередь хорошего человека, который уже участовал в развитии",
  },
  {
    title: "Продуктовый дизайнер",
    company: "Sparrow agency",
    workFormat: ["Удалёнка", "Офис"],
    id: "1",
    employment: ["Удалёнка", "Офис"],
    vacancyText:
      "Ищем в первую очередь хорошего человека, который уже участовал в развитии",
  },
  {
    title: "Продуктовый дизайнер",
    company: "Sparrow agency",
    workFormat: ["Удалёнка", "Офис"],
    id: "1",
    employment: ["Удалёнка", "Офис"],
    vacancyText:
      "Ищем в первую очередь хорошего человека, который уже участовал в развитии",
  },
]);

onMounted(() => {
  vacancy.getAllVacancys().then((response) => {
    vacancys.value = response;
  });
});
</script>
