<template>
  <v-container fluid>
    <div class="hidden-sm-and-down">
      <v-layout class="makeItWhite">
          <v-img class="margin" width="300" :src="require('../assets/ticket.png')"/>
          <div class="margin">
            <p>Os ingressos são diários e individuais, para ir nos dois dias deve comprar 2 ingressos.</p>
            <i>Os Ingressos estarão sendo vendidos no dia do evento na Bilheteria, a partir das 12:30 horas no dia 3/08/2019 e das 10:30 horas no dia 4/08/2019.</i>
            <p>Serão aceitos os seguintes meios de pagamento:
              <ul>
                <li>CRÉDITO</li>
                <li>DÉBITO</li>
                <li>DINHEIRO</li>
              </ul>
            </p>
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
      <v-layout class="makeItWhite">
        <div class="margin">
          <p>O ingresso social é um benefício para todas as pessoas que não se encaixam nas normas de meia entrada e mesmo assim gostariam de prestigiar o evento, basta doar uma caixa de 1 litro de leite integral. </p>
          <p>Para usufruir desse benefício, basta adquirir o ingresso social, na compra online ou na bilheteria no dia do evento e levar uma caixa de leite que deverá ser entregue na recepção do Matsuri Pop Geek na sua chegada. </p>
          <p>O visitante deverá levar uma caixa de 1 litro de leite por ingresso adquirido. Por exemplo: se o visitante adquiriu 2 ingressos sociais para os dois dias de evento, deverá levar duas caixas de leite. No caso da não entrega da doação na chegada do evento, o ingresso social não é valido e o visitante deverá pagar a diferença de valor do ingresso Inteira. Sendo o valor do ingresso social R$ 25,00 e o ingresso Inteira R$ 36,00, o visitante deverá pagar o equivalente a R$ 11,00 para que sua entrada no evento seja validada.</p>
          <p>Caso se recuse a pagar a diferença de valor estipulada, a entrada no evento não será possível. Do mesmo modo,  o valor pago no ingresso social anteriormente, não será restituído pela Comissão Organizadora do Matsuri Pop Geek. </p>
        </div>
        <v-img class="margin" width="300" :src="require('../assets/social.png')"/>
      </v-layout>
      <v-layout class="makeItWhite">    
        <v-img class="margin" width="300" :src="require('../assets/half.png')"/>
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
    </div>
    <div class="centralize hidden-md-and-up">
      <v-card class="makeItWhite">
        <v-img :src="require('../assets/ticket.png')"/>
        <article>
          <p>Os ingressos são diários e individuais, para ir nos dois dias deve comprar 2 ingressos.</p>
          <i>Os Ingressos estarão sendo vendidos no dia do evento na Bilheteria, a partir das 12:30 horas no dia 3/08/2019 e das 10:30 horas no dia 4/08/2019.</i>
            <p>Serão aceitos os seguintes meios de pagamento:
              <ul>
                <li>CRÉDITO</li>
                <li>DÉBITO</li>
                <li>DINHEIRO</li>
              </ul>
            </p>
          <p>Valores no dia do evento:</p>
          <p>R$ 18,00 - Meia Entrada </p>
          <p>R$ 25,00 + 1 LITRO DE LEITE (caixa) -  Ingresso Social</p>
          <p>R$ 36,00 – Inteira</p>
          <v-flex xs8 sm4 offset-sm4 offset-xs2>
            <a href="minor.pdf" style="text-decoration: none;" download>
              <v-btn color="primary" block dark @click="dialog = true">AUTORIZAÇÃO MENORES DE IDADE</v-btn>
            </a>
          </v-flex>
        </article>
      </v-card>
      <v-container/>
      <v-card class="makeItWhite">
        <v-img :src="require('../assets/social.png')"/>
        <article>
          <p>O ingresso social é um benefício para todas as pessoas que não se encaixam nas normas de meia entrada e mesmo assim gostariam de prestigiar o evento, basta doar uma caixa de 1 litro de leite integral. </p>
          <p>Para usufruir desse benefício, basta adquirir o ingresso social, na compra online ou na bilheteria no dia do evento e levar uma caixa de leite que deverá ser entregue na recepção do Matsuri Pop Geek na sua chegada. </p>
          <p>O visitante deverá levar uma caixa de 1 litro de leite por ingresso adquirido. Por exemplo: se o visitante adquiriu 2 ingressos sociais para os dois dias de evento, deverá levar duas caixas de leite. No caso da não entrega da doação na chegada do evento, o ingresso social não é valido e o visitante deverá pagar a diferença de valor do ingresso Inteira. Sendo o valor do ingresso social R$ 25,00 e o ingresso Inteira R$ 36,00, o visitante deverá pagar o equivalente a R$ 11,00 para que sua entrada no evento seja validada.</p>
          <p>Caso se recuse a pagar a diferença de valor estipulada, a entrada no evento não será possível. Do mesmo modo,  o valor pago no ingresso social anteriormente, não será restituído pela Comissão Organizadora do Matsuri Pop Geek. </p>
        </article>
      </v-card>
      <v-container/>
      <v-card class="makeItWhite">
        <v-img :src="require('../assets/half.png')"/>
        <article>
          <p>Estudantes</p>
          <p>Idosos</p>
          <p>Pessoas com deficiência </p>
          <p>Jovens de 15 a 29 anos de baixa renda inscritos no Cadastro Único para Programas Sociais do Governo Federal (CadÚnico) e cuja renda familiar mensal seja de até 2 (dois) salários mínimos, na forma do regulamento.</p>
          <v-flex xs8 sm4 offset-sm4 offset-xs2>
            <a href="ticket.pdf" style="text-decoration: none;" download>
              <v-btn color="primary" block dark @click="dialog = true">LEI DA MEIA ENTRADA</v-btn>
            </a>
          </v-flex>
        </article>
      </v-card>
    </div>
    <br/>
    <div class="center">
      <h2>Quem tem direito a gratuidade?</h2>
      <br/>
      <article>
        Durante o evento Matsuri Pop Geek estarão isentos de pagar entrada os seguintes públicos:
        <ul>
          <li>Menores de 6 (seis) anos de idade completos.</li>
        </ul>
      </article>
    </div>
  </v-container>
</template>

<style>

.center {
  text-align: center;
}

.margin {
  margin: 10px 10px auto;
}

ul {
  list-style: none;
}

.centralize {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
}

.v-card {
  width: 350px;
  margin: 20px auto;
}

.makeItWhite {
  margin: 10px 10px auto;
  background-color: #FFF;
}

</style>
