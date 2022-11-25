<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.bloque-fondo1
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 1
      h1 Seguridad y salud en el trabajo
      
    .bg1-1      
      .row.justify-content-center.align-items-start.mb-2           
        .col-lg-8.my-3
          p(data-aos="fade-down") Los entornos laborales seguros son una de las prioridades en cualquier empresa, ya que el mantener a sus colaboradores les brindará un óptimo desempeño. En la medida en que el capital humano se encuentre en un ambiente seguro, evitará sobrecostos y posibles pérdidas que afecten el adecuado rendimiento laboral, junto con su imagen corporativa en el contexto productivo. Por lo tanto, aprenderemos sobre la normatividad enfocada en seguridad y salud en el trabajo.
          .cajon.color-acento-contenido.p-4(data-aos="flip-down")
            p(data-aos="fade-down").mb-0 Para lograr la implementación del Sistema de Gestión y Seguridad en el Trabajo (SG - SST) se requiere como primera medida conocer la naturaleza de la empresa, posteriormente la empresa buscará el cumplimiento de la normatividad vigente y adicional el prevenir incidentes, accidentes o toda situación peligrosa en sus empleados. A continuación, podrá conocer y revisar parte de la normatividad planteada a nivel nacional y que se espera sea cumplida dentro de las empresas.                      
        .col-lg-4.my-3
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img2.png', alt='') 

      .row.justify-content-start.align-items-center.mb-5           
        .col-lg-4
          .bgp.p-1(data-aos="fade-right")
            h4(data-aos="fade-down").mb-0 Normatividad y campo de aplicación

      .row.justify-content-center.align-items-start.mb-2           
        .col-lg-2.my3
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img3.svg', alt='')                        
        .col-lg-10
          p(data-aos="fade-down").mb-0 Existe una amplia variedad de leyes, decretos y resoluciones que hacen referencia al SG-SST, los que contienen una amplia variedad de normas y directrices desarrolladas para apuntar a cada uno de los sectores productivos, con características específicas. 

      .row.justify-content-center.align-items-center.my-5           
        .col-lg-10
          .cajon.color-primario.p-4(data-aos="flip-down")
            p(data-aos="fade-down").mb-0 La normatividad es la base para la implementación del SG-SST, por este motivo es importante conocer tanto las normas generales como las específicas, las cuales dependen del tipo de organización; ya que no solo se pretende identificar los posibles riesgos o peligros para evitar cualquier tipo de incidente, accidentes, posibles enfermedades laborales, sino cumplir con la normatividad. Las administradoras de riesgos laborales y algunos entes gubernamentales son los encargados de verificar el cumplimiento y seguimiento de estas normas. 

          p(data-aos="fade-down").my-5 A continuación se especifican los diversos decretos, resoluciones o leyes que posibilitan la seguridad y la salud del trabajador: 

      .row.justify-content-center.align-items-center.mb-5           
        .col-lg-10
          ImagenInfografica.color-acento-botones.mb-5(data-aos="zoom-in")
            template(v-slot:imagen)
              figure
                img.img-a.img-t(src='@/assets/curso/temas/img4.svg', alt=' diversos decretos, resoluciones o leyes que posibilitan la seguridad y la salud del trabajador')

            .tarjeta.color-primario.p-3(x="17%" y="46%" numero="")
              .row.justify-content-center.align-items-center       
                .col-lg-3
                  img.img-a.img-t(src='@/assets/curso/temas/img5.svg', alt='')
                .col-lg-9          
                  h4.mb-2 Decreto 768 del 16 de mayo de 2022
                  p En donde se actualiza la Tabla de Clasificación de Actividades Económicas para el Sistema General de Riesgos Laborales y otras disposiciones. 

                  p.mb-0 Para conocer a profundidad este decreto lo invitamos a explorar el material complementario. 
  
            .tarjeta.color-primario.p-3(x="40.5%" y="46%" numero="")
              .row.justify-content-center.align-items-center       
                .col-lg-3
                  img.img-a.img-t(src='@/assets/curso/temas/img6.svg', alt='')
                .col-lg-9          
                  h4.mb-2 Decreto 1347 de 2021
                  p.mb-0 Busca que las empresas adopten el Programa de Prevención de Accidentes Mayores (PPAM), el cual contribuye a incrementar los niveles de seguridad en instalaciones clasificadas, el objetivo principal es proteger a trabajadores, población, ambiente y la infraestructura, mediante la gestión del riesgo.

                  p.mb-0 Para conocer a profundidad este decreto lo invitamos a explorar el material complementario.  
            .tarjeta.color-primario.p-3(x="64%" y="46%" numero="")
              .row.justify-content-center.align-items-center       
                .col-lg-3
                  img.img-a.img-t(src='@/assets/curso/temas/img7.svg', alt='')
                .col-lg-9          
                  h4.mb-2 Decreto 052 de 2017
                  p Esta resolución busca modificar las fases de implementación del Sistema de Gestión y Seguridad en el Trabajo, la que brinda a los empresarios un nuevo plazo para la adecuación del SG-SST.

                  p.mb-0 Para conocer a profundidad esta resolución lo invitamos a explorar el material complementario.   
            .tarjeta.color-primario.p-3(x="86.5%" y="46%" numero="")
              .row.justify-content-center.align-items-center       
                .col-lg-3
                  img.img-a.img-t(src='@/assets/curso/temas/img8.svg', alt='')
                .col-lg-9          
                  h4.mb-2 Decreto 768 del 16 de mayo de 2022
                  p Por medio del que se modifica el Art. 2.2.4.6.37 del Decreto 1072 de 2015, la transición para la implementación del Sistema de Gestión de Seguridad y Salud en el Trabajo (SG-SST).

                  p.mb-0 Para conocer a profundidad este decreto lo invitamos a explorar el material complementario. 

            .tarjeta.color-primario.p-3(x="29%" y="91.5%" numero="")
              .row.justify-content-center.align-items-center       
                .col-lg-3
                  img.img-a.img-t(src='@/assets/curso/temas/img9.svg', alt='')
                .col-lg-9          
                  h4.mb-2 Decreto 1072 de 2015
                  p En el cual se  establece la implementación del SG-SST siendo de obligatorio cumplimiento.

                  p.mb-0 Para conocer a profundidad este decreto lo invitamos a explorar el material complementario. 
            .tarjeta.color-primario.p-3(x="52.5%" y="91.5%" numero="")
              .row.justify-content-center.align-items-center       
                .col-lg-3
                  img.img-a.img-t(src='@/assets/curso/temas/img10.svg', alt='')
                .col-lg-9          
                  h4.mb-2 Decreto 052 de 2017
                  p Por medio del que se modifica el #[b Art. 2.2.4.6.37 del Decreto 1072 de 2015], la transición para la implementación del Sistema de Gestión de Seguridad y Salud en el Trabajo (SG-SST).

                  p.mb-0 Para conocer a profundidad este decreto lo invitamos a explorar el material complementario.   
            .tarjeta.color-primario.p-3(x="75.5%" y="91.5%" numero="")
              .row.justify-content-center.align-items-center       
                .col-lg-3
                  img.img-a.img-t(src='@/assets/curso/temas/img11.svg', alt='')
                .col-lg-9          
                  h4.mb-2 Ley 1562 de 2012
                  p Esta Ley busca modificar el Sistema de Riesgos Laborales, junto con otras disposiciones referentes a salud ocupacional. Define la enfermedad laboral como la contraída por la exposición a factores de riesgo inherentes a la actividad laboral.

                  p.mb-0 Para conocer a profundidad esta Ley lo invitamos a explorar el material complementario.

    .row.justify-content-start.align-items-center.mb-5           
      .col-lg-5
        .bgp.p-1(data-aos="fade-right")
          h4(data-aos="fade-down").mb-0 Elementos y equipos de protección personal

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-2
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img12.svg', alt='') 
      .col-lg-10
        .cajon.color-acento-contenido.p-4(data-aos="flip-down")
          p(data-aos="fade-down").mb-0 La empresa, de acuerdo con las características del cargo y las funciones por desarrollar, determina las necesidades de elementos, equipos o vestimenta que pueda reducir la posibilidad de ocurrencias de accidentes con los riesgos existentes, que sean adecuados para el ambiente laboral en el que se utilizarán, que aplique y funcione para las necesidades ergonómicas y físicas del colaborador. A continuación, lo invitamos a ver el siguiente video donde abordaremos los elementos y equipos de protección personal: 

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-12(data-aos="fade-left")     
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)          
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
