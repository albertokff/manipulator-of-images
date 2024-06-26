import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { defineStore } from "pinia"
import * as message from "@/utils/messages.js"

const auth = getAuth();

export const useAuthenticationStore = defineStore('authentication', {
  state: () => ({
      answerApi: '',
      tokenLogin: '',
      errorMessage: '',
  }),
  actions: {
    async register(email, password) {
      try {
        createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
          this.tokenLogin = userCredential.user.accessToken

          if (this.tokenLogin)
            this.answerApi = message.registerSuccess
          else
            this.answerApi = message.registerFailed
        }).catch((error) => {
          switch (error.code) {
            case 'auth/invalid-email':
              this.answerApi = message.registerFailedWithoutEmail
              this.errorMessage = error.code
              break
            case 'auth/missing-password':
              this.answerApi = message.registerFailedWithoutPassword
              this.errorMessage = error.code
              break
          }
        });          
      }
      catch (e) {
        this.answerApi = message.loginFailed
      }
    },

    async login(email, password) {
      await signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          this.answerApi = message.loginSuccess
        })
        .catch((error) => {
          this.errorMessage = error.code
          this.answerApi = message.loginFailed
        });
    }
  }
        
})