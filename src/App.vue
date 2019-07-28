<template>
  <v-app id="app">
    <v-navigation-drawer app v-model="drawer" temporary class="sideMenu">
      <v-list color="primary">
        <router-link to="/" tag="div">
          <img class="image" :src="require('./assets/logo.png')"/>
        </router-link>
        <v-divider/>
        <v-list-tile to="/event">
          <v-list-tile-action>
            <v-icon>event</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>O EVENTO</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile to="/schedule">
          <v-list-tile-action>
            <v-icon>schedule</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>PROGRAMAÇÃO</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile to="/attraction">
          <v-list-tile-action>
            <v-icon>dashboard</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>ATRAÇÕES</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile to="/workshop">
          <v-list-tile-action>
            <v-icon>build</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>OFICINAS</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile to="/ticket">
          <v-list-tile-action>
            <v-icon>payment</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>INGRESSOS</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar fixed app height="90px" color="#FFF">
      <v-toolbar-side-icon @click.stop="drawer=!drawer" class="hidden-md-and-up"/>
      <router-link to="/" tag="div" class="logo hidden-sm-and-down">
        <img class="logo" :src="require('./assets/logo.png')"/>
      </router-link>
      <v-spacer/>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn to="/event" flat tile large>O EVENTO</v-btn>
        <v-btn to="/schedule" flat tile large>PROGRAMAÇÃO</v-btn>
        <v-btn to="/attraction" flat tile large>ATRAÇÕES</v-btn>
        <v-btn to="/workshop" flat tile large>OFICINAS</v-btn>
        <v-btn to="/ticket" flat tile large>INGRESSOS</v-btn>
      </v-toolbar-items>
      <v-spacer/>
      <v-btn color="success" href="https://www.hbatools.com.br/MATSURI-POP-GEEK-2019__326" target="_blank" tile large>
        COMPRAR INGRESSOS
      </v-btn>
    </v-toolbar>
    <v-content>
      <router-view/>
    </v-content>
    <footer class="footer">
      <h1>MÍDIAS SOCIAIS</h1>
      <v-btn size="24px" text icon href="https://www.facebook.com/MatsuriPopGeek/" target="_blank">
        <v-img :src="require('./assets/fb.png')"/>
      </v-btn>
      <v-btn size="24px" text icon href="https://www.instagram.com/matsuripopgeek/" target="_blank">
        <v-img :src="require('./assets/insta.png')"/>
      </v-btn>
      <p>
        <u>NÃO ENCONTROU ALGUMA INFORMAÇÃO?</u> Quer dar alguma sugestão, nos elogiar ou fazer críticas sobre o Matsuri Pop Geek?
      </p>
      <p>
        Entre em contato pelo nosso número de telefone ou e-mail:
        (31) 3657-4813 matsuripopgeek@gmail.com
      </p>
      <i>Ao mandar seu e-mail para o Matsuri Pop Geek favor se identificar com seu nome e e-mail, para que possamos responder a você no endereço certo. Não esqueça de colocar o assunto! Ele é de suma importância para podermos encaminhar para os departamentos certos.</i>
    </footer>
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
  background-repeat: unset;
  height: 100%;
}

.logo {
  height: 100%;
}

.image {
  width: 100%;
}

#app {
  background: inherit;
}

.close {
  position: absolute;
  bottom: 0px;
}

.v-toolbar,.v-navigation-drawer, .v-btn {
  font-family: 'Fjalla One', sans-serif;
}

.sideMenu {
  max-width: 250px;
}

.footer {
  text-align: center;
  background-color: #FFF;
  position: relative;
}

</style>
