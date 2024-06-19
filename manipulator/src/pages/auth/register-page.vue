<template>
    <v-sheet 
        class="bg-green d-flex"
        elevation="16"
        style="width:100vw;height:100vh;align-items: center;flex-direction: row;"
    >
    <v-card 
        class="mx-auto px-10 py-10"
        style="width:30%;"
        elevation="20"
    >
      <v-form        
        @submit.prevent=""
      >
        <h2
            class="mb-4 text-start text-green"
        >
            Criar conta
        </h2>

        <v-text-field
          v-model="name"                    
          class="mb-2"
          label="Nome"
          hint="Digite o seu nome completo"
          clearable
        ></v-text-field>

        <v-text-field
          v-model="email"                    
          class="mb-2"
          label="Email"
          hint="Digite o seu e-mail"
          clearable
        ></v-text-field>

        <v-text-field
          v-model="password"                    
          label="Senha"          
          hint="Digite a sua senha"
          clearable
        ></v-text-field>

        <v-text-field
          v-model="confirmPassword"                    
          label="Confirmação de Senha"          
          hint="Digite novamente sua senha"
          clearable
        ></v-text-field>

        <br>

        <v-btn                    
          color="success"
          size="large"
          type="submit"
          variant="elevated"
          block
        >
          Registrar-se
        </v-btn>

      </v-form>
    </v-card>
  </v-sheet>
</template>

<script setup>
import { ref } from 'vue'

const name = ref('')
const email = ref('')
const password = ref('')
const confirmPassword = ref('')

</script>