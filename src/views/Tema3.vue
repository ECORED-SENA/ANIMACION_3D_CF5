<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Técnicas de <i>polypaint</i>

    .row.mb-5
      .col-lg-7.mb-lg-0.mb-5
        p.mb-0 Está técnica proviene del <i>software</i> de escultura Zbrush. En este proceso se puede pintar sobre el modelo directamente, sin crear mapas UV. Adicional, es importante que el objeto que se va a pintar esté en alta densidad, lo que permitirá generar más detalle.
          br
          br
          | En Blender el contrapeso al <i>polypaint</i> es el <i>vertex paint</i>, en el que se puede pintar directamente sobre el objeto gracias a los vértices que contiene. Sin embargo, entre más contenga realismo el cual se le aplicará durante el momento de pintar puede generar que el objeto quede mucho más pesado. 
          br
          br
          | De cualquier modo, no hay necesidad de utilizar mapas UV y los colores se aplican directamente a los vértices según el pincel que se use y se puede revisar cómo acceder al <i>vertex paint</i> a través del panel <i>vertex paint mode</i> y el cual se detalla a través del siguiente video: 
      .col-lg-5
        figure
          img(src='@/assets/curso/tema3-imagen1.png')

    .video
      iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

  
</template>

<script>
export default {
  name: 'Tema3',
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
