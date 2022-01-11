import React from "react";
import Link from "next/link";

// Components
import { Instagram } from "../IconsSVG/Instagram";
import { Whatsapp } from "../IconsSVG/Whatsapp";
import { Facebook } from "../IconsSVG/Facebook";

// Stiled-Components
import {
  FooterStyled,
  LinksSyled,
  LinkGroups,
  GroupTitle,
  Li,
  Anchor,
  UlIcons,
  AnchorIcon,
  PaymentMethods,
  PaymentMethodsImageContainer,
  AllRightsReserved,
} from "./style";

const Footer = () => {
  return (
    <FooterStyled>
      <LinksSyled>
        <LinkGroups>
          <GroupTitle>Servicio al cliente</GroupTitle>
          <ul>
            <Li>
              <Link href="/sucursales" passHref>
                <Anchor>Sucursales y horarios</Anchor>
              </Link>
            </Li>
          </ul>
        </LinkGroups>

        {/* Second Group */}
        <LinkGroups>
          <GroupTitle>Más información</GroupTitle>
          <ul>
            <Li>
              <Link href="/aviso-de-privacidad" passHref>
                <Anchor>Aviso de privacidad</Anchor>
              </Link>
            </Li>
            <Li>
              <Link href="/cancelaciones-devoluciones" passHref>
                <Anchor>Política de cancelaciones y devoluciones</Anchor>
              </Link>
            </Li>
          </ul>
        </LinkGroups>

        {/* Third Group */}
        <LinkGroups>
          <GroupTitle>Acerca de nosotros</GroupTitle>
          <ul>
            <Li>
              <Link href="/quienes-somos" passHref>
                <Anchor>¿Quiénes somos?</Anchor>
              </Link>
            </Li>
            <Li>
              <Link href="/unete-a-nuestro-equipo" passHref>
                <Anchor>Únete a nuestro equipo</Anchor>
              </Link>
            </Li>
          </ul>
        </LinkGroups>

        {/* Fourth Group */}
        <LinkGroups>
          <GroupTitle>Redes sociales</GroupTitle>
          <UlIcons>
            <li>
              <AnchorIcon
                href="https://www.instagram.com/materialesvasquezhermanos/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Enlace a Instagram"
              >
                <Instagram width="90%" />
              </AnchorIcon>
            </li>
            <li>
              <AnchorIcon
                href="https://api.whatsapp.com/send?phone=522288366283"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Enlace a Twitter"
              >
                <Whatsapp width="90%" />
              </AnchorIcon>
            </li>
            <li>
              <AnchorIcon
                href="https://www.facebook.com/materialesvasquezhnos"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Enlace a Facebook"
              >
                <Facebook width="90%" />
              </AnchorIcon>
            </li>
          </UlIcons>
        </LinkGroups>
      </LinksSyled>
      <PaymentMethods>
        <GroupTitle>Métodos de pago</GroupTitle>
        <PaymentMethodsImageContainer>
          <img
            // src="https://www.jucri.com.mx/wp-content/uploads/2020/12/fda.png"
            src="https://www2.ipg-online.com/connect/images/brands/VISA.png;jsessionid=E36E0FC31FBB44B5A914.dc?version=c410470&t=green&r=dc&k=MTcyLjI1LjMuNTo5MTQz"
            width={249}
            height={57}
            alt="Imagen de Métodos de pago"
          />
          <img
            src="https://www2.ipg-online.com/connect/images/brands/MASTERCARD.png;jsessionid=E36E0FC31FBB44B5A914.dc?version=c410470&t=green&r=dc&k=MTcyLjI1LjMuNTo5MTQz"
            width={249}
            height={57}
            alt="Imagen de Métodos de pago"
          />
          <img
            src="https://www2.ipg-online.com/connect/images/brands/CARNET.png;jsessionid=E36E0FC31FBB44B5A914.dc?version=c410470&t=green&r=dc&k=MTcyLjI1LjMuNTo5MTQz"
            width={249}
            height={57}
            alt="Imagen de Métodos de pago"
          />
          <img
            src="https://www2.ipg-online.com/connect/images/brands/MEXICOLOCAL.png;jsessionid=E36E0FC31FBB44B5A914.dc?version=c410470&t=green&r=dc&k=MTcyLjI1LjMuNTo5MTQz"
            width={249}
            height={57}
            alt="Imagen de Métodos de pago"
          />
        </PaymentMethodsImageContainer>
      </PaymentMethods>
      <AllRightsReserved>
        Materiales Vasquez Hermanos S.A. de C.V. © 2020. Todos los derechos
        reservados.
      </AllRightsReserved>
    </FooterStyled>
  );
};

export default Footer;
