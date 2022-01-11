import Image from "next/image";
import Link from "next/link";

// Styled-Components
import { ProfileContainer, ImageContainer } from "./style";

// Loader para componente Image
const loader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};

const HeaderProfile = ({ displayName, photoURL }) => {
  return (
    <Link href={`/perfil`} passHref>
      <ProfileContainer aria-label={`Ver perfil de ${displayName}`}>
        {photoURL && (
          <ImageContainer>
            <Image
              loader={loader}
              src={photoURL}
              width={300}
              height={300}
              alt={`Fotografía de perfil de ${displayName}`}
            />
          </ImageContainer>
        )}
      </ProfileContainer>
    </Link>
  );
};

export default HeaderProfile;
