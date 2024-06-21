<template>
    <v-card>
      <v-layout>
        <SideBar />
        <v-main
          style="height:100vh;background-color: white;"
        >
  
          <v-card                   
            title="Administrar Sistema"
            subtitle="Gerencie todos os recursos da ferramenta"            
            style="background-color: white;color:black;"                    
          />    
          
          <v-row class="d-flex justify-center pt-6">            
              <CardAdminFeatures title="Usuários" subtitle="Gerencie os usuários" textbutton="Gerenciar" icon="fa-solid fa-user fa-2xl" />
              <CardAdminFeatures title="Pacotes" subtitle="Altere os pacotes" textbutton="Alterar" icon="fa-solid fa-cube fa-2xl" />
              <CardAdminFeatures title="Indicações" subtitle="Analise as indicações" textbutton="Analisar" icon="fa-solid fa-person-walking-arrow-right fa-2xl" />                          
              <CardAdminFeatures title="Links" subtitle="Bloqueio de sites" textbutton="Bloquear" icon="fa-solid fa-link" />                          
              <CardAdminFeatures title="Números" subtitle="Estatísticas do Sistema" textbutton="Ver" icon="fa-solid fa-percent" />                          
          </v-row>         
          
          <Footer />
        </v-main>
      </v-layout>
    </v-card>
      
  </template>
  
  <script setup>
  import SideBar from '@/components/side-bar.vue'
  import Footer from '@/components/footer.vue'
  import CardAdminFeatures from '@/components/card-admin-features.vue'
  

  </script>