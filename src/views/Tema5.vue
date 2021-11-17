<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 5
      h1 Render en tiempo real

    p.mb-5 Es la forma como se pueden renderizar durante el trabajo de modelado y texturizado los objetos 3D para tener un acercamiento final. Esto permite interactuar con los objetos modificando las luces, colores y materiales para ver cómo podrían quedar finalmente lo cual facilita el flujo de trabajo, pues no hay que esperar a crear el render final el cual toma bastante tiempo y sí lograr hacer ajustes de una manera mucho más rápida.

    .row.mb-5.justify-content-center
      .col-10
        .tarjeta.color-primario.p-3.blender
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/tema2-imagen3.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1.text-white Descargar archivo fuente
                  p.text-small.text-white Para el desarrollo de un ejercicio de render, se puede obtener el archivo del objeto de la canica en Canica.blend
                .col-sm-auto
                  a.boton.color-acento-botones.text-dark(href="https://github.com/ECORED-SENA/ANIMACION_3D_DESCARGAS/raw/master/CF5/canica.blend" target="_blank")
                    span Descargar
                    i.fas.fa-file-download

    p.mb-5.text-center.fw-bold Finalmente, se puede crear el renderizado prestando atención al siguiente video:

    .video.mb-0
      iframe(width="560" height="315" src="https://www.youtube.com/embed/epC2E8ZOedA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

</template>

<script>
export default {
  name: 'Tema5',
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
