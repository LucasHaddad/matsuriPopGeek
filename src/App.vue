<template>
  <v-app id="app">
    <v-toolbar app id="menu">
      <v-toolbar-side-icon>
      </v-toolbar-side-icon>
      <v-spacer></v-spacer>
      <div style="height: 100%;">
        <img style="height: 100%;" id="logo" :src="require('./assets/logo.png')"/>
      </div>
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

#app {
  background: inherit;
}
</style>
