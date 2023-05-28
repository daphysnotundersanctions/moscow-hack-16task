<template>
  <v-container>
    <div class="text-h4 mb-8">Отклики стажёров</div>
    <v-row>
      <v-col>
        <div class="mb-2 text-subtitle-2">Сортировка по дате</div>
        <v-select :items="['Сначала новые']" variant="outlined"></v-select>
      </v-col>
      <v-col>
        <div class="mb-2 text-subtitle-2">По приоритету</div>
        <v-select variant="outlined" :items="['Все']"></v-select>
      </v-col>
      <v-col>
        <div class="mb-2 text-subtitle-2">По статусу заявки</div>
        <v-select variant="outlined" :items="['Все']"></v-select>
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col cols="12" sm="6" v-for="(response, id) in responsesData">
        <UiResponseCard
          class="ma-2 pa-2"
          :response-id="++id"
          :response-info="response"
        />
      </v-col>
    </v-row>
  </v-container>
</template>
<script setup>
import UiResponseCard from "../components/ui-kit/UiResponseCard.vue";
import { ref } from "vue";

const responsesData = ref([
  {
    name: "Мирошниченко Алексей Дмитриевич",
    age: "18",
    prof: "Системный администратор",
    location: "Краснодар, Морская",
    description:
      "Мои навыки полностью подходят под описание стажировки + я проходил 4 месячную практику от университета, в “Дизайн Бюро Горбунова”.",
    company: "Мэрия Москвы",
  },
  {
    name: "Мирошниченко Алексей Дмитриевич",
    age: "18",
    prof: "Системный администратор",
    location: "Краснодар, Морская",
    description:
      "Мои навыки полностью подходят под описание стажировки + я проходил 4 месячную практику от университета, в “Дизайн Бюро Горбунова”.",
    company: "Мэрия Москвы",
  },
  {
    name: "Мирошниченко Алексей Дмитриевич",
    age: "18",
    prof: "Системный администратор",
    location: "Краснодар, Морская",
    description:
      "Мои навыки полностью подходят под описание стажировки + я проходил 4 месячную практику от университета, в “Дизайн Бюро Горбунова”.",
    company: "Мэрия Москвы",
  },
  {
    name: "Мирошниченко Алексей Дмитриевич",
    age: "18",
    prof: "Системный администратор",
    location: "Краснодар, Морская",
    description:
      "Мои навыки полностью подходят под описание стажировки + я проходил 4 месячную практику от университета, в “Дизайн Бюро Горбунова”.",
    company: "Мэрия Москвы",
  },
]);
</script>
<style lang=""></style>
