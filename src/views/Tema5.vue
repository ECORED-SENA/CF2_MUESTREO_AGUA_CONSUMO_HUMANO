<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 5
      h1 Documentos técnicos y de registro

    p.mb-5 La publicación de la información, ya sea en sistemas de información hidrológica, boletines, estudios, informes, investigaciones, entre otros, es el medio mediante el cual se transmite la información para apoyar la toma de decisiones.

    <!-- BLOQUE 1 -->
    #t_5_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 5.1 Cadena de custodia
    
    .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/img52.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Las muestras recolectadas, tanto para análisis de control como de vigilancia, deben someterse a un proceso que garantice su integridad desde el momento de recolección hasta la emisión del informe correspondiente. Este proceso se conoce como cadena de custodia y comienza en el instante en que se toma la muestra y se cierra el frasco contenedor, finalizando una vez concluidos los análisis y emitido el informe, con el desecho de la muestra.

    p.mb-5.espacio___movil_1 Es fundamental tener en cuenta el tiempo de retención, es decir, el intervalo entre la recolección y el análisis. En general, cuanto menor sea este tiempo, mayor será la confiabilidad de los resultados analíticos.

    p.mb-4.espacio___movil_1 A continuación, se presenta un ejemplo de cadena de custodia:

    .fondo___color_3
      .px-5
        .row.justify-content-center
          .col-xl-10
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Figura 4.
              span Ejemplo cadena de custodia
            figure.mb-2(data-aos="zoom-in")
              img(src='@/assets/curso/temas/img54.svg', alt='Tabla tipo formulario sobre cadena de custodia para análisis de agua, con secciones para datos de la empresa prestadora, características de la muestra, tipo de análisis requerido, resultados de pruebas en campo y datos del solicitante, incluyendo ubicación del punto de toma.').m-auto
            figcaption(data-aos="zoom-in") Nota. Tomado de Instituto Nacional de Salud (2011).
      
    <!-- BLOQUE 2 -->
    Separador
    #t_5_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 5.2 Informe de muestreo

    .fondo___color_4
      .px-5
        p.mb-4 Los aspectos generales del muestreo y los resultados de los parámetros in situ pueden consignarse en un informe de muestreo, el cual puede incluir la siguiente información:
          .row.justify-content-center
            .col-xl-10
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Figura 5.
                span Ejemplo informe de muestreo
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/temas/img56.svg', alt='Formulario de informe de muestreo con secciones para datos del cliente, características y fechas de la muestra, resultados de variables analizadas en sitio, y espacio para descripción del muestreo, firma y responsable del informe.').m-auto

</template>

<script>
export default {
  name: 'Tema5',
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
