import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { defineStore } from "pinia"
import * as message from "@/utils/messages.js"

const auth = getAuth();

export const useAuthenticationStore = defineStore('authentication', {
    state: () => ({
        answerApi: '',
        tokenLogin: '',
    }),
    actions: {
        async register(email, password) {
            try {
                createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
                    this.tokenLogin = userCredential.user.accessToken
                })

                if (this.tokenLogin)
                    this.answerApi = message.loginSuccess
                else
                    this.answerApi = message.loginFailed
            }
            catch (e) {
                this.answerApi = message.loginFailed
            }
        }
    }
})