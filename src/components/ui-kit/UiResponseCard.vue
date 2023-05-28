<template>
  <v-card
    @click="$router.push(`/responses/${responseId}`)"
    style="border-radius: 12px; cursor: pointer"
    class="d-flex flex-row"
  >
    <v-col class="pa-0">
      <v-card-title class="pb-1">
        <span class="text-subtitle-1">
          {{ responseInfo.name }}, <span> {{ responseInfo.age }} лет </span>
        </span>
      </v-card-title>

      <v-card-subtitle class="text-caption">
        {{ responseInfo.prof }}
      </v-card-subtitle>

      <v-card-subtitle class="text-caption">
        <v-icon size="small" icon="mdi-map-marker-outline" />
        {{ responseInfo.location }}
      </v-card-subtitle>

      <v-card-text class="text-caption">
        {{ responseInfo.description }}
      </v-card-text>
    </v-col>
    <v-divider color="success" vertical></v-divider>
    <v-col class="d-flex align-center justify-center flex-column">
      <img class="mb-2" src="../../assets/img/internStatus1.svg" width="102" />
      <div class="text-caption">Куда подана заявка</div>
      <div class="text-subtitle-1">
        {{ responseInfo.company }}
      </div>
    </v-col>
  </v-card>
</template>
<script setup>
import { defineProps } from "vue";

defineProps({
  responseInfo: Object,
  responseId: Number,
});
</script>
<style lang=""></style>
