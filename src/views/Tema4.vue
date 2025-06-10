<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Toma de la muestra de agua

    .row.align-items-center.estilo___caja_8.m-0.mb-5(data-aos="zoom-in")
      .col-xl-auto
        figure.d-none.d-xl-block(data-aos="fade-right")
          img(src="@/assets/curso/temas/img19.svg" style="max-width: 85px").m-auto
      .col-xl
        p.mb-0 La calidad del resultado final depende en gran medida de la correcta toma de la muestra; por esta razón, debe realizarse siguiendo las técnicas y protocolos de laboratorio. Una manipulación inadecuada puede contaminar la muestra y alterar los resultados analíticos.

    <!-- BLOQUE 1 -->
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.1 Rotulación de la muestra

    p.mb-4 Para identificar la muestra se debe tener en cuenta lo siguiente:

    .fondo___img_1
      .px-5
        .row.align-items-center.mb-5
          .col-xl-4(data-aos="fade-right")
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img21.svg', alt='' style="max-width: 350px").m-auto
          .col-xl-8(data-aos="fade-left")
            SlyderF(columnas="col-lg-6 col-xl-6")
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img22.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Lugar y datos del responsable
                p.mb-0 Colocar el lugar donde se tome la muestra, dirección, nombre de la persona que toma la muestra, fecha del muestreo y el tipo de análisis solicitado.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img23.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Procedimientos de recolección
                p.mb-0 Detallar los procesos que se emplearon para la recolección de las muestras, en el mismo instante en que se toma la muestra.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img24.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Coherencia documental
                p.mb-0 Los datos descritos en el rótulo deben estar iguales en el formato de la cadena de custodia.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img25.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Fecha y hora
                p.mb-0 Indicar la fecha y hora del muestreo.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img26.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Tipo de agua
                p.mb-0 Indicar si la muestra es de agua para consumo humano o de agua cruda.

        .row.align-items-center.mb-5
          .col-xl
            .row.align-items-center.m-0
              .col-xl-12
                p.mb-4 De acuerdo con el ICONTEC (2004), en su Guía Técnica Colombiana [GTC] 100, guía para los procedimientos de cadena de custodia de muestras, los rótulos de las muestras pueden:
              .col-xl-12.estilo___caja_9(data-aos="fade-right")
                p Tener forma de etiquetas adhesivas, marcas (rótulos) o una combinación de ambas.
                p.mb-0 Las etiquetas suelen ser removibles para formar parte del proceso de registros posteriores; sin embargo, existe el riesgo de una remoción inapropiada o pérdida. Los rótulos o marcas, por su parte, generalmente se elaboran en papel resistente al agua con tinta indeleble y se adhieren al frasco o recipiente de la muestra. Como alternativa, también se puede escribir directamente sobre el recipiente con tinta indeleble, aunque esta opción no es la más recomendada (p. 5).
          .col-xl-auto(data-aos="fade-left")
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img27.svg', style="max-width: 400px").m-auto

    .row.align-items-center.mb-5.estilo___caja_3.m-0.espacio___movil_1(data-aos="zoom-in")
      .col-xl-auto(data-aos="fade-right")
        figure.d-none.d-xl-block
          img(src='@/assets/curso/temas/img3.svg', alt='' style="max-width: 85px").m-auto
      .col-xl
        p.mb-0 La información sobre las operaciones de muestreo es una parte fundamental para asegurar la calidad del programa de muestreo y base fundamental en la cadena de custodia de las muestras, ya que esto genera confianza en los resultados de los análisis aplicados a las muestras. Por tal razón, la información consignada en los rótulos de los recipientes y en los registros de toma de muestras debe ser legible, veraz y trazable.

    .fondo___color_1
      .px-5
        .row.mb-5.justify-content-center.espacio___movil_1
          .col-xl-10
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Figura 3.
              span Característica de los rótulos
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/img29.svg', alt='Diagrama sobre información necesaria para identificar puntos de muestreo, que incluye datos como código del punto, nombre y código de la localidad, NIT del prestador del servicio, ubicación geográfica, nombre del sitio específico y localización en el plano de distribución. ').m-auto
        
        p.mb-4.espacio___movil_1 A continuación, se presentan las indicaciones para el diligenciamiento adecuado de los rótulos en el proceso de toma de muestras:

        .row.align-items-center.estilo___caja_10.m-0(data-aos="zoom-in")
          .col-xl-auto
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img30.png', alt='' style="max-width: 500px").m-auto
          .col-xl
            <ul class="fa-ul estilo___i">
              <li class="mb-2"><span class="fa-li"><i class="fas fa-tint"></i></span>Deben diligenciarse justo antes o inmediatamente después de la toma de muestras.</li>
              <li class="mb-2"><span class="fa-li"><i class="fas fa-tint"></i></span>Deben adherirse al recipiente de manera que se garantice la permanencia y legibilidad de la información.</li>
              <li class="mb-2"><span class="fa-li"><i class="fas fa-tint"></i></span>Deben ser completamente legibles, sin enmendaduras ni tachones.</li>
              <li class="mb-0"><span class="fa-li"><i class="fas fa-tint"></i></span>En el caso de muestras microbiológicas, además de lo anterior, debe consignarse la información sobre la preservación utilizada. Esta se debe registrar al momento del alistamiento de los recipientes en el laboratorio, ya que el preservante se añade antes del proceso de esterilización de los frascos.</li>
            </ul>

    <!-- BLOQUE 2 -->
    Separador
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.2 Procedimiento de muestreo

    p.mb-4 Para asegurar que la muestra sea representativa y que se sigan los procedimientos establecidos por los laboratorios y la normatividad vigente, se debe seguir el siguiente paso a paso:

    .bg--img_03.mb-5
      .row.h-100.align-items-center
        .col-xl-auto
          figure(data-aos="fade-right").d-none.d-xl-block
            img(src="@/assets/curso/temas/img31.svg", alt="" style="width: 382px").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="fade-left")
            .row(titulo="Definir el punto de toma").ajuste-cajaAcordion
              p.mb-4 Seleccionar el punto adecuado, desmontar filtros, mangueras o telas, y evitar llaves de poco uso ubicadas en puntos muertos.
            .row(titulo="Abrir la llave").ajuste-cajaAcordion
              p.mb-0  Dejar salir el agua a flujo máximo durante aproximadamente tres minutos.
            .row(titulo="Cerrar la llave").ajuste-cajaAcordion
              p.mb-0 Proceder con la desinfección.
            .row(titulo="Desinfectar la llave").ajuste-cajaAcordion
              p.mb-0 Aplicar alcohol; si la llave es metálica, flamear con mechero.
    
    .bg--img_03.mb-5.espacio___movil_2
      .row.h-100.align-items-center
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="fade-left")
            .row(titulo="Enfriar el grifo").ajuste-cajaAcordion
              p.mb-4 Abrir cuidadosamente el grifo y dejar fluir el agua unos minutos para enfriarlo.
            .row(titulo="Preparar frasco microbiológico").ajuste-cajaAcordion
              p.mb-0  Retirar la envoltura del frasco estéril y sostenerlo por la parte inferior mientras fluye el agua.
            .row(titulo="Tomar muestra fisicoquímica").ajuste-cajaAcordion
              p.mb-0 Enjuagar el frasco plástico tres veces (purgado) y llenarlo desde el mismo punto usado para la muestra microbiológica.
            .row(titulo="Rotular y registrar").ajuste-cajaAcordion
              p.mb-0 Diligenciar la etiqueta del frasco y la cadena de custodia de la muestra de agua.
        .col-xl-auto
          figure(data-aos="fade-right").d-none.d-xl-block
            img(src="@/assets/curso/temas/img32.svg", alt="" style="width: 382px").m-auto

    .row.justify-content-center.mb-5(data-aos="zoom-in")
      .col-lg-10
        .row.align-items-center.estilo___caja_10.espacio___movil_1
          .col-xl-auto
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img33.png', alt='').m-auto
          .col-xl
            p.mb-0 Para el caso de la toma de muestra de microbiología, mantener la tapa siempre en la mano y hacia abajo, evitando de esta forma contaminación y evitar el contacto de los dedos con la boca del frasco. Cerrar el frasco de microbiología inmediatamente.

    p.mb-4.espacio___movil_1 En caso de que la muestra se tome directamente de la fuente abastecedora, se debe seguir el procedimiento descrito a continuación:

    .row.mb-5
      .col-xl-3(data-aos="zoom-in")
        .estilo___caja_11.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4.d-none.d-xl-block
                img(src='@/assets/curso/temas/img34.svg', alt="" style="max-width: 90px").m-auto
            h3 Seleccionar el punto de muestreo
            p.mb-0 La muestra debe tomarse lo más lejos posible de la orilla, sin remover el fondo y evitando zonas de estancamiento o remansos.
      .col-xl-3.espacio___movil_3(data-aos="zoom-in")
        .estilo___caja_11.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4.d-none.d-xl-block
                img(src='@/assets/curso/temas/img35.svg', alt="" style="max-width: 90px").m-auto
            h3 Toma de muestra microbiológica
            p.mb-0 Retirar cuidadosamente el capuchón de papel sin contaminar el frasco. Sumergirlo en el agua, abrir la tapa bajo el agua y llenarlo.
      .col-xl-3.espacio___movil_3(data-aos="zoom-in")
        .estilo___caja_11.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4.d-none.d-xl-block
                img(src='@/assets/curso/temas/img36.svg', alt="" style="max-width: 90px").m-auto
            h3 Cierre del frasco
            p.mb-0 Dejar un pequeño espacio de aire y cerrar de inmediato.
      .col-xl-3.espacio___movil_3(data-aos="zoom-in")
        .estilo___caja_11.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4.d-none.d-xl-block
                img(src='@/assets/curso/temas/img37.svg', alt="" style="max-width: 90px").m-auto
            h3 Toma de muestra fisicoquímica
            p.mb-0 Enjuagar el frasco plástico tres veces (purgado), luego llenarlo completamente sumergiéndolo en el mismo punto que la muestra microbiológica.

    p.mb-4.espacio___movil_1 Cuando el muestreo se realice en tanques de almacenamiento o pilas públicas, se debe seguir el procedimiento que se indica a continuación:

    .fondo___slider
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.h-100.justify-content-center.align-items-center
              .col-lg-6.mb-4
                h4 Sumergir el frasco correctamente
                p.mb-0 Tomar el recipiente por la base, destaparlo e inmediatamente sumergirlo con la boca hacia abajo para evitar la entrada de material superficial.
              .col-lg-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img38.svg', alt='' style="max-width: 500px").m-auto
            
            .row.h-100.justify-content-center.align-items-center
              .col-lg-6.mb-4
                h4 Uso de cuerda en caso necesario
                p.mb-0 Si no es posible tomar la muestra con el brazo extendido, atar una cuerda limpia al frasco y bajarlo dentro del tanque, sin que toque las paredes.
              .col-lg-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img39.svg', alt='' style="max-width: 500px").m-auto

            .row.h-100.justify-content-center.align-items-center
              .col-lg-6.mb-4
                h4 Muestra fisicoquímica
                p.mb-0 Realizar el mismo procedimiento con la cuerda, enjuagando el frasco antes de llenarlo en el mismo punto de la muestra microbiológica.
              .col-lg-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img40.svg', alt='' style="max-width: 500px").m-auto

            .row.h-100.justify-content-center.align-items-center
              .col-lg-6.mb-4
                h4 Manejo de la tapa del frasco
                p.mb-0 La tapa del frasco de microbiología debe mantenerse boca abajo, sin tocar su interior ni apoyarla en superficies.
              .col-lg-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img41.svg', alt='' style="max-width: 500px").m-auto

            .row.h-100.justify-content-center.align-items-center
              .col-lg-6.mb-4
                h4 Cierre del frasco
                p.mb-0 Una vez tomada la muestra, colocar inmediatamente la tapa.
              .col-lg-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img42.svg', alt='' style="max-width: 500px").m-auto

    <!-- BLOQUE 3 -->
    Separador
    #t_4_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.3 Preservación

    p.mb-4 Según las características que se deban analizar, las muestras de agua deben preservarse para mantener sus propiedades físicas, químicas y microbiológicas originales desde el momento de la recolección hasta su análisis en el laboratorio.

    .row.justify-content-center(data-aos="zoom-in")
      .col-xl-10
        .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
          h5 Tabla 6.
          span Preservación para muestras de agua
        .tabla-a
          table
            caption Fuente: NTC ISO 5667 -3, CORNARE, 2023.
            thead
              tr
                th.ajuste-border-tabla Variable
                th.ajuste-border-tabla Unidad
                th.ajuste-border-tabla Preservación
                th.ajuste-border-tabla Tipo muestreo
                th Tiempo de conservación
            tbody
              tr.ajuste-color-tabla
                td.ajuste-border-tabla Cloro Residual
                td.ajuste-border-tabla mg/L
                td.ajuste-border-tabla Análisis Inmediato
                td.ajuste-border-tabla Simple
                td Inmediato / 15 min
              tr
                td.ajuste-border-tabla Coliformes Fecales 
                td.ajuste-border-tabla UFC/100mL
                td.ajuste-border-tabla Refrigerar ≤ 6 °C 
                td.ajuste-border-tabla Simple
                td 24 horas
              tr.ajuste-color-tabla
                td.ajuste-border-tabla Coliformes Totales
                td.ajuste-border-tabla UFC/100mL
                td.ajuste-border-tabla Refrigerar ≤ 6 °C 
                td.ajuste-border-tabla Simple
                td 24 horas
              tr
                td.ajuste-border-tabla E. Coli
                td.ajuste-border-tabla UFC/100mL
                td.ajuste-border-tabla Refrigerar ≤ 6 °C 
                td.ajuste-border-tabla Simple
                td 24 horas
              tr.ajuste-color-tabla
                td.ajuste-border-tabla Conductividad
                td.ajuste-border-tabla µS/cm
                td.ajuste-border-tabla Refrigerar ≤ 6 °C 
                td.ajuste-border-tabla Simple, Compuesto
                td 28 días
              tr
                td.ajuste-border-tabla Color Aparente
                td.ajuste-border-tabla UPC
                td.ajuste-border-tabla Refrigerar ≤ 6 °C 
                td.ajuste-border-tabla Simple, Compuesto
                td 48 horas
              tr.ajuste-color-tabla
                td.ajuste-border-tabla Color Real
                td.ajuste-border-tabla m-1
                td.ajuste-border-tabla Refrigerar ≤ 6 °C 
                td.ajuste-border-tabla Simple, Compuesto
                td 48 h
              tr
                td.ajuste-border-tabla Acidez
                td.ajuste-border-tabla mg/L
                td.ajuste-border-tabla Refrigerar ≤ 6 °C 
                td.ajuste-border-tabla Simple
                td 24 h / 14 d
              tr.ajuste-color-tabla
                td.ajuste-border-tabla Alcalinidad Total
                td.ajuste-border-tabla mg/L
                td.ajuste-border-tabla Refrigerar  ≤ 6 °C 
                td.ajuste-border-tabla Simple
                td 24 h / 14 d
              tr
                td.ajuste-border-tabla Cloruros
                td.ajuste-border-tabla mg/L
                td.ajuste-border-tabla No requiere preservantes ni refrigeración
                td.ajuste-border-tabla Simple, Compuesto
                td 28 días
              tr.ajuste-color-tabla
                td.ajuste-border-tabla Dureza Cálcica
                td.ajuste-border-tabla mg/L
                td.ajuste-border-tabla Acidificar con HNO3 o H2SO4 a pH <2. Refrigerar ≤ 6 °C   
                td.ajuste-border-tabla Simple, Compuesto
                td 6 meses
              tr
                td.ajuste-border-tabla Dureza Total
                td.ajuste-border-tabla mg/L
                td.ajuste-border-tabla Acidificar con HNO3 o H2SO4 a pH <2. Refrigerar ≤ 6 °C   
                td.ajuste-border-tabla Simple, Compuesto
                td 6 meses
              tr.ajuste-color-tabla
                td.ajuste-border-tabla Carbono Orgánico Total
                td.ajuste-border-tabla mg/L
                td.ajuste-border-tabla Analizar inmediatamente o adicionar de 0,4 mL de HCL o H2SO4 a pH=2 Refrigeración ≤ 6°C
                td.ajuste-border-tabla Simple, Compuesto
                td 7 días
              tr
                td.ajuste-border-tabla Metales Totales
                td.ajuste-border-tabla mg/L
                td.ajuste-border-tabla Metales Totales: acidular con HNO3 pH < 2. Refrigerar ≤ 6 °C   
                td.ajuste-border-tabla Simple, Compuesto
                td 6 meses
              tr.ajuste-color-tabla
                td.ajuste-border-tabla Nitratos
                td.ajuste-border-tabla mg/L
                td.ajuste-border-tabla Analizar lo antes posible, Refrigerar ≤ 6 °C 
                td.ajuste-border-tabla Simple, Compuesto
                td 48 h
              tr
                td.ajuste-border-tabla Nitritos
                td.ajuste-border-tabla mg N-NO2-/L
                td.ajuste-border-tabla Analizar lo antes posible, Refrigerar ≤ 6 °C 
                td.ajuste-border-tabla Simple, Compuesto
                td 48 h
              tr.ajuste-color-tabla
                td.ajuste-border-tabla Ortofosfatos
                td.ajuste-border-tabla mg/L
                td.ajuste-border-tabla Refrigerar ≤ 6 °C 
                td.ajuste-border-tabla Simple
                td 48 h
              tr
                td.ajuste-border-tabla Oxigeno Disuelto
                td.ajuste-border-tabla mg/L
                td.ajuste-border-tabla Análisis Inmediato
                td.ajuste-border-tabla Simple
                td Inmediato / 15 min
              tr.ajuste-color-tabla
                td.ajuste-border-tabla pH
                td.ajuste-border-tabla Unidades pH 
                td.ajuste-border-tabla Análisis Inmediato
                td.ajuste-border-tabla Simple
                td Inmediato / 15 min
              tr
                td.ajuste-border-tabla Sulfatos
                td.ajuste-border-tabla mg/L
                td.ajuste-border-tabla Refrigerar ≤ 6 °C 
                td.ajuste-border-tabla Simple, Compuesto
                td 28 d
              tr.ajuste-color-tabla
                td.ajuste-border-tabla Turbidez
                td.ajuste-border-tabla NTU
                td.ajuste-border-tabla Analizar el mismo día; almacenar en la oscuridad hasta 24 h, Refrigerar ≤ 6 °C 
                td.ajuste-border-tabla Simple, Compuesto
                td 24 h / 48 h
                
    <!-- BLOQUE 4 -->
    Separador
    #t_4_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.4 Transporte de la muestra

    p.mb-4 Para que el transporte de la muestra sea el indicado, se debe tener en cuenta los siguientes criterios:

    .fondo___slider
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.h-100.justify-content-center.align-items-center
              .col-lg-6.mb-4
                h4 Identificación de la nevera
                p.mb-0 Debe estar marcada con firma, sello de quien toma la muestra, fecha y hora.
              .col-lg-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img43.svg', alt='' style="max-width: 500px").m-auto
            
            .row.h-100.justify-content-center.align-items-center
              .col-lg-6.mb-4
                h4 Temperatura adecuada
                p.mb-0 La nevera debe tener suficiente hielo para mantener una temperatura de 4°C hasta su llegada al laboratorio.
              .col-lg-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img44.svg', alt='' style="max-width: 500px").m-auto

            .row.h-100.justify-content-center.align-items-center
              .col-lg-6.mb-4
                h4 Seguridad del cierre
                p.mb-0 Asegurar la tapa de la nevera para evitar alteraciones en la muestra durante el traslado.
              .col-lg-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img45.svg', alt='' style="max-width: 500px").m-auto

            .row.h-100.justify-content-center.align-items-center
              .col-lg-6.mb-4
                h4 Condiciones del transporte
                p.mb-0 El vehículo debe cumplir con condiciones seguras para el transporte de la muestra.
              .col-lg-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img46.svg', alt='' style="max-width: 500px").m-auto

            .row.h-100.justify-content-center.align-items-center
              .col-lg-6.mb-4
                h4 Manipulación adecuada
                p.mb-0 Evitar maltratar la nevera, mantenerla en posición horizontal y lejos de fuentes de calor.
              .col-lg-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img47.svg', alt='' style="max-width: 500px").m-auto

            .row.h-100.justify-content-center.align-items-center
              .col-lg-6.mb-4
                h4 Supervisión
                p.mb-0 Vigilar que la nevera no sea manipulada por personas ajenas al proceso de muestreo.
              .col-lg-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img48.svg', alt='' style="max-width: 500px").m-auto

            .row.h-100.justify-content-center.align-items-center
              .col-lg-6.mb-4
                h4 Envío por terceros
                p.mb-0 Si se envía por mensajería o con personal no involucrado en el muestreo, debe ir marcada, sellada y conservar su contenido original. Se debe elegir el medio de transporte más rápido para asegurar su llegada al laboratorio.
              .col-lg-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img49.svg', alt='' style="max-width: 500px").m-auto

    <!-- BLOQUE 5 -->
    Separador
    #t_4_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.5 Recepción de la muestra

    p.mb-4 Una vez realizada la toma de la muestra de agua y transportada bajo las condiciones previamente descritas, se debe efectuar su recepción teniendo en cuenta los siguientes aspectos:

    .row.align-items-center.mb-5.m-0.estilo___caja_12(data-aos="zoom-in")
      .col-xl
        p.mb-3 Al momento de entregar la muestra, se debe verificar:
        <ul class="fa-ul estilo___ul">
          <li class="mb-3"><span class="fa-li"><i class="fas fa-tint"></i></span>Que las muestras se registren inmediatamente al ingresar al laboratorio.</li>
          <li class="mb-3"><span class="fa-li"><i class="fas fa-tint"></i></span>Que el rótulo de la muestra no esté alterado.</li>
          <li class="mb-3"><span class="fa-li"><i class="fas fa-tint"></i></span>Que se haya realizado la preservación adecuada según las características a analizar.</li>
          <li class="mb-3"><span class="fa-li"><i class="fas fa-tint"></i></span>Que en los casos que lo requieran, se haya preservado correctamente el pH.</li>
          <li class="mb-3"><span class="fa-li"><i class="fas fa-tint"></i></span>Que la temperatura esté registrada en la cadena de custodia.</li>
          <li class="mb-0"><span class="fa-li"><i class="fas fa-tint"></i></span>Que la muestra se entregue en el frasco o envase correspondiente según el análisis a realizar.</li>
        </ul>
      .col-xl-auto
        figure.d-none.d-xl-block
          img(src='@/assets/curso/temas/img50.svg', alt='' style="max-width: 400px").m-auto
    
    .row.align-items-center.mb-4.m-0.espacio___movil_1
      .col-xl-6(data-aos="fade-right")
        figure.d-none.d-xl-block
          img(src='@/assets/curso/temas/img51.png', alt='' )
      .col-xl-6.estilo___caja_13(data-aos="fade-left")
        p.mb-3 Requisitos de envases según tipo de análisis:
        <ul class="fa-ul estilo___ul">
          <li class="mb-3"><span class="fa-li"><i class="fas fa-tint"></i></span>Para análisis microbiológicos: utilizar frascos de vidrio esterilizados con tapa de rosca no metálica o, alternativamente, bolsas plásticas estériles y desechables.</li>
          <li class="mb-3"><span class="fa-li"><i class="fas fa-tint"></i></span>El volumen de muestra para análisis microbiológicos debe ocupar aproximadamente el 90% de la capacidad del envase.</li>
          <li class="mb-0"><span class="fa-li"><i class="fas fa-tint"></i></span>Para análisis fisicoquímicos, el envase debe llenarse completamente (100%).</li>
        </ul>
    
    p.mb-0.estilo___caja_14(data-aos="zoom-in") Una vez la muestra es recibida en el laboratorio, la responsabilidad de su custodia recae sobre el analista o encargado.

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
