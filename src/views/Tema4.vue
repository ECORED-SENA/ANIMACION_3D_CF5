<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Posado

    p.mb-5 En <i>Blender</i> se puede posar la escultura sin necesidad de usar un sistema de huesos, todo esto para tener la referencia visual de cómo debe lucir el personaje en sus expresiones y líneas de acción.

    p.mb-4.text-center.fw-bold Ahora se verá el posado en <i>Blender</i>:

    .video.mb-5
      iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    p.mb-4.text-center.fw-bold Enseguida, puede detallar el posado para el personaje propuesto:

    //- SlyderSpecial.mb-5(:datos="datosSlyder")

    .tarjeta.tarjeta--gris.p-4.mb-5
      //- PasosB debe ir acompañado de una de una de estas clases =>
      //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
      PasosB.color-primario

        .row.px-5.py-3(v-for="item in datosSlyder" titulo="")
          .text-blender.mb-5(v-if="item.text1" v-html="item.text1")
          .titulo-sexto.color-secundario
            h5 Figura {{ item.figure }}
            br
            span
              i(v-html="item.text2")
          .slyder-c__imagen.mb-4
            figure.slyder-c__img
              img(:src='item.imagen', :alt='item.leyendaImagen')
              figcaption(v-if="item.leyendaImagen") {{item.leyendaImagen}}

</template>

<script>
import SlyderSpecial from '../components/SlyderSpecial.vue'
export default {
  name: 'Tema4',
  components: {
    SlyderSpecial,
  },
  data: () => ({
    datosSlyder: [
      {
        imagen: require('@/assets/curso/tema4-imagen1.jpg'),
        number: 1,
        figure: '1',
        text1:
          'Para posar los personajes, lo ideal es primero tener el personaje en una pose neutral, simétrica: ',
        text2: 'Figura para posado en <i>Blender</i>',
      },
      {
        imagen: require('@/assets/curso/tema4-imagen2.jpg'),
        number: 2,
        figure: '2',
        text1:
          'Así, una vez teniéndola en el escenario se empieza a trabajar sobre ella para generar las diferentes poses. Para ello, lo primero es entrar al modo sculpt, una vez en él, se debe buscar el pincel pose.',
        text2: 'Figura para posado en <i>Blender</i>',
      },
      {
        imagen: require('@/assets/curso/tema4-imagen3.jpg'),
        number: 3,
        figure: '3',
        text1:
          'Con esta herramienta se puede posar la escultura, para ello se poner el cursor donde se quiere generar el movimiento, dependiendo del tamaño del pincel se obtendrán los resultados que se buscan; dependiendo del tamaño del pincel se puede acomodar el elemento para que gire o se mueva correctamente. ',
        text2: 'Figura para posado en <i>Blender</i>',
      },
      {
        imagen: require('@/assets/curso/tema4-imagen4.jpg'),
        number: 4,
        figure: '4',
        text1:
          'Como se observa en la figura, la línea que aparece en el radio de la circunferencia del pincel, es la que indicará la extensión que se va a mover. Se hace clic sostenido y se mueve el mouse en la dirección que deseada. En la siguiente figura se observa la extensión que se ha movido, tomando como referencia lo anteriormente dicho.',
        text2: 'Figura para posado en <i>Blender</i>',
      },
      {
        imagen: require('@/assets/curso/tema4-imagen5.jpg'),
        number: 5,
        figure: '5',
        text1:
          'Cabe indicar que hay ocasiones en que simplemente seguir este método no funciona, puesto que el pincel al querer abarcar, por ejemplo, toda la extensión del brazo, genera conflicto, pues toma la geometría del cuerpo del personaje, como se verá a continuación.',
        text2: 'Figura para posado en <i>Blender</i>',
      },
      {
        imagen: require('@/assets/curso/tema4-imagen6.jpg'),
        number: 6,
        figure: '6',
        text1:
          'Para manejar estos errores de una manera óptima, lo que se puede hacer es crear måscaras para que solo el pincel afecte el área no mascarada. La manera de hacerlo es presionando Ctrl + shift y clicar manteniendo y seleccionando el årea que se quiere afectar.',
        text2: 'Figura para posado en <i>Blender</i>',
      },
      {
        imagen: require('@/assets/curso/tema4-imagen7.jpg'),
        number: 7,
        figure: '7',
        text1:
          'Para manejar estos errores de una manera óptima, lo que se puede hacer es crear máscaras para que solo el pincel afecte el área no mascarada. La manera de hacerlo es presionando Ctrl + shift y clicar manteniendo y seleccionando el área que se quiere afectar.<br>Una vez hecha la selección se da <strong>Ctrl + i</strong> para invertir la selección y manipular solo lo que se quiere. ',
        text2: 'Figura para posado en <i>Blender</i>',
      },
      {
        imagen: require('@/assets/curso/tema4-imagen8.jpg'),
        number: 8,
        figure: '8',
        text1:
          'Adicionalmente a ello, para que la malla no se vea "mordisqueada" al deformarla, se presiona la tecla "a" y se le da un valor de 2 a <i>smooth mask</i>',
        text2: 'Figura para posado en <i>Blender</i>',
      },
      {
        imagen: require('@/assets/curso/tema4-imagen9.jpg'),
        number: 9,
        figure: '9 y 10',
        text1:
          'Una vez hecho esto, se puede mover el área sin mayor dificultad; para quitar la máscara y seguir posando el personaje, se debe dar Alt + m. <br><br> Tambien se puede utilizar el <i>Pincel transform</i>, de manera similar, tan solo se selecciona y nuevamente de crea una máscara.',
        text2: 'Figura para posado en <i>Blender</i>',
      },
      {
        imagen: require('@/assets/curso/tema4-imagen10.jpg'),
        number: 10,
        figure: '11',
        text1:
          'Aunque como vemos el pivote o punto de modificado no está donde se quiere, lo nos generará problemas, por lo que se debe mover hacia el borde de la máscara. Para ello, se procede así: en el menú <i>Sculpt</i>, se selecciona <i>Set pivot</i>, y luego <i>Mask border</i>.',
        text2: 'Figura para posado en <i>Blender</i>',
      },
      {
        imagen: require('@/assets/curso/tema4-imagen11.jpg'),
        number: 11,
        figure: '12',
        text1:
          'Con ello se puede modificar y posar la escultura desde el borde donde se quiere generar el movimiento.',
        text2: 'Figura para posado en <i>Blender</i>',
      },
      {
        imagen: require('@/assets/curso/tema4-imagen12.jpg'),
        number: 12,
        figure: '13',
        text1:
          'Así, se pueden mover o girar las partes para adecuarlas a la posición que se desea darle a la escultura usando este flujo de trabajo; al combinar estas dos herramientas se pueden trabajar las esculturas y generar en ellas las poses que se deseen. También se puede ir refinando los bordes con la herramienta <i>Smooth</i> para darles suavizado en caso de que la escultura lo requiera.',
        text2: 'Figura para posado en <i>Blender</i>',
      },
      {
        imagen: require('@/assets/curso/tema4-imagen13.jpg'),
        number: 13,
        figure: '14',
        text1: '',
        text2: 'Figura para posado en <i>Blender</i>',
      },
    ],
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
