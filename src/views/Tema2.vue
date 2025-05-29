<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Localización puntos de muestreo
    
    .row.align-items-center.estilo___caja_5.m-0.mb-5(data-aos="zoom-in")
      .col-xl-auto
        figure.d-none.d-xl-block
          img(src='@/assets/curso/temas/img5.png', alt='' style="max-width: 505px").m-auto
      .col-xl
        p.mb-0 El muestreo de aguas puede tener diversos fines, que van desde conocer las características de la fuente de suministro hasta determinar las condiciones del agua en el punto final de consumo. Para localizar el sitio de muestreo, debe especificarse con claridad el propósito del análisis y el tipo de agua que se desea analizar. A partir de esta información, se determina el lugar exacto y el protocolo aplicable para llevar a cabo la actividad.

    <!-- BLOQUE 1 -->
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.1 Criterios de localización de puntos de muestreo de agua
 
    .row.mb-5.align-items-center
      .col-xl
        .row.align-items-center.mb-3.espacio___movil_1
          .col-xl-auto(data-aos="fade-right")
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img6.svg', alt='' style="max-width: 85px").m-auto
          .col-xl
            p.mb-0 En todos los casos, es fundamental dejar un registro detallado del lugar de la toma de la muestra. Si se dispone de GPS, es posible registrar la ubicación mediante posicionamiento satelital. Los principales criterios para la selección y localización de los puntos de muestreo, según la Resolución 811 de 2008 (MAVDT, 2008), se presentan en la figura 1.
        p.mb-0.estilo___caja_6(data-aos="fade-right") La localización de los puntos de recolección de muestras de agua para consumo humano en la red de distribución, se determinan en concertación entre autoridad sanitaria y la persona prestadora. (Resolución 811 de 2008).
      .col-xl-auto(data-aos="fade-left")
        figure.d-none.d-xl-block
          img(src='@/assets/curso/temas/img7.svg', alt='' style="max-width: 400px").m-auto

    .fondo___color_1
      .px-5
        .row.mb-5.justify-content-center.espacio___movil_1
          .col-xl-10
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Figura 1.
              span Criterios para ubicación puntos de muestreo de agua para consumo humano
            figure.mb-2(data-aos="zoom-in")
              img(src='@/assets/curso/temas/img9.svg', alt='La imagen resume los criterios a tener en cuenta para ubicar los puntos de muestreo de agua potable o para consumo humano, teniendo en cuenta los puntos fijos de muestreo y los puntos de muestreo de interés general.').m-auto
            figcaption(data-aos="zoom-in") Nota. Tomado de Resolución 0811 de 2008.

    .row.justify-content-center(data-aos="zoom-in")
      .col-xl-10
        .row.align-items-center.estilo___caja_7.espacio___movil_1
          .col-lg-auto
            figure.d-none.d-lg-block(data-aos="fade-right")
              img(src='@/assets/curso/temas/img10.svg', alt='' style="max-width: 286px").m-auto
          .col-lg
            p Adicionalmente pueden concertarse puntos de muestreo de agua provisionales para las siguientes situaciones:
            <ul class="fa-ul estilo___i">
              <li class="mb-3"><span class="fa-li"><i class="fas fa-tint"></i></span>En el momento que exista riesgo en la población por cierto evento natural o antrópico que pueda alterar la calidad del agua.</li>
              <li class="mb-0"><span class="fa-li"><i class="fas fa-tint"></i></span>Cuando se presente algún tipo de quejas por parte de los usuarios que tengan que ver con la calidad del agua, daños en las tuberías o baja presión.</li>
            </ul>

    <!-- BLOQUE 2 -->
    Separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.2 Número mínimo de puntos de muestreo de agua

    p.mb-4 De acuerdo con la población atendida en los sistemas de suministro de agua, se requiere un número mínimo de puntos de muestreo, conforme a lo establecido en la normatividad vigente:

    .fondo___color_2
      .px-5
        .row.justify-content-center(data-aos="zoom-in")
          .col-xl-6
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Tabla 5.
              span Número mínimo de puntos de muestreo
            .tabla-a
              table
                caption Nota. Tomado de Resolución 0811 de 2008.
                thead
                  tr
                    th.ajuste-border-tabla Población atendida por persona prestadora (habitantes)
                    th Número mínimo de puntos para la recolección de muestra
                tbody
                  tr
                    td.ajuste-border-tabla Menos de 2.500
                    td 4
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla 2.501 a 10.000
                    td 5
                  tr
                    td.ajuste-border-tabla 10.001 a 20.000
                    td 6
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla 20.001 a 100.000
                    td 8
                  tr
                    td.ajuste-border-tabla 100.001 a 250.000
                    td 15
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla 250.001 a 500.000
                    td 25
                  tr
                    td.ajuste-border-tabla 500.001 a 800.000
                    td 30
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla 800.001 a 1.000.000
                    td 35
                  tr
                    td.ajuste-border-tabla 1.000.001 a 1.250.000
                    td 48
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla 1.250.001 a 2.000.000
                    td 60
                  tr
                    td.ajuste-border-tabla 2.000.001 a 4.000.000
                    td 72
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla Mas de 4.000.001
                    td 132

    <!-- BLOQUE 3 -->
    Separador
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.3 Identificación del punto de muestreo

    p.mb-4 Para la identificación de los puntos de muestreo, estos deben contar, como mínimo, con la siguiente información:

    .row.justify-content-center
      .col-xl-10
        .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
          h5 Figura 2.
          span Información para identificar puntos de muestreo
        figure.mb-2(data-aos="zoom-in")
          img(src='@/assets/curso/temas/img12.svg', alt='Tabla para recolección de datos de muestras de agua que incluye campos para información del lugar y fecha de muestreo, código y punto de muestra, tipo de agua, análisis requeridos y observaciones. ').m-auto
        figcaption(data-aos="zoom-in") Nota. Tomado de Resolución 0811 de 2008.

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
