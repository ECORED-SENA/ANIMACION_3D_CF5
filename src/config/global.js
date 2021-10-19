export default {
  global: {
    componenteFormativo: 'Conceptualización 3D',
    descripcionCurso:
      'La conceptualización 3D permite el desarrollo de personajes, para posteriormente pasar por la concepción digital, posado, polypaint y representación en tiempo real del objeto o las escenas realizadas con su color, formas, texturas.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
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
        titulo: 'Fundamentos de <i>Concept Art</i>',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Proceso',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Técnicas de <i>polypaint</i>',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Posado',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Render en tiempo real',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
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
      referencia: 'Den Hemel, J. (2021). <i>Blender Secrets</i>. ',
      link: 'https://www.blendersecrets.org/book',
    },
    {
      referencia:
        'Escardo. Club de Animación 3D. (08 de agosto de 2020). Tutorial Blender 2.93 de inicio en la Interfaz | #1.02 | Curso Animacion 3D. [Video]. YouTube. ',
      link: 'https://www.youtube.com/watch?v=rHUlP4SAVyE',
    },
    {
      referencia: 'Blender.org. (2021). <i>Support</i>. ',
      link: 'https://www.Blender.org/support/',
    },
    {
      referencia: 'Blender.org. (2021). Blender Manual. <i>Sculpting</i>. ',
      link:
        'https://docs.blender.org/manual/es/2.93/sculpt_paint/sculpting/index.html',
    },
  ],
  glosario: [
    {
      termino: 'Blender',
      terminoHtml: '<i>Blender</i>',
      significado:
        'programa multiplataforma de <i>software</i> libre (gratis) utilizado para el modelado, texturizado, renderizado, animación, edición y diseño de objetos tridimensionales.',
    },
    {
      termino: 'Blocking',
      terminoHtml: '<i>Blocking</i>',
      significado:
        'elementos básicos que permiten dar forma rápidamente a un objeto, con la finalidad de entender su forma general y, a partir de ella, empezar a esculpir.',
    },
    {
      termino: 'Modelado',
      significado:
        'proceso de representación de un objeto en 3 dimensiones, utilizando los ejes X, Y, Z.',
    },
    {
      termino: 'Pose',
      terminoHtml: '<i>Pose</i>',
      significado:
        'elementos se les genera una posición dinámica, para resaltar alguna característica especial del personaje; por ejemplo, un héroe pone sus manos hacia arriba en símbolo de victoria.',
    },
    {
      termino: 'Props',
      terminoHtml: '<i>Props</i>',
      significado:
        'elementos que hacen parte del escenario o de los personajes que los usan, como maletas, armas, ropa, zapatos.',
    },
    {
      termino: 'Render',
      terminoHtml: '<i>Render</i>',
      significado:
        'proceso en el que se digitaliza una imagen final, con la información, del objeto 3D, las luces que lo afectan, sombras que se proyectan, partículas, esto con la finalidad de presentar un producto final fuera del <i>software</i> 3D.',
    },
    {
      termino: 'Sculpt',
      terminoHtml: '<i>Sculpt</i>',
      significado:
        'proceso análogo de la escultura tradicional en el que se moldea una masa tridimensional, adicionando y quitando material, esto permite generar objetos con alta definición como arrugas o elementos de fino detalle.',
    },
    {
      termino: 'Subdivisiones',
      significado:
        'permite a una malla de baja cantidad de polígonos, subdividir estos elementos en más cantidad, lo que permite un mejor detalle. ',
    },
  ],
  complementario: [
    {
      texto:
        'Escardo. Club de Animación 3D. (08 de agosto de 2020). Tutorial Blender 2.93 de inicio en la Interfaz | #1.02 | Curso Animación 3D. [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=rHUlP4SAVyE',
    },
    {
      texto:
        'Blender.org. (2021). Blender 2.93 <i>Reference</i> Manual — Blender Manual.',
      tipo: 'Página web',
      link: 'https://docs.blender.org/manual/es/latest',
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
        nombre: 'John Alexander García ángel',
        cargo: 'Experto temático',
        centro:
          'Centro de Servicios y Gestión Empresarial - Regional Antioquia',
      },
      {
        nombre: 'Oscar Andrés Martín Moreno',
        cargo: 'Experto temático',
        centro:
          'Centro de Servicios y Gestión Empresarial - Regional Antioquia',
      },
      {
        nombre: 'Johnier Felipe Perafán',
        cargo: 'Experto temático',
        centro:
          'Centro de Servicios y Gestión Empresarial - Regional Antioquia',
      },
      {
        nombre: 'Fabián Andrés Gómez Pico',
        cargo: 'Experto temático',
        centro:
          'Centro de Servicios y Gestión Empresarial - Regional Antioquia',
      },
      {
        nombre: 'Oscar Absalón Guevara',
        cargo: 'Diseñador instruccional',
        centro: 'Centro de Gestión Industrial – Regional Distrito Capital',
      },
      {
        nombre: 'José Gabriel Ortiz Abella',
        cargo: 'Corrector de estilo',
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
        nombre: 'Eulises Orduz',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: '',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Andres Mauricio Santaella Ochoa',
        cargo: 'Soporte front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Sergio Omar Camacho Orduz',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Rafael Augusto Mantilla Loèz',
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
