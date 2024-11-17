import React from "react";
import { Container, Wrapper, Content } from "./Grid.style";

//components
import FilterForm from "../FilterForm";

const Grid = ({ header, children }) => {
  return (
    <Container>
      <Wrapper>
        <h1>{header}</h1>
        <FilterForm />
      </Wrapper>
      <Content>{children}</Content>
    </Container>
  );
};

export default Grid;
