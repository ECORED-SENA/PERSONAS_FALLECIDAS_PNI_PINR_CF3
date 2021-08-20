<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 2
      h1 Exhumación de PNI y PINR

    .row.justify-content-center.mb-5
      .col-md-10
        .bloque-texto-a.color-primario.modBef.p-4.p-md-5.mb-5 
          .row.m-0.align-items-center.justify-content-between
            .col-lg-8.mb-4.mb-lg-0
              .bloque-texto-a__texto.p-4
                p.mb-0 La palabra inhumación proviene de las raíces del latín in y humus que significa adentro y tierra, esto es, enterrar o disponer dentro de la tierra. Así, conforme a lo dispuesto en la Resolución del Ministerio de Protección Social 5194 de 2010 inhumar supone la acción de enterrar o depositar en los cementerios cadáveres, restos óseos y partes humanas, mientras el área de inhumación ya es más particular, como aquella en la cual se realiza la disposición final de los cadáveres no identificados o identificados y no reclamados o sus restos óseos o restos humanos.
            .col-lg-4
              figure
                img(src='@/assets/curso/tema2/01.svg', alt='')
        
        .cajon.color-acento-contenido.px-4.py-5.mb-4
          .row.justify-content-center.align-items-center
            .col-10.col-md-5
              figure
                img(src='@/assets/curso/tema2/02.svg', alt='')
            .col-md-7
              p.mb-4 Cuando se hace una exhumación de (PNI) o (PINR) es el momento en que finaliza la custodia del cementerio y las personas involucradas de este lugar.
              p.mb-0 Este proceso debe asumirse con la mayor responsabilidad y respeto porque es parte de un proceso judicial para verificar la identidad, alguna particularidad, causa o circunstancia de una muerte o entrega del cuerpo de la persona a sus familiares al lograr su identificación.

        p Entre las acciones que se deben tener en cuenta en el proceso de la exhumación de PNI y PINR se encuentra el tiempo de permanencia en los cementerios de las personas no identificadas e identificadas no reclamadas, la prohibición de la cremación y la autorización. A continuación, se ampliará esta información en el siguiente recurso de aprendizaje.
    
    SlyderE(indicadores="derecha")
      .row
        .col-md-5.mb-4.mb-md-0
          h4 La permanencia
          p En los cementerios se debe garantizar la permanencia de los PNI y los PINR hasta cuando una orden judicial oriente la exhumación de unos restos o cuerpo humano para su identificación o entrega a sus familiares. 

          p Todo ello culmina con éxito cuando el cuerpo o los restos de la persona sean ubicados en el lugar de su inhumación.
      
        .col-md-7
          figure
            img(src='@/assets/curso/tema2/03.png', alt='')
      
      .row
        .col-md-5.mb-4.mb-md-0
          h4 Prohibición en la cremación
          p En el Parágrafo 3 del Artículo 11 de la Ley 1408 de 2010 se establece expresamente, que las secretarías de gobierno o las autoridades de gobierno asegurarán que no se usarán osarios comunes #[i “ni se destruirán o incinerarán cuerpos o restos de personas no identificadas”].

          p Adicional a lo anterior, en el Artículo 37 del Decreto 303 de 2015 se expresa  que, con el fin de preservar los cadáveres no identificados o identificados no reclamados #[i “se prohíbe su cremación”]. 
      
        .col-md-7
          figure
            img(src='@/assets/curso/tema2/04.png', alt='')
      
      .row
        .col-md-5.mb-4.mb-md-0
          h4 Autorización
          p Esta acción se encuentra íntimamente ligada con los requisitos legales para realizarla, toda vez que la exhumación de PNI y PINR requiere de una autorización de la autoridad judicial competente, según lo dispuesto en el Decreto 303 de 2015.
          .cajon.color-primario.p-4
            p Solo podrá realizarse una exhumación de una PNI y PINR si  acreditan la autorización de la autoridad judicial, para ello, toda vez que se debe garantizar la cadena de custodia, entendida como el cuidado permanente y soportado de la PNI o PINR junto con los elementos a ella asociados. 

            p.mb-0 Se debe finalizar esa buena custodia con una entrega autorizada y soportada.
      
        .col-md-7
          figure
            img(src='@/assets/curso/tema2/05.png', alt='')
    
    separador          

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass" scoped></style>
