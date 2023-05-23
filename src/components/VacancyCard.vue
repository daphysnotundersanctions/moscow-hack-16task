<template>
  <v-card
    max-width="fit-content"
    style="display: flex; justify-content: space-between"
  >
    <v-card max-width="804">
      <v-card-title> Продуктовый дизайнер </v-card-title>
      <v-card-subtitle>
        <v-icon icon="mdi-currency-rub"></v-icon> от 75 000</v-card-subtitle
      >
      <div class="px-6">
        <v-row align="center">
          <div class="text-subtitle-2 mr-1">Формат работы:</div>
          <v-chip-group>
            <v-chip class="mr-1 px-2 py-1 text-caption">Удалёнка</v-chip>
            <v-chip class="mr-1 px-2 py-1 text-caption">Офис</v-chip>
          </v-chip-group>
          <div class="text-subtitle-2 mr-1">Формат работы:</div>
          <v-chip-group>
            <v-chip class="mr-1 px-2 py-1 text-caption">Удалёнка</v-chip>
            <v-chip class="mr-1 px-2 py-1 text-caption">Офис</v-chip>
          </v-chip-group>
        </v-row>
      </div>

      <v-card-text>
        <div>Описание вакансии:</div>
        <div class="text-caption">
          Ищем в первую очередь хорошего человека, который уже участовал в
          развитии 1-2 продуктов. Готовы обучить под наши задачи и прикрепить к
          наставнику. Ищем в первую очередь хорошего человека, который уже
          участовал в развитии 1-2 продуктов. Готовы обучить под наши задачи и
          прикрепить к наставнику. Ищем в первую очередь хорошего человека,
          который уже участовал в развитии 1-2 продуктов. Готовы обучить под
          наши задачи и прикрепить к наставнику. Ищем в первую очередь хорошего
          человека, который уже участовал в развитии 1-2 Ищем в первую очередь
          хорошего человека, который уже участовал в развитии 1-2 продуктов.
          Готовы обучить под наши задачи и прикрепить к наставнику. Ищем в
          первую очередь хорошего человека, который уже участовал в развитии 1-2
          продуктов. Готовы обучить под наши задачи и прикрепить к наставнику.
          Ищем в первую очередь хорошего человека, который уже участовал в
          развитии 1-2 продуктов. Готовы обучить под наши задачи и прикрепить к
          наставнику. Ищем в первую очередь хорошего человека, который уже
          участовал в развитии 1-2 Ищем в первую очередь хорошего человека,
          который уже участовал в развитии 1-2 продуктов. Готовы обучить под
          наши задачи и прикрепить к наставнику. Ищем в первую очередь хорошего
          человека, который уже участовал в развитии 1-2 продуктов. Готовы
          обучить под наши задачи и прикрепить к наставнику. Ищем в первую
          очередь хорошего человека, который уже участовал в развитии 1-2
          продуктов. Готовы обучить под наши задачи и прикрепить к наставнику.
          Ищем в первую очередь хорошего человека, который уже участовал в
          развитии 1-2
        </div>
      </v-card-text>

      <v-card-actions>
        <v-dialog v-model="responseDialog" width="auto">
          <template v-slot:activator="{ props }">
            <v-btn v-bind="props"> Откликнуться </v-btn>
          </template>

          <v-card class="bordered-card px-16 py-14">
            <v-card-title class="text-h5"
              >Отклик на вакансию: “Продуктовый дизайнер”</v-card-title
            >
            <v-card
              style="background-color: #f9f9fc"
              class="px-9 pb-9 pt-6 bordered-card"
            >
              <v-card-title class="text-subtitle-1">
                1. Выберите резюме для отклика на эту вакансию:
              </v-card-title>
              <v-textarea
                rows="1"
                clearable
                variant="outlined"
                auto-grow
              ></v-textarea>
            </v-card>

            <v-card
              style="background-color: #f9f9fc"
              class="px-9 pb-9 pt-6 bordered-card mt-7"
            >
              <v-card-title class="text-subtitle-1">
                2. О чём вы хотели бы рассказать работодателю до того, как он
                откроет ваше резюме:
              </v-card-title>
              <v-textarea
                rows="1"
                clearable
                variant="outlined"
                auto-grow
                placeholder="Напишите, например, о ваших навыках, которые помогут справляться с задачами из этой вакансии эффективнее. Это выделит вашу заявку."
              ></v-textarea>
            </v-card>

            <v-card
              style="background-color: #f9f9fc"
              class="px-9 pb-9 pt-6 bordered-card mt-7"
            >
              <v-card-title class="text-subtitle-1">
                3. Для отклика на эту вакансию необходимо выполнить тестовое
                задание.
              </v-card-title>
              <v-row align="center">
                <v-btn prepend-icon="mdi-download">Скачать</v-btn>
                <div class="pl-2">
                  Техническое задание для Продуктового Дизайнера.pdf
                </div>
              </v-row>
              <v-row align="center">
                <v-btn append-icon="mdi-arrow-right">Перейти</v-btn>
                <div class="pl-2">Палитра для UI кита</div>
              </v-row>

              <v-textarea
                rows="1"
                placeholder="Вставьте сюда ссылку на выполненное Техническое Задание"
                clearable
                variant="outlined"
                auto-grow
              ></v-textarea>
            </v-card>

            <v-card-actions>
              <v-btn width="351" @click="sendResponse()">Отправить</v-btn>
              <v-btn width="351" @click="responseDialog = false">Назад</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <!-- text-subtitle-2 -->
        <v-btn
          variant="outlined"
          min-width="50"
          style="border-radius: 6px; color: #66b0f9"
          height="50"
          icon="mdi-heart-outline"
        ></v-btn>
        <v-btn
          variant="outlined"
          min-width="50"
          style="border-radius: 6px; color: #66b0f9"
          height="50"
          icon="mdi-eye-off-outline"
        ></v-btn>
      </v-card-actions>
    </v-card>
    <v-card style="box-shadow: -9px 0px 14px -12px #0000001c" max-width="318">
      <img class="pl-10 pt-9" src="../assets/img/vacancyImg.svg" alt="" />
      <v-card-title class="pl-10">Sparrow agency</v-card-title>
      <v-card-subtitle class="pl-10">
        <v-icon icon="mdi-map-marker-outline"></v-icon> Москва, Новый
        арбат</v-card-subtitle
      >
      <v-card-text class="pl-10"
        >Компания занимается оарпни твноаоо мимигц мннануиси, а так же арприна
        старинаоп ратсныпвтс омомарвт сосрарммррмвот, с применением
        ИИ.</v-card-text
      >
    </v-card>
  </v-card>
</template>
<script setup>
import { ref } from "vue";

const responseDialog = ref(false);

function sendResponse() {
  console.log(123);
  responseDialog.value = false;
}
</script>
<style scoped>
.bordered-card {
  border-radius: 12px;
}
</style>
