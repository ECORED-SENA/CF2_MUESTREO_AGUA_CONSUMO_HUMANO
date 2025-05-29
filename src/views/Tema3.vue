<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Técnicas de muestreo

    p.mb-4 Las técnicas de muestreo se dividen de la siguiente manera: algunas se realizan directamente en el recipiente que se enviará al laboratorio, mientras que otras requieren el uso de equipos específicos. A continuación, se describen las técnicas utilizadas según los puntos de muestreo:

    .fondo___slider.mb-5
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.h-100.justify-content-center.align-items-center
              .col-lg-6.mb-4
                h4 Grifos
                p.mb-0 Cuando se trata de grifos de agua es necesario retirar los filtros que tenga, posteriormente se limpia con alcohol y se flamea el grifo mientras está cerrado, antes de tomar la muestra se debe dejar correr el agua por al menos tres (3) minutos, luego se destapa el frasco, se llena y se cierra.
              .col-lg-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img14.svg', alt='' style="max-width: 500px").m-auto
            
            .row.h-100.justify-content-center.align-items-center
              .col-lg-6.mb-4
                h4 Red de distribución
                p.mb-0 Mediante muestreo manual se debe proceder con la recolección de la muestra, el punto debe estar identificado según lo indicado en la resolución 811 de 2008, para el caso de toma de muestra microbiológica el accesorio de descarga debe desinfectarse con alcohol y si es posible flamearse para evitar contaminación de la muestra.
              .col-lg-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img15.svg', alt='' style="max-width: 500px").m-auto

            .row.h-100.justify-content-center.align-items-center
              .col-lg-6.mb-4
                h4 Fuentes abastecedoras de acueductos
                p.mb-0 Este tipo de muestras por lo general son tomadas en los puntos de las bocatomas, para este caso, la muestra se debe tomar lo más lejos posible de la orilla, procurando no remover el fondo para liberar sedimentos y se deben evitar las zonas de estancamiento.
              .col-lg-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img16.svg', alt='' style="max-width: 500px").m-auto
    
    p.mb-4.espacio___movil_1 A continuación, se describen las tres formas principales de tomar muestras de agua, según el tipo de análisis que se pretende realizar.

    .row.align-items-center.m-0
      .col-xl
        .row.align-items-center.estilo___caja_7_1(data-aos="zoom-in")
          .col-auto
            figure.d-none.d-lg-block(data-aos="fade-right")
              img.img-tema1-bloque5(src="@/assets/curso/temas/img17.svg" style="max-width: 220px").m-auto
          .col
            h4.mb-4 Lo invitamos a escuchar el siguiente <em>Podcast</em>:
            TarjetaAudio.color-acento-contenido.mb-3(
              texto="Tipos de muestras de agua para análisis de calidad"
              :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
              @audio-hover="mostrarIndicadorTarjetaAudio = false"
            )
      .col-xl-auto
        figure(data-aos="fade-left").d-none.d-xl-block
          img.ajuste-img-tema1-bloque5(src="@/assets/curso/temas/img18.png" style="max-width: 400px").m-auto

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

<style lang="sass"></style>
