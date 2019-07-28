<template>
  <v-container fluid>
    <v-container class="hidden-sm-and-down" fluid>
      <v-layout>
        <v-img class="margin" width="350" :src="require('../assets/ticket.png')"/>
        <div class="margin">
          <p>Os ingressos são diários e individuais, para ir nos dois dias deve comprar 2 ingressos.</p>
          <i>Os Ingressos estarão sendo vendidos no dia do evento na Bilheteria, a partir das 12:30 horas no dia 3/08/2019 e das 10:30 horas no dia 4/08/2019.</i>
          <p>Será aceito o seguinte meio de pagamento:</p>
          <p>APENAS  DINHEIRO </p>
          <p>Valores no dia do evento:</p>
          <p>R$ 18,00 - Meia Entrada </p>
          <p>R$ 25,00 + 1 LITRO DE LEITE (caixa) -  Ingresso Social</p>
          <p>R$ 36,00 – Inteira</p>
          <v-flex xs8 sm4 offset-sm4 offset-xs2>
            <a href="minor.pdf" style="text-decoration: none;" download>
              <v-btn color="primary" block dark @click="dialog = true">AUTORIZAÇÃO MENORES DE IDADE</v-btn>
            </a>
          </v-flex>
        </div>
      </v-layout>
      <v-layout>
        <div class="margin">
          <p>O ingresso social é um benefício para todas as pessoas que não se encaixam nas normas de meia entrada e mesmo assim gostariam de prestigiar o evento, basta doar uma caixa de 1 litro de leite integral. </p>
          <p>Para usufruir desse benefício, basta adquirir o ingresso social, na compra online ou na bilheteria no dia do evento e levar uma caixa de leite que deverá ser entregue na recepção do Matsuri Pop Geek na sua chegada. </p>
          <p>O visitante deverá levar uma caixa de 1 litro de leite por ingresso adquirido. Por exemplo: se o visitante adquiriu 2 ingressos sociais para os dois dias de evento, deverá levar duas caixas de leite. No caso da não entrega da doação na chegada do evento, o ingresso social não é valido e o visitante deverá pagar a diferença de valor do ingresso Inteira. Sendo o valor do ingresso social R$ 25,00 e o ingresso Inteira R$ 36,00, o visitante deverá pagar o equivalente a R$ 11,00 para que sua entrada no evento seja validada.</p>
          <p>Caso se recuse a pagar a diferença de valor estipulada, a entrada no evento não será possível. Do mesmo modo,  o valor pago no ingresso social anteriormente, não será restituído pela Comissão Organizadora do Matsuri Pop Geek. </p>
        </div>
        <v-img class="margin" width="350" :src="require('../assets/social.png')"/>
      </v-layout>
      <v-layout>    
        <v-img class="margin" width="350" :src="require('../assets/half.png')"/>
        <div class="margin">
          <p>Estudantes</p>
          <p>Idosos</p>
          <p>Pessoas com deficiência </p>
          <p>Jovens de 15 a 29 anos de baixa renda inscritos no Cadastro Único para Programas Sociais do Governo Federal (CadÚnico) e cuja renda familiar mensal seja de até 2 (dois) salários mínimos, na forma do regulamento.</p>
          <v-flex xs8 sm4 offset-sm4 offset-xs2>
            <a href="ticket.pdf" style="text-decoration: none;" download>
              <v-btn color="primary" block dark @click="dialog = true">LEI DA MEIA ENTRADA</v-btn>
            </a>
          </v-flex>
        </div>
      </v-layout>
    </v-container>
    <v-container class="hidden-md-and-up" fluid>
      <v-card>
        <v-img
          :src="require('../assets/ticket.png')"
          height="300px"
        ></v-img>
        <v-card-text style="height: 550px;">
          <p>Os ingressos são diários e individuais, para ir nos dois dias deve comprar 2 ingressos.</p>
          <i>Os Ingressos estarão sendo vendidos no dia do evento na Bilheteria, a partir das 12:30 horas no dia 3/08/2019 e das 10:30 horas no dia 4/08/2019.</i>
          <p>Será aceito o seguinte meio de pagamento:</p>
          <p>APENAS  DINHEIRO </p>
          <p>Valores no dia do evento:</p>
          <p>R$ 18,00 - Meia Entrada </p>
          <p>R$ 25,00 + 1 LITRO DE LEITE (caixa) -  Ingresso Social</p>
          <p>R$ 36,00 – Inteira</p>
          <v-flex xs8 sm4 offset-sm4 offset-xs2>
            <a href="minor.pdf" style="text-decoration: none;" download>
              <v-btn color="primary" block dark @click="dialog = true">AUTORIZAÇÃO MENORES DE IDADE</v-btn>
            </a>
          </v-flex>
        </v-card-text>
      </v-card>
      <v-container/>
      <v-card>
        <v-img
          :src="require('../assets/social.png')"
          height="300px"
        ></v-img>
        <v-card-text style="height: 850px;">
          <p>O ingresso social é um benefício para todas as pessoas que não se encaixam nas normas de meia entrada e mesmo assim gostariam de prestigiar o evento, basta doar uma caixa de 1 litro de leite integral. </p>
          <p>Para usufruir desse benefício, basta adquirir o ingresso social, na compra online ou na bilheteria no dia do evento e levar uma caixa de leite que deverá ser entregue na recepção do Matsuri Pop Geek na sua chegada. </p>
          <p>O visitante deverá levar uma caixa de 1 litro de leite por ingresso adquirido. Por exemplo: se o visitante adquiriu 2 ingressos sociais para os dois dias de evento, deverá levar duas caixas de leite. No caso da não entrega da doação na chegada do evento, o ingresso social não é valido e o visitante deverá pagar a diferença de valor do ingresso Inteira. Sendo o valor do ingresso social R$ 25,00 e o ingresso Inteira R$ 36,00, o visitante deverá pagar o equivalente a R$ 11,00 para que sua entrada no evento seja validada.</p>
          <p>Caso se recuse a pagar a diferença de valor estipulada, a entrada no evento não será possível. Do mesmo modo,  o valor pago no ingresso social anteriormente, não será restituído pela Comissão Organizadora do Matsuri Pop Geek. </p>
        </v-card-text>
      </v-card>
      <v-container/>
      <v-card>
        <v-img
          :src="require('../assets/half.png')"
          height="300px"
        ></v-img>
        <v-card-text>
          <p>Estudantes</p>
          <p>Idosos</p>
          <p>Pessoas com deficiência </p>
          <p>Jovens de 15 a 29 anos de baixa renda inscritos no Cadastro Único para Programas Sociais do Governo Federal (CadÚnico) e cuja renda familiar mensal seja de até 2 (dois) salários mínimos, na forma do regulamento.</p>
          <v-flex xs8 sm4 offset-sm4 offset-xs2>
            <a href="ticket.pdf" style="text-decoration: none;" download>
              <v-btn color="primary" block dark @click="dialog = true">LEI DA MEIA ENTRADA</v-btn>
            </a>
          </v-flex>
        </v-card-text>
      </v-card>
    </v-container>
    <br/>
    <h2>Quem tem direito a gratuidade?</h2>
    <br/>
    <article>
      Durante o evento Matsuri Pop Geek estarão isentos de pagar entrada os seguintes públicos:
      <ul>
        <li>Menores de 6 (seis) anos de idade completos.</li>
        <li>Maiores de 60 (sessenta) anos.</li>
      </ul>
    </article>
  </v-container>
</template>

<style>

.margin {
  margin: 10px 10px;
}

ul {
  list-style: none;
}

.v-card__text {
  display: block;
  height: 350px;
}

</style>
