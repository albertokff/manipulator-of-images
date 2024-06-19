<template>
    <v-card>
      <v-layout>
        <SideBar />
        <v-main
          style="height:100vh;background-color: white;"
        >
  
          <v-card                   
            title="Manage Page"
            subtitle="Subtitle"
            text="..."
            style="background-color: white;color:black;height:90vh"                    
          >
            <v-card-actions>
              <v-btn>Click me Aqui!</v-btn>
            </v-card-actions>
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