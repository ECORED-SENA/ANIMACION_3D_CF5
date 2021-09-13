<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Proceso

    .row.mb-5.row-blender.align-items-center.py-5.px-5
      .col-md-6.text-white
        figure.blender-logo
          img(src='@/assets/curso/tema2-imagen3.svg')
        p.mb-0 A continuación, se podrá visualizar el proceso a través del uso y apropiación del software Blender en el cual se detalla el paso a paso de escultura y modelado: 
      .col-md-6
        img(src='@/assets/curso/tema2-imagen1.png')

    LineaTiempoD.color-primario.mb-5
      div(numero="1" titulo="Interfaz")
        p.mb-4 En el siguiente video se realiza la introducción a la interfaz del programa, características y configuraciones generales de Blender.
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      div(numero="2" titulo="Navegación")
        p.mb-4 Cada software tiene su propio sistema de navegación, aunque muchos elementos son comunes a diversos programas es necesario profundizar en el sistema de navegación en Blender.
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      div(numero="3" titulo="Preferencias")
        p.mb-4 Para hacer más óptimo el flujo de trabajo es importante conocer cuáles configuraciones de las preferencias del programa son importantes modificar. 
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      div(numero="4" titulo="Interfaz y creación de archivos")
        p.mb-4 Presentación del espacio de trabajo específico para escultura digital en Blender y las diferentes formas de crear archivos de escultura. 
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      div(numero="5" titulo="Brochas")
        p.mb-4 Las brochas son la herramienta básica para el proceso de escultura en cualquier software de escultura digital, por lo que es necesario conocer los parámetros básicos de la herramienta, así como sus diferentes tipos y usos.
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      div(numero="6" titulo="Simetría")
        p.mb-4 En escultura digital existe la posibilidad de hacer uso de la simetría, lo que permite desarrollar modelos de una manera más rápida que en un proceso de escultura análogo, pero para usar esta ventaja de la manera más eficiente posible es importante configurar antes algunos parámetros básicos y así evitar posibles errores.
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      div(numero="7" titulo="Remesh")
        p.mb-4 El Remesh es un sistema de Blender para redistribuir la composición de polígonos de una malla, de forma que se puedan generar nuevos volúmenes y detalles, pero si no se usa correctamente puede causar problemas de pérdida de detalle, de ahí la importancia de entender su lógica e ir iterando en nivel de detalle para aprovechar todo su potencial.
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      div(numero="8" titulo="Dynotopo")
        p.mb-4 Hay zonas en un modelo que requieren de niveles de detalle mucho más altos que otras partes con formas más generales, para esto sirve la función de Dynotopo ya que permite obtener mayor densidad de polígonos en áreas muy específicas y de esta manera ahorrar poligonaje en el modelo general. 
        .video.mb-4
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        .row.justify-content-center
          .col-auto
            BlenderProject(:link="obtenerLink('/downloads/prueba.pdf')")
      
      div(numero="9" titulo="Ejercicio escultura ")
        p.mb-4 Una vez exploradas las herramientas esenciales del proceso de escultura, es importante implementarlas en un ejercicio básico que permita familiarizarse por completo con sus usos y funcionamiento.
        .video.mb-3
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        .row.justify-content-center
          .col-auto
            BlenderProject(:link="obtenerLink('/downloads/prueba.pdf')")
      
      div(numero="10" titulo="Carga de referencia")
        p.mb-4 Las referencias son un elemento fundamental a la hora de abordar cualquier proyecto de escultura ya que estas proveen un objetivo a alcanzar y nos permiten plantear los diferentes caminos posibles para llegar a él. Por tanto, es importante siempre tenerlas a la mano para no perder el rumbo del proyecto.
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      
    .row.mb-5.justify-content-center
      .col-10
        .tarjeta.color-primario.p-3.mb-5.blender
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/tema2-imagen3.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1.text-white Descargar archivo fuente
                  p.text-small.text-white A continuación, se puede verificar el archivo del personaje como referencia 2D para validar durante el esculpido.
                .col-sm-auto
                  a.boton.color-acento-botones.text-dark(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download
    
    p.mb-5 Finalmente, a través del siguiente paso a paso se puede realizar una forma base para el diseño de objetos 3D con el proceso de blocking para, posteriormente, asignar detalles a cada una de las piezas diseñadas: 
    .linea-tiempo-blender.px-5.pt-4
      LineaTiempoEspecial.color-primario(text-small)
        div(titulo="Blocking<br>cabeza")
          .video.mb-4
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
          .row.justify-content-center.mb-5
            .col-auto
              BlenderProject(:link="obtenerLink('/downloads/prueba.pdf')")
        div(titulo="Blocking<br>cuello")
          .video.mb-4
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
          .row.justify-content-center.mb-5
            .col-auto
              BlenderProject(:link="obtenerLink('/downloads/prueba.pdf')")
        div(titulo="Blocking<br>torso")
          .video.mb-4
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
          .row.justify-content-center.mb-5
            .col-auto
              BlenderProject(:link="obtenerLink('/downloads/prueba.pdf')")
        div(titulo="Blocking<br>brazos")
          .video.mb-4
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
          .row.justify-content-center.mb-5
            .col-auto
              BlenderProject(:link="obtenerLink('/downloads/prueba.pdf')")
        div(titulo="Blocking mano<br>explicación")
          .video.mb-4
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
          .row.justify-content-center.mb-5
            .col-auto
              BlenderProject(:link="obtenerLink('/downloads/prueba.pdf')")
        div(titulo="Blocking mano<br>construcción")
          .video.mb-4
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
          .row.justify-content-center.mb-5
            .col-auto
              BlenderProject(:link="obtenerLink('/downloads/prueba.pdf')")
        div(titulo="Blocking<br>piernas")
          .video.mb-4
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
          .row.justify-content-center.mb-5
            .col-auto
              BlenderProject(:link="obtenerLink('/downloads/prueba.pdf')")
  
</template>

<script>
import BlenderProject from '../components/BlenderProject'
import LineaTiempoEspecial from '../components/LineaTiempoEspecial'
export default {
  name: 'Tema2',
  components: {
    BlenderProject,
    LineaTiempoEspecial,
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
