<template>
  <v-app id="app">
    <v-toolbar app id="menu">
      <v-menu class="hidden-md-and-up">
        <v-toolbar-side-icon slot="activator"></v-toolbar-side-icon>
        <v-list id="side">
          <v-btn to="/" flat>O EVENTO</v-btn>
          <v-btn to="/about" flat>PROGRAMAÇÃO</v-btn>
          <v-btn to="/promo" flat>INGRESSOS</v-btn>
        </v-list>
      </v-menu>
      <v-img id="logo" :src="require('./assets/logo.png')"/>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn to="/" flat>O EVENTO</v-btn>
        <v-btn to="/about" flat>PROGRAMAÇÃO</v-btn>
        <v-btn to="/promo" flat>INGRESSOS</v-btn>
      </v-toolbar-items>
      <v-spacer></v-spacer>
      <v-btn
        color="success"
        href="https://www.hbatools.com.br/MATSURI-POP-GEEK-2019__326"
        target="_blank"
      >
        <span class="mr-2">COMPRAR INGRESSOS</span>
      </v-btn>
    </v-toolbar>
    <router-view></router-view>
  </v-app>
</template>

<style>
body {
  margin: 0 auto;
  overflow: hidden;
  background-image: url("./assets/background.png");
}

#side {
  display: flex;
  flex-direction: column;
}

#app {
  background: inherit;
}
</style>
