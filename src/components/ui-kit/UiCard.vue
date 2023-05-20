<script setup>
import { defineProps } from "vue";

defineProps({
  cardInfo: {
    type: Object,
  },
});
</script>

<template>
  <v-card border="12px" width="296">
    <v-card-title class="text-subtitle-1 px-6 pt-5 pb-0">
      Продуктовый дизайнер
    </v-card-title>
    <v-card-subtitle class="px-6"> в Sparrow agency </v-card-subtitle>

    <div class="px-6">
      <v-row justify="center" align="center">
        <div class="text-subtitle-2 mr-1">Формат работы:</div>
        <v-chip-group>
          <v-chip class="mr-1 px-2 py-1 text-caption">Удалёнка</v-chip>
          <v-chip class="mr-1 px-2 py-1 text-caption">Офис</v-chip>
        </v-chip-group>
      </v-row>
      <v-row class="mt-0" justify="center" align="center">
        <div class="text-subtitle-2 mr-1">Формат работы:</div>
        <v-chip-group>
          <v-chip class="mr-1 px-2 py-1 text-caption">Удалёнка</v-chip>
          <v-chip class="mr-1 px-2 py-1 text-caption">Офис</v-chip>
        </v-chip-group>
      </v-row>
    </div>

    <v-card-text class="px-6 pt-5 text-caption">
      Ищем в первую очередь хорошего человека, который уже участовал в развитии
      1-2 продуктов. Готовы обучить под наши задачи и прикрепить к наставнику.
    </v-card-text>

    <v-card-actions>
      <v-row justify="center" class="py-5" align-content="space-between">
        <v-btn variant="outlined" height="50"> Подробнее </v-btn>
        <v-btn
          variant="outlined"
          min-width="50"
          height="50"
          icon="mdi-heart-outline"
        ></v-btn>
      </v-row>
    </v-card-actions>
  </v-card>
</template>

<style></style>
