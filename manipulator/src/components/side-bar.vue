<template>
      <v-navigation-drawer
        image="@/assets/background.jpg"
        theme="dark"
        permanent        
      >
        <v-list nav>
          <v-list-item
            style="color:black;"
            prepend-icon="mdi-email"
            title="Conta"
            value="inbox"
            :to="{ path: '/account-page' }"
          />
          <v-list-item
            style="color:black;"
            prepend-icon="mdi-account-supervisor-circle"
            title="Administrar"
            value="supervisors"
            :to="{ path: '/manage-page' }"
          />
          <v-list-item
            style="color:black;"
            prepend-icon="mdi-clock-start"
            title="Indicação"
            value="clockin"
            :to="{ path: '/indication-page' }"
          />
        </v-list>
        <div class="pa-2">
          <v-btn 
            color="red"
            block
            :to="{ path: '/' }"
          >
            sair
          </v-btn>     
        </div>
           
      </v-navigation-drawer>
</template>