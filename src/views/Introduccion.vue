<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.intro-box
      .col-lg-8.align-self-center.py-5.px-5
        p.mb-0.py-5.px-5 Los principios básicos del diseño que permiten bosquejar y diseñar los personajes, escenarios y props hacen parte de cualquier propuesta y proyecto audiovisual. De acuerdo con lo anterior y haciendo uso de la anatomía se puede comprender la composición de los elementos de un personaje y su gestualidad, y, a la vez, cómo los personajes pueden prepararse para su realización en 3D. Desde el software Blender, en modo sculpt, el vertex paint, explicará las herramientas de cada uno de estos modos además de técnicas de posado y pintado para lograr visualizar un render en tiempo real. 
      .col-lg-4
        figure
          img(src="@/assets/curso/intro-1.png")
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
