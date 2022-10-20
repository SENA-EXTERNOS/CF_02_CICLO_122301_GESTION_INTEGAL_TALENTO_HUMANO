<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p(data-aos="fade-down").mb-5 La seguridad y salud en el trabajo, ha tenido una relevancia a nivel nacional que, por medio de la normatividad, ha buscado abarcar diferentes aspectos necesarios para mantener la integridad física, mental y social de los trabajadores en el ambiente productivo. La implementación de un  Sistema de gestión y seguridad en el trabajo, parte de un principio de higiene y seguridad, evaluando los riesgos existentes en cada una de las áreas que componen la empresa, brindando los Elementos de Protección Personal de acuerdo con las necesidades de cada cargo que, por medio de una valoración constante y un diagnóstico a partir de instrumentos estructurados como entrevistas, encuestas y cuestionarios, identifica las falencias y aspectos por mejorar dentro del funcionamiento organizacional.

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/sintesis.svg", alt="alt")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
