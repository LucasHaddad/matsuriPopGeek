<template>
  <v-container fluid>
    <div class="hidden-sm-and-down">
      <v-layout>
        <v-img class="margin" width="350" :src="require('../assets/kpop.png')"/>
        <div class="margin">
          <article>
            <h1>ESPAÇO K-POP MG</h1>
            <br/>
            <p>O K-Pop MG coordena o espaço K-Pop onde passam clipes dos artistas que os fãs pedem na hora, além disso ocorrem algumas brincadeiras e até apresentações de covers. Mas as apresentações principais vocês encontram no palco do evento com os melhores grupos de dança cover de Minas Gerais.</p>
          </article>
        </div>
      </v-layout>
      <v-layout>
        <div class="margin">
          <article>
            <h1>ESPAÇO MEET AND GREET</h1>
            <br/>
            <i>Local dedicado para as cosplayers convidadas poderem divulgar seu trabalho e conversar com seus fãs.</i>
            <h2>Angie Starling</h2>
            <p>Digital Influencer, Cosplayer há mais de 5 anos,Streamer e também YouTuber, Angie vai estar abrilhantando nosso evento no sábado enquanto interage com o público. No  Domingo estará no nosso espaço pra Meet and Greet para quem quiser pegar autógrafos, tirar fotos ou  conhece-la melhor de perto!</p>
            <h2>Franxcos</h2>
            <p>Digital Influencer Francine mais conhecida como” Franxcos” é cosplayer há mais de 10 anos, e já se caracterizou de diversas personagens femininas, Franxcos acredita que o essencial é se identificar com os personagens não importando se são de animes, jogos ou filmes.Ela vai estar abrilhantando nosso evento no sábado enquanto interage com o público.No Domingo estará no nosso espaço Meet and Greet para quem quiser pegar autógrafos, tirar fotos ou conhece-la melhor de perto!</p>
          </article>
        </div>
        <v-img class="margin" width="350" :src="require('../assets/francosm.png')"/>
      </v-layout>
      <v-layout>    
        <v-img class="margin" width="350" :src="require('../assets/kendama.png')"/>
        <div class="margin">
          <article>
            <h1>KENDAMA</h1>
            <br/>
            <p>O kendama é um brinquedo tradicional japonês, similar ao biboquê francês. De construção bastante simples, seu objetivo é acertar a bola na estaca, chamada de Ken, ou em uma de suas três bases, denominadas Ôzara, Chûzara e Kozara.</p>
            <p>Conforme esses movimentos são executados, através de combinações de diferentes técnicas e sequências, aumenta também o nível de dificuldade</p>
            <p>As técnicas Free Style, que remetem a movimentos de malabarismo, fizeram com que o kendama ganhasse muitos adeptos, principalmente no ocidente. Além do Japão, existem praticantes de Kendama em todo o mundo, como nos Estados Unidos, passando pela Europa e até em Israel.</p>
            <p>No Brasil, em 2018, tivemos o primeiro representante brasileiro a participar no Kendama World Cup, no Japão, Mauricio Santanna, que também foi um dos primeiros a promover a prática do Slackline oficialmente no Brasil.</p>
          </article>
        </div>
      </v-layout>
      <v-layout>    
        <div class="margin">
          <article>
            <h1>ESPAÇO BLACK INK</h1>
            <br/>
            <p>- MODELAGEM</p>
            <p>- MANGA</p>
            <br/>
            <h1>OFICINA DE CARTOON COM THIAGO SPYKED</h1>
            <br/>
            <h1>ESCOLA DE LINGUA JAPONESA </h1>
            <br/>
          </article>
        </div>
        <v-spacer/>
        <v-img class="margin" :src="require('../assets/spyked.png')"/>
      </v-layout>
    </div>
    <div class="centralize hidden-md-and-up">
      <v-card>
        <v-img :src="require('../assets/kpop.png')"/>
        <article>
          <h1>ESPAÇO K-POP MG</h1>
          <br/>
          <p>O K-Pop MG coordena o espaço K-Pop onde passam clipes dos artistas que os fãs pedem na hora, além disso ocorrem algumas brincadeiras e até apresentações de covers. Mas as apresentações principais vocês encontram no palco do evento com os melhores grupos de dança cover de Minas Gerais.</p>
        </article>
      </v-card>
      <v-container/>
      <v-card>
        <v-img :src="require('../assets/francosm.png')"/>
        <article>
          <h1>ESPAÇO MEET AND GREET</h1>
          <br/>
          <i>Local dedicado para as cosplayers convidadas poderem divulgar seu trabalho e conversar com seus fãs.</i>
          <h2>Angie Starling</h2>
          <p>Digital Influencer, Cosplayer há mais de 5 anos,Streamer e também YouTuber, Angie vai estar abrilhantando nosso evento no sábado enquanto interage com o público. No  Domingo estará no nosso espaço pra Meet and Greet para quem quiser pegar autógrafos, tirar fotos ou  conhece-la melhor de perto!</p>
          <h2>Franxcos</h2>
          <p>Digital Influencer Francine mais conhecida como” Franxcos” é cosplayer há mais de 10 anos, e já se caracterizou de diversas personagens femininas, Franxcos acredita que o essencial é se identificar com os personagens não importando se são de animes, jogos ou filmes.Ela vai estar abrilhantando nosso evento no sábado enquanto interage com o público.No Domingo estará no nosso espaço Meet and Greet para quem quiser pegar autógrafos, tirar fotos ou conhece-la melhor de perto!</p>
        </article>
      </v-card>
      <v-container/>
      <v-card>    
        <v-img :src="require('../assets/kendama.png')"/>
        <article>
          <h1>KENDAMA</h1>
          <br/>
          <p>O kendama é um brinquedo tradicional japonês, similar ao biboquê francês. De construção bastante simples, seu objetivo é acertar a bola na estaca, chamada de Ken, ou em uma de suas três bases, denominadas Ôzara, Chûzara e Kozara.</p>
        </article>
      </v-card>
      <v-container/>
      <v-card>
        <v-img :src="require('../assets/spyked.png')"/>
        <article>
          <h1>ESPAÇO BLACK INK</h1>
          <br/>
          <p>- MODELAGEM</p>
          <p>- MANGA</p>
          <br/>
          <h1>OFICINA DE CARTOON COM THIAGO SPYKED</h1>
          <br/>
          <h1>ESCOLA DE LINGUA JAPONESA </h1>
          <br/>
        </article>
      </v-card>
    </div>
  </v-container>
</template>

<style>

.v-card {
  width: 300px;
}

.centralize {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
}

div.layout {
  margin: 10px 0;
  background-color: #FFF;
}

.margin {
  margin: 10px 10px;
}

</style>
