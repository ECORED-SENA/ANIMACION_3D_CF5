<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Fundamentos de #[i Concept art]

    .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1-imagen1.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Es importante tener en cuenta que las bases de la conceptualización son el principio de todo proceso, donde la idea es fundamental para la continuidad del desarrollo de personajes, escenarios, ambientaciones y props; para ello, la realización de los bocetos rápidos pero entendibles de objetos, props, escenarios o escenas que se desean representar y que se pueden realizar a partir de líneas y sombras, formas contrastantes en blanco y negro, armonías del color, texturas, e incluso incluir fundamentos de modelado, lo que da un entendimiento espacial y proporcional. Fundamentalmente debe contar la historia en imágenes, desde un dibujo sencillo hasta una ilustración full color.
    TabsSpecial.color-acento-contenido.mb-5
      .py-4.py-md-5(titulo="1. Conceptualización 3D" :icono="require('@/assets/curso/tema1-tab1.svg')" :iconoa="require('@/assets/curso/tema1-tab1-alt.svg')")
        .row.px-5.mb-4
          .col-md-6.mb-4.mb-md-0
            p.mb-0 En el proceso de conceptualización 3D se generan las propuestas de personajes, props y hasta escenarios para lograr acercar el #[i Concept art] al estado final de producción, una vez se ha resuelto el diseño en la etapa anterior por parte de los #[i Concept artist], los escultores digitales, toman las imágenes generadas y empiezan a crear los volúmenes necesarios para traducir las imágenes bidimensionales en tridimensionales.
              br
              br
              | Antes los grandes estudios tenían escultores tradicionales que generaban las esculturas de los personajes en arcilla, lo cual era muy útil para los dibujantes ya que de esta manera tenían un objeto de referencia real para representar los volúmenes en la animación. 
          .col-md-6
            figure
              img(src='@/assets/curso/tema1-imagen2.jpg', alt='Texto que describa la imagen')
        .cajon.color-acento-contenido.px-5.py-2.mx-5.mb-5
          .row.align-items-center
            .col-10
              p.mb-0 Actualmente y gracias al desarrollo de la tecnología este proceso ha migrado totalmente a digital haciendo uso de herramientas especializadas de <i>software</i> como <i>Zbrush, Mudbox, Blender</i>, entre muchos otros, y tabletas y pantallas digitalizadoras.
            .col-2
              img(src="@/assets/curso/tema1-imagen3.png")
        p.px-5.mb-0 Gracias al desarrollo de estas herramientas, los procesos de escultura se han agilizado de forma que es posible desarrollar varias propuestas en corto tiempo y refinar los volúmenes de las esculturas para garantizar que el modelo realizado se ajuste perfectamente a las necesidades de producción antes de pasar a la etapa de finalización donde se genera una malla funcional para animación, lo que ha logrado dar un vuelco total al proceso de modelado para producción.
      .py-4.py-md-5(titulo="2. Escultura digital" :icono="require('@/assets/curso/tema1-tab2.svg')" :iconoa="require('@/assets/curso/tema1-tab2-alt.svg')")
        .row.px-5.mb-4
          .col-md-8.mb-4.mb-md-0
            p Esta se ha convertido, poco a poco, en una disciplina fundamental en la industria del entretenimiento como la de los videojuegos y el cine gracias a la facilidad que ofrece a los artistas para generar propuestas y variaciones sobre las mismas y encontrar así el look correcto de los elementos necesarios para una producción.
            p En principio su proceso es igual al de la escultura tradicional, pero con algunas herramientas que logran agilizar el desarrollo de piezas, es por ello que muchos artistas que trabajaban en la industria audiovisual con métodos análogos se han ido mudando paulatinamente al mundo digital sin mayor dificultad.
            .cajon.color-acento-contenido.px-5.py-2
              p.mb-0 No quiere decir que los métodos tradicionales tienden a desaparecer, pues, sin lugar a dudas, el trabajo en físico contribuye notablemente al desarrollo de las habilidades del escultor, y existen ocasiones donde es más práctico realizar las esculturas en físico, sobre todo cuando se trata de objetos a gran escala.
          .col-md-4
            figure
              img(src='@/assets/curso/tema1-imagen4.png', alt='Texto que describa la imagen')
        p.mb-0.px-5 Por lo general, el proceso de escultura digital hace uso de una interfaz de <i>software</i> donde se manipulan geometrías con alto grado de densidad poligonal centrándose primordialmente en la obtención de formas de manera similar a como se manipulaba la plastilina o la arcilla en el medio físico. Para esta manipulación de polígonos se usan brushes (pinceles) que otorgan diferentes efectos cuando se aplican a la masa de polígonos convirtiéndose en un símil a los instrumentos de escultura en el método análogo.
        
      .py-4.py-md-5(titulo="3. Diferencias con el modelado" :icono="require('@/assets/curso/tema1-tab3.svg')" :iconoa="require('@/assets/curso/tema1-tab3-alt.svg')") 
        .row.px-5
          .col-12
            p Aunque se trata de un proceso para obtener modelos 3D, el proceso de escultura es sustancialmente diferente al de modelado ya que en el primero es más importante la morfología del objeto que la topología, puesto que requiere enormes cantidades de polígonos para lograr la plasticidad necesaria sobre la geometría haciendo casi imposible obtener estructuras geométricas organizadas durante este proceso.
            p Por el contrario, en el proceso de modelado poligonal se busca obtener una topología correcta a la par que se desarrolla la morfología, ya que en este método se hace manipulación de polígonos más grandes para generar flujos de geometría que permitan la correcta deformación de las mallas poligonales al momento de animar, pero como contraparte el proceso resulta más lento y los cambios toman más tiempo en hacerse.
          .col-md-8.mb-4.mb-md-0
            p A finales de los años 90 y los primeros del 2000, los equipos de cómputo no permitían la manipulación de grandes cantidades de polígonos y los procesos de escultura digital empezaban a ser implementados en la industria con la manera correcta de obtener personajes, props o escenarios en 3D a grandes rasgos.
            .cajon.color-acento-contenido.px-5.py-2.mb-3
              p.mb-0 Se genera una malla base inicial mediante modelado poligonal, por subdivisiones o NURBS a la que se le añadían algunos detalles por geometría o por medio del pintado de mapas y en ocasiones con escultura digital.
            p.mb-0 En la actualidad, el proceso es a la inversa y solo cuando se tiene una escultura en alta resolución terminada se hacen los procesos de retopología que, en esencia, es una forma de modelado poligonal de baja resolución hecha sobre el modelo de alta resolución, para luego, mediante procesos de <i>baking</i> de mapas, transferir el detalle del modelo de alta resolución construido con polígonos pequeños y desordenados al modelo de baja resolución construido con polígonos grandes y ordenados.

          .col-md-4
            figure
              img(src='@/assets/curso/tema1-imagen5.png', alt='Texto que describa la imagen')
  
</template>

<script>
import TabsSpecial from '../components/TabsSpecial.vue'
export default {
  name: 'Tema1',
  components: {
    TabsSpecial,
  },
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

<style lang="sass" scoped></style>
