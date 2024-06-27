<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <v-img class="backgroundLogin" src="@/assets/background2.jpg">
    <div style="display:flex;align-items: center;flex-direction: row;height: 100vh;width:100vw">
      <v-card class="formLogin mx-auto px-10 py-10" style="width:100%;">
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
    </div>
  </v-img>
</template>

<script setup>
import { ref } from 'vue'
import { useAuthenticationStore } from '@/stores/auth'
import { useRouter } from 'vue-router'
import background from '@/assets/background2.jpg'

const email = ref('')
const password = ref('')
const message = ref('')
const titleAlert = ref('')
const typeAlert = ref('')
const showMessage = ref(false)

const authentication = useAuthenticationStore()
const route = useRouter()

const login = async () => {
  try {
    await authentication.login(email.value, password.value)

    const error = await authentication.errorMessage

    showMessage.value = true
    message.value = authentication.answerApi

    if (error === 'auth/invalid-email' || error === 'auth/missing-password') {
      titleAlert.value = 'Atenção!'
      typeAlert.value = 'error'
    } else {
      titleAlert.value = 'Sucesso!'
      typeAlert.value = 'success'

      setTimeout(() => {
        route.push('/home-page')        
      }, 2500);
    }
  } catch (e) {
    showMessage.value = true
    message.value = authentication.answerApi
  }
}
</script>