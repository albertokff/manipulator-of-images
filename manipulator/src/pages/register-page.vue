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
          @click="makeRegister"
        >
          Registrar-se
        </v-btn>

        <v-row 
          v-if="showMessage"
          class="d-flex justify-center pt-5"
        >
          <v-col md="12">
            <v-alert
              :text="message"
              :title="titleAlert"
              :type="typeAlert"
            />
          </v-col>
        </v-row>

      </v-form>
    </v-card>
  </v-sheet>
</template>

<script setup>
import { ref } from 'vue'
import { useAuthenticationStore } from '@/stores/auth'
import { useRouter } from 'vue-router';

const email = ref('')
const password = ref('')
const authentication = useAuthenticationStore()

const showMessage = ref(false)
const message = ref('')
const titleAlert = ref('')
const typeAlert = ref('')
const route = useRouter()

const makeRegister = async () => {
  try {
    authentication.register(email.value, password.value)
    const error = authentication.errorMessage

    showMessage.value = true
    message.value = authentication.answerApi

    if (error === 'auth/invalid-email' || error === 'auth/missing-password') {
      titleAlert.value = 'Atenção!'
      typeAlert.value = 'error'
    } else {
      titleAlert.value = 'Sucesso!'
      typeAlert.value = 'success'

      setTimeout(() => {
        route.push('/')        
      }, 2500);
    }
  }
  catch (e) {
    showMessage.value = true
    message.value = authentication.answerApi    
  }

  setTimeout(() => {
    showMessage.value = false
  }, 2000);
}

</script>