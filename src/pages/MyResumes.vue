<template>
  <v-container>
    <v-row>
      <div class="text-h4">Мои резюме</div>
      <v-btn append-icon="mdi-plus"> Создать новое резюме </v-btn>
    </v-row>

    <v-row no-gutters>
      <v-col cols="12" sm="6" v-for="(resume, id) in resumes">
        <UiResumeCard :cardInfo="resume" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { onMounted, ref } from "vue";
import resume from "../API/ways/resume.js";
import UiResumeCard from "../components/ui-kit/UiResumeCard.vue";

const resumes = ref([
  {
    title: "Фёдоров Антон Игоревич, 19",
    type: "isPublished",
    place: "Москва, Новый арбат",
    company: "Sparrow agency",
    workFormat: ["Название (2019-2024)"],
    employment: ["Продуктовый дизайнер"],
    vacancyText:
      "Я уже участвовал в развитии 2 продуктов во время стажировки. Готов обучиться под ваши задачи. Дисциплинирован.",
  },
  {
    title: "Фёдоров Антон Игоревич, 19",
    place: "Москва, Новый арбат",
    company: "Sparrow agency",
    workFormat: ["Название (2019-2024)"],
    employment: ["Продуктовый дизайнер"],
    vacancyText:
      "Я уже участвовал в развитии 2 продуктов во время стажировки. Готов обучиться под ваши задачи. Дисциплинирован.",
  },
]);

onMounted(() => {
  resume.getAllResumes().then((response) => {
    resumes.value = response;
  });
});
</script>

<style></style>
