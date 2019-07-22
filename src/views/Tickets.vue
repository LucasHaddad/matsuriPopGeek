<template>
  <div class="tickets">
    <div class="about">
      <div>
        <h1>INGRESSOS</h1>
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

.tickets{
  margin: 60px 0;
}

.tickets h1{
  font-family: 'Fjalla One', sans-serif;
  margin-bottom: 20px;
}

.tickets p{
  font-size: 2rem;
}

.tickets .about{
  margin-bottom: 20px;
}

</style>

