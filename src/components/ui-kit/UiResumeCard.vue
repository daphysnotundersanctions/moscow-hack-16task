<script setup>
import { defineProps } from "vue";

defineProps({
  cardInfo: Object,
  cardId: String,
});
</script>

<template>
  <v-card style="border-radius: 12px" width="296">
    <v-card-title class="text-subtitle-1 px-6 pt-5 pb-0">
      {{ cardInfo.title }}
    </v-card-title>
    <v-card-subtitle class="px-6"> в {{ cardInfo.company }} </v-card-subtitle>
    <v-container class="px-8">
      <v-row justify="space-between" align="center" class="text-caption">
        <div v-show="cardInfo.price">
          <v-icon size="small" icon="mdi-currency-rub" />
          от {{ cardInfo.price }}
        </div>
        <div>
          <v-icon size="small" icon="mdi-map-marker-outline" />
          Москва, Новый арбат
        </div>
      </v-row>
    </v-container>

    <v-container
      style="display: flex; flex-direction: column; align-items: flex-start"
    >
      <v-row v-show="cardInfo.workFormat" justify="center" align="center">
        <div class="mr-1 text-caption">Формат работы:</div>
        <v-chip-group>
          <template v-for="format in cardInfo.workFormat">
            <v-chip
              variant="outlined"
              class="mr-1 px-2 py-1 text-caption blue-border"
              >{{ format }}</v-chip
            >
          </template>
        </v-chip-group>
      </v-row>
      <v-row
        v-show="cardInfo.employment"
        class="mt-0"
        justify="center"
        align="center"
      >
        <div class="text-caption mr-1">Занятость:</div>
        <v-chip-group>
          <template v-for="employee in cardInfo.employment">
            <v-chip variant="outlined" class="mr-1 text-caption blue-border">{{
              employee
            }}</v-chip>
          </template>
        </v-chip-group>
      </v-row>
    </v-container>

    <v-card-text class="px-6 pt-5 text-caption">
      {{ cardInfo.vacancyText }}
    </v-card-text>

    <v-card-actions>
      <v-btn
        v-if="cardInfo.type != 'isPublished'"
        color="light-blue"
        width="180"
        variant="flat"
        block
        height="50"
        class="text-none"
      >
        Опубликовать
      </v-btn>
      <v-btn
        width="180"
        variant="flat"
        block
        height="50"
        class="text-none blue-border"
        v-else
      >
        Снять с публикации
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<style lang="scss" scoped>
.blue-border {
  border: 1px solid #66b0f9;
}
</style>
