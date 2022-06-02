import React from "react";
import Button from "../Button";
import { Container, Texto } from "./style";

const Filters: React.FC = () => {
  return (
    <>
      <Container>
        <Texto>
          Milhões de filmes, séries e pessoas para descobrir. Explore já.
        </Texto>
        <Button onClick={() => console.log("testing")}>Texto</Button>
      </Container>
    </>
  );
};

export default Filters;
