<template>
  <div class="programming">
    <div class="about">
      <div>
        <h1>PROGRAMAÇÃO</h1>
      </div>
      <div>
        <p>Tem temática inspirada em desenhos animados e games. O encontro finalidade
          trazer o conhecimento, entretenimento com atividades interativas, para os
          fãs desse segmento em Minas Gerais.

          A programação inclui apresentações culturais, torneios, oficinas, gincanas,
          workshops, concursos de Cosplay, Campeonatos de jogos, Just Dance, shows com
          músicas e muitas outras atrações. Além da programação cultural, o evento 
          contará com exposições, áreas de bazaristas com vendas de produtos típicos da
          cultura pop oriental e geek, espaço para divulgação de quadrinistas mineiros e
          área de gastronomia.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  import HelloWorld from '../components/HelloWorld'

  export default {
    components: {
      HelloWorld
    }
  }

</script>

<style>

.programming{
  margin: 60px 0;
}

.programming h1{
  font-family: 'Fjalla One', sans-serif;
  margin-bottom: 20px;
}

.programming p{
  font-size: 2rem;
}

.programming .about{
  margin-bottom: 20px;
}

</style>

