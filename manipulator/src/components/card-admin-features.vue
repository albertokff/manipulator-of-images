<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<Props>()

interface Props {
  subtitle: string
  title: string
  textbutton: string
  icon: string
}


const titleCard = props.title
const subCard = props.subtitle
const button = props.textbutton
const iconCard = props.icon
</script>

<template>
  <v-card
      class="ma-2"            
      variant="elevated"            
      color="green"
      min-width="344"
      :append-icon="iconCard"
      :subtitle="subCard"
      :title="titleCard"
  >    
    <template v-slot:actions>
      <v-btn color="green" :text="button" style="background-color: white;"></v-btn>
    </template>
  </v-card>
</template>