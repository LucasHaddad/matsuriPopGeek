<template>
  <v-app id="app">
    <v-toolbar app id="menu">
      <v-toolbar-side-icon>
      </v-toolbar-side-icon>
      <v-spacer></v-spacer>
      <v-img id="logo" :src="require('./assets/logo.png')"/>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat>Link One</v-btn>
        <v-btn flat>Link Two</v-btn>
        <v-btn flat>Link Three</v-btn>
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
    <v-content>
      <HelloWorld/>
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
  },
  data() {
    return {
      //
    };
  },
};
</script>

<style>
#app {
  background-image: url("./assets/background.png");
}
</style>
