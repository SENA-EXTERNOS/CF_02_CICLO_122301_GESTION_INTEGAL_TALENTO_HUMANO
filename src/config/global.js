export default {
  global: {
    componenteFormativo: 'Seguridad y salud en el trabajo',
    descripcionCurso:
      'La seguridad y salud en el trabajo es un tema que ha tomado fuerza en la actualidad ya que, si es desarrollado de manera adecuada, permite reducir costos por eventualidades que puedan afectar no solo el bienestar integral de los empleados en una organización, sino la infraestructura empresarial.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/3.png'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/4.png'),
      },
      {
        clases: ['banner-principal-decorativo-5'],
        imagen: require('@/assets/curso/portada/5.png'),
      },
      {
        clases: ['banner-principal-decorativo-6'],
        imagen: require('@/assets/curso/portada/6.png'),
      },
      {
        clases: ['banner-principal-decorativo-7'],
        imagen: require('@/assets/curso/portada/7.png'),
      },
      {
        clases: ['banner-principal-decorativo-8'],
        imagen: require('@/assets/curso/portada/8.png'),
      },
      {
        clases: ['banner-principal-decorativo-9'],
        imagen: require('@/assets/curso/portada/9.png'),
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
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Seguridad y salud en el trabajo',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Enfermedad laboral',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Peligros y riesgos laborales',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Diagnóstico',
        desarrolloContenidos: true,
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
      tema: 'Normatividad y campo de aplicación',
      referencia:
        'Decreto 768 de 2022 [Ministerio del trabajo] Actualización de Tabla de clasificación de Actividades económicas para el sistema general de riesgos laborales. 16 de mayo de 2022.',
      tipo: 'Decreto',
      descarga: '/downloads/3_decreto-768-del-16-de-mayo-de-2022.pdf',
    },
    {
      tema: 'Normatividad y campo de aplicación',
      referencia:
        'Decreto 1347 de 2021 [Ministerio del trabajo] Adopción por parte de las empresas del Programa de prevención de accidentes mayores (PPAM), para incrementar niveles de seguridad en las instalaciones clasificadas.26 de octubre de 2021.',
      tipo: 'Decreto',
      descarga: '/downloads/4_DECRETO-1347-DEL-26-DE-OCTUBRE-DE-2021.pdf',
    },
    {
      tema: 'Normatividad y campo de aplicación',
      referencia:
        'Decreto 052 de 2017 [Ministerio del trabajo] Se modifica Art. 2.2.4.6.37 Del Decreto 1072 de 2015, para la transición para la implementación del SG-SST.',
      tipo: 'Decreto',
      descarga: '/downloads/5_DECRETO_0052_DE_2017.pdf',
    },
    {
      tema: 'Normatividad y campo de aplicación',
      referencia:
        'Decreto 1072 de 2015 [Ministerio del trabajo] Es la implementación del SG-SST siendo de obligatorio cumplimiento. 26 de mayo de 2015.',
      tipo: 'Decreto',
      descarga: '/downloads/6_Decreto_1072_15_de_abril_de_2016.pdf',
    },
    {
      tema: 'Normatividad y campo de aplicación',
      referencia:
        'Decreto 1443 de 2014 [Ministerio del trabajo] Planteamiento de disposiciones para la implementación del SG-SST. 31 de julio de 2014.',
      tipo: 'Decreto',
      descarga: '/downloads/7_decreto1443_2014.pdf',
    },
    {
      tema: 'Normatividad y campo de aplicación',
      referencia:
        'Ley 1562 de 2012 Por la cual se busca modificar el Sistema de riesgos laborales. 11 de julio de 2012. DO Ni 48.488.',
      tipo: 'Ley',
      descarga: '/downloads/2_LeynNon1562___22608c8cf830c8a___.pdf',
    },
    {
      tema: 'Normatividad y campo de aplicación',
      referencia:
        'Resolución 0312 de 2019 [Ministerio del trabajo] Modificar las fases de implementación del SG-SST y nuevo plazo de adecuación. 13 de febrero de 2019.',
      tipo: 'Resolución',
      descarga:
        '/downloads/1_Resolucion_0312-2019-_Estandares_minimos_del_Sistema_de_la_Seguridad_y_Salud.pdf',
    },
    {
      tema: 'Normatividad y campo de aplicación',
      referencia:
        'Resolución 2644 de 2016 [Servicio nacional de aprendizaje SENA] Sobre la ropa de trabajo y Elementos de protección personal. 2 de diciembre de 2016.',
      tipo: 'Resolución',
      descarga: '/downloads/resolucion_sena_2644_2016.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Competencia',
      significado: 'habilidad y destreza para ejercer un cargo.',
    },
    {
      termino: 'Diagnóstico de peligros',
      significado:
        'identificar los peligros y riesgos existentes en un cargo o espacio laboral.',
    },
    {
      termino: 'EPP',
      significado: 'Elementos de Protección Personal.',
    },
    {
      termino: 'Enfermedad',
      significado:
        'alteración leve o grave del funcionamiento normal de un organismo o de alguna de sus partes debida a una causa interna o externa.',
    },
    {
      termino: 'Ergonomía',
      significado:
        'estudio de las condiciones de adaptación de un lugar de trabajo, una máquina, un vehículo, etc., a las características físicas y psicológicas del trabajador o el usuario.',
    },
    {
      termino: 'Recurso Humano',
      significado: 'los empleados que conforman una organización.',
    },
    {
      termino: 'Salud',
      significado:
        'estado en que un ser u organismo vivo no tiene ninguna lesión ni padece ninguna enfermedad y ejerce con normalidad todas sus funciones. ',
    },
    {
      termino: 'Salud Integral',
      significado:
        'bienestar del ser humano que reúne componentes como lo emocional, mental, social y físico del empleado.',
    },
    {
      termino: 'SG-SST',
      significado: 'Sistema de Gestión de Seguridad y Salud en el Trabajo.',
    },
    {
      termino: 'Riesgo',
      significado:
        'posibilidad de ocurrencia de que alguien tenga un contratiempo o accidente.',
    },
    {
      termino: 'Vigilancia epidemiológica',
      significado:
        'es la medición sistemática de problemas prioritarios de salud en la población, donde se comparan e interpretan datos que después serán transmitidos para detectar posibles cambios en el estado de salud de la población y su ambiente.',
    },
  ],
  referencias: [
    {
      referencia:
        'Bernal, M. & Naranjo, D. (2020). <i>Diseño del sistema de vigilancia epidemiológica de la empresa Carval soluciones y acabados S.A.S según la resolución 0312 de 2019</i>. [Tesis de especialización, Universidad ECCI]',
      link:
        'https://repositorio.ecci.edu.co/bitstream/handle/001/618/Trabajo%20de%20grado.pdf?sequence=2&isAllowed=y#:~:text=El%20Sistema%20de%20Vigilancia%20Epidemiol%C3%B3gica,la%20actividad%20que%20realiza%20la',
    },
    {
      referencia:
        'Cardona, W. (2019). <i>Inspecciones de seguridad y salud en el trabajo-SST</i>.',
      link:
        'https://inchecksas.com/inspecciones-de-seguridad-y-salud-en-el-trabajo/',
    },
    {
      referencia:
        'Decreto 768 de 2022 [Ministerio del trabajo]. Actualización de Tabla de clasificación de Actividades económicas para el sistema general de riesgos laborales. 16 de mayo de 2022.',
    },
    {
      referencia:
        'Decreto 1347 de 2021 [Ministerio del trabajo]. Adopción por parte de las empresas del Programa de prevención de accidentes mayores (PPAM), para incrementar niveles de seguridad en las instalaciones clasificadas.26 de octubre de 2021. ',
    },
    {
      referencia:
        'Decreto 052 de 2017 [Ministerio del trabajo]. Se modifica Art. 2.2.4.6.37 Del Decreto 1072 de 2015, para la transición para la implementación del SG-SST. ',
    },
    {
      referencia:
        'Decreto 1072 de 2015 [Ministerio del trabajo]. Es la implementación del SG-SST siendo de obligatorio cumplimiento. 26 de mayo de 2015.',
    },
    {
      referencia:
        'Decreto 1443 de 2014 [Ministerio del trabajo]. Planteamiento de disposiciones para la implementación del SG-SST. 31 de julio de 2014.',
    },
    {
      referencia:
        'Gea-Izquierdo, E. (2017). <i>Seguridad y salud en el trabajo</i>. Centro de Publicaciones.',
    },
    {
      referencia:
        'Ley 1562 de 2012 Por la cual se busca modificar el Sistema de riesgos laborales. 11 de julio de 2012. DO N° 48.488.',
    },
    {
      referencia:
        'Ministerio de salud y protección social. (2017). <i>Programa de elementos de protección personal, uso y mantenimiento.</i> ',
    },
    {
      referencia:
        'Ministerio de Trabajo, Empleo y Seguridad Social, (2014). Salud y seguridad en el trabajo (SST): <i>Aportes para una cultura de la prevención.</i>',
      link:
        'https://www.ilo.org/wcmsp5/groups/public/@americas/@ro-lima/@ilo-uenos_aires/documents/publication/wcms_248685.pdf',
    },
    {
      referencia:
        'Resolución 2644 de 2016 [Servicio nacional de aprendizaje SENA]. Sobre la ropa de trabajo y Elementos de protección personal. 2 de diciembre de 2016.',
    },
    {
      referencia:
        'Resolución 0312 de 2019 [Ministerio del trabajo]. Modificar las fases de implementación del SG-SST y nuevo plazo de adecuación. 13 de febrero de 2019.',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
