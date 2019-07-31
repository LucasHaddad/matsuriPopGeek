<template>
  <v-container fluid>
    <v-img
      :src="require('../assets/banner.png')"
      class="hidden-sm-and-down"
    ></v-img>
    <v-img
      :src="require('../assets/mobile_banner.png')"
      class="hidden-md-and-up"
    ></v-img>
    <br/>
    <h1>Sobre</h1>
    <br/>
    <article>
      <p>Tem temática inspirada em desenhos animados e games. O encontro tem por finalidade trazer conhecimento, entretenimento com atividades interativas, para os fãs desse segmento em Minas Gerais. A programação inclui apresentações culturais, torneios, oficinas, gincanas, workshops, concursos de Cosplay, Campeonatos de jogos, Just Dance, shows com músicas e muitas outras atrações. Além da programação cultural, o evento contará com exposições, área de bazaristas com vendas de produtos típicos da cultura pop oriental e geek, espaço para divulgação de quadrinistas mineiros e área de gastronomia.</p>
      <p>Para melhor atendê-los e manter a ordem, é importante a leitura das <a href="event.pdf" download>normas do evento</a>.</p>
    </article>
    <br/>
    <h1>Principais Atrações</h1>
    <v-container fluid grid-list-sm hidden-sm-and-down>
      <v-layout wrap>
        <v-flex xs4>
          <v-card
            max-width="300px"
          >
            <v-img
              height="300px"
              :src="require('../assets/spyked.png')"
            ></v-img>
            <h1>Thiago Spyked</h1>
            <v-card-text>
              O escritor Thiago Spiked , também quadrinista, professor e CEO da editora CraS, estará ao lado dos jovens quadrinistas mineiros (Artist Alley) para expor, comercializar suas obras e trocar experiências.
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex xs4>
          <v-card
            max-width="300px"
          >
            <v-img
              height="300px"
              :src="require('../assets/angie.png')"
            ></v-img>
            <h1>Angie Starling</h1>
            <v-card-text>
              Digital Influencer, Cosplayer há mais de 5 anos, Streamer e também YouTuber, Angie estará abrilhantando
o evento no sábado enquanto interage com o público. No Domingo, no nosso espaço pra Meet and
Greet para autógrafos, fotografias e conversa!
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex xs4>
          <v-card
            max-width="300px"
          >
            <v-img
              :src="require('../assets/games.png')"
              height="300px"
            ></v-img>
            <h1>Espaço Zion</h1>
            <v-card-text>
              Contamos também com campeonatos espetaculares de vários games como Dragon Ball, Fifa, Mortal Kombat e Street Fighter.
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
    <div class="centralize hidden-md-and-up">
      <v-card
        max-width="300px"
      >
        <v-img
          height="300px"
          :src="require('../assets/spyked.png')"
        ></v-img>
        <h1>Thiago Spyked</h1>
        <article>
          O escritor Thiago Spiked , também quadrinista, professor e Ceo da editora CraS, estará ao lado dos jovens quadrinistas mineiros (Artist Alley) para expor, comercializar suas obras e trocar experiências.
        </article>
      </v-card>
      <v-container/>
      <v-card
        max-width="300px"
      >
        <v-img
          height="300px"
          :src="require('../assets/angie.png')"
        ></v-img>
        <h1>Angie Starling</h1>
        <article>
          Digital Influencer, Cosplayer há mais de 5 anos, Streamer e também YouTuber, Angie estará abrilhantando
o evento no sábado enquanto interage com o público. No Domingo, no nosso espaço pra Meet and
Greet para autógrafos, fotografias e conversa!
        </article>
      </v-card>
      <v-container/>
      <v-card
        max-width="300px"
      >
        <v-img
          :src="require('../assets/games.png')"
          height="300px"
        ></v-img>
        <h1>Espaço Zion</h1>
        <article>
          Contamos também com campeonatos espetaculares de vários games como Dragon Ball, Fifa, Mortal Kombat e Street Fighter.
        </article>
      </v-card>
    </div>
  </v-container>
</template>

<style>

.v-card__text {
  display: block;
  height: 200px;
}

.v-card {
  text-align: center;
  width: 300px;
}

.centralize {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
}

</style>
