<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .fondo___img
      .px-5.ajuste___espacio_1
        p.mb-5 La calidad del agua destinada al consumo humano en Colombia está regulada por un marco normativo riguroso que busca garantizar condiciones sanitarias adecuadas para la salud pública. Entre las normas más relevantes se encuentra el Decreto 1575 de 2007, que establece el sistema para la protección y control de la calidad del agua, y la Resolución 2115 del mismo año, la cual define los parámetros físicos, químicos y microbiológicos que debe cumplir el agua potable, incluyendo los valores máximos permisibles para cada uno. Estos parámetros son esenciales para calcular el Índice de Riesgo de la Calidad del Agua para Consumo Humano (IRCA), indicador clave en los programas de vigilancia.

        .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-4.espacio___movil_1(data-aos="zoom-in")
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/intro/img2.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Este conjunto normativo se complementa con otras resoluciones que precisan aspectos operativos fundamentales, como la localización de los puntos de muestreo (Resolución 0811 de 2008), los procedimientos de inspección sanitaria (Resolución 0082 de 2009) y los protocolos específicos para zonas rurales (Resolución 622 de 2020). Estas disposiciones permiten estandarizar la toma de muestras, asegurar su representatividad y preservar la confiabilidad de los análisis, contribuyendo así a una gestión eficiente de los sistemas de abastecimiento de agua en contextos urbanos y rurales.

        .row.align-items-center(data-aos="zoom-in")
          .col-xl-auto
            figure.d-none.d-xl-block
              img(src='@/assets/curso/intro/img3.svg', alt='' style="max-width: 85px").m-auto
          .col-xl
            p.mb-0.estilo___caja_1 Además del cumplimiento de parámetros técnicos, la normatividad contempla los procesos de documentación, conservación, transporte y custodia de las muestras, asegurando trazabilidad desde la recolección hasta la entrega de resultados en laboratorio. Esta cadena técnica y administrativa es indispensable para la toma de decisiones informadas por parte de las autoridades sanitarias, operadores de acueductos y demás actores involucrados en la protección del recurso hídrico y la salud de la población.

</template>

<script>
export default {
  name: 'Introduccion',
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
