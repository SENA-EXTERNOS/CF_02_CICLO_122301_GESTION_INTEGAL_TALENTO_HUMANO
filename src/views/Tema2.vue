<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.bloque-fondo2
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 2
      h1 Enfermedad laboral
    .bg1      
      .row.justify-content-center.align-items-start.mb-5           
        .col-lg-4.my-3
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img14.png', alt='')
        .col-lg-8.my-3
          p(data-aos="fade-down") Las enfermedades laborales corresponden a la exposición al riesgo, o repetición de algún tipo de tarea dentro del desarrollo laboral que genera afectaciones físicas o psicológicas, ya sean enfermedades de padecimiento temporal (que con el tiempo se mejora) o crónicas (que puede generar algún tipo de incapacidad o enfermedad permanente o hasta la muerte).
          p(data-aos="fade-down") Dado esto, las empresas deben desarrollar programas de vigilancia epidemiológica que permita disminuir, minimizar o neutralizar cualquier tipo de riesgo que pueda generar cualquier tipo de afectación.
          .cajon.color-acento-contenido.p-4(data-aos="flip-down")
            h4(data-aos="fade-down").mb-3 Tipos de enfermedades laborales

            p(data-aos="fade-down").mb-0 De acuerdo con el Art. 4° de la Ley 1562 de 2012, define la enfermedad laboral como la que se adquiere durante la exposición a los riesgos inherentes al medio laboral o el cargo ejercido.        

      .row.justify-content-start.align-items-center.mb-5           
        .col-lg-3
          .bgp.p-1(data-aos="fade-right")
            h5(data-aos="fade-down").mb-0 Grupos Etáreos

      p(data-aos="fade-down").mb-5 Los grupos se crean de acuerdo con la naturaleza de la empresa, las especificaciones del cargo y las áreas en las cuales el colaborador deberá desarrollar sus funciones. Dentro del Decreto 1477 de 2014 y la actualización realizada en el decreto 676 de 2020. A continuación, se presenta una tabla con las distribuciones de enfermedades laborales.
      .row.justify-content-center.align-items-center.mb-5           
        .col-lg-10
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img16.svg', alt='')           

    .titulo-principal-in.color-acento-contenido.mb-5(data-aos="zoom-in-left")
      .titulo-principal-in__numero
        span
          i.fas.fa-info
      h1 Introducción

    p(data-aos="fade-down").mb-5 La herramienta de recolección de datos, en primera medida, es el Excel, usada para el diseño de formatos y, de acuerdo con las necesidades, desarrollar el material requerido (Bernal & Naranjo, 2019). A continuación, se presentan los instrumentos de recolección de información y tipos de pruebas de tamizaje:
    .row.justify-content-center.align-items-start.mb-5           
      .col-lg-6
        LineaTiempoD.color-primario
          .row.justify-content-center.align-items-center(numero="1" titulo="Evaluación")
            .col-12
              p de estándares mínimos para Sistema general de riesgos: Autoevaluación del sistema de gestión para el cumplimiento de estándares mínimos de acuerdo con la Resolución 0312 de 2019. 
          .row.justify-content-center.align-items-center(numero="2" titulo="Indicador de severidad")
            .col-12
              p índice comparativo entre los días perdidos por un accidente de trabajo con las horas trabajadas. 
          .row.justify-content-center.align-items-center(numero="3" titulo="Indicador de prevalencia")
            .col-12
              p es un índice de casos reconocidos con la enfermedad laboral dentro de la empresa frente a la cantidad de trabajadores en la compañía. 
          .row.justify-content-center.align-items-center(numero="4" titulo="Indicador de frecuencia")
            .col-12
              p índice de accidentes de trabajo en un periodo determinado con relación al tiempo de horas laboradas. 
          .row.justify-content-center.align-items-center(numero="5" titulo="Matriz de control")
            .col-12
              p de exámenes médicos. 
          .row.justify-content-center.align-items-center(numero="6" titulo="Formato")
            .col-12
              p de autorreporte de condiciones de salud. 
          .row.justify-content-center.align-items-center(numero="7" titulo="Matriz de peligros")
            .col-12
              p basados en la Norma GTC 45.                                                                       
      .col-lg-4
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img17.png', alt='')                 
</template>

<script>
export default {
  name: 'Tema2',
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

<style lang="sass"></style>
