<template>
  <v-app id="app">
    <v-toolbar app id="menu">
      <v-menu class="hidden-md-and-up">
        <v-toolbar-side-icon slot="activator"></v-toolbar-side-icon>
        <v-list id="side">
          <v-btn to="/" flat>O EVENTO</v-btn>
          <v-btn to="/Programming" flat>PROGRAMAÇÃO</v-btn>
          <v-btn to="/Tickets" flat>INGRESSOS</v-btn>
        </v-list>
      </v-menu>
      <div style="height: 100%;">
        <img style="height: 100%;" id="logo" :src="require('./assets/logo.png')"/>
      </div>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn to="/" flat>O EVENTO</v-btn>
        <v-btn to="/Programming" flat>PROGRAMAÇÃO</v-btn>
        <v-btn to="/Tickets" flat>INGRESSOS</v-btn>
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
    <div id="content" class="container">
      <router-view></router-view>
    </div>
  </v-app>
</template>

<style>
body {
  margin: 0 auto;
  overflow: hidden;
  background-image: url("./assets/background.png");
  background-repeat: round;
}

#menu {
  display: block;
}

#content {
  top: 100px;
  display: block;
}

#side {
  display: flex;
  flex-direction: column;
}

#app {
  background: inherit;
}

.v-toolbar {
  font-family: 'Fjalla One', sans-serif;
}
</style>
