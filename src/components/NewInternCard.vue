<template>
  <v-container>
    <div class="text-h4 mb-4">Создание новой заявки на стажировку</div>
    <v-card
      style="
        padding-bottom: 40px;
        padding-left: 46px;
        padding-right: 46px;
        padding-top: 36px;
      "
      width="1128"
    >
      <v-row>
        <v-col>
          <div class="mb-2">Профессия:</div>
          <v-select label="Select" variant="outlined"></v-select>
        </v-col>
        <v-col>
          <div class="mb-2">Место стажировки:</div>
          <v-select variant="outlined"></v-select>
        </v-col>

        <v-col>
          <div class="mb-2">Оплата в месяц</div>
          <v-text-field prepend-icon="mdi-currency-rub" variant="outlined">
          </v-text-field>
        </v-col>
      </v-row>
      <v-col>
        <div class="mb-2">Приоритет:</div>
        <v-select label="Select" variant="outlined"></v-select>
      </v-col>
      <v-col>
        <div class="text-subtitle-1">Описание стажировки:</div>
        <v-textarea
          auto-grow
          class="shrink"
          rows="3"
          variant="outlined"
          placeholder="Опишите, в чём заключается стажировка, какие жизненные навыки ожидаете от стажёра, с какими трудностями ему предстоит столкнуться."
        ></v-textarea>
      </v-col>
      <v-col>
        <div class="text-subtitle-1 mb-1">Тестовое задание:</div>
        <v-textarea
          auto-grow
          rows="3"
          variant="outlined"
          label="Текст задания"
        ></v-textarea>
        <v-textarea
          auto-grow
          rows="1"
          placeholder="Вставьте сюда ссылку на файл, размещённый в облаке или на другой платформе"
          variant="outlined"
        ></v-textarea>
      </v-col>
      <v-btn
        color="light-blue
          "
        width="180"
        style="border-radius: 6px"
        variant="flat"
        height="50"
        class="text-none mr-5"
      >
        Создать заявку
      </v-btn>
      <v-btn
        variant="outlined"
        class="text-none"
        style="border-radius: 6px; color: #66b0f9"
        height="50"
        >Отменить</v-btn
      >
    </v-card>
  </v-container>
</template>
<script setup>
import { ref } from "vue";

const profeesionItems = ref([]);
const internItems = ref([]);
const priorityItems = ref([]);
</script>
