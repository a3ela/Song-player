import styled from "styled-components";

export const Container = styled.div`
  max-width: var(--maxWidth);
  margin: 50px auto;
  padding: 0 20px;

  h1 {
    flex: 1 1 50%;
    color: var(--white);
    margin-bottom: 20px;
    @media screen and (max-width: 768px) {
      font-size: var(--fontBig);
    }
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 2rem;
  margin-top: 30px;
`;
