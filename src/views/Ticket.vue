<template>
  <v-flex white>
    <v-card>
      <v-card-title>
        <span class="headline">VENDA</span>
      </v-card-title>
      <v-card-text>
        <p>Os ingressos são diários e individuais, para ir nos dois dias deve comprar 2 ingressos.</p>
      </v-card-text>
      <v-card-title>
        <span class="headline">VENDA NO DIA DO EVENTO</span>
      </v-card-title>
      <v-card-text>
        <i>Os Ingressos estarão sendo vendidos no dia do evento na Bilheteria, a partir das 12:30 horas no dia 3/08/2019 e das 10:30 horas no dia 4/08/2019.</i>
        <p>Será aceito o seguinte meio de pagamento:</p>
        <p>APENAS  DINHEIRO </p>
        <p>Valores no dia do evento:</p>
        <p>R$ 18,00 - Meia Entrada </p>
        <p>R$ 25,00 + 1 LITRO DE LEITE (caixa) -  Ingresso Social</p>
        <p>R$ 36,00 – Inteira</p>
      </v-card-text>
      <v-card-title>
        <span class="headline">VENDA ONLINE</span>
      </v-card-title>
      <v-flex xs8 sm4 offset-sm4 offset-xs2 white>
        <v-btn
          block
          color="success"
          href="https://www.hbatools.com.br/MATSURI-POP-GEEK-2019__326"
          target="_blank"
        >
          <span>COMPRAR INGRESSOS</span>
        </v-btn>
      </v-flex>
      <v-card-text>
        Para participar consulte nossas regras clicando <router-link to="/">aqui</router-link>.
      </v-card-text>
      <v-expansion-panel>
        <v-expansion-panel-content>
          <template v-slot:header>O que é o Ingresso Social?</template>
          <v-card>
            <v-card-text>
              <p>O ingresso social é um benefício para todas as pessoas que não se encaixam nas normas de meia entrada e mesmo assim gostariam de prestigiar o evento, basta doar uma caixa de 1 litro de leite integral. </p>
              <p>Para usufruir desse benefício, basta adquirir o ingresso social, na compra online ou na bilheteria no dia do evento e levar uma caixa de leite que deverá ser entregue na recepção do Matsuri Pop Geek na sua chegada. </p>
              <p>O visitante deverá levar uma caixa de 1 litro de leite por ingresso adquirido. Por exemplo: se o visitante adquiriu 2 ingressos sociais para os dois dias de evento, deverá levar duas caixas de leite. No caso da não entrega da doação na chegada do evento, o ingresso social não é valido e o visitante deverá pagar a diferença de valor do ingresso Inteira. Sendo o valor do ingresso social R$ 25,00 e o ingresso Inteira R$ 36,00, o visitante deverá pagar o equivalente a R$ 11,00 para que sua entrada no evento seja validada.</p>
              <p>Caso se recuse a pagar a diferença de valor estipulada, a entrada no evento não será possível. Do mesmo modo,  o valor pago no ingresso social anteriormente, não será restituído pela Comissão Organizadora do Matsuri Pop Geek. </p>
            </v-card-text>
          </v-card>
        </v-expansion-panel-content>
        <v-expansion-panel-content dark>
          <template v-slot:header>Quem tem direito a meia entrada?</template>
          <v-card>
            <v-card-text>
              <p>Estudantes</p>
              <p>Idosos</p>
              <p>Pessoas com deficiência </p>
              <p>Jovens de 15 a 29 anos de baixa renda inscritos no Cadastro Único para Programas Sociais do Governo Federal (CadÚnico) e cuja renda familiar mensal seja de até 2 (dois) salários mínimos, na forma do regulamento.</p>
              <v-flex xs8 sm4 offset-sm4 offset-xs2>
                <v-btn color="primary" block dark @click="dialog = true">LEI DA MEIA ENTRADA</v-btn>
              </v-flex>
            </v-card-text>
          </v-card>
        </v-expansion-panel-content>
        <v-expansion-panel-content>
          <template v-slot:header>Quem tem direito a gratuidade?</template>
          <v-card>
            <v-card-title>
              Durante o evento Matsuri Pop Geek estarão isentos de pagar entrada os seguintes públicos: 
            </v-card-title> 
            <v-card-text>
              <p>Menores de 6 (seis) anos de idade completos.</p>
              <p>Maiores de 60 (sessenta) anos.</p>
            </v-card-text>
          </v-card>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-card>
    <v-dialog v-model="dialog">
      <v-card>
        <v-card-title>
          <span class="headline">Lei da Meia Entrada</span>
        </v-card-title>
        <v-card-text>
          <p>Em conformidade com a legislação brasileira, o Matsuri Pop Geek orienta o público quanto aos critérios para o benefício da MEIA ENTRADA:</p>
          <p>LEI FEDERAL Nº 12.933, DE 26 DE DEZEMBRO DE 2013 E DECRETO 8.537, DE 5 DE OUTUBRO DE 2015</p>
          <p>A Lei Federal nº 12.933/2013 dispõe sobre o benefício do pagamento de meia-entrada para estudantes, idosos, pessoas com deficiência e jovens de 15 a 29 anos comprovadamente carentes em espetáculos artísticos culturais e esportivos, e revoga a medida provisória nº 2.208.</p>
          <p>Conforme art. 1º “É assegurado aos estudantes o acesso a salas de cinema, cineclubes, teatros, espetáculos musicais e circenses e eventos educativos, esportivos, de lazer e de entretenimento, em todo o território nacional, promovidos por quaisquer entidades e realizados em estabelecimentos públicos ou particulares, mediante pagamento da metade do preço do ingresso efetivamente cobrado do público em geral.</p>
          <ol>
            <li>O benefício previsto no caput não será cumulativo com quaisquer outras promoções e convênios e, também, não se aplica ao valor dos serviços adicionais eventualmente oferecidos em camarotes, áreas e cadeiras especiais.</li>
            <li>Terão direito ao benefício os estudantes regularmente matriculados nos níveis e modalidades de educação e ensino previstos no Título V da Lei no 9.394, de 20 de dezembro de 1996, que comprovem sua condição de discente, mediante a apresentação, no momento da aquisição do ingresso e na portaria do local de realização do evento, da Carteira de Identificação Estudantil (CIE), emitida pela Associação Nacional de Pós-Graduandos (ANPG), pela União Nacional dos Estudantes (UNE), pela União Brasileira dos Estudantes Secundaristas (Ubes), pelas entidades estaduais e municipais filiadas àquelas, pelos Diretórios Centrais dos Estudantes (DCEs) e pelos Centros e Diretórios Acadêmicos, com prazo de validade renovável a cada ano, conforme modelo único nacionalmente padronizado e publicamente disponibilizado pelas entidades nacionais antes referidas e pelo Instituto Nacional de Tecnologia da Informação (ITI), com certificação digital deste, podendo a carteira de identificação estudantil ter 50% (cinquenta por cento) de características locais. (VETADO)</li>
            <li>A Associação Nacional de Pós-Graduandos, a União Nacional dos Estudantes, a União Brasileira dos Estudantes Secundaristas e as entidades estudantis estaduais e municipais filiadas àquelas deverão disponibilizar um banco de dados contendo o nome e o número de registro dos estudantes portadores da Carteira de Identificação Estudantil (CIE), expedida nos termos desta Lei, aos estabelecimentos referidos no caput deste artigo e ao Poder Público.</li>
            <li>A representação estudantil é obrigada a manter o documento comprobatório do vínculo do aluno com o estabelecimento escolar, pelo mesmo prazo de validade da respectiva Carteira de Identificação Estudantil (CIE).</li>
            <li>A Carteira de Identificação Estudantil (CIE) será válida da data de sua expedição até o dia 31 de março do ano subsequente. (VETADO)</li>
            <li>Também farão jus ao benefício da meia-entrada as pessoas com deficiência, inclusive seu acompanhante quando necessário, sendo que este terá idêntico benefício no evento em que comprove estar nesta condição, na forma do regulamento.</li>
            <li>Também farão jus ao benefício da meia-entrada os jovens de 15 a 29 anos de idade de baixa renda, inscritos no Cadastro Único para Programas Sociais do Governo Federal (CadÚnico) e cuja renda familiar mensal seja de até 2 (dois) salários mínimos, na forma do regulamento.</li>
            <li>A concessão do direito ao benefício da meia-entrada é assegurada em 40% (quarenta por cento) do total dos ingressos disponíveis para cada evento.</li>
            <li>As normas desta Lei não se aplicam aos eventos Copa do Mundo FIFA de 2014 e Olimpíadas do Rio de Janeiro de 2016.”</li>
          </ol>
          <p>O decreto 8.537/2015 regulamenta a lei nº 12.933/2013 e entra em vigor em 1º de dezembro de 2015. Para ter direito ao benefício da meia-entrada o beneficiário deve apresentar documento comprobatório na compra e entrada do evento.</p>
          <p>A lei federal assegura 40% (quarenta por cento) do total de ingressos vendáveis, por categoria, para atendimento aos beneficiários da meia- entrada.</p>
          <v-expansion-panel>
            <v-expansion-panel-content>
              <template v-slot:header>ESTUDANTE</template>
              <v-card>
                <v-card-text>
                  <p>Pessoa regularmente matriculada em instituições de ensino, pública ou privada, nos níveis e modalidades previstas no título V da lei nº 9.394, de 20 de dezembro de 1996.</p>
                  <p>Os estudantes terão direito ao benefício da meia-entrada mediante apresentação da CIE – Carteira de Identificação Estudantil – no momento da aquisição do ingresso e na portaria ou na entrada do local de realização do evento.</p>
                  <p>A CIE será expedida por: Associação Nacional de Pós-Graduandos (ANPG); União Nacional dos Estudantes (UNE); União Brasileira dos Estudantes Secundaristas (UBES); entidades estaduais e municipais filiadas à ANPG, UNE e UBES; Diretórios Centrais dos Estudantes (DCE); Centros e Diretórios Acadêmicos, de nível médio e superior.</p>
                  <p>Observado o disposto no § 2º do art. 1º da Lei nº 12.933, de 2013, deverão constar os seguintes elementos na CIE: I – nome completo e data de nascimento do estudante; II – foto recente do estudante; III – nome da instituição de ensino na qual o estudante esteja matriculado; IV – grau de escolaridade e data de validade até o dia 31 de março do ano subsequente ao de sua expedição.</p>
                  <p>Atenção: somente o boleto e/ou comprovante de matrícula não comprova o direito à meia-entrada.</p>
                </v-card-text>
              </v-card>
            </v-expansion-panel-content>
            <v-expansion-panel-content>
              <template v-slot:header>PESSOA COM DEFICIÊNCIA </template>
              <v-card>
                <v-card-text>
                  <p>Pessoa que possui impedimento de longo prazo de natureza física, mental, intelectual ou sensorial, o qual, em interação com uma ou mais barreiras, pode obstruir sua participação plena e efetiva na sociedade em igualdade de condições com outras pessoas.</p>
                  <p>As pessoas com deficiência terão direito ao benefício da meia-entrada mediante a apresentação do seu Cartão de Benefício de Prestação Continuada de Assistência Social no momento da aquisição do ingresso e na portaria ou entrada do local de realização do evento, ou de documento emitido pelo Instituto Nacional do Seguro Social (INSS) que ateste a aposentadoria de acordo com os critérios estabelecidos na lei complementar nº 142, de 8 de maio de 2013.</p>
                  <p>O documento de identidade deve ser apresentado juntamente a esses documentos.</p>
                  <p>Quando a pessoa com deficiência necessitar de acompanhamento, ao seu acompanhante também se aplica o direito ao benefício da meia-entrada. O desconto será concedido mediante declaração da necessidade do acompanhante pela pessoa com deficiência ou, na sua impossibilidade, por seu acompanhante, no momento da aquisição do ingresso e na portaria ou na entrada do local de realização do evento.</p>
                </v-card-text>
              </v-card>
            </v-expansion-panel-content>
            <v-expansion-panel-content>
              <template v-slot:header>JOVEM DE BAIXA RENDA</template>
              <v-card>
                <v-card-text>
                  <p>Pessoa com idade entre 15 e 29 anos que pertence à família com renda mensal de até dois salários mínimos, inscrita no Cadastro Único para programas sociais do Governo Federal, o CadÚnico.</p>
                  <p>Os jovens de baixa renda terão direito ao benefício da meia-entrada mediante apresentação, no momento da aquisição do ingresso e na portaria ou na entrada do local de realização do evento, da Identidade Jovem, emitida pela Secretaria Geral da Presidência da República, por meio da Secretaria Nacional de Juventude, acompanhada de documento de identificação com foto, expedido por órgão público e válido em todo o território nacional.</p>
                </v-card-text>
              </v-card>
            </v-expansion-panel-content>
            <v-expansion-panel-content>
              <template v-slot:header>IDOSOS</template>
              <v-card>
                <v-card-text>
                  <p>De acordo com a Lei Federal nº 10.741/2003, pessoas com idade igual ou superior a 60 anos têm direito ao benefício da meia-entrada. Para comprovação, basta apresentar documento de identidade no momento de aquisição do ingresso e na portaria ou entrada do local de realização do evento.</p>
                </v-card-text>
              </v-card>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-card-text>
        <v-card-title>
          INFORMAÇÕES IMPORTANTES CONTIDAS NA LEI
        </v-card-title>
        <v-card-text>
          <p>O benefício à meia-entrada não é cumulativo com outras promoções e descontos.</p>
          <p>O valor do ingresso de meia-entrada deve equivaler à metade do preço do ingresso cobrado para venda ao público em geral.</p>
          <p>É expressamente necessária a apresentação do documento de identidade no ato da compra de ingressos e na entrada do evento.</p>
        </v-card-text>
        <v-card-title>
          LEI MUNICIPAL Nº 9.070/2005
        </v-card-title> 
        <v-card-text>
          <p>Em Belo Horizonte, a Lei Municipal nº 9.070/2005 garante ao menor de 21 anos o direito ao benefício da meia-entrada. Para comprovação, basta apresentar documento de identidade no momento da aquisição do ingresso e na portaria ou na entrada do local de realização do evento.</p>
        </v-card-text>
        <v-card-actions>
          <v-spacer/>
          <v-btn color="primary" text @click="dialog = false">FECHAR</v-btn>
          <v-spacer/>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-flex>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
    };
  },
};
</script>