export default {
  global: {
    Name: 'Muestreo de agua para consumo humano',
    Description:
      'El componente formativo se describen las temáticas relacionadas con el muestreo de agua para consumo humanos teniendo en cuenta los puntos de muestreo, la ubicación, el objetivo del muestreo, frecuencias, entre otros aspectos que se deben tener en cuenta de acuerdo a la normatividad y protocolos vigentes.  ',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Normatividad calidad de agua',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Localización puntos de muestreo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Criterios de localización de puntos de muestreo de agua',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Número mínimo de puntos de muestreo de agua',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Identificación del punto de muestreo',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Técnicas de muestreo',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Toma de la muestra de agua',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Rotulación de la muestra',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Procedimiento de muestreo',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Preservación',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Transporte de la muestra',
            hash: 't_4_4',
          },
          {
            numero: '4.5',
            titulo: 'Recepción de la muestra',
            hash: 't_4_5',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Documentos técnicos y de registro',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Cadena de custodia',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Informe de muestreo',
            hash: 't_5_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Normatividad calidad de agua',
      referencia:
        'Ministerio de la Protección Social (MPS) y Ministerio de Ambiente, Vivienda y Desarrollo Territorial (MAVDT). (2007). Resolución 2115 de 2007 Por medio de la cual se señalan características, instrumentos básicos y frecuencias del sistema de control y vigilancia para la calidad del agua para consumo humano',
      tipo: 'Resolución',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/DIJ/Resoluci%C3%B3n_2115_de_2007.pdf',
    },
    {
      tema: 'Normatividad calidad de agua',
      referencia:
        'Ministerio de la Protección Social (MPS) y Ministerio de Vivienda, Ciudad y territorio. (2020). Resolución 622 de 2020. Por la cual se adopta el protocolo de inspección, vigilancia y control de la calidad del agua para consumo humano  suministradas por personas prestadoras del servicio público domiciliario de acueducto en zona rural. ',
      tipo: 'Resolución',
      link:
        'https://www.minsalud.gov.co/Normatividad_Nuevo/Resoluci%C3%B3n%20No.%20622%20de%202020.pdf',
    },
    {
      tema: 'Localización puntos de muestreo',
      referencia:
        'Ministerio de Ambiente, Vivienda y Desarrollo Territorial (2011). Resolución 0811 de 2011. Por medio de la cual se definen los lineamientos a partir de los cuales la autoridad sanitaria y las personas prestadoras, concertadamente definirán en su área de influencia los lugares y puntos de muestreo para el control y la vigilancia de la calidad del agua para consumo humano en la red de distribución.',
      tipo: 'Resolución',
      link: 'https://www.minvivienda.gov.co/normativa/resolucion-0811-2008',
    },
  ],
  glosario: [
    {
      termino: 'Análisis microbiológico del agua',
      significado:
        'Son los procedimientos de laboratorio que se efectúan a una muestra de agua para consumo humano para evaluar la presencia o ausencia, tipo y cantidad de microorganismos.',
    },
    {
      termino: 'Análisis fisicoquímicos del agua',
      significado:
        'Son aquellos procedimientos de laboratorio que se efectúan a una muestra de agua para evaluar sus características físicas, químicas o ambas.',
    },
    {
      termino: 'E.	Coli',
      significado:
        'Bacilo aerobio Gram Negativo no esporulado que se caracteriza por tener enzimas específicas como la β galactosidasa y β glucoronidasa. Es el indicador microbiológico preciso de contaminación fecal en el agua para consumo humano.',
    },
  ],
  referencias: [
    {
      referencia:
        'Corporación Autónoma Regional de las Cuencas de los Ríos Negro y Nare (CORNARE). (2023). Requerimientos generales para la toma de muestras y preservación matriz agua (Versión 7).',
      link:
        'https://www.cornare.gov.co/laboratorio/I-MA-12_Requerimientos_generales_para_toma_de_muestras_y_preservacion_matriz_agua_V.07.pdf',
    },
    {
      referencia:
        'Empresas Públicas de La Ceja E.S.P. (2023). Toma de muestras de agua. ',
      link:
        'https://eeppdelaceja.gov.co/files/manuales/2023/16934653302186.pdf',
    },
    {
      referencia:
        'Instituto Colombiano de Normas Técnicas y Certificación (ICONTEC). (2004). GTC 100: Calidad de agua. Guía para los procedimientos de cadena de custodia de muestras.',
      link: '',
    },
    {
      referencia:
        'Instituto Colombiano de Normas Técnicas y Certificación (ICONTEC). (2004). NTC-ISO 5667-3:2004. Calidad del agua. Muestreo. Parte 3. Directrices para la preservación y manejo de las muestras.',
      link: '',
    },
    {
      referencia:
        'Instituto Colombiano de Normas Técnicas y Certificación (ICONTEC). (2008). NTC-ISO 5667-5:2008. Directrices para el muestreo de agua potable de instalaciones de tratamiento y sistemas de distribución por tubería.',
      link: '',
    },
    {
      referencia:
        'Instituto Colombiano de Normas Técnicas y Certificación (ICONTEC). (2012). GTC 045: Guía para la identificación de los peligros y la valoración de los riesgos en seguridad y salud ocupacional.',
      link: '',
    },
    {
      referencia:
        'Instituto Nacional de Salud (INS). (2011). Manual de instrucciones para la toma, preservación y transporte de muestras de agua de consumo humano para análisis de laboratorio. ',
      link:
        'https://www.ins.gov.co/BibliotecaDigital/Manual-toma-muestras-agua.pdf',
    },
    {
      referencia:
        'Instituto Nacional de Salud (INS). (2018). Guía para la vigilancia por laboratorio de Giardia y Cryptosporidium en muestras de agua. ',
      link:
        'https://www.ins.gov.co/BibliotecaDigital/guia-para-la-vigilancia-por-laboratorio-de-giardia-y-cryptosporidium-en-muestras-de-agua.pdf',
    },
    {
      referencia:
        'Instituto Nacional de Salud (INS). (2020). Guía de laboratorio para la vigilancia y control de calidad bacteriológico en muestras de agua para consumo humano. ',
      link:
        'https://www.ins.gov.co/BibliotecaDigital/guia-para-la-vigilancia-y-control-de-calidad-bacteriologico-en-muestras-de-agua-para-consumo-humano.pdf',
    },
    {
      referencia:
        'Ministerio de la Protección Social & Ministerio de Ambiente, Vivienda y Desarrollo Territorial. (2007). Resolución 2115 de 2007: Por medio de la cual se señalan características, instrumentos básicos y frecuencias del sistema de control y vigilancia para la calidad del agua para consumo humano.',
      link: '',
    },
    {
      referencia:
        'Ministerio de la Protección Social & Ministerio de Vivienda, Ciudad y Territorio. (2020). Resolución 622 de 2020: Por la cual se adopta el protocolo de inspección, vigilancia y control de la calidad del agua para consumo humano suministradas por personas prestadoras del servicio público domiciliario de acueducto en zona rural.',
      link: '',
    },
    {
      referencia:
        'Ministerio de Ambiente, Vivienda y Desarrollo Territorial. (2011). Resolución 0811 de 2011: Por medio de la cual se definen los lineamientos a partir de los cuales la autoridad sanitaria y las personas prestadoras, concertadamente definirán en su área de influencia los lugares y puntos de muestreo para el control y la vigilancia de la calidad del agua para consumo humano en la red de distribución.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Líder del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermudez Jaimes',
          cargo: 'Responsable de línea de producción',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Diana Milena Picon Rincon',
          cargo: 'Diseñador de contenidos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Robinson Javier Ordoñez Barreiro',
          cargo: 'Desarrollador <i>full stack</i>',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'GESTORES DE REPOSITORIO',
      autores: [
        {
          nombre: 'Aixa Natalia Sendoya Fernández',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Jaime Hernán Tejada Llano',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Raúl Mosquera Serrano',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
