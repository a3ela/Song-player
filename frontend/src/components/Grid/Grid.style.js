import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: var(--maxWidth);
  margin: 50px auto;
  padding: 0 20px;

  h1 {
    color: var(--white);
    margin-bottom: 20px;
    @media screen and (max-width: 768px) {
      font-size: var(--fontBig);
    }
  }

  hr {
    border: 0;
    height: 1px;
    background: var(--white);
    margin-bottom: 20px;
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 2rem;
`;
