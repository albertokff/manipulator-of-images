<template>
    <v-card>
      <v-layout>
        <SideBar />
        <v-main
          style="height:100vh;background-color: white;"
        >
  
          <v-card                   
            title="Minha conta"
            subtitle="Insira e atualize os dados de sua conta"            
            style="background-color: white;color:black;height:90vh"                    
          >
            <v-container>
              <v-row>
                <v-col cols="2">
                  <v-list-subheader style="color:black;">Nome Completo</v-list-subheader>
                </v-col>

                <v-col cols="8">
                  <v-text-field
                    label="Nome"                                        
                  ></v-text-field>
                </v-col>
              </v-row>

              <v-row>
                <v-col cols="2">
                  <v-list-subheader style="color:black;">E-mail</v-list-subheader>
                </v-col>

                <v-col cols="8">
                  <v-text-field
                    label="E-mail"
                    type="email"                                        
                  ></v-text-field>
                </v-col>
              </v-row>

              <v-row>
                <v-col cols="2">
                  <v-list-subheader style="color:black;">Senha</v-list-subheader>
                </v-col>

                <v-col cols="8">
                  <v-text-field
                    label="Senha"                                        
                  ></v-text-field>
                </v-col>
              </v-row>

              <v-row>
                <v-col cols="2">
                  <v-list-subheader style="color:black;">Confirmação de senha</v-list-subheader>
                </v-col>

                <v-col cols="8">
                  <v-text-field                                                           
                    label="Confirmação de Senha"
                  ></v-text-field>
                </v-col>                
              </v-row>

              <v-row class="d-flex justify-end pr-10">
                <v-btn>
                  Editar
                </v-btn>
              </v-row>
            </v-container>
          </v-card>
                  
          <Footer />
        </v-main>
      </v-layout>
    </v-card>
      
  </template>
  
  <script setup>
  import SideBar from '@/components/side-bar.vue'
  import Footer from '@/components/footer.vue'
  
  </script>