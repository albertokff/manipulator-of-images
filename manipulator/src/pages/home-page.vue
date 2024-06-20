<template>
  <v-card>
    <v-layout>
      <SideBar />
      <v-main
        style="height:100vh;background-color: white;"
      >

        <v-card                   
          title="Olá, Lúcio!"
          subtitle="Seja bem-vindo novamente."
          style="background-color: white;color:black;"                    
        />
        
        <CardProgress />  
        
        <v-card
          class="ml-4"          
          image="https://cdn.vuetifyjs.com/docs/images/cards/dark-beach.jpg"
          max-width="340"
          subtitle="Cole o link de uma imagem para baixá-la."
          title="Obter Imagem da Web"
        >
          <template v-slot:actions>
            <v-btn
              append-icon="mdi-chevron-right"
              color="red-lighten-2"
              text="Iniciar"
              variant="outlined"
              block
            ></v-btn>
          </template>
        </v-card>
        
        <Footer />
      </v-main>
    </v-layout>
  </v-card>
    
</template>

<script setup>
import SideBar from '@/components/side-bar.vue'
import CardProgress from '@/components/card-progress.vue'
import Footer from '@/components/footer.vue'

</script>