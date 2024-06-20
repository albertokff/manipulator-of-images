<template>
  <v-container>
    <v-card>
      <v-card-title class="text-overline">
          Progresso

          <div class="text-green-darken-3 text-h3 font-weight-bold">50%</div>

          <div class="text-h6 text-medium-emphasis font-weight-regular">
          Você está indo bem!
          </div>
      </v-card-title>
      <br>
      <v-card-text>
          <div
          :style="`right: calc(${review} - 80px)`"
          class="position-absolute mt-n8 text-caption text-green-darken-3"
          >
          Indicações
          </div>
          <v-progress-linear
          color="green-darken-3"
          height="22"
          model-value="90"
          rounded="lg"
          >
          <v-badge
              :style="`right: ${review}`"
              class="position-absolute"
              color="white"
              dot
              inline
          ></v-badge>
          </v-progress-linear>

          <div class="d-flex justify-space-between py-3">
          <span class="text-green-darken-3 font-weight-medium">
              1 pessoa indicada!
          </span>

          <span class="text-medium-emphasis"> 2 pessoas indicadas! </span>
          </div>
      </v-card-text>

      <v-divider></v-divider>

      <v-list-item
          append-icon="mdi-chevron-right"
          lines="two"
          subtitle="Ler regulamento"
          link
      ></v-list-item>
      </v-card>
  </v-container>
</template>

<script setup>
import { ref } from 'vue'

const review = ref(80)

</script>