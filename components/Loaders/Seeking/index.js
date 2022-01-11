import React from "react";

// Styled-Components
import { Conatiner, Cricle } from "./style";

export const Seeking = ({ bg }) => {
  return (
    <Conatiner>
      <Cricle bg={bg} index={1}>
        <Cricle bg={bg} index={2}>
          <Cricle bg={bg} index={3}>
            <Cricle bg={bg} index={4}></Cricle>
          </Cricle>
        </Cricle>
      </Cricle>
    </Conatiner>
  );
};
