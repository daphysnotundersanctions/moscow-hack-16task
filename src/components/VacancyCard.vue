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

          <v-card>
            <v-card-title
              >Отклик на вакансию: “Продуктовый дизайнер”</v-card-title
            >
            <v-card>
              <v-card-title>
                1. О чём вы хотели бы рассказать работодателю до того, как он
                откроет ваше резюме:
              </v-card-title>
              <v-textarea
                rows="1"
                clearable
                variant="outlined"
                auto-grow
              ></v-textarea>
            </v-card>

            <v-card>
              <v-card-title>
                2. Для отклика на эту вакансию необходимо выполнить тестовое
                задание.
              </v-card-title>
              <v-textarea
                rows="1"
                clearable
                variant="outlined"
                auto-grow
              ></v-textarea>
            </v-card>

            <v-card-actions>
              <v-btn @click="sendResponse()">Отправить</v-btn>
              <v-btn @click="responseDialog = false">Назад</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
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
<style lang=""></style>
