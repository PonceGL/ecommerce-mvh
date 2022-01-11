import React from "react";
import { NextSeo, LocalBusinessJsonLd } from "next-seo";

// Styled-Components
import {
  MainStiled,
  MainTitle,
  Paragraph,
  Strong,
  ListItem,
  ListTitle,
  UnderLine,
  Anchor,
} from "../styles/aviso-de-privacidad/style";

const AboutUs = () => {
  return (
    <>
      <NextSeo
        title="Aviso de Privacidad | Materiales Vasquez Hermanos"
        description="Conoce nuestro aviso de privacidad"
        canonical="https://www.materialesvasquezhnos.com.mx/aviso-de-privacidad"
        openGraph={{
          url: "https://www.materialesvasquezhnos.com.mx/aviso-de-privacidad",
          title: "Aviso de Privacidad | Materiales Vasquez Hermanos",
          description: "Conoce nuestro aviso de privacidad",
          images: [
            {
              url: "https://res.cloudinary.com/duibtuerj/image/upload/v1630083340/brand/meta-image_rcclee.jpg",
              width: 200,
              height: 200,
              alt: "Logotipo de Materiales Vasquez Hermanos",
            },
          ],
          site_name: "Materiales Vasquez Hermanos",
        }}
        twitter={{
          handle: "@MaterialesVH",
          site: "@MaterialesVH",
          cardType: "summary",
        }}
      />
      <LocalBusinessJsonLd
        type="HomeGoodsStore"
        name="Aviso de Privacidad | Materiales Vasquez Hermanos"
        description="Conoce nuestro aviso de privacidad"
        url="https://www.materialesvasquezhnos.com.mx/aviso-de-privacidad"
        telephone="+522288401919"
        address={{
          streetAddress: "Lázaro Cárdenas 274",
          addressLocality: "Xalapa",
          addressRegion: "MEX",
          postalCode: "91180",
          addressCountry: "MX",
        }}
      />
      <MainStiled>
        <MainTitle>Aviso de Privacidad</MainTitle>
        <Paragraph>
          <Strong>Responsable de la protección de sus datos personales</Strong>
        </Paragraph>

        <Paragraph>
          <Strong>MATERIALES VASQUEZ HERMANOS S.A. DE C.V.</Strong> con
          domicilio en MARGARITA OLIVO N° 15, Col. Rafael lucio, C.P. 91110,
          XALAPA, VERACRUZ, es responsable del tratamiento de sus datos
          personales.
        </Paragraph>

        <ul>
          <ListTitle>Cómo contactarnos:</ListTitle>

          <ListItem>
            Oficina de Protección de Datos privacidad: Departamento de crédito y
            cobranza
          </ListItem>
          <ListItem>
            Domicilio: MARGARITA OLIVO N° 15, Col. Rafael lucio, C.P. 91110,
            XALAPA, VERACRUZ
          </ListItem>
          <ListItem>
            Correo electrónico:{" "}
            <Anchor
              href="mailto:info@grupovasquez.com.mx"
              target="_blank"
              rel="noopener noreferrer"
            >
              info@grupovasquez.com.mx
            </Anchor>{" "}
            Teléfono:{" "}
            <Anchor
              href="tel:2288401919"
              target="_blank"
              rel="noopener noreferrer"
            >
              228 840 1919
            </Anchor>{" "}
            ext.110
          </ListItem>
        </ul>

        <ul>
          <ListTitle>
            ¿Para qué fines recabamos y utilizamos sus datos personales?
          </ListTitle>
          <ListTitle>
            Sus datos personales serán utilizados para las siguientes
            finalidades:
          </ListTitle>

          <ListItem>
            Proveer los servicios y productos requeridos por usted;
          </ListItem>
          <ListItem>
            Informar sobre cambios o nuevos productos o servicios que estén
            relacionados con el contratado o adquirido por el cliente;
          </ListItem>
          <ListItem>
            Dar cumplimiento a obligaciones contraídas con nuestros clientes;
          </ListItem>
          <ListItem>Evaluar la calidad del servicio;</ListItem>
          <ListItem>
            Identificarlo en cualquier tipo de relación jurídica o de negocios;
          </ListItem>
          <ListItem>
            Envío de promociones, avisos y otros de carácter comercial y de
            mercadotecnia.
          </ListItem>
        </ul>

        <ListTitle>¿Qué datos personales obtenemos y de dónde?</ListTitle>
        <Paragraph>
          Para las finalidades señaladas en el presente aviso de privacidad,
          podemos recabar sus datos personales de distintas formas: cuando usted
          nos los proporciona directamente; cuando visita nuestro sitio de
          Internet o utiliza nuestros servicios en línea, y cuando obtenemos
          información a través de otras fuentes que están permitidas por la Ley.
          .
        </Paragraph>
        <ListTitle>Datos personales que recabamos de forma directa</ListTitle>
        <Paragraph>
          Recabamos sus datos personales de forma directa cuando usted mismo nos
          los proporciona por diversos medios, como cuando participa en nuestras
          promociones o nos da información con objeto de que le prestemos un
          servicio.
        </Paragraph>

        <ul>
          <ListTitle>
            Los datos que obtenemos por este medio pueden ser, entre otros:
          </ListTitle>

          <ListItem>
            Denominación social de su empresa o de la empresa para la que
            colabora.
          </ListItem>
          <ListItem>Domicilio de la empresa</ListItem>
          <ListItem>Teléfono</ListItem>
          <ListItem>Nombre del contacto y puesto o cargo</ListItem>
          <ListItem>
            Datos relativos a nuestra relación comercial derivada de los
            servicios que proporcionamos.
          </ListItem>
          <ListItem>RFC</ListItem>
          <ListItem>Correo electrónico</ListItem>
          <ListItem>Copia del IFE</ListItem>
        </ul>

        <ul>
          <ListTitle>
            Datos personales que recabamos cuando visita nuestro sitio de
            Internet o utiliza nuestros servicios en línea:
          </ListTitle>

          <ListItem>Teléfono</ListItem>
          <ListItem>Nombre del contacto y puesto o cargo</ListItem>
          <ListItem>
            Datos relativos a nuestra relación comercial derivada de los
            servicios que proporcionamos.
          </ListItem>
          <ListItem>
            Datos relativos a la operación de comunicaciones entre dispositivos.
          </ListItem>
        </ul>

        <ul>
          <ListTitle>
            Datos personales que recabamos a través de otras fuentes
          </ListTitle>

          <ListItem>
            Podemos obtener información de usted de otras fuentes permitidas por
            la ley, tales como los directorios telefónicos o laborales. Los
            datos que obtenemos por estos medios pueden ser, entre otros:
          </ListItem>
          <ListItem>
            Denominación social de su empresa o de la empresa para la que
            colabora.
          </ListItem>
          <ListItem>Domicilio de la empresa</ListItem>
          <ListItem>Teléfono</ListItem>
          <ListItem>Nombre del contacto y puesto o cargo</ListItem>
          <ListItem>
            Datos relativos a nuestra relación comercial derivada de los
            servicios que proporcionamos.
          </ListItem>
        </ul>

        <ListTitle>Datos personales sensibles</ListTitle>
        <Paragraph>
          <Strong>
            {" "}
            Le informamos que nuestra empresa en ninguna forma o modo alguno
            solicita datos personales sensibles.
          </Strong>{" "}
          De llegar a presentarse esta situación, para cumplir con las
          finalidades previstas en este aviso de privacidad, serán recabados y
          tratados datos personales sensibles, como aquéllos que refieren a lo
          previsto por el artículo{" "}
          <UnderLine>
            3º. FRACCION VI. De la Ley federal de Protección de Datos Personales
            en Posesión de los Particulares
          </UnderLine>
          ; mismo que se transcribe a continuación.
        </Paragraph>

        <Paragraph>
          “LEY FEDERAL DE PROTECCION DE DATOS PERSONALES EN POSESION DE LOS
          PARTICULARES”.
        </Paragraph>

        <Paragraph>
          {`"Artículo 3.- Para los efectos de esta Ley, se entenderá por:`}
          <br />
          {`VI. Datos personales sensibles: Aquellos datos personales que afecten
          a la esfera más íntima de su titular, o cuya utilización indebida
          pueda dar origen a discriminación o conlleve un riesgo grave para
          éste. En particular, se consideran sensibles aquellos que puedan
          revelar aspectos como origen racial o étnico, estado de salud presente
          y futuro, información genética, creencias religiosas, filosóficas y
          morales, afiliación sindical, opiniones políticas, preferencia
          sexual."`}
        </Paragraph>

        <Paragraph>
          De ser el caso, nos comprometemos a que los mismos serán tratados bajo
          las más estrictas medidas de seguridad que garanticen su
          confidencialidad.
        </Paragraph>

        <Paragraph>
          De conformidad con lo que establece el artículo 9 de la Ley en cita,
          requerimos de su consentimiento expreso para el tratamiento de sus
          datos personales sensibles que en su caso le llegáramos a solicitar,
          por lo que usted podrá en su caso ejercer sus derechos de Acceso,
          Rectificación, Cancelación y Oposición, dirigiendo un correo
          electrónico a la siguiente dirección.{" "}
          <Anchor
            href="mailto:info@grupovasquez.com.mx"
            target="_blank"
            rel="noopener noreferrer"
          >
            info@grupovasquez.com.mx
          </Anchor>
        </Paragraph>

        <ListTitle>
          ¿Cómo puede limitar el uso o divulgación de sus datos personales?
        </ListTitle>
        <Paragraph>
          Usted puede dejar de recibir mensajes promocionales por teléfono fijo
          o celular dando el correspondiente aviso mediante un correo
          electrónico a la dirección e-mail:{" "}
          <Anchor
            href="mailto:info@grupovasquez.com.mx"
            target="_blank"
            rel="noopener noreferrer"
          >
            info@grupovasquez.com.mx
          </Anchor>
        </Paragraph>
        <Paragraph>
          Asimismo, puede dejar de recibir correo postal publicitario. El correo
          postal publicitario puede contener instrucciones para optar por no
          participar o puede dejar de recibir correo postal así como también
          puede dejar de recibir correos electrónicos con promocionales enviando
          su instrucción al e-mail:{" "}
          <Anchor
            href="mailto:info@grupovasquez.com.mx"
            target="_blank"
            rel="noopener noreferrer"
          >
            info@grupovasquez.com.mx
          </Anchor>
        </Paragraph>

        <ListTitle>
          ¿Cómo acceder o rectificar sus datos personales o cancelar u oponerse
          a su uso?
        </ListTitle>
        <Paragraph>
          Usted tiene derecho de acceder a sus datos personales que poseemos y a
          los detalles del tratamiento de los mismos, así como a rectificarlos
          en caso de ser inexactos o incompletos; cancelarlos cuando considere
          que no se requieren para alguna de las finalidades señalados en el
          presente aviso de privacidad, estén siendo utilizados para finalidades
          no consentidas o haya finalizado la relación contractual o de
          servicio, o bien, oponerse al tratamiento de los mismo para fines
          específicos.
        </Paragraph>

        <Paragraph>
          Los mecanismos que se han implementado para el ejercicio de dichos
          derechos son a través del envío de la solicitud respectiva en nuestro
          correo electrónico:{" "}
          <Anchor
            href="mailto:info@grupovasquez.com.mx"
            target="_blank"
            rel="noopener noreferrer"
          >
            info@grupovasquez.com.mx
          </Anchor>
        </Paragraph>

        <Paragraph>
          Para mayor información, favor de comunicarse a la Oficina Protección
          de datos y privacidad señalada con antelación en el presente Aviso
        </Paragraph>

        <ListTitle>
          ¿Cómo puede revocar su consentimiento para el tratamiento de sus
          datos?
        </ListTitle>

        <Paragraph>
          En todo momento, usted podrá revocar el consentimiento que nos ha
          otorgado para el tratamiento de sus datos personales, a fin de que
          dejemos de hacer uso de los mismos. Para ello, es necesario que nos
          envié su petición a nuestro correo electrónico siguiente:{" "}
          <Anchor
            href="mailto:info@grupovasquez.com.mx"
            target="_blank"
            rel="noopener noreferrer"
          >
            info@grupovasquez.com.mx
          </Anchor>
        </Paragraph>

        <ListTitle>
          Sus datos pueden viajar a otros país o ser compartidos con otros
        </ListTitle>
        <Paragraph>
          Sus datos personales pueden ser transferidos y tratados dentro y fuera
          del país, por personas distintas a esta empresa. En ese sentido, su
          información puede ser compartida con nuestras empresas filiales o
          subsidiarias.
        </Paragraph>
        <Paragraph>
          Nos comprometemos a no transferir su información personal a terceros
          sin su consentimiento, salvo las excepciones previstas en el artículo
          37 de la Ley Federal de Protección de Datos Personales en Posesión de
          los Particulares, así como a realizar esta transferencia en los
          términos que fija esa Ley.
        </Paragraph>

        <Paragraph>
          El artículo 37 de la Ley se transcribe a continuación.
          <br />
          “LEY FEDERAL DE PROTECCION DE DATOS PERSONALES EN POSESION DE LOS
          PARTICULARES”.
          <br />
          {`“Artículo 37.- Las transferencias nacionales o internacionales de datos podrán llevarse a cabo sin el consentimiento del titular cuando se dé alguno de los siguientes supuestos:`}
          <ListItem>
            1. Cuando la transferencia esté prevista en una Ley o Tratado en los
            que México sea parte;
          </ListItem>
          <ListItem>
            2. Cuando la transferencia sea necesaria para la prevención o el
            diagnóstico médico, la prestación de asistencia sanitaria,
            tratamiento médico o la gestión de servicios sanitarios;
          </ListItem>
          III. Cuando la transferencia sea efectuada a sociedades controladoras,
          subsidiarias o afiliadas bajo el control común del responsable, o a
          una sociedad matriz o a cualquier sociedad del mismo grupo del
          responsable que opere bajo los mismos procesos y políticas internas;
          <ListItem>
            1. Cuando la transferencia sea necesaria por virtud de un contrato
            celebrado o por celebrar en interés del titular, por el responsable
            y un tercero;
          </ListItem>
          <ListItem>
            2. Cuando la transferencia sea necesaria o legalmente exigida para
            la salvaguarda de un interés público, o para la procuración o
            administración de justicia;
          </ListItem>
          <ListItem>
            3. Cuando la transferencia sea precisa para el reconocimiento,
            ejercicio o defensa de un derecho en un proceso judicial, y
          </ListItem>
          {`VII. Cuando la transferencia sea precisa para el mantenimiento o cumplimiento de una relación jurídica entre el responsable y el titular.”`}
        </Paragraph>
        <Paragraph>
          Si usted no manifiesta su oposición enviando un correo a la dirección
          electrónica info@grupovasquez.com.mx para que sus datos personales
          sean transferidos, se entenderá que ha otorgado su consentimiento para
          ello.
        </Paragraph>
        <Paragraph>
          En caso de que se llegaren a transferir datos personales sensibles,
          requerimos de su consentimiento expreso, de conformidad con lo que
          establece el artículo 9 de la Ley en cita, por lo que solicitamos
          indique si acepta o no esta transferencia enviando un correo a la
          dirección electrónica{" "}
          <Anchor
            href="mailto:info@grupovasquez.com.mx"
            target="_blank"
            rel="noopener noreferrer"
          >
            info@grupovasquez.com.mx
          </Anchor>
        </Paragraph>

        <ListTitle>Modificaciones al aviso de privacidad</ListTitle>
        <Paragraph>
          Nos reservamos el derecho de efectuar en cualquier momento
          modificaciones o actualizaciones al presente aviso de privacidad, para
          la atención de novedades legislativas, políticas internas o nuevos
          requerimientos para la prestación u ofrecimiento de nuestros servicios
          o productos.
        </Paragraph>
        <Paragraph>
          Estas modificaciones estarán disponibles al público a través de los
        </Paragraph>

        <ul>
          <ListTitle>Siguientes medios:</ListTitle>

          <ListItem>
            anuncios visibles en nuestros establecimientos o centros de atención
            a clientes;
          </ListItem>
          <ListItem>
            trípticos o folletos disponibles en nuestros establecimientos o
            centros de atención a clientes;
          </ListItem>
          <ListItem>en nuestra página de Internet;</ListItem>
          <ListItem>
            o se las haremos llegar al último correo electrónico que nos haya
            proporcionado
          </ListItem>
        </ul>

        <ListTitle>
          ¿Ante quién puede presentar sus quejas y denuncias por el tratamiento
          indebido de sus datos personales?
        </ListTitle>
        <Paragraph>
          Si usted considera que su derecho de protección de datos personales ha
          sido lesionado por alguna conducta de nuestros empleados o de nuestras
          actuaciones o respuestas, presume que en el tratamientos de sus datos
          personales existe alguna violación a las disposiciones previstas en la
          Ley Federal de Protección de Datos Personales en Posesión de los
          Particulares, podrá interponer la queja o denuncia correspondiente
          ante el IFAI, para mayor información visite{" "}
          <Anchor
            href="www.ifai.org.mx"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.ifai.org.mx
          </Anchor>
        </Paragraph>
      </MainStiled>
    </>
  );
};

export default AboutUs;
