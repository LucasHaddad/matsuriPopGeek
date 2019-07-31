<template>
  <v-container fluid>
    <v-img
      :src="require('../assets/banner_2.png')"
      class="hidden-sm-and-down"
    ></v-img>
    <v-img
      :src="require('../assets/mobile_banner_2.png')"
      class="hidden-md-and-up"
    ></v-img>
    <div class="schedule">
      <h1> Programação </h1>
      <table>
        <tr>
          <th>
            Sábado - 03/08/2019
          </th>
          <th>
            Atividade
          </th>
        </tr>
        <tr>
          <td>13:30</td>
          <td>Animeke</td>
        </tr>
        <tr>
          <td>14:00</td>
          <td>Entrevista com Tiago Spyked</td>
        </tr>
        <tr>
          <td>14:30</td>
          <td>Taiko</td>
        </tr>
        <tr>
          <td>15:00</td>
          <td>K-pop MG</td>
        </tr>
        <tr>
          <td>16:00</td>
          <td>Aikidô</td>
        </tr>
        <tr>
          <td>16:30</td>
          <td>Yosakoi Soran</td>
        </tr>
        <tr>
          <td>17:00</td>
          <td>Demonstração de Kendama</td>
        </tr>
        <tr>
          <td>17:20</td>
          <td>POP Mania (GRUPO DE J-POP)</td>
        </tr>
        <tr>
          <td>18:30</td>
          <td>Show da SURGE~outofdesperation</td>
        </tr>
        <tr>
          <td>19:30</td>
          <td>Apresentação de combate com a Liga Mineira de Swordplay</td>
        </tr>
        <tr>
          <th>
            Domingo - 04/08/2019
          </th>
          <th>
            Atividade
          </th>
        </tr>
        <tr>
          <td>11:00</td>
          <td>POP Mania</td>
        </tr>
        <tr>
          <td>12:00</td>
          <td>Aikidô</td>
        </tr>
        <tr>
          <td>12:30</td>
          <td>Taikô</td>
        </tr>
        <tr>
          <td>13:00</td>
          <td>Bate Papo com Maidy</td>
        </tr>
        <tr>
          <td>13:30</td>
          <td>Yosakoi Soran</td>
        </tr>
        <tr>
          <td>14:00</td>
          <td>Bate Papo com Thiago Spyked</td>
        </tr>
        <tr>
          <td>14:30</td>
          <td>Concurso Cosplay</td>
        </tr>
          <tr>
          <td>15:30</td>
          <td>K-pop MG</td>
        </tr>
        <tr>
          <td>16:30</td>
          <td>Apresentação Conselho Jedi de MG</td>
        </tr>
        <tr>
          <td>16:40</td>
          <td>Demonstração de Kendama</td>
        </tr>
        <tr>
          <td>16:50</td>
          <td>Premiação Concurso Cosplay e Jogo</td>
        </tr>
        <tr>
          <td>17:20</td>
          <td>Show da J-Kai</td>
        </tr>
      </table>
    </div>
  </v-container>
</template>

<style>

table, th, td {
  border: 1px solid #000;
  text-align: center;
  background-color: #FFF;
  color: #000;
}

th {
  background-color: #DDD;  
}

.schedule {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

</style>
