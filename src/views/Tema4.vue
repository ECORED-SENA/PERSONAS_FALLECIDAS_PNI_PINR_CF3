<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 4
      h1 Medidas sanitarias en la inhumación y exhumación
    
    figure.mb-4
      img(src='@/assets/curso/tema4/01.jpg', alt='')
    
    p.mb-4 Particularmente, frente a la gestión de cementerios debe tenerse presente lo dispuesto en el Título III de la Ley 9 de 1979, en el cual se desarrolla el tema de la salud ocupacional y se establece una obligación para los empleadores de proporcionar dispositivos de control de riesgos y equipos de protección personal, además de conservar en orden y aseo los lugares de trabajo. Entre los riesgos laborales para los operarios de los cementerios se encuentran los riesgos físicos, biológicos, químicos, ergonómicos, psicosociales, mecánicos y ambientales;  en la siguiente información se identifican sus características. 


</template>

<script>
export default {
  name: 'Tema4',
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
