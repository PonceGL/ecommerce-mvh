import React, { useRef, useState } from "react";
import Head from "next/head";
import fetch from "isomorphic-unfetch";

// Styled-Components
import {
  MainStiled,
  MainTitle,
  TextContainer,
  Text,
  Form,
  InputBase,
  Experience,
  Notification,
  Send,
} from "../styles/unete-a-nuestro-equipo/style";

const Jobs = () => {
  const formJob = useRef(null);

  const sendEmail = async (body) => {
    const bodyOfMessageToClient = {
      receiver: body.email,
      subject: "Interesado en unirse al equipo",
      html: `<!DOCTYPE html>
      <html>
      <head>
      <title></title>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <style type="text/css">
      /* CLIENT-SPECIFIC STYLES */
      body, table, td, a { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
      table, td { mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
      img { -ms-interpolation-mode: bicubic; }
      
      /* RESET STYLES */
      img { border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; }
      table { border-collapse: collapse !important; }
      body { height: 100% !important; margin: 0 !important; padding: 0 !important; width: 100% !important; }
      
      /* iOS BLUE LINKS */
      a[x-apple-data-detectors] {
          color: inherit !important;
          text-decoration: none !important;
          font-size: inherit !important;
          font-family: inherit !important;
          font-weight: inherit !important;
          line-height: inherit !important;
      }
      
      /* MEDIA QUERIES */
      @media screen and (max-width: 480px) {
          .mobile-hide {
              display: none !important;
          }
          .mobile-center {
              text-align: center !important;
          }
      }
      
      /* ANDROID CENTER FIX */
      div[style*="margin: 16px 0;"] { margin: 0 !important; }
      </style>
      </head>
      <body style="margin: 0 !important; padding: 0 !important; background-color: #e7e7e7;" bgcolor="#e7e7e7">
      
      <!-- TEXTO OCULTO DEL PREÁMBULO -->
      <div style="display: none; font-size: 1px; color: #00144c; line-height: 1px; font-family: Open Sans, Helvetica, Arial, sans-serif; max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden;">
          Interesado en unirse al equipo
      </div>
      
      <table border="0" cellpadding="0" cellspacing="0" width="100%">
          <tr>
              <td align="center" style="background-color: #e7e7e7;" bgcolor="#e7e7e7">
              <!--[if (gte mso 9)|(IE)]>
              <table align="center" border="0" cellspacing="0" cellpadding="0" width="600">
              <tr>
              <td align="center" valign="top" width="600">
              <![endif]-->
              <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px;">
                  <tr>
                      <td align="center" valign="top" style="font-size:0; padding: 35px;" bgcolor="#ffffff">
                      <!--[if (gte mso 9)|(IE)]>
                      <table align="center" border="0" cellspacing="0" cellpadding="0" width="600">
                      <tr>
                      <td align="left" valign="top" width="300">
                      <![endif]-->
                      <div style="display:inline-block; min-width:100px; vertical-align:top; width:100%;">
                          <table align="left" border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #e7e7e7;" bgcolor="#e7e7e7">
                              <tr width="100%">
                                  <td width="100%" align="center" valign="top" bgcolor="#ffffff" class="mobile-center">
                                      <a href="https://www.materialesvasquezhnos.com.mx/">
                                        <img
                                            style="width: 120px; margin: 0"
                                            src="https://www.materialesvasquezhnos.com.mx/wp-content/uploads/2020/09/Logo_Home_Center-02.png"
                                            alt="Logotipo de Materiales Vasquez Hermanos"
                                          />
                                      </a>
                                  </td>
                              </tr>
                          </table>
                      </div>
                      <!--[if (gte mso 9)|(IE)]>
                      </td>
                      </tr>
                      </table>
                      <![endif]-->
                      </td>
                  </tr>
                  <tr>
                      <td align="center" style="padding: 30px 20px; background-color: #e7e7e7;" bgcolor="#e7e7e7">
                      <!--[if (gte mso 9)|(IE)]>
                      <table align="center" border="0" cellspacing="0" cellpadding="0" width="600">
                      <tr>
                      <td align="center" valign="top" width="600">
                      <![endif]-->
                      <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px;">
                          <tr>
                              <td align="left" style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 24px; padding-top: 25px;">
                                  <h3 style="font-size: 18px; font-weight: 800; line-height: 20px; color: #00144c; margin: 0;">
                                      Nueva postulación
                                  </h3>
                              </td>
                          </tr>
      
                          </tr>
      
                          <tr>
                              <td align="center" valign="top" style="font-size:0; padding: 20px 0;" bgcolor="#e7e7e7">
                              <!--[if (gte mso 9)|(IE)]>
                              <table align="center" border="0" cellspacing="0" cellpadding="0" width="600">
                              <tr>
                              <td align="left" valign="top" width="300">
                              <![endif]-->
                              <div style="display:inline-block; min-width:100px; vertical-align:top; width:100%;">
                                  <table align="left" border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #e7e7e7;" bgcolor="#e7e7e7">
                                      <tr width="70%">
                                          <td width="60%" align="left" style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 14px; font-weight: 600; line-height: 14px; padding: 5px 0; color: #00144c;">
                                              <p style="margin: 5px 0; color: #00144c; text-decoration: none; text-transform: capitalize; cursor: pointer;">${body.name}</p>
                                          </td>
                                          <td width="30%" align="right" style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 12px; font-weight: 400; line-height: 14px; text-transform: capitalize; padding: 5px 0; color: #00144c;">
                                              ${body.date}
                                          </td>
                                      </tr>
                                  </table>
                              </div>
                              <!--[if (gte mso 9)|(IE)]>
                              </td>
                              </tr>
                              </table>
                              <![endif]-->
                              </td>
                          </tr>
                          <tr>
                              <td>
                                  <div width="100%" style="display:inline-block; min-width:100px; vertical-align:top; width:100%;">
                                      <table width="100%" align="left" border="0" cellpadding="0" cellspacing="0" width="100%" >
                                          <tr width="100%">
                                              <td width="50%" align="left" valign="top" class="mobile-center" style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 14px; font-weight: 600; border: 2px solid #00144c;">
                                                  Edad
                                              </td>
                                              <td width="25%" align="center" valign="top" class="mobile-center" style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 14px; font-weight: 600; border: 2px solid #00144c;">
                                                  ${body.age}
                                              </td>
                                          </tr>
                                          <tr width="100%">
                                              <td width="50%" align="left" valign="top" class="mobile-center" style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 14px; font-weight: 600; border: 2px solid #00144c;">
                                                  Numero de teléfono
                                              </td>
                                              <td width="25%" align="center" valign="top" class="mobile-center" style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 14px; font-weight: 600; border: 2px solid #00144c;">
                                                  ${body.phoneNumber}
                                              </td>
                                          </tr>
                                          <tr width="100%">
                                              <td width="50%" align="left" valign="top" class="mobile-center" style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 14px; font-weight: 600; border: 2px solid #00144c;">
                                                  Correo electrónico
                                              </td>
                                              <td width="25%" align="center" valign="top" class="mobile-center" style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 14px; font-weight: 600; border: 2px solid #00144c;">
                                                  ${body.email}
                                              </td>
                                          </tr>
                                          <tr width="100%">
                                              <td width="50%" align="left" valign="top" class="mobile-center" style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 14px; font-weight: 600; border: 2px solid #00144c;">
                                                  Domicilio
                                              </td>
                                              <td width="25%" align="center" valign="top" class="mobile-center" style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 14px; font-weight: 600; border: 2px solid #00144c;">
                                                  ${body.address}
                                              </td>
                                          </tr>
                                      </table>
                                  </div>
                              </td>
                          </tr>
                          <tr>
                              <td>
                                  <br>
                              </td>
                          </tr>
                          <tr>
                              <td>
                                  <div width="100%" style="display:inline-block; min-width:100px; vertical-align:top; width:100%;">
                                      <table width="100%" align="left" border="0" cellpadding="0" cellspacing="0" width="100%" >
                                          <tr width="100%">
                                              <td width="50%" align="left" valign="top" class="mobile-center" style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 14px; font-weight: 600; border: 2px solid #00144c;">
                                                  Área de interés
                                              </td>
                                              <td width="50%" align="center" valign="top" class="mobile-center" style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 14px; font-weight: 600; border: 2px solid #00144c;">
                                                  ${body.interest}
                                              </td>
                                          </tr>
                                          <tr width="100%">
                                              <td width="50%" align="left" valign="top" class="mobile-center" style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 14px; font-weight: 600; border: 2px solid #00144c;">
                                                  Oficina de interés
                                              </td>
                                              <td width="50%" align="center" valign="top" class="mobile-center" style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 14px; font-weight: 600; border: 2px solid #00144c;">
                                                  ${body.office}
                                              </td>
                                          </tr>
                                      </table>
                                  </div>
                              </td>
                          </tr>
                          <tr>
                              <td>
                                  <br>
                              </td>
                          </tr>
                          <tr>
                              <td>
                                  <div width="100%" style="display:inline-block; min-width:100px; vertical-align:top; width:100%;">
                                      <table width="100%" align="left" border="0" cellpadding="0" cellspacing="0" width="100%" >
                                          <tr width="100%">
                                              <td width="100%" align="left" valign="top" class="mobile-center" style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 14px; font-weight: 400; border: 2px solid #00144c;">
                                                  <span style="font-weight: 600;">Experiencia profesional:</span> ${body.experience}
                                              </td>
                                          </tr>
                                      </table>
                                  </div>
                              </td>
                          </tr>
                          <tr>
                              <td>
                                  <br>
                              </td>
                          </tr>
                          <tr>
                              <td>
                                  <div width="100%" style="display:inline-block; min-width:100px; vertical-align:top; width:100%;">
                                      <table width="100%" align="left" border="0" cellpadding="0" cellspacing="0" width="100%" >
                                          <tr width="100%">
                                              <td width="100%" align="left" valign="top" class="mobile-center" style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 14px; font-weight: 400; border: 2px solid #00144c;">
                                                  <span style="font-weight: 600;">Curriculum:</span> <a href="${body.curriculum}" style="color: #ffc947; text-decoration: none; cursor: pointer;">${body.curriculum}</a>
                                              </td>
                                          </tr>
                                      </table>
                                  </div>
                              </td>
                          </tr>
                          <tr>
                              <td>
                                  <br>
                              </td>
                          </tr>
                      </table>
                      <!--[if (gte mso 9)|(IE)]>
                      </td>
                      </tr>
                      </table>
                      <![endif]-->
                      </td>
                  </tr>
                  
      
                      </table>
                      <!--[if (gte mso 9)|(IE)]>
                      </td>
                      </tr>
                      </table>
                      <![endif]-->
                      </td>
                  </tr>
                  <tr>
                      <td align="center" valign="top" style="font-size:0; padding: 20px;" bgcolor="#00144c">
                      <!--[if (gte mso 9)|(IE)]>
                      <table align="center" border="0" cellspacing="0" cellpadding="0" width="600">
                      <tr>
                      <td align="left" valign="top" width="300">
                      <![endif]-->
                      <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px;">
                          <tr>
                              <td align="center" valign="top" style="font-size:0; padding: 20px;">
                                  <div style="display:inline-block; min-width:100px; vertical-align:top; width:100%;">
                                      <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;" >
                                          <tr width="100%">
                                              <td width="100%" align="center" style="padding: 20px; font-family: Helvetica, Arial, sans-serif; font-size: 14px; font-weight: 400; line-height: 16px;" >
                                                  <p style="margin: 0; color: #ffffff;">Este email se envió de forma automática desde <a href="https://www.materialesvasquezhnos.com.mx/" style="color: #ffc947; text-decoration: none; cursor: pointer;">materialesvasquezhnos.com.mx</a></p>
                                              </td>
                                          </tr>
                                          <tr width="100%">
                                              <td width="100%" bgcolor="#00144c" align="center" style="padding: 10px; font-family: Helvetica, Arial, sans-serif; font-size: 10px; font-weight: 400; line-height: 12px;" >
                                                  <p style="margin: 0; color: #ffffff;">Materiales Vasquez Hermanos — Todos los derechos reservados.</p>
                                              </td>
                                          </tr>
                                      </table>
                                  </div>
                              </td>
                          </tr>
                      </table>
                      <!--[if (gte mso 9)|(IE)]>
                      </td>
                      </tr>
                      </table>
                      <![endif]-->
                      </td>
                  </tr>
              </table>
              <!--[if (gte mso 9)|(IE)]>
              </td>
              </tr>
              </table>
              <![endif]-->
              </td>
          </tr>
      </table>
      </body>
      </html>
      `,
    };

    fetch(`/api/send-email`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(bodyOfMessageToClient),
    })
      .then((response) => response.json())
      .then(({ ok }) => {
        console.log(ok);
      })
      .catch((error) => {
        console.log("ERROR: ", error);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newJobApplication = new FormData(formJob.current);
    const aplication = {
      date: new Intl.DateTimeFormat("es-MX", {
        dateStyle: "medium",
      }).format(new Date()),
      name: newJobApplication.get("name").toString(),
      email: newJobApplication.get("email").toString(),
      phoneNumber: newJobApplication.get("phoneNumber").toString(),
      age: newJobApplication.get("age").toString(),
      address: newJobApplication.get("address").toString(),
      interest: newJobApplication.get("interest").toString(),
      office: newJobApplication.get("office").toString(),
      experience: newJobApplication.get("experience").toString(),
      curriculum: newJobApplication.get("curriculum").toString(),
    };
    // console.log(aplication);
    sendEmail(aplication);
  };

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1"
        />
        <title>Unete a Nuestro Equipo | Materiales Vasquez Hermanos</title>
      </Head>
      <MainStiled>
        <MainTitle>Unete a Nuestro Equipo</MainTitle>
        <TextContainer>
          <Text>
            En Materiales Vasquez Hermanos tenemos como objetivo reclutar,
            seleccionar y tener el mejor talento. Sabemos que la clave del éxito
            de la compañía son las personas y por ello buscamos formar un equipo
            humano cualificado, diversificado y motivado que contribuya a lograr
            las metas del negocio.
          </Text>
          <Text>Mandanos tus datos</Text>
        </TextContainer>
        <Form ref={formJob} onSubmit={(e) => handleSubmit(e)}>
          <InputBase
            type="text"
            name="name"
            placeholder="Tu Nombre completo"
            maxLength="30"
            required
          />
          <InputBase
            type="email"
            name="email"
            placeholder="Tu correo electrónico"
            required
          />
          <InputBase
            type="tel"
            name="phoneNumber"
            placeholder="Numero de teléfono"
            maxLength="10"
            inputMode="numeric"
            pattern="[0-9]{10}"
            required
          />
          <InputBase
            type="text"
            name="age"
            inputMode="numeric"
            placeholder="Edad"
            maxLength="2"
            required
          />
          <InputBase
            type="text"
            name="address"
            placeholder="Domicilio"
            maxLength="100"
          />
          <InputBase
            type="text"
            name="interest"
            placeholder="Área de interés"
            maxLength="50"
            required
          />
          <InputBase
            type="text"
            name="office"
            placeholder="Oficina de interés"
            maxLength="50"
          />
          <Experience
            name="experience"
            placeholder="Experiencia profesional"
            maxLength="500"
          ></Experience>
          <InputBase
            type="text"
            name="curriculum"
            placeholder="Enlace (URL) de tu curriculum"
          />
          <Notification>
            Al enviar tu información aceptas nuestro Aviso de privacidad.
          </Notification>
          <Send type="submit">Enviar solicitud</Send>
        </Form>
      </MainStiled>
    </>
  );
};

export default Jobs;
