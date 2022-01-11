import {
  AuthAction,
  useAuthUser,
  withAuthUser,
  withAuthUserTokenSSR,
} from "next-firebase-auth";
import firebase from "firebase";
import Image from "next/image";

// Components
import Favorites from "../components/Favorites/Favorites";

// Styles
import { MainStyled } from "../styles/Inicio/style";
import {
  ProfileData,
  ImageContainer,
  Unnamed,
  LogoutButton,
  EmailText,
} from "../styles/perfil/style";

// Loader para componente Image
const loader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};

const Perfil = () => {
  const AuthUser = useAuthUser();
  // console.log("AuthUser: ", AuthUser);
  return (
    <MainStyled>
      <ProfileData>
        <ImageContainer>
          {AuthUser.photoURL ? (
            <Image
              loader={loader}
              src={AuthUser.photoURL}
              width={300}
              height={300}
              alt={`Fotografía de perfil de ${AuthUser.displayName}`}
            />
          ) : (
            <Unnamed>{AuthUser.displayName.slice(0, 1)}</Unnamed>
          )}
        </ImageContainer>
        <h1>{AuthUser.displayName ? AuthUser.displayName : "No registrado"}</h1>
        <LogoutButton type="button" onClick={() => firebase.auth().signOut()}>
          Cerrar sesión
        </LogoutButton>
        <EmailText>
          {AuthUser.email ? AuthUser.email : "No registrado"}
        </EmailText>
      </ProfileData>
      <Favorites />
    </MainStyled>
  );
};

export const getServerSideProps = withAuthUserTokenSSR({
  whenUnauthed: AuthAction.REDIRECT_TO_LOGIN,
})(() => {
  return {
    props: {},
  };
});

export default withAuthUser({
  whenUnauthedAfterInit: AuthAction.REDIRECT_TO_LOGIN,
})(Perfil);
