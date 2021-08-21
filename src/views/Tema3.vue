<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal(data-aos="flip-down")
      .titulo-principal__numero
        span 3
      h1 Medidas de conservación de los PNI y PINR
    
    .row.justify-content-center.mb-5(data-aos="fade-up")
      .col-md-10
        .cajon.color-acento-contenido.px-4.py-5.mb-4
          .row.justify-content-center.align-items-center
            .col-md-8
              p.mb-4 A continuación, se invita a revisar e identificar algunas medidas generales relacionadas con la gestión de procesos con personas no identificadas (PNI) y personas identificadas no reclamadas (PINR) en los cementerios; que tienen como propósito contribuir a la custodia de estas personas con información clara y oportuna sobre la ubicación, el registro y los recursos de información del cementerio.
              p.mb-0 Las medidas que se verán a continuación son transversales a la actuación de todos los funcionarios o trabajadores que intervienen en los procesos de gestión en los cementerios y son esenciales para lo relacionado con personas no identificadas (PNI) y personas identificadas no reclamadas (PINR), toda vez que apuntan a medidas previas en la custodia y posteriores a la identificación o entrega de los cuerpos o restos de dichas personas.
              
            .col-8.col-md-4
              figure
                img(src='@/assets/curso/tema3/01.svg', alt='')
    
    h3 Elaboración de diagramas y planos

    .row.mb-5(data-aos="fade-left")
      .col-lg-7
        p.mb-4 Mediante esta medida se busca garantizar el conocimiento de la ubicación exacta de las tumbas y bóvedas. Se trata de una obligación del administrador del cementerio que está dispuesta en el numeral 2 del Artículo 43 del Decreto 303 de 2015. 

        p.mb-4 Cada cementerio basado en la Resolución 5194 (Ministerio de Protección Social, 2010) será quien determine  la versión final de sus planos arquitectónicos y la ubicación exacta de las tumbas y las bóvedas, particularmente de aquellas donde reposen PNI y PINR para facilitar el proceso de individualización con una debida custodia. 

        p.mb-0 Entre las recomendaciones más usuales para obtener una numeración única para los PNI y PINR en los cementerios se encuentra que el cementerio sea clasificado en zonas, #[strong subdivisión de zonas, fila, columnas], esto con el fin de que cualquier persona pueda identificar la ubicación de la inhumación.

      .col-lg-5
        figure
          img(src='@/assets/curso/tema3/02.png', alt='')
    
    .row.justify-content-center.mb-4(data-aos="fade")
      .col-md-10
        .bloque-texto-a.color-primario.modBef.p-4.p-md-5.mb-5 
          .row.m-0.align-items-center.justify-content-between
            .col-lg-8.mb-4.mb-lg-0
              .bloque-texto-a__texto.p-4
                h5 Libro de registro de inhumaciones
                p.mb-0 Diligenciar y mantener actualizado el libro de registro de inhumaciones es una obligación de los administradores de los cementerios, tal y como lo establece el Decreto 303 de 2015; pero ¿qué debe contener este libro? Vea los elementos esenciales de este libro, que a su vez, remitirán a condiciones o requisitos que ya se han abordado con la inhumación y la exhumación de las PNI y PINR.
            .col-lg-4
              figure
                img.w-75.mx-auto(src='@/assets/curso/tema3/03.svg', alt='')
    
    PasosA.color-acento-contenido.mb-5(tipo="n")
      div(data-aos="fade-right")
        p.mb-0 Fecha (hora, día, mes y año) del ingreso. 

      div(data-aos="fade-left")
        p.mb-0 Nombre, cargo y firma del funcionario del cementerio que recibió el cadáver.

      div(data-aos="fade-right")
        p.mb-0 Identificación de la autoridad, cargo, nombre y firma del funcionario que entrega al cementerio el cadáver y los elementos asociados al cuerpo para su inhumación.

      div(data-aos="fade-left")
        p.mb-0 El número de marcación del cadáver o placa metálica del Instituto Nacional de Medicina Legal y Ciencias Forenses.
      
      div(data-aos="fade-right")
        p.mb-0 El número de la correspondiente necropsia practicada por el Instituto Nacional de Medicina Legal y Ciencias Forenses o en su defecto, por un centro médico oficial; el número del acta de inspección o el número único de noticia criminal. 
      
      div(data-aos="fade-left")
        p.mb-0 El número de identificación de marcación de la tumba o bóveda donde ha sido inhumado el cadáver, con la indicación de si se trata de una tumba o bóveda individual o múltiple. 
      
      div(data-aos="fade-right")
        p.mb-0 Para el caso de cadáveres que no han sido remitidos por la Fiscalía General de la Nación o por el Instituto Nacional de Medicina Legal y Ciencias Forenses, se requiere indicación de las autoridades a las que se les comunicó el ingreso del cadáver al cementerio, fecha y medio de comunicación utilizado. 
      
      div(data-aos="fade-left")
        p.mb-0 Información sobre el traslado o cambio de ubicación del cadáver dentro del cementerio, previa autorización emitida por la autoridad judicial competente. 
      
      div(data-aos="fade-right")
        p.mb-0 Identificación de la autoridad, cargo, nombre y firma del funcionario a quien se le entrega el cadáver y los elementos asociados al cuerpo, para casos de exhumación. 
      
      div(data-aos="fade-left")
        p.mb-0 En caso de que posterior a su inhumación la autoridad competente comunique la obtención de la identificación del cadáver, se registrará el nombre completo y documento de identidad del occiso. Los administradores de los cementerios propenderán por sistematizar la información a la que hace referencia este artículo.
    
    .row.justify-content-center 
      .col-md-5.mb-5(data-aos="slide-left")
        .cajon.color-primario.p-4.h-100.d-flex.flex-column.justify-content-between
          h4 Interponer la denuncia penal e informar al Registro Nacional de desaparecidos
          p.mb-4 De presentarse una alteración en la rotulación, una profanación, destrucción, desaparición o alteración en la integridad de la tumba o la bóveda se debe presentar denuncia penal e informar de ello al Registro Nacional de desaparecidos, según el Artículo 43 del Decreto 3030 de 2015. 
          figure
            img.w-50.mx-auto(src='@/assets/curso/tema3/04.svg', alt='')
      .col-md-5.mb-5(data-aos="slide-right")
        .cajon.color-acento-contenido.p-4.d-flex.flex-column.justify-content-between
          h4 Informar el ingreso al cementerio
          p.mb-4 Cuando al cementerio ingresen cuerpos o restos de personas no identificadas o identificadas no reclamadas que no fueron remitidos por la Fiscalía General de la Nación o por el Instituto Nacional de Medicina Legal y Ciencias Forenses, los administradores  deben informar de tal situación a las siguientes autoridades, Fiscalía General de la Nación,  el Instituto Nacional de Medicina Legal y Ciencias Forenses y la Procuraduría General de la Nación o Defensoría del Pueblo o la respectiva personería.
          figure
            img.w-40.mx-auto(src='@/assets/curso/tema3/05.svg', alt='')
      
      .col-lg-9(data-aos="flip-down")
        .tarjeta-avatar-b.mb-4
          .tarjeta.tarjeta--gris.tarjMOD
            .p-4
              p Se invita a leer la “Guía normativa para el fortalecimiento de la gestión de los cementerios en Colombia” desde la página 5 a la 17. En este documento liderado por el Ministerio del Interior de Colombia. En ella se presentan se presentan buenas prácticas para la adecuada conservación y custodia de los cuerpos o restos humanos de personas no identificadas e identificadas no reclamadas inhumadas en cementerios.
          .tarjeta-avatar-b__img
            img.w-75.mx-auto(src='@/assets/curso/tema3/06.svg', alt='')
          
    separador(data-aos="fade")

</template>

<script>
export default {
  name: 'Tema3',
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
