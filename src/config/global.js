export default {
  global: {
    componenteFormativo: 'Procesos de gestión de cementerios para PNI y PINR',
    descripcionCurso:
      'Durante su participación en el presente componente de formación comprenderá que el proceso del manejo de persona fallecida no identificada (PNI) e identificada no reclamada (PINR) establece una serie de requerimientos que garantizan una adecuada conservación y custodia de los cuerpos o los restos mortales de los PNI y PINR en relación con los derechos humanos, la dignidad humana y los derechos de los familiares de los fallecidos.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
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
        titulo: 'Inhumación de PNI y PINR',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Exhumación de PNI y PINR',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Medidas de conservación de PNI y PINR',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Medidas sanitarias en la inhumación y exhumación',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
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
  referencias: [
    {
      referencia:
        'Decreto 303 de 2015. [Ministerio del Interior]. Por el cual se reglamenta la Ley 1408 de 2010. Febrero 20 de 2015.',
      link:
        'https://www.mininterior.gov.co/la-institucion/normatividad/decreto-303-de-2015',
    },
    {
      referencia:
        'Ley 9 de 1979. Por la cual se dictan medidas sanitarias. Julio 16 de 1979. DO. No. 35308',
      link:
        'http://www.secretariasenado.gov.co/senado/basedoc/ley_0009_1979.html',
    },
    {
      referencia:
        'Ley 1408 de 2010. Por la cual se rinde homenaje a las víctimas del delito de desaparición forzada y se dictan medidas para su localización e identificación. Agosto 20 de 2010. DO No. 47.807',
      link:
        'http://www.secretariasenado.gov.co/senado/basedoc/ley_1408_2010.html',
    },
    {
      referencia:
        'MediaLab Eafit. (2012). Fuera de foco: episodio 8: inhumación y exhumación de cuerpos [video]. YouTube:',
      link: 'https://www.youtube.com/watch?v=NrRgTQWahhA',
    },
    {
      referencia:
        'Ministerio del Interior de Colombia. (2018). Guía normativa para el fortalecimiento de la gestión de los cementerios en Colombia. MinInterior.',
      link:
        'https://derechoshumanos.mininterior.gov.co/sites/default/files/guia_normativa-2018_0.pdf',
    },
    {
      referencia:
        'Resolución 01164 de 2002 [Ministerio del Medio Ambiente]. Por la cual se adopta el Manual de Procedimientos para la Gestión Integral de los residuos hospitalarios y similares.',
      link:
        'https://www.ins.gov.co/Normatividad/Resoluciones/RESOLUCION%201164%20DE%202002.pdf',
    },
    {
      referencia:
        'Resolución 5194 de 2010. [Ministerio de la Protección Social]. Por la cual se reglamenta la prestación de los servicios de cementerios, inhumación, exhumación y cremación de cadáveres. Diciembre 10 de 2010.',
      link:
        'https://tibasosaboyaca.micolombiadigital.gov.co/sites/tibasosaboyaca/content/files/000024/1155_resolucion-no-5194-de-16-de-diciembre-de-2010.pdf',
    },
    {
      referencia:
        'Resolución 2184 de 2019. [Ministerio de Ambiente y Desarrollo Sostenible]. Por la cual se modifica la resolución 668 de 2016 sobre el uso racional de bolsas plásticas y se adoptan otras disposiciones. Diciembre 26 de 2019.',
      link:
        'https://www.minambiente.gov.co/images/normativa/app/resoluciones/res%202184%202019%20colores%20bolsas-41.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Cementerio',
      significado:
        'Lugar de destino para recibir y alojar los cadáveres y restos humanos, en cualquiera de los espacios adecuados para ello. ',
    },
    {
      termino: 'Custodia',
      significado: 'Guardar algo con cuidado y vigilancia. ',
    },
    {
      termino: 'Exhumar',
      significado: 'Desenterrar un cadáver o restos humanos. ',
    },
    {
      termino: 'Inhumar',
      significado: 'Enterrar un cadáver. ',
    },
    {
      termino: 'Individualización',
      significado:
        'Especificar, distinguir una cosa de otras por cualidades peculiares. Distinguir un individuo de otros de la especie. ',
    },
    {
      termino: 'Normativa',
      significado:
        'Disposición de leyes y decretos que fundamentan una actividad. ',
    },
    {
      termino: 'PNI',
      significado: 'Persona no identificada. ',
    },
    {
      termino: 'PINR',
      significado: 'Personas identificadas no reclamadas. ',
    },
  ],
  complementario: [
    {
      texto:
        'MediaLab Eafit. (2012). Fuera de foco: episodio 8: inhumación y exhumación de cuerpos [video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=NrRgTQWahhA',
    },
    {
      texto:
        'Ministerio del Interior de Colombia. (2018). Guía normativa para el fortalecimiento de la gestión de los cementerios en Colombia. MinInterior.',
      tipo: 'Texto digital',
      link:
        'https://derechoshumanos.mininterior.gov.co/sites/default/files/guia_normativa-2018_0.pdf',
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
      {
        nombre: 'John Alejandro Carmona Escobar',
        cargo: 'Instructor experto temático',
        centro: 'Centro de Servicios de Salud - Regional Antioquia',
      },
      {
        nombre: 'Adriana María Bustamante Cataño',
        cargo: 'Profesional de Diseño y producción curricular',
        centro: 'Centro de Servicios de Salud - Regional Antioquia',
      },
      {
        nombre: 'Cristian Metaute Medina',
        cargo: 'Diseñador instrucciona',
        centro: 'Grupo de gestión curricular ECORED',
      },
      {
        nombre: 'Silvia Milena Sequeda Cárdenas',
        cargo: 'Evaluadora instruccional',
        centro: 'Centro de Gestión Industrial - Distrito Capital',
      },
      {
        nombre: 'Julia Isabel Roberto',
        cargo: 'Diseñadora y evaluadora instruccional',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
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
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Anllelo Andres Reina Montañez',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Diego Fernando Velasco Güiza',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Yuli Marcela Gómez Tarazona',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
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
