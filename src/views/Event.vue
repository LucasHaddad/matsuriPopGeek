<template>
  <v-layout d-flex column>
    <v-card>
      <v-card-title>
        <span class="headline">SOBRE</span>
      </v-card-title>
      <v-card-text>
        <p>Tem temática inspirada em desenhos animados e games. O encontro tem por finalidade trazer conhecimento, entretenimento com atividades interativas, para os fãs desse segmento em Minas Gerais. A programação inclui apresentações culturais, torneios, oficinas, gincanas, workshops, concursos de Cosplay, Campeonatos de jogos, Just Dance, shows com músicas e muitas outras atrações. Além da programação cultural, o evento contará com exposições, área de bazaristas com vendas de produtos típicos da cultura pop oriental e geek, espaço para divulgação de quadrinistas mineiros e área de gastronomia.</p>
      </v-card-text>
      <v-flex xs8 sm4 offset-sm4 offset-xs2>
        <v-btn color="primary" block dark @click="eventRules = true">NORMAS DO EVENTO</v-btn>
        <v-btn color="warning" block dark @click="promotionRules = true">REGULAMENTO</v-btn>
        <v-btn color="success" block dark
          href="https://www.hbatools.com.br/MATSURI-POP-GEEK-2019__326"
          target="_blank"
        >
          COMPRAR INGRESSOS
        </v-btn>
      </v-flex>
      <v-container></v-container>
      <v-divider></v-divider>
      <v-container></v-container>
      <v-layout d-flex align-center justify-center column>
        <h1>MÍDIAS SOCIAIS</h1>
        <span>
          <v-flex d-flex row>
            <v-btn size="24px" text icon href="https://www.facebook.com/MatsuriPopGeek/" target="_blank">
              <v-img :src="require('../assets/fb.png')"/>
            </v-btn>
            <v-btn size="24px" text icon href="https://www.instagram.com/matsuripopgeek/" target="_blank">
              <v-img :src="require('../assets/insta.png')"/>
            </v-btn>
          </v-flex>
        </span>
        <v-container>
          <p><b>NÃO ENCONTROU ALGUMA INFORMAÇÃO?</b> Quer dar alguma sugestão, nos elogiar ou fazer críticas sobre o Matsuri Pop Geek?</p>
          <p>Entre em contato pelo nosso número de telefone ou e-mail:</p>
          <p>(31) 3657-4813</p>
          <p>matsuripopgeek@gmail.com</p>
          <p><i>Ao mandar seu e-mail para o Matsuri Pop Geek favor se identificar com seu nome e e-mail, para que possamos responder a você no endereço certo. Não esqueça de colocar o assunto! Ele é de suma importância para podermos encaminhar para os departamentos certos.</i></p>
        </v-container>
      </v-layout>
    </v-card>
    <v-dialog v-model="eventRules">
      <v-card>
        <v-card-title>
          <span class="headline">Segue normas a serem seguidas para um bom funcionamento do evento.</span>
        </v-card-title>
        <v-card-text>
          <p>I. Não será permitido entrar com Armas de fogo (inclusive para aqueles que tiverem porte da mesma), réplicas de armas de metais e ou vidro e artifícios de efeitos pirotécnicos. </p>
              <p>- Armas de Nerf ou Airsoft só serão permitidas se estiverem devidamente sinalizadas com a ponta laranja, sem nenhum tipo de munição e com o gatilho travado.</p>
          <p>II. Não será permitido entrar com itens que podem ser usados como armas no evento (Bastões de Baseball, e afins) Estes itens só poderão ser usado por cosplayers se forem feitos de Espuma,E.V.A, Papelão, Isopor ou Papel.</p>
          <p>III. Não será permitido entrar com objetos cortantes ou perfurantes tais como tesouras, estiletes, compassos, facas, espadas ou similares. Solicitamos aos visitantes que não tragam este tipo de material ao evento. Caso o visitante insista, o material será retido e deve ser retirado somente ao final do evento. Em caso de esquecimento, o objeto deverá ser retirado na sede da organização no prazo de 5 dias úteis contados a partir do fim do evento, após este período, o mesmo será descartado.</p>
          <p>IV. Não será permitido entrar com bebidas alcoólicas, nem latas e garrafas de vidro que possam trazer risco à segurança no evento. Elas serão confiscadas e descartadas. Assim como também é proibido consumi-las ou portá-las dentro do evento. Os visitantes encontrados com bebidas alcóolicas serão convidados a se retirarem do evento, assim como os que estiverem com sinais visíveis de embriaguez (Se a pessoa comprou ingresso antecipado e for constatado teor alcoólico não haverá devolução do valor pago pelo ingresso).</p>
          <p>V. Não será permitido o uso de cornetas e instrumentos que causem barulho no local do evento. Tais aparatos serão confiscados caso sejam utilizados e não serão devolvidos.</p>
          <p>VI. Não é permitida a entrada e nem o uso de entorpecentes ou substâncias controladas ou ilegais.</p>
          <p>VII. Não será permitido entrar com alimentos e bebidas (suco, refrigerantes, água, etc.) no evento.</p>
          <p>VIII. Os visitantes estão proibidos de colar ou distribuir qualquer tipo de cartaz ou panfleto sem a autorização dos organizadores do evento, assim como andar com placas ofensivas a pessoas ou empresas. </p>
          <p>IX. Não é permitido Gritar e ou promover arruaça dentro do evento, o responsável poderá ser expulso do evento sem aviso.</p>
          <p>X. Não é permitido desrespeito aos participantes do evento, assim como assédio sexual, moral, verbal e o uso de plaquinhas com conteúdo inapropriado, o responsável poderá ser expulso do evento sem aviso.</p>
          <p>XI. Não será tolerado incitação e/ou participação de tumultos ou qualquer tipo de briga dentro do espaço do evento.</p>
          <p>XII. É proibida a venda de quaisquer produtos não autorizados nas dependências do evento. Os produtos em questão serão retidos e devolvidos apenas ao final do evento. Os produtos são vendidos unicamente nos estandes oficiais do evento.</p>
          <p>XIII. Serão coibidas toda e qualquer cena e vestimenta ilícita ou imprópria para TODOS os visitantes (maiores ou menores de idade). Em caso de vestimenta imprópria, a pessoa deverá se vestir apropriadamente (não serão permitidas pessoas de toalhas, sungas, biquínis, roupas íntimas, sem roupas ou similares). Em caso de reincidência, a pessoa em questão será convidada a se retirar do evento.</p>
          <p>XIV. É proibido ao público o uso de bicicletas, patins, patinetes, skates e similares. Tais objetos serão retidos na portaria.</p>
          <p>XV. É proibida a entrada de animais em geral, exceto cão-guia;</p>
          <p>XVI. Menores de 12 anos poderão entrar somente acompanhados dos pais ou maior responsável da família com carta de autorização assinada pelos pais. </p>
          <p>XVII. Todos devem portar um documento com foto (identidade, carteira de trabalho/motorista e etc.), no caso de crianças a certidão de nascimento é aceita.</p>
          <p>XVIII. Os organizadores não se responsabilizam por objetos deixados ou perdidos  nas dependências do evento.</p>
          <p>XIX. Os organizadores não se responsabilizam por furtos oriundos de descuidos do visitante. </p>
          <p>XX. Não é permitido fumar dentro do evento.</p>
        </v-card-text>
        <v-card-actions>
          <v-spacer/>
          <v-btn color="primary" text @click="eventRules = false">FECHAR</v-btn>
          <v-spacer/>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog v-model="promotionRules">
      <v-card>
        <v-card-title>
          <span class="headline">PROMOÇÃO</span>
        </v-card-title>
        <v-card-text>
          <p>I.    Essa promoção tem caráter exclusivamente recreativo e cultural e não tem qualquer custo para os participantes.</p> 
          <p>II.   Poderá participar toda pessoa física, que comprar ingresso na plataforma online e estiver presente em um dos dias do evento.</p>
          <p>III.  Todos os prêmios sorteados são pessoais e intransferíveis.</p>
          <p>IV.   Período de participação: a partir do início da venda de ingressos online, com encerramento às 16 horas do dia 04 de agosto de 2019, período em que ocorrerá o 1º Encontro Mineiro de Cultura Pop Oriental & Universo Geek (Matsuri Pop Geek).</p>
          <p>V.    Os sorteios serão realizados no palco do Matsuri Pop Geek, a partir das 17 horas do dia 04 de agosto de 2019.</p>
        </v-card-text>
        <v-card-title>
          <span class="headline">PRÊMIO</span>
        </v-card-title>
        <v-card-text>
          <p>VI.   Os prêmios consistem em 1 (um) ingresso para a Comic-Con 2019, na cidade de São Paulo, passagens aéreas de ida e volta, além da hospedagem. </p>
                  <p>- O ingresso: A entrada sorteada consiste em 1 (um) ingresso nominal para um dos quatro dias da Comic Con, à escolha da Comissão Organizadora do Matsuri Pop Geek. O ingresso é do tipo "Social", sendo válido para todas as idades mediante a doação de um livro. O livro necessário para validação do ingresso na entrada da Comic Con será de responsabilidade única e exclusiva do sorteado. Veja mais informações <a href="https://ajuda.ccxp.com.br/hc/pt-br/articles/360025465992-O-que-%C3%A9-o-Ingresso-Social-" target="_blank">aqui</a>.</p>
                  <p>- Passagem: O sorteado receberá 1 (uma) passagem aérea de ida e volta em classe econômica para São Paulo, com saída e retorno a Belo Horizonte, para participar conforme a data do ingresso sorteado. </p>
                  <p>- Hospedagem: O sorteado receberá 1 (uma) diária em hotel de escolha da Comissão Organizadora do Matsuri Pop Geek, na cidade de São Paulo, conforme a data do ingresso sorteado.</p>
          <p>VII.  Caso o sorteado seja menor de idade, a Comissão Organizadora não se responsabiliza sobre os custos de acompanhamento e demais documentos necessários para autorização de menor. Estas providências serão de obrigação do responsável pelo menor. </p>
          <p>VIII. Todas as taxas aplicáveis e demais despesas inerentes à viagem, correrão por conta do sorteado.</p>
          <p>IX.   Os prêmios deverão ser retirados, pessoalmente, na sede da Organização do Matsuri Pop Geek, com agendamento prévio no prazo de 5 (cinco) dias uteis após o sorteio para confirmar o uso do prêmio. A não confirmação implicará na perda do prêmio sem qualquer reparação compensatória. O contato para confirmação deverá ser feito via e-mail para: matsuripopgeek@gmail.com ou eventos@acctbj.com.br</p>
        </v-card-text>
        <v-card-title>
          <span class="headline">PARTICIPAÇÃO</span>
        </v-card-title>
        <v-card-text>
          <p>X.    O sorteado deverá ser residente do estado de Minas Gerais, local onde realiza-se o evento. </p>
          <p>XI.   A divulgação dos resultados desta promoção será através de divulgação no <a href="http://matsuripopgeek.com.br" target="_blank">site</a>, e também nas redes sociais do Matsuri Pop Geek. </p>
          <p>XII.  É vedado ao sorteado solicitar a conversão do prêmio por dinheiro. </p>
          <p>XIII. O sorteado será devidamente reconhecido como ganhador após comprovação mediante a apresentação de seu documento de identidade e CPF. </p>
          <p>XIV.  Caberá ao participante sorteado arcar com todas as despesas adicionais, em especial as oriundas de: alimentação; taxas de traslado e extras. Bem como o consumo de frigobar que não está incluso na hospedagem. </p>
          <p>XV.   O preenchimento errôneo de quaisquer dados na compra do ingresso, ou ainda, a sua não identificação, desclassifica automaticamente a pessoa sorteada. </p>
          <p>XVI.  Ao participar desse sorteio, o participante concorda plenamente com todas as normas contidas nesse regulamento. </p>
        </v-card-text>
        <v-card-actions>
          <v-spacer/>
          <v-btn color="primary" text @click="promotionRules = false">FECHAR</v-btn>
          <v-spacer/>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      eventRules: false,
      promotionRules: false,
    };
  },
};
</script>

<style>
.v-btn, .v-card-title {
  font-family: 'Fjalla One', sans-serif;
}