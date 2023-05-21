<template>
  <v-container class="pa-0 ml-10" style="width: 168px" fluid>
    <v-container class="pa-0" fluid>
      <p class="text-subtitle-2">Формат занятости</p>

      <v-checkbox hide-details color="info" label="Полная"></v-checkbox>
      <v-checkbox hide-details color="info" label="Частичная"></v-checkbox>
      <v-checkbox hide-details color="info" label="Проектная"></v-checkbox>
      <v-checkbox hide-details color="info" label="Волонтёрство"></v-checkbox>
    </v-container>
    <v-container class="pa-0" fluid>
      <div class="text-subtitle-2">Формат занятости</div>

      <v-checkbox hide-details color="info" label="Удалёнка"></v-checkbox>
      <v-checkbox hide-details color="info" label="Офис"></v-checkbox>
      <v-checkbox hide-details color="info" label="Гибрид"></v-checkbox>
      <v-checkbox hide-details color="info" label="Вахта"></v-checkbox>
      <v-checkbox hide-details color="info" label="Полный день"></v-checkbox>
      <v-checkbox hide-details color="info" label="Сменный график"></v-checkbox>
    </v-container>

    <v-container class="pa-0" fluid>
      <v-row justify="space-between" no-gutters>
        <p class="text-subtitle-2 mb-3">Зарплатные ожидания</p>
        <v-text-field
          label="От"
          rounded
          variant="outlined"
          style="max-width: 79px; width: 100%"
        ></v-text-field>
        <v-text-field
          label="До"
          rounded
          variant="outlined"
          style="max-width: 79px; width: 100%"
        ></v-text-field>
      </v-row>
    </v-container>
  </v-container>
</template>

<script setup></script>

<style></style>
