<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5  
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    p(data-aos="fade-down").mb-5 Apreciado aprendiz, bienvenido a este componente formativo donde se abordará el capital humano como un factor determinante en la productividad de la empresa, por este motivo la importancia de la disciplina de Seguridad y Salud en el Trabajo, en donde se buscan promover la salud integral del empleado, donde el bienestar emocional, mental, social y físico juegan un papel clave dentro de la organización; previniendo lesiones y enfermedades causadas por el entorno laboral en el que se encuentra.
    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-10
        .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5(data-aos="flip-down")
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/img1.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p(data-aos="fade-down").mb-0 Para alcanzar este objetivo se requiere del compromiso de los empleadores y los empleados ejecutando un programa de seguridad y salud laboral. cumpliendo con parámetros, procedimientos y normatividad vigente. La empresa debe proveer a todos sus trabajadores de espacios seguros, elementos de protección personal, aplicación de normas y estándares de acuerdo con las características de la compañía y cargos manejados por sus subalternos; así como la identificación de peligros existentes y realizar diagnóstico de acuerdo con las necesidades para prevenir cualquier eventualidad que pueda producir afectaciones tanto en el personal como en la infraestructura de la organización.    

    p(data-aos="fade-down").mb-5 En el siguiente video conocerá, de forma general, la temática que se estudiará en el presente recurso educativo. 

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-12(data-aos="fade-left")     
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)                      
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
