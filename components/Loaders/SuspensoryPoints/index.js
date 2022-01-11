// Styled-Components
import { Conatiner, Point } from "./style";

export const SuspensoryPoints = ({ bg }) => {
  return (
    <Conatiner>
      <Point bg={bg} />
      <Point bg={bg} delay={0.1} />
      <Point bg={bg} delay={0.2} />
    </Conatiner>
  );
};
