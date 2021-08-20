<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .cajon-b.color-acento-contenido.p-3.mb-5
      p.mb-0 Apreciado aprendiz bienvenido a esta experiencia de aprendizaje relacionada con el proceso de gestión de cementerios y que pretende ayudarle a apropiar elementos básicos para la inhumación y exhumación de personas. Para más información se sugiere revisar el siguiente recurso de aprendizaje que le dará un contexto inicial para su aprendizaje.
    
    .tarjeta.tarjeta--gris.p-4.PB01.mb-5
      SlyderA
        .row.justify-content-center
          .col-md-10
            .row
              .col-md-9.mb-4.mb-md-0
                h5 ¿Cuál es propósito de esta experiencia de aprendizaje?
                p En la presente experiencia de aprendizaje se espera identificar los procedimientos en el manejo de PNI y PINR y su información.            
              .col-md-3
                figure
                  img(src='@/assets/curso/intro/01.svg', alt='')
        
        .row.justify-content-center
          .col-md-10
            h5 ¿Qué aprenderá?
            p En este componente de formación se abordarán temáticas como:      
            .row.gx-5
              .col-md-4
                .BG03.brdFull.p-4.h-100
                  figure
                    img.w-75.mx-auto(src='@/assets/curso/intro/02.svg', alt='')
                  h5.text-center.mb-0 Inhumación de PNI y PINR
              .col-md-4
                .BG03.brdFull.p-4.h-100
                  figure
                    img.w-75.mx-auto(src='@/assets/curso/intro/03.svg', alt='')
                  h5.text-center.mb-0 Exhumación de PNI y PINR
              .col-md-4
                .BG03.brdFull.p-4
                  figure
                    img.w-75.mx-auto(src='@/assets/curso/intro/04.svg', alt='')
                  h5.text-center.mb-0 Medidas sanitarias para cementerios
        
        .row.justify-content-center
          .col-md-10
            h5 ¿Cómo se aprenderá?
            p Para que desarrolle los conocimientos, habilidades y actitudes en los temas que aborda esta experiencia tendrá a su disposición:    
            .row.gx-5
              .col-md-3.p-2
                figure
                  img(src='@/assets/curso/intro/05.svg', alt='')
                h5.text-center.mb-0 Ambiente  virtual
              .col-md-3.p-2
                figure
                  img(src='@/assets/curso/intro/06.svg', alt='')
                h5.text-center.mb-0 Recursos educativos digitales
              .col-md-3.p-2
                figure
                  img(src='@/assets/curso/intro/07.svg', alt='')
                h5.text-center.mb-0 Una red de compañeros e instructor
              .col-md-3.p-2
                figure
                  img(src='@/assets/curso/intro/08.svg', alt='')
                h5.text-center.mb-0 Actividades de aprendizaje                

        .row.justify-content-center
          .col-md-10
            .row
              .col-md-7.mb-4.mb-md-0
                h5 Recuerde
                p Su éxito para iniciar y finalizar depende de:
                ul.lista-ul--color
                  li 
                    i.fas.fa-check
                    | Su interés y curiosidad para aprender.
                  li 
                    i.fas.fa-check
                    | Su participación en las actividades señaladas.
                  li 
                    i.fas.fa-check
                    | Aplicación de lo que aprende en su contexto.
                  li 
                    i.fas.fa-check
                    | Gestión de su tiempo para aprender.

              .col-md-5
                figure
                  img(src='@/assets/curso/intro/09.svg', alt='')

    separador

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
