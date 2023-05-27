<template>
  <div class="text-h4 ml-10">Поиск стажёров</div>

  <SearchInput />
  <v-sheet class="d-flex">
    <InternsFilter />
    <v-container>
      <v-row no-gutters>
        <v-col v-for="(inter, id) in interns" sm="4" cols="12">
          <UiCard :card-info="inter" class="pa-2 ma-2" />
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script setup>
import SearchInput from "../components/SearchInput.vue";
import InternsFilter from "../components/InternsFilter.vue";
import UiCard from "../components/ui-kit/UiCard.vue";
import { ref } from "vue";

const interns = ref([
  {
    title: "Фёдоров Антон Игоревич, 19",
    id: "1",
    place: "Москва, Новый арбат",
    company: "Моя любить дизайн, твоя одобрять",
    workFormat: ["Удалёнка", "Офис"],
    employment: ["Удалёнка", "Офис"],
    vacancyText:
      "Ищем в первую очередь хорошего человека, который уже участовал в развитии 1-2 продуктов. Готовы обучить под наши задачи и прикрепить к наставнику.",
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
</script>

<style></style>
