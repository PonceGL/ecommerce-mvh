import React from "react";
import {
  withAuthUser,
  withAuthUserTokenSSR,
  AuthAction,
} from "next-firebase-auth";
import FirebaseAuth from "../components/FirebaseAuth/FirebaseAuth";

// Styles
import { MainStyled, AuthSection } from "../styles/Inicio/style";

const Auth = () => {
  return (
    <MainStyled>
      <AuthSection>
        <h4>Regístrate en menos de dos minutos</h4>
        <FirebaseAuth />
      </AuthSection>
    </MainStyled>
  );
};

export const getServerSideProps = withAuthUserTokenSSR({
  whenAuthed: AuthAction.REDIRECT_TO_APP,
})();

export default withAuthUser({
  whenAuthed: AuthAction.REDIRECT_TO_APP,
})(Auth);
