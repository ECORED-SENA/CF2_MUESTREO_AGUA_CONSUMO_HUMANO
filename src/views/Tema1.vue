<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Normatividad calidad de agua
    
    .row.align-items-center.estilo___caja_2.m-0.mb-5(data-aos="zoom-in")
      .col-xl-auto
        figure.d-none.d-xl-block
          img(src='@/assets/curso/temas/img1.png', alt='' style="max-width: 505px").m-auto
      .col-xl
        p.mb-0 En Colombia, la calidad del agua se rige por diferentes normas y decretos que establecen los parámetros y características que debe cumplir el agua destinada al consumo humano. El Decreto 1575 de 2007 define el agua potable como aquella que cumple con las características físicas, químicas y microbiológicas reglamentadas en las normas de calidad del agua en el país. En cuanto a los parámetros fisicoquímicos y microbiológicos, estos deben ajustarse a los límites máximos permisibles establecidos en la Resolución 2115 de 2007, los cuales se utilizan para determinar el Índice de Riesgo de la Calidad del Agua para Consumo Humano (IRCA). A continuación, se presentan dichos parámetros:
    
    .fondo___color
      .px-5
        .row.justify-content-center.mb-5.espacio___movil_1(data-aos="zoom-in")
          .col-xl-10
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Tabla 1.
              span Características físicas para calidad de agua para consumo humano
            .tabla-a
              table
                caption Nota. Tomado de  Resolución 2115 de 2007.
                thead
                  tr
                    th.ajuste-border-tabla Características físicas
                    th.ajuste-border-tabla Valor máximo permisible
                    th Unidad
                tbody
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla Color aparente
                    td.ajuste-border-tabla 15
                    td Unidades de Platino Cobalto (UPC)
                  tr
                    td.ajuste-border-tabla Olor y sabor
                    td.ajuste-border-tabla Aceptable
                    td -
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla Turbiedad
                    td.ajuste-border-tabla 2
                    td Unidades Nefelométricas de Turbiedad (UNT)
        
        .row.justify-content-center.mb-5.espacio___movil_1(data-aos="zoom-in")
          .col-xl-10
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Tabla 2.
              span Características químicas para calidad de agua para consumo humano
            .tabla-a
              table
                caption Nota. Tomado de  Resolución 2115 de 2007.
                thead
                  tr
                    th.ajuste-border-tabla Características químicas
                    th.ajuste-border-tabla Valor máximo permisible
                    th Unidad
                tbody
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla Cloro residual
                    td.ajuste-border-tabla 0,3 a 2,0
                    td mg/L
                  tr
                    td.ajuste-border-tabla pH
                    td.ajuste-border-tabla 6,5 a 9,0
                    td Unidades de pH
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla Nitratos
                    td.ajuste-border-tabla 10
                    td mg/L
                  tr
                    td.ajuste-border-tabla Dureza total
                    td.ajuste-border-tabla 300
                    td mg/L
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla Sulfatos
                    td.ajuste-border-tabla 250
                    td mg/L
                  tr
                    td.ajuste-border-tabla Nitritos
                    td.ajuste-border-tabla 0,1
                    td mg/L
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla Carbono orgánico total
                    td.ajuste-border-tabla 5,0
                    td mg/L
                  tr
                    td.ajuste-border-tabla Manganeso
                    td.ajuste-border-tabla 0,1
                    td mg/L
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla Hierro total
                    td.ajuste-border-tabla 0,3
                    td mg/L
                  tr
                    td.ajuste-border-tabla Alcalinidad total
                    td.ajuste-border-tabla 200
                    td mg/L
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla Aluminio
                    td.ajuste-border-tabla 0,2
                    td mg/L
                  tr
                    td.ajuste-border-tabla Mercurio
                    td.ajuste-border-tabla 0,001
                    td mg/L
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla Cianuro libre
                    td.ajuste-border-tabla 0,05
                    td mg/L

        .row.justify-content-center.mb-5.espacio___movil_1(data-aos="zoom-in")
          .col-xl-10
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Tabla 3.
              span Características microbiológicas para calidad de agua para consumo humano
            .tabla-a
              table
                caption Nota. Tomado de  Resolución 2115 de 2007.
                thead
                  tr
                    th.ajuste-border-tabla Características microbiológicas 
                    th.ajuste-border-tabla Valor máximo permisible
                    th Unidad
                tbody
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla Coliformes totales 
                    td.ajuste-border-tabla 0
                    td UFC/100 mL
                  tr
                    td.ajuste-border-tabla E.	Coli
                    td.ajuste-border-tabla 0
                    td UFC/100 mL
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla Mesófilos
                    td.ajuste-border-tabla 100
                    td UFC/100 mL

    .row.align-items-center.mb-5.estilo___caja_3.m-0.espacio___movil_1(data-aos="zoom-in")
      .col-xl-auto(data-aos="fade-right")
        figure.d-none.d-xl-block
          img(src='@/assets/curso/temas/img3.svg', alt='' style="max-width: 85px").m-auto
      .col-xl
        p.mb-0 Adicionalmente, en Colombia se cuenta con un marco normativo que establece diversos requisitos y procedimientos para la vigilancia de la calidad del agua para consumo humano. En la siguiente tabla se relacionan los decretos y resoluciones pertinentes al propósito del curso complementario:

    .row.justify-content-center.mb-5.espacio___movil_1(data-aos="zoom-in")
      .col-xl-10
        .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
          h5 Tabla 4.
          span Normas calidad agua potable
        .tabla-a.ajuste___tabla
          table
            thead
              tr
                th.ajuste-border-tabla Norma
                th.ajuste-border-tabla Concepto
                th Enlace
            tbody
              tr
                td.ajuste___linea_right Decreto 1575 de 2007
                td.ajuste___linea_right Protección y control de la calidad del agua.
                td.ajuste___i <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=30007" target="_blank"><i class="fas fa-external-link"></i></a>
              tr
                td.ajuste___linea_right Resolución 2115 de 2007
                td.ajuste___linea_right Características, instrumentos básicos y frecuencias del control y vigilancia para la calidad del agua para consumo humano.
                td.ajuste___i <a href="https://minvivienda.gov.co/normativa/resolucion-2115-2007" target="_blank"><i class="fas fa-external-link"></i></a>
              tr
                td.ajuste___linea_right Resolución 0811 de 2008
                td.ajuste___linea_right Lugares y puntos de muestreo para el control y la vigilancia de la calidad del agua para consumo humano en la red de distribución.
                td.ajuste___i <a href="https://www.minvivienda.gov.co/normativa/resolucion-0811-2008 " target="_blank"><i class="fas fa-external-link"></i></a>
              tr
                td.ajuste___linea_right Resolución 0082 de 2009
                td.ajuste___linea_right Formularios para la práctica de visitas de inspección sanitaria a los sistemas de suministro de agua para consumo humano.
                td.ajuste___i <a href="https://www.ins.gov.co/Normatividad/Resoluciones/RESOLUCI%C3%93N%20082%20DE%202009.pdf " target="_blank"><i class="fas fa-external-link"></i></a>
              tr
                td.ajuste___linea_right Resolución 622 de 2020
                td.ajuste___linea_right Define el protocolo específico para la vigilancia de la calidad del agua en zonas rurales, incluyendo los parámetros de control, las frecuencias de muestreo y los requisitos para las personas prestadoras del servicio. 
                td.ajuste___i <a href="https://www.minsalud.gov.co/Normatividad_Nuevo/Resoluci%C3%B3n%20No.%20622%20de%202020.pdf " target="_blank"><i class="fas fa-external-link"></i></a>
    
    .row.align-items-center.estilo___caja_4.m-0.espacio___movil_1(data-aos="zoom-in")
      .col-xl-auto(data-aos="fade-right")
        figure.d-none.d-xl-block
          img(src='@/assets/curso/temas/img4.svg', alt='' style="max-width: 85px").m-auto
      .col-xl
        h5 Frecuencias de muestreo de agua para consumo humano
        p.mb-0 Se invita a leer el documento Frecuencias de muestreo de agua para consumo humano, donde se aborda la normativa y criterios técnicos para la recolección y análisis de muestras de agua destinadas al consumo humano.
      .col-xl-2.espacio___movil_3
        a.boton.color-acento-botones.texto-negro(:href="obtenerLink('/downloads/Anexo_1_Frecuencias_muestreo_agua_consumo_humano.pdf')" target="_blank" type="application/pdf")
          span Descargar
          i.fas.fa-file-download
 
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
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
