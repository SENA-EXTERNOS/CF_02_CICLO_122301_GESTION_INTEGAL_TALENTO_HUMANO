<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.bloque-fondo4
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 4
      h1 Diagnóstico
    p(data-aos="fade-down") El diagnóstico dentro de una organización permite identificar, mediante un proceso detallado, las falencias y fortalezas específicas que puedan ser generadoras de riesgo dentro de un área, desarrollando su respectiva evaluación, por medio de datos obtenidos y hechos presentados, dando como resultado los aspectos por mejorar y determinando la prioridad en la que serán abordados.
    p(data-aos="fade-down").mb-5 Para estructurar un diagnóstico se requiere información base de la empresa como:

    .row.justify-content-center.align-items-start.mb-5
      .col-lg-4
        figure(data-aos="zoom-in")
          img(src="@/assets/curso/temas/img37.png", alt="alt").img400.m-auto
      .col-lg-8
        SlyderF.custom.mb-5(columnas="col-lg-6")(data-aos="fade-left")
          .tarjeta.tarjeta--slyder.p-4
            p.mb-0.sp A
            .row.justify-content-center.mb-3
              .col-8
                img.img-a.img-t.mb-3.mt-4(src="@/assets/curso/temas/img38.svg", alt="alt").img100.m-auto
            p.text-center.mb-0 Caracterización de la empresa (a qué se dedica, historia, etc.)

          .tarjeta.tarjeta--slyder.p-4
            p.mb-0.sp B
            .row.justify-content-center.mb-3
              .col-8
                img.img-a.img-t.mb-3(src="@/assets/curso/temas/img39.svg", alt="alt").img100.m-auto
            p.text-center.mb-0 Organigrama que permite conocer la conformación de la empresa, áreas y puestos de trabajo, porte y cumplimiento de EEP.

          .tarjeta.tarjeta--slyder.p-4
            p.mb-0.sp C
            .row.justify-content-center.mb-3
              .col-8
                img.img-a.img-t.mb-3.mt-4(src="@/assets/curso/temas/img40.svg", alt="alt").img100.m-auto
            p.text-center.mb-0 Señalizaciones por área. (zonas de trabajo, zonas de descanso, manejo de material, salidas, botiquines, etc.)

          .tarjeta.tarjeta--slyder.p-4
            p.mb-0.sp D
            .row.justify-content-center.mb-3
              .col-8
                img.img-a.img-t.mb-3(src="@/assets/curso/temas/img41.svg", alt="alt").img100.m-auto
            p.text-center.mb-0 Jerarquización de los riesgos.

          .tarjeta.tarjeta--slyder.p-4
            p.mb-0.sp E
            .row.justify-content-center.mb-3
              .col-8
                img.img-a.img-t.mb-3(src="@/assets/curso/temas/img42.svg", alt="alt").img100.m-auto
            p.text-center Realización de un estudio sociodemográfico y de morbilidad sentida, este paso busca conocer las condiciones de seguridad y salud de los empleados con descripción sociodemográfica y antecedentes de salud relevantes con descripción en caso de padecer alguna enfermedad.

    p(data-aos="fade-down").mb-5 Se pueden realizar diferentes tipos de diagnóstico, de acuerdo con las necesidades de la empresa, de la siguiente manera:

    .row.justify-content-end.align-items-center.mb-5
      .col-lg-11
        ol.lista-ol--cuadro
          li
            .lista-ol--cuadro__vineta.bgv
              span a.
            p.mb-0  #[b Diagnóstico de seguridad y salud de los trabajadores:] estos diagnósticos se pueden hacer al momento de contratar el personal idóneo para el cargo o para verificar el desarrollo laboral del empleado, dentro de la organización.
          li
            .lista-ol--cuadro__vineta.bgv
              span b.
            p.mb-0 #[b Diagnóstico de procesos:] en caso de requerirse evaluar un proceso y su adecuado funcionamiento, se recomienda analizar los aspectos relevantes del mismo, como las personas que los ejercen, las funciones y resultados de los procesos o actividades.

    .row.justify-content-start.align-items-center.mb-5
      .col-lg-4
        .bgp.p-1(data-aos="fade-right")
          h4(data-aos="fade-down").mb-0 Instrumentos de diagnóstico

    .row.justify-content-center.align-items-start.mb-2
      .col-lg-2.my3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img43.svg', alt='')
      .col-lg-10
        p(data-aos="fade-down").mb-0 Los instrumentos de diagnóstico permiten recolectar información relevante sobre los aspectos claves que se pretende analizar; por este motivo, es importante la estructuración (cómo se desarrolla), los métodos de pregunta a utilizar (define la temática y la forma de redactar la pregunta) y la comprensión de la información (la persona a quien se aplique el instrumento debe tener claro lo que se pregunta y que se espera encontrar). A continuación, se evidencian los procedimientos y diseños de la entrevista, la encuesta y el cuestionario:

    TabsB.color-acento-contenido.my-5
      .py-4.py-md-5(titulo="Entrevista" :icono="require('@/assets/curso/temas/img44.svg')")
        .row.justify-content-center.align-items-start
          .col-lg-7
            p Es la conversación dirigida entre dos o más personas para alcanzar un objetivo, donde las preguntas son estructuradas para obtener respuestas específicas de un tema clave.
            p Puede manejarse dos tipos de entrevista, una estructurada, en donde se planea y organiza la dirección que tomará la entrevista y una semiestructurada, donde no se aborda de una forma tan planificada, dando oportunidad de incluir preguntas que no se tenían establecidas de acuerdo con las respuestas que brinda el entrevistado.
            h4 Procedimiento
            p Los pasos necesarios para estructurar una entrevista efectiva son:
            p.ps-4 #[b a.]  Plantear los objetivos de la entrevista.
            p.ps-4 #[b b.]  Establecer el espacio donde se realizará la entrevista.
            p.ps-4 #[b c.]  Identificar las personas a quienes desea realizar la entrevista.
            p.ps-4 #[b d.]  Conocer los antecedentes de la persona que se va a entrevistar.
            p.ps-4 #[b e.]  Estructurar los tipos de pregunta que va a formular.
            p.ps-4 #[b f.]   Estructurar preguntas clave.
            p.ps-4 #[b g.]  Preparar al entrevistado.
            h4 Diseño
            p Para la estructuración de las preguntas es importante saber que:
            p.ps-4 #[b a.]  Las preguntas cerradas limitan las posibilidades de respuesta.
            p.ps-4 #[b b.]  Las preguntas abiertas brindan la oportunidad al entrevistado de describir de manera detallada la pregunta.

            p El poder cuantificar las opciones de respuesta permite manejar de una forma objetiva la información que se recibe.

          .col-lg-4
            img(src="@/assets/curso/temas/img47.png" alt="")

      .py-4.py-md-5(titulo="Encuesta" :icono="require('@/assets/curso/temas/img45.svg')")
        .row.justify-content-center.align-items-start
          .col-lg-7
            p Las encuestas son otro método de recolección de información que permite conocer las preferencias, gustos, opiniones o comentarios de los participantes sobre temas específicos.
            h4 Procedimiento
            p.ps-4 #[b a.]  Tener claridad sobre lo que se desea investigar o conocer.
            p.ps-4 #[b b.]  Reconocer que existen varios programas que ofrecen diferentes tipos de preguntas.
            p.ps-4 #[b c.]  Conocer el medio por el cual se enviará o se aplicará la encuesta (presencial, en línea o por correo electrónico).
            p.ps-4 #[b d.]  Utilizar encuestas que vengan con el análisis de resultados y ejecuten de manera efectiva las fórmulas para los resultados.
            h4 Diseño
            p Para el diseño de una encuesta es necesario:
            p.ps-4 #[b a.]  Identificar el medio por el que se aplicará la encuesta.
            p.ps-4 #[b b.]  Redactar las preguntas que presenten con claridad el tema de interés.
            p.ps-4 #[b c.]  No incluir dos preguntas en un mismo ítem.
            p.ps-4 #[b d.]  Manejar un orden para la presentación de las preguntas y los temas a tratar.
            p.ps-4 #[b e.]  Verificar que las preguntas sean comprendidas por las personas a quienes se aplicará el instrumento.
            p.ps-4 #[b f.]  Estructurar la encuesta de acuerdo con las necesidades (si se plantean preguntas abiertas o cerradas, de acuerdo a la necesidad).
            p.ps-4 #[b g.]  Manejar una presentación visual uniforme que no sature al encuestado.
          .col-lg-4
            img(src="@/assets/curso/temas/img48.png" alt="")

      .py-4.py-md-5(titulo="Cuestonarios" :icono="require('@/assets/curso/temas/img46.svg')")
        .row.justify-content-center.align-items-start
          .col-lg-7
            p El cuestionario es un conjunto de preguntas, ya sean de tipo abierto o cerrado, que los participantes deben resolver de acuerdo con su conocimiento o experiencia sobre el tema.
            p Estos pueden estructurarse de acuerdo con las necesidades de la población, datos demográficos, formas de pensar (manejo subjetivo de la información como gustos u opiniones respecto a un tema), comportamientos, formas de actuar ante determinadas situaciones y por último de conocimiento.
            h4 Procedimiento
            p.ps-4 #[b a.]  Lo primero que se debe aclarar es el tipo de investigación objetivo, si es cualitativa (no estructurado) o cuantitativa (datos estructurados), estos últimos son los más utilizados para validar algún tipo de información.
            p.ps-4 #[b b.]  Describir la información que se necesita y las características de los participantes para la estructuración de las preguntas.
            p.ps-4 #[b c.]  Estructurar las preguntas de acuerdo con las necesidades. Se pueden establecer preguntas de opción múltiple con única respuesta, preguntas tipo escala, preguntas abiertas o preguntas cerradas.
            p.ps-4 #[b d.]  Determinar la cantidad de preguntas por desarrollar.
            p.ps-4 #[b e.]  Redactar preguntas claras, sin palabras rebuscadas o que puedan tener varios significados.
            h4 Diseño
            p.ps-4 #[b a.] Describir la información que se aspira alcanzar con el instrumento.
            p.ps-4 #[b b.] Estructurar un texto introductorio sobre las preguntas que se desarrollarán.
            p.ps-4 #[b c.] Tener cuidado de redactar las preguntas de forma neutral, sin generar algún tipo de dirección a la respuesta.
            p.ps-4 #[b d.] Redactar las preguntas de manera afirmativa, sin que contenga, por ejemplo: No es cierto que…
            p.ps-4 #[b e.] Manejar un vocabulario simple y claro que no genere ambigüedad en la respuesta.
            p.ps-4 #[b f.] Al momento de estructurar la pregunta, no plantear preguntas dobles.
            p.ps-4 #[b g.] En lo posible, realizar un pilotaje para comprobación de la claridad de las preguntas.
          .col-lg-4
            img(src="@/assets/curso/temas/img49.png" alt="")

    .row.justify-content-center.align-items-center
      .col-lg-10
        .cajon.color-acento-contenido.p-4(data-aos="flip-down")
          p(data-aos="fade-down").mb-0 Recuerde explorar los demás recursos que se encuentran disponibles en este componente formativo; para ello, diríjase al menú principal donde encontrará la síntesis, material complementario, entre otros. Adicional, lo invitamos a resolver la actividad didáctica para reforzar los conceptos estudiados.
</template>

<script>
export default {
  name: 'Tema4',
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
