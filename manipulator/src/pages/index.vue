<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <v-sheet 
        class="bg-green d-flex"
        elevation="16"
        style="width:100vw;height:100vh;align-items: center;flex-direction: row;"
    >
    <v-card class="mx-auto px-10 py-10" style="width:30%;">
      <v-form        
        @submit.prevent=""
      >
        <h2
            class="mb-4 text-center text-green"
        >
            Manipulator
        </h2>

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

        <br>

        <v-btn                    
          color="success"
          size="large"
          type="submit"
          variant="elevated"
          block
          @click="login"
        >
          Entrar
        </v-btn>

        <VRow class="pt-5 justify-end">
          <span>
            Não tem uma conta?
          </span>
            <v-btn
              class="text-green"
              to="register-page"
              style="cursor:pointer;"
            >
              Registre-se
            </v-btn>.
 
        </VRow>
      </v-form>
    </v-card>
  </v-sheet>
</template>

<script setup>
import { ref } from 'vue'
import { useAuthenticationStore } from '@/stores/auth'

const email = ref('')
const password = ref('')

const authenticator = useAuthenticationStore()

const login = async () => {
  try {
    authenticator.login(email.value, password.value)
  } catch (e) {
    console.log('Algo ocorreu de errado!')
  }
}
</script>