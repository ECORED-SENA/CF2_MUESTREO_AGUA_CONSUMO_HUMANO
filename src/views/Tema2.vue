<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Localización puntos de muestreo






    <!-- BLOQUE  -->
    Separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.1 Criterios de localización de puntos de muestreo de agua



      
    <!-- BLOQUE  -->
    Separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.2 Número mínimo de puntos de muestreo de agua




    <!-- BLOQUE  -->
    Separador
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.3 Identificación del punto de muestreo








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

<style lang="sass"></style>
