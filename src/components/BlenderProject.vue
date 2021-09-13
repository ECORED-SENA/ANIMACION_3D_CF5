<template lang="pug">
  .row.blender-project.align-items-center.py-2.px-4(v-on:click="openLink")
    .col-auto
      img(src='@/assets/curso/tema2-imagen4.svg')
    .col-auto
      p.mb-0.text-center.title-blender-download
        strong Descarga
        br
        | Archivo fuente del ejercicio
</template>

<script>
export default {
  name: 'BlenderProject',
  props: {
    link: {
      type: String,
      default: '#',
    },
  },
  methods: {
    openLink() {
      window.open(this.link, '_blank')
    },
  },
}
</script>
