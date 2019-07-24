<template>
  <v-app id="app">
    <v-navigation-drawer app v-model="drawer">
      <v-list-item-group color="primary">
        <v-list-tile to="/">
          <v-list-tile-action>
            <v-icon>event</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>O EVENTO</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile to="/ticket">
          <v-list-tile-action>
            <v-icon>gavel</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>INGRESSOS</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="drawer = false" class="close">
          <v-list-tile-action>
            <v-icon>arrow_back</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>FECHAR MENU</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list-item-group>
    </v-navigation-drawer>
    <v-toolbar fixed app>
      <v-toolbar-side-icon @click.stop="drawer = true" class="hidden-md-and-up"/>
      <div class="logo">
        <img class="logo" :src="require('./assets/logo.png')"/>
      </div>
      <v-spacer/>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn to="/" flat>O EVENTO</v-btn>
        <v-btn to="/ticket" flat>INGRESSOS</v-btn>
      </v-toolbar-items>
      <v-spacer/>
      <v-flex>
        <v-btn
            color="success"
            href="https://www.hbatools.com.br/MATSURI-POP-GEEK-2019__326"
            target="_blank"
        >
          COMPRAR INGRESSOS
        </v-btn>
      </v-flex>
    </v-toolbar>
    <v-container>
      <v-content>
        <router-view/>
      </v-content>
    </v-container>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
    };
  },
};
</script>


<style>
body {
  margin: 0 auto;
  background-image: url("./assets/background.png");
  background-repeat: round;
  height: 100%;
}

.logo {
  height: 100%;
}

#menu {
  position: absolute;
  display: block;
}

#app {
  background: inherit;
}

.close {
  position: absolute;
  bottom: 0px;
}

.v-toolbar,.v-navigation-drawer{
  font-family: 'Fjalla One', sans-serif;
}
</style>
