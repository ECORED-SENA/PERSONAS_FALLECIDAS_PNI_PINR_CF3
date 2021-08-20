<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal
      .titulo-principal__numero
        span 1
      h1 Inhumación de PNI y PINR

    .row.justify-content-center.mb-4
      .col-md-10
        p.mb-4 La inhumación de personas no identificadas (PNI) y personas identificadas no reclamadas (PINR) se trata de un servicio prestado por los cementerios, que corresponde a la acción de enterrar o depositar cadáveres en bóvedas o tumbas, los restos óseos o partes humanas a partir de protocolos que se diferencian de un proceso de inhumación para otros tipos de personas, puede que se esté preguntando ¿qué es la inhumación?, la respuesta es:

        .bloque-texto-a.color-primario.p-4.p-md-5.mb-5 
          .row.m-0.align-items-center.justify-content-between
            .col-lg-4.mb-4.mb-lg-0
              figure
                img.w-75.mx-auto(src='@/assets/curso/tema1/01.svg', alt='')
            .col-lg-8
              .bloque-texto-a__texto.p-4
                p La palabra inhumación proviene de las raíces del latín in y humus que significa adentro y tierra, esto es, enterrar o disponer dentro de la tierra. Así, conforme a lo dispuesto en la Resolución del Ministerio de Protección Social 5194 de 2010 inhumar supone la acción de enterrar o depositar en los cementerios cadáveres, restos óseos y partes humanas, mientras el área de inhumación ya es más particular, como aquella en la cual se realiza la disposición final de los cadáveres no identificados o identificados y no reclamados o sus restos óseos o restos humanos.
        
        p.mb-4 Comprendido lo anterior, se debe identificar qué acciones en particular se deben desplegar para no entorpecer los procesos judiciales para la identificación y la entrega de los cadáveres o los restos a sus familiares. Recuerde que gran parte de esta labor es lo que permitirá restituir esos derechos de las familias que han sido víctimas de la desaparición y muerte de sus familiares, o que no han podido asumir sus rituales y proceso de duelo al desconocer el paradero de la persona fallecida. 

        p.mb-4 Siendo esto así, son elementos relacionados con la inhumación de las personas no identificadas (PNI) y personas identificadas no reclamadas (PINR) la disposición de un área de inhumación, la necesidad de realizar una inhumación individualizada, la disposición en cementerios públicos o mixtos, la marcación de tumbas, bóvedas y la custodia de los elementos asociados al cuerpo o a los restos humanos. A continuación, se invita a valorar cada uno de ellos para que pueda aplicarlos en su contexto de acción.
    
    TabsB.color-acento-contenido.mb-5
      .py-4.py-md-5(titulo="Disposición de un área de inhumación" :icono="require('@/assets/curso/tema1/02.svg')")
        .row.justify-content-center
          h5 Disposición de un área de inhumación
          p De acuerdo con la Resolución 5194 de 2010 del Ministerio de Protección Social el área donde debe ser inhumado, conservado y custodiado el cuerpo o los restos humanos de las personas no identificadas o identificadas no reclamadas será dispuesto por la alcaldía del municipio o distrito donde se halla el cadáver, teniendo en cuenta dos elementos: 
          .col-md-5.mb-4.mb-md-0
            .cajon.color-primario.p-4.h-100
              p.mb-4 (i) En los cementerios se deben destinar bóvedas para personas no identificadas o identificadas no reclamadas.
              figure
                img.w-75.mx-auto(src='@/assets/curso/tema1/07.svg', alt='')
          .col-md-5
            .cajon.color-acento-contenido.p-4
              p.mb-4 (ii) Los municipios en el marco de su autonomía dispondrán de los centros de almacenamiento en los cementerios, de los restos humanos de las personas no identificadas o identificadas no reclamadas que se encuentren en reducción esquelética y provengan de exhumaciones realizadas en cementerios o fosas clandestinas. 
              figure
                img.w-50.mx-auto(src='@/assets/curso/tema1/08.svg', alt='')

      .py-4.py-md-5(titulo="Individualización" :icono="require('@/assets/curso/tema1/03.svg')")
        .row
          .col-md-8.mb-4.mb-md-0
            h4 Individualización
            p De manera adicional a las condiciones descritas para la inhumación de cualquier otro tipo de persona, cuando se trate de restos óseos humanos y cadáveres de personas no identificadas o personas identificadas no reclamadas, la inhumación debe ser individualizada para garantizar con ello su ubicación, custodia, recuperación y posterior individualización, tal y como lo dispone la Resolución 5194 de 2010 y la Ley 1408 de 2010.
            p Para mantener esa individualización existe una prohibición frente a las PNI y PINR de una inhumación en osarios o fosas comunes, buscando con ello que pueda lograrse la identificación o no se pierda la identificación de esas personas.
            
          .col-md-4
            figure
              img(src='@/assets/curso/tema1/09.svg', alt='')
      
      .py-4.py-md-5(titulo="Cementerios públicos o mixtos" :icono="require('@/assets/curso/tema1/04.svg')")
        .row
          .col-md-8.mb-4.mb-md-0
            h4 Cementerios públicos o mixtos
            p La inhumación de las personas no identificadas o personas identificadas no reclamadas se realiza en los cementerios de naturaleza pública o mixta; pero en caso de declararse una emergencia en la salud pública o que los cementerios de estas naturalezas no cuenten con la capacidad necesaria para realizar estas inhumaciones se podrá solicitar la inhumación en cementerios de naturaleza privada (Artículo18 de la Resolución 5194 de 2010).
            
          .col-md-4
            figure
              img(src='@/assets/curso/tema1/10.svg', alt='')
      
      .py-4.py-md-5(titulo="Marcación de tumbas" :icono="require('@/assets/curso/tema1/05.svg')")
        .row.justify-content-center
          h5 Marcación de tumbas
          p Son características necesarias para la marcación de las tumbas o bóvedas de personas no identificadas e identificadas no reclamadas, que la marcación sea clara, que no pueda borrarse y sea permanente con los siguientes datos:
          .col-lg-3.mb-4.mb-lg-0
            .cajon.color-primario.p-4
              p.mb-4 El número de protocolo de la necropsia lo asigna el Instituto Nacional de Medicina Legal y Ciencia Forense. 
              p.mb-0 El acta de inspección o noticia criminal es el caso de necropsia realizada por médicos rurales.
          .col-lg-7
            figure
              img(src='@/assets/curso/tema1/11.svg', alt='')
      
      .py-4.py-md-5(titulo="Custodia de los elementos" :icono="require('@/assets/curso/tema1/06.svg')")
        .row.justify-content-center
          .col-md-9.mb-4
            h4 Custodia de los elementos
            p Los elementos asociados al cuerpo o restos humanos de personas no identificadas o identificadas no reclamadas, tales como sus prendas de vestir y otros elementos asociados con el cuerpo deben ser entregados a la administración del cementerio y ser embalados para garantizar su conservación.

            p La custodia de los elementos ayudarán en el proceso de inhumación de PNI y PINR a la identificación y entrega de cuerpos a sus familiares o deudos. 

            p Para realizar la inhumación se debe tener los siguientes documentos:

            ul.lista-ul--color
              li 
                i.fas.fa-check
                | La licencia de inhumación (documento) expedido por la alcaldía, la secretaría de salud o la inspección de policía.
              li 
                i.fas.fa-check
                | El acta de entrega del cadáver y el certificado de defunción,  los cuales serán entregados por Medicina Legal.
            
          .col-md-3.mb-4
            figure
              img(src='@/assets/curso/tema1/12.svg', alt='')
          
          .col-md-8.mb-0
            .cajon.color-primario.p-4.h-100
              p.mb-0 Recuerde, si el cuerpo llega sin estos documentos, se debe reportar inmediatamente la situación a la Fiscalía, a la Policía Nacional, a la Procuraduría y al Personero.
    
    separador
  
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
