import Link from "next/link";

//Components
import HomeFavorites from "../Home-Favorites/HomeFavorites";

// Styled-Components
import { Section, Text, LoginLink } from "./style";

const HomeUser = ({ user }) => {
  if (!user.email) {
    return (
      <Section>
        <Text>Inicia sesión y comienza a agregar tus artículos favoritos</Text>
        <Link href="/auth">
          <LoginLink>Registrarse</LoginLink>
        </Link>
      </Section>
    );
  } else {
    return null;
  }
};

export default HomeUser;
