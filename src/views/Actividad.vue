<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Aspectos técnicos del muestreo de agua de consumo humano',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> Aplicar los aspectos técnicos fundamentales del muestreo de agua destinada al consumo humano, incluyendo los procedimientos de recolección, conservación, transporte y análisis de muestras, con el fin de garantizar la representatividad, la calidad y la confiabilidad de los resultados obtenidos.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!..',
      titulo_reprobado: 'VUELVA A INTENTARLO..',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es el principal objetivo del muestreo de agua para consumo humano?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Aumentar el caudal de agua disponible.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Verificar la calidad del agua.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Mejorar el sabor del agua.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Reducir el uso de productos químicos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Cuál de los siguientes factores es más importante al seleccionar un punto de muestreo?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Estética del sitio.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Facilidad de acceso.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Representatividad del agua a consumir.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Cercanía a un laboratorio.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Qué tipo de recipiente se recomienda usar para recolectar muestras para análisis microbiológicos?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Frasco estéril con tiosulfato de sodio.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Frasco de vidrio reciclado.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Botella de plástico común.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Vaso de aluminio.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Con qué frecuencia deben realizarse los muestreos según la normatividad colombiana?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Una vez al mes en todos los municipios.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Cada seis meses sin excepción.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Anualmente en cabeceras municipales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Depende del tamaño y riesgo del sistema de abastecimiento.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Qué parámetros se analizan comúnmente en el análisis fisicoquímico del agua?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Cloro libre y bacterias coliformes.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Color, sabor y olor.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'pH, conductividad, turbiedad y cloro residual.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Solo pH y cloro.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Cuál es el principal riesgo de no desinfectar adecuadamente los frascos de muestreo?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Contaminación del usuario.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Obtención de resultados erróneos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Desgaste del frasco.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Disminución del pH del agua.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto: '¿Qué se debe hacer con la muestra después de su recolección?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Mantenerla refrigerada entre 2 y 6 °C.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Dejarla a temperatura ambiente.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Mezclarla con cloro.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Agitarla constantemente.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto: '¿Cuál es la principal razón para aplicar normas de muestreo?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Reducción de costos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Evitar la necesidad de laboratorio.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Limitar el acceso al agua.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Asegurar la confiabilidad de los resultados.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            '¿Qué indica la presencia de coliformes en una muestra de agua?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El agua es potable.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El agua es estéril.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Contaminación microbiológica.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Alta concentración de minerales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '¿Qué norma técnica rige el muestreo de agua potable en Colombia?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Decreto 1076 de 2015.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Ley 100 de 1993.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Resolución 2115 de 2007.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Decreto 4741 de 2005.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto:
            'El Decreto 1575 de 2007 establece los valores máximos permisibles para los parámetros del agua potable.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            'Una muestra de agua para análisis fisicoquímico debe llenar completamente el frasco.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto:
            'Las muestras de agua deben ser transportadas en una nevera con suficiente hielo para mantener la temperatura a 4°C.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto:
            'Las etiquetas removibles son las más recomendadas para identificar frascos de muestra.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto:
            'El análisis de cloro residual debe realizarse de manera inmediata o máximo en 15 minutos.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
