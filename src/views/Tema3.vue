<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.bloque-fondo3
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 3
      h1 Peligros y riesgos laborales
    .bg2-1
      p(data-aos="fade-down") Bajo cualquier actividad laboral se presentan riesgos y peligros que pueden ocasionar accidentes o enfermedades laborales.
      p(data-aos="fade-down") El #[b peligro], es cualquier situación, elemento o comportamiento potencialmente dañino, es decir, que puede generar una enfermedad o lesión en la persona o personas involucradas; o puede generar daños en bienes, infraestructura o maquinaria. Por otro lado, el #[b riesgo] está asociado a lo que puede ocurrir si no se controla el peligro, es decir, es la combinación de la probabilidad y la consecuencia de un peligro ignorado.
      .row.justify-content-center.align-items-center          
        .col-lg-12.up
          p(data-aos="fade-down").mb-5 A continuación, se presentan los tipos y características de los riesgos laborales.

          .tarjeta.tarjeta--azul.p-4.mb-5(data-aos="fade-right")
            LineaTiempoC.color-primario(text-small)
              .row.justify-content-center.align-items-start(titulo="Paso 1")
                .col-lg-4
                  img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img19.png', alt='')        
                .col-lg-6
                  p.mt-5 #[b Riesgos físicos], cualquier manifestación de la energía en el ambiente laboral, se puede clasificar como:

              .row.justify-content-center.align-items-start(titulo="Paso 2")
                .col-lg-4
                  img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img20.png', alt='')        
                .col-lg-6
                  p.mt-5 #[b Riesgo mecánico], este puede ser producido por la maquinaria o del funcionamiento de esta, como por ejemplo el ruido, vibraciones, pesos, etc.   

              .row.justify-content-center.align-items-start(titulo="Paso 3")
                .col-lg-4
                  img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img21.png', alt='')        
                .col-lg-6
                  p.mt-5 #[b Riesgo luminoso o calorífico], se producen por exposición a iluminación con intensidades diferentes y/o con variaciones de temperatura.

                  p #[b Riesgos con otros tipos de energía], exposición como por ejemplo radiación, radiofrecuencias, entre otros.  

              .row.justify-content-center.align-items-start(titulo="Paso 4")
                .col-lg-4
                  img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img22.png', alt='')        
                .col-lg-6
                  p.mt-5 #[b Riesgos químicos], presencia en el ambiente laboral de agentes o contaminantes, que pueden estar en forma sólida, líquida o gaseosa, que puede generar afectaciones por exposición o sobre exposición con el empleado, como por ejemplo agentes corrosivos, disolventes, etc. 

              .row.justify-content-center.align-items-start(titulo="Paso 5")
                .col-lg-4
                  img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img23.png', alt='')        
                .col-lg-6
                  p.mt-5 #[b Riesgos ergonómicos], el cual corresponde a la adaptación del empleado a su puesto de trabajo, se evalúa partiendo de las características físicas del empleado, adaptando así la altura de la silla, distancia entre equipos, altura de elementos, etc. Cuando alguna de estas valoraciones se ven afectadas, pueden generar riesgos en la salud del individuo.  

              .row.justify-content-center.align-items-start(titulo="Paso 6")
                .col-lg-4
                  img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img24.png', alt='')        
                .col-lg-6
                  p.mt-5 #[b Riesgos biológicos], es la exposición con microorganismos como bacterias, virus y demás agentes dañinos, que pueden desencadenar enfermedades.  

              .row.justify-content-center.align-items-start(titulo="Paso 7")
                .col-lg-4
                  img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img25.png', alt='')        
                .col-lg-6
                  p.mt-5 #[b Riesgo eléctrico], exposición del cuerpo a corrientes eléctricas que pueden desencadenar hasta la muerte.  

              .row.justify-content-center.align-items-start(titulo="Paso 8")
                .col-lg-4
                  img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img26.png', alt='')        
                .col-lg-6
                  p.mt-5 #[b Riesgo psicosocial], el mantener al individuo expuesto a situaciones estresantes, desgastantes, generan algún tipo de afectación personal, mental y emocional que pueden desencadenar depresiones o episodios de ansiedad.

      .row.justify-content-start.align-items-center.mb-5           
        .col-lg-3.up
          .bgp.p-1(data-aos="fade-right")
            h4(data-aos="fade-down").mb-0 Valoración de riesgos 

      .row.justify-content-center.align-items-start.mb-2           
        .col-lg-2.my3
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img27.svg', alt='')                        
        .col-lg-10
          p(data-aos="fade-down").mb-0 Cada tipo de riesgo debe ser valorado por la empresa contratante, que tiene como objetivo el reducir o eliminar los riesgos presentes, esta actividad es desarrollada por personal calificado para tal fin, donde, en caso de ocurrencia o presencia de un accidente, se desplegarán todas las acciones preventivas o correctivas necesarias. 

      p(data-aos="fade-down").mb-5 Para una correcta valoración de los riesgos es necesario:


      .row.justify-content-center.align-items-center.mb-5           
        .col-lg-10
          ImagenInfograficaC.color-acento-botones.mb-5(data-aos="zoom-in")
            template(v-slot:imagen)
              figure
                img.img-a.img-t(src='@/assets/curso/temas/img29.svg', alt=' Para una correcta valoración de los riesgos es necesario')

            .tarjeta.color-secundario.p-3(x="13%" y="68%" numero="")
              p.mb-0 Identificar los riesgos: deben plantearse por áreas o cargos.
            .tarjeta.color-secundario.p-3(x="30%" y="38.5%" numero="")
              p.mb-0 Posteriormente, reconocer las personas que pueden verse involucradas o afectadas, sea de manera personal o grupal. 
            .tarjeta.color-secundario.p-3(x="34%" y="29%" numero="")
              p.mb-0 Luego, enumerar los riesgos existentes.   
            .tarjeta.color-secundario.p-3(x="41.5%" y="22%" numero="")
              p.mb-0 De acuerdo con el punto anterior, plantear acciones para cada uno de los riesgos identificados. 
            .tarjeta.color-secundario.p-3(x="51.5%" y="19%" numero="")
              p.mb-0 Desarrollar un informe donde se documente la información obtenida, evidencias encontradas, personas afectadas, riesgos involucrados; plantear un paralelo entre las acciones que ya fueron ejecutadas y aclarar si se tienen acciones pendientes por hacer. 
            .tarjeta.color-secundario.p-3(x="61%" y="22%" numero="")
              p.mb-0 Desarrollar un cronograma donde se Implementa las acciones pendientes.  
            .tarjeta.color-secundario.p-3(x="70%" y="33%" numero="")
              p.mb-0 Realizar una evaluación posterior que arroje datos sobre la efectividad de las acciones. 
            .tarjeta.color-secundario.p-3(x="84%" y="63%" numero="")
              p.mb-0 Realizar una evaluación posterior que arroje datos sobre la efectividad de las acciones. 

      .row.justify-content-center.align-items-center.mb-5           
        .col-lg-2
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img12.svg', alt='') 
        .col-lg-10
          .cajon.color-acento-contenido.p-4(data-aos="flip-down")
            p(data-aos="fade-down").mb-0 Después de identificar y valorar los riesgos se hace necesario dar un manejo y solución dentro de la normatividad vigente, por lo tanto, se debe considerar los siguientes métodos:  los de manejo, dependiendo de los índices de presencia de riesgos, métodos de identificación como una herramienta que permita conocer y diseñar medidas preventivas para el manejo de los riesgos laborales, autorreportes, desarrollados por el empleado y las estrategias de prevención. A continuación, encontrará los detalles de cada procedimiento mencionado.

    TabsC.color-acento-contenido.mb-5(data-aos="fade-left")
      .py-3.py-md-4(titulo="Métodos de manejo")
        .row.justify-content-center.align-items-start.py-4
          .col-lg-6
            h5 Métodos de manejo
            p Los métodos de manejo dependen de los índices de presencia de riesgos, en este caso pueden ser:
            ol.lista-ol--cuadro
              li 
                .lista-ol--cuadro__vineta.bgv
                  span 1
                p.mb-0 Evaluación previa del puesto de trabajo, el cual se desarrolla de manera preventiva, para evitar posibles situaciones de accidentalidad en los empleados.

              li 
                .lista-ol--cuadro__vineta.bgv
                  span 2
                p.mb-0 En caso de ocurrir una eventualidad, se realizan acciones correctivas que eviten una nueva ocurrencia del suceso.

              li 
                .lista-ol--cuadro__vineta.bgv
                  span 3
                p.mb-0 De supervisión o mantenimiento, esto se hace para mantener un ambiente seguro en el puesto de trabajo, verificando que todos los aspectos se encuentren dentro de los rasgos de normalidad.
        
          .col-lg-5
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img31.png', alt='')
      .py-3.py-md-4(titulo="Métodos de identificación")
        .row.justify-content-center.align-items-start.py-4
          .col-lg-6
            h5 Métodos de identificación
            p Es una herramienta que permite conocer y diseñar medidas preventivas para el manejo de los riesgos laborales corresponde al Mapa de riesgos, que como se desarrolla en la evaluación de riesgos, es importante:
            ol.lista-ol--cuadro
              li 
                .lista-ol--cuadro__vineta.bgv
                  span 1
                p.mb-0 La delimitación de la zona, área o cargo, especificando características

              li 
                .lista-ol--cuadro__vineta.bgv
                  span 2
                p.mb-0 El análisis del estado físico, las personas que desarrollan el cargo o la función (edad, antigüedad y género).

              li 
                .lista-ol--cuadro__vineta.bgv
                  span 3
                p.mb-0 La identificación y evaluación de los riesgos laborales existentes.

              li 
                .lista-ol--cuadro__vineta.bgv
                  span 4
                p.mb-0 La  especificación de aspectos del ambiente (ventilación, iluminación, estado de las paredes, pisos, etc.)

              li 
                .lista-ol--cuadro__vineta.bgv
                  span 5
                p.mb-0 La descripción de las máquinas en caso de que el cargo requiera manejo de máquinas, materia prima y producto final.

              li 
                .lista-ol--cuadro__vineta.bgv
                  span 6
                p.mb-0 Los turnos manejados para el cargo, si son rotativos, la jornada laboral. 

              li 
                .lista-ol--cuadro__vineta.bgv
                  span 7
                p.mb-0 El mapa permite dar prioridad al manejo de los riesgos dentro del área.
 
        
          .col-lg-5
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img32.png', alt='')   
      .py-3.py-md-4(titulo="Autorreportes")
        .row.justify-content-center.align-items-start.py-4
          .col-lg-6
            h5 Autorreportes
            p Estos son informes desarrollados por el empleado, pues es la persona que mejor conoce su puesto de trabajo, en él plantea, desde su perspectiva, las problemáticas existentes dentro de su cargo al ejecutar sus funciones y del ambiente laboral en el que lo desarrolla.  
        
          .col-lg-5
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img33.png', alt='')  
      .py-3.py-md-4(titulo="Estrategias de prevención")
        .row.justify-content-center.align-items-start.py-4
          .col-lg-6
            h5 Estrategias de prevención
            p Las estrategias de prevención son implementadas por el empleador por medio de entrega de las características del puesto, junto con los elementos de protección personal. 
            p Para garantizar una correcta utilización y porte de estos elementos, las organizaciones ofrecen  una capacitación de ingreso al cargo.

            p Adicionalmente, se realizan capacitaciones posteriores de acuerdo con los hallazgos que se hagan en las inspecciones realizadas por la empresa, por ejemplo, profundizar en ergonomía y posturas en el puesto de trabajo, o entre los riesgos identificados y los temas claves que lo prevengan.

            p Además, motivar a todo el personal a la realización de las pausas activas durante la jornada laboral.
 
        
          .col-lg-5
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img34.png', alt='')  
      .py-3.py-md-4(titulo="Normatividad")
        .row.justify-content-center.align-items-start.py-4
          .col-lg-6
            h5 Normatividad
            p La verificación de los cumplimientos y verificación del Sistema de Riesgos Laborales se desarrolla con base a la Ley 1562 de 2012. 
        
          .col-lg-5
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img35.png', alt='')
</template>

<script>
import ImagenInfograficaC from '../components/ImagenInfograficaC.vue'
export default {
  name: 'Tema3',
  components: {
    ImagenInfograficaC,
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

<style lang="sass"></style>
