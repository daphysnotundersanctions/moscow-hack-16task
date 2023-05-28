<template>
  <v-container>
    <v-row>
      <div class="text-h4 pr-8">Мои резюме</div>
      <v-btn height="50" @click="fetchData" append-icon="mdi-plus">
        Создать новое резюме
      </v-btn>
    </v-row>

    <v-row>
      <v-col cols="12" sm="4" v-for="(resume, id) in resumes">
        <UiResumeCard :card-id="id" :cardInfo="resume" />
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

async function fetchData() {
  resume.getAllResumes();
}
</script>

<style></style>
