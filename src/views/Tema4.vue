<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Toma de la muestra de agua



    <!-- BLOQUE  -->
    Separador
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.1 Rotulación de la muestra



      
    <!-- BLOQUE  -->
    Separador
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.2 Procedimiento de muestreo




    <!-- BLOQUE  -->
    Separador
    #t_4_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.3 Preservación

    

    <!-- BLOQUE  -->
    Separador
    #t_4_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.4 Transporte de la muestra



    <!-- BLOQUE  -->
    Separador
    #t_4_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.5 Recepción de la muestra








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

<style lang="sass"></style>
